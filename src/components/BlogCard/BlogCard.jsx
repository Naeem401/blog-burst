import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";


const BlogCard = ({blog, deletable, handleDelete}) => {
    const {cover_image, published_at, description, id, title} = blog;
    return (
		<div className="relative">
 <div className="transition border-2 rounded-lg p-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary  group hover:no-underline focus:no-underline">
            <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
        </div>
		{deletable && (
        <div
          onClick={() => handleDelete(blog.id)}
          className='bg-primary p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105 absolute -top-5 -right-5'>
          <MdDeleteForever
            size={20}
            className='text-secondary group-hover:text-primary'
          />
        </div>
      )}
		</div>
       
    );
};

export default BlogCard;