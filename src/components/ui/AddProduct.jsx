import * as Form from "@radix-ui/react-form";
const AddProduct = () => {
  return (
    <Form.Field name="name">
      <Form.Label>Full name</Form.Label>
      <Form.Control></Form.Control>
    </Form.Field>
  );
};
export default AddProduct;
