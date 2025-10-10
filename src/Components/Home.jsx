import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Browse from "./Browse";

const Home = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Home;
