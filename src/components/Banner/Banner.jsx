import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[calc(100vh-116px)]">
  <div className="hero-content text-center -mt-12">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold">Welcome to <span>BlogBurst</span></h1>
      <p className="py-6">BlogBurst is the bridge between the complex world of technology and the curious minds eager to understand it</p>
      <div className="flex gap-8 justify-center">
        <Link to='/blogs' className="relative px-6 py-3 font-bold text-white group">
<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-primary group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span className="absolute inset-0 w-full h-full border-4 border-secondary"></span>
<span className="relative">Read Blogs</span>
</Link>
        <Link to='/bookmarks' className="relative px-6 py-3 font-bold text-white group">
<span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-primary group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span className="absolute inset-0 w-full h-full border-4 border-secondary"></span>
<span className="relative">Bookmarks</span>
</Link>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;