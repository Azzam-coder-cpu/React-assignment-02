import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import Todo from "../components/Todo/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/todo",
    element: <Todo />
  },
  {
    path: "/quiz",
    element: <Home />
},
{
    path: "/form",
    element: <Home />
}

]);

export default router;