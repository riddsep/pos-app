import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "../components/ui/ProductList";
import AddProduct from "../components/ui/AddProduct";
import Dashboard from "../pages/Dashboard";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <ProductList />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={routers} />;
};
export default Routers;
