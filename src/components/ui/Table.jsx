import * as AlertDialog from "@radix-ui/react-alert-dialog";
const Table = (props) => {
  return (
    <table
      className={`table-auto border-collapse shadow-md text-center ${props.width} `}
    >
      <thead>
        <tr className="bg-zinc-100">
          <th className="p-3 font-medium">Product</th>
          <th className=" p-3 font-medium">Quantity</th>
          <th className=" p-3 font-medium">Price</th>
          <th className=" p-3 font-medium">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-zinc-50">
          <td className="p-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            accusantium.
          </td>
          <td className="p-3">78</td>
          <td className="p-3">$56</td>
          <td className="p-3">
            <button className="border border-black text-white p-2 rounded mr-2 hover:outline outline-black">
              <img src="/icons/pencil-1.svg" alt="" />
            </button>
            <AlertDialog.Root>
              <AlertDialog.Trigger className="border border-black text-white p-2 rounded mr-2 hover:outline outline-black">
                <img src="/icons/trash.svg" alt="" />
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
                <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none ">
                  <AlertDialog.Title className="text-red-600 font-semibold mb-2">
                    Are you absolutely sure?
                  </AlertDialog.Title>
                  <AlertDialog.Description className="mb-2">
                    This action cannot be undone. This will permanently delete
                    your product and remove your data from our servers.
                  </AlertDialog.Description>
                  <div className="flex justify-end gap-4">
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <AlertDialog.Action className="font-semibold bg-red-600 text-red-200 px-3 py-1 rounded-sm hover:bg-red-700">
                      Yes, delete product
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Table;
