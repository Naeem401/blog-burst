import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Blog from "../pages/Blog/Blog";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import Content from "../components/Content/Content";
import Author from "../components/Author/Author";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayOut/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/blogs',
          element: <Blogs/>,
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
        path: '/blog/:id',
        element: <Blog/>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
            {
                index: true,
                element: <Content/>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: 'author',
                element: <Author/>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            }
        ]
        },
        {
          path: '/bookmarks',
          element: <Bookmarks/>,
        }
      ]
    }
  ])