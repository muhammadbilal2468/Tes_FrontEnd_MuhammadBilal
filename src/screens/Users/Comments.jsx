import React from "react";
import CardHeader from "../../components/Cardheader";

const Comments = () => {
  return (
    <>
      <CardHeader title={"comments"} desc={"See all my comments"} />

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                No
              </th>
              <th scope="col" class="px-6 py-3 max-w-96">
                My Comment
              </th>
              <th scope="col" class="px-6 py-3">
                Post
              </th>
              <th scope="col" class="px-6 py-3">
                Author
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td class="px-6 py-4 max-w-96">
                Saya sangat bangga dengan negara kita karena pasukan TNI telah
                maju di garda terdepan melawan penjajah
              </td>
              <td class="px-6 py-4">Perang Indonesia</td>
              <td class="px-6 py-4">Aldi</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Edit
                </button>

                <button
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Comments;
