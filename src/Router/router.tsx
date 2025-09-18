import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import Todo from "../components/Todo/Todo";
import Form from "../components/StepperForm";
import Quiz from "../components/Quiz";


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
    element: <Quiz />
},
{
    path: "/form",
    element: <Form />
}

]);

export default router;