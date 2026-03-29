import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Portfolio from "../pages/Portfolio";
import NotFournd from "../pages/NotFound";
import PostDetail from "../pages/PostDetail";
import ProjectDetail from "../pages/ProjectDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFournd />,
        children: [
            {index: true, element: <Home />},
            {path: "blog", element: <Blog />},
            {path: "portfolio", element: <Portfolio />},
            {path: "blog/:slug", element: <PostDetail />},
            {path: "/portfolio/:slug", element: <ProjectDetail />},
        ]
    }
]);