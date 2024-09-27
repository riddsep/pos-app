import * as Form from "@radix-ui/react-form";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  return (
    <>
      <Form.Root className="w-3/4 mx-auto flex items-center flex-col gap-4 mt-8">
        <h1 className="text-3xl font-semibold ">Add Product</h1>

        <div className="w-2/5 bg-gray-100 px-5 py-20 shadow-md border-green-500  rounded-md">
          <Form.Field name="product-name" className="flex flex-col">
            <Form.Label>Product Name</Form.Label>
            <Form.Control className="border border-green-500 p-1 rounded-md"></Form.Control>
          </Form.Field>
          <Form.Field name="quantity" className="flex flex-col ">
            <Form.Label>Quantity</Form.Label>
            <Form.Control className="border border-green-500 p-1 rounded-md"></Form.Control>
          </Form.Field>
          <Form.Field name="price" className="flex flex-col">
            <Form.Label>Price</Form.Label>
            <Form.Control className="border border-green-500 p-1 rounded-md"></Form.Control>
          </Form.Field>
          <Form.Submit className="py-1 px-3 bg-green-500 text-white rounded-sm mt-2 mr-2">
            Submit
          </Form.Submit>
          <div
            className="inline-block py-1 px-3 border border-green-500 text-green-500 rounded-sm mt-2 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Back
          </div>
        </div>
      </Form.Root>
    </>
  );
};
export default AddProduct;
