import Navbar from "../components/ui/Navbar";
import Table from "../components/ui/Table";
const ProductList = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-center my-4">Product List</h1>
      <div className="w-3/4 mx-auto flex justify-end mb-2">
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
          Add Product <img src="/icons/file-plus.svg" alt="" />
        </button>
      </div>
      <Table width={"w-3/4 mx-auto"} />
    </>
  );
};

export default ProductList;
