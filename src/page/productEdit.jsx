import React from "react";
import FormInput from "./formInput";

function ProductEdit({ setShowEdit, showEdit, update }) {
  return (
    <form className="w-1/3 mb-6 mt-6 ml-auto mr-auto">
      <div>
        <div className="mb-6">
          <label htmlFor="id" className="label-form"></label>
          <FormInput
            name={"test_id"}
            value={showEdit.id}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
            type="hidden"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {/* <input
            value={showEdit.id}
            onChange={(e) => setShowEdit({ ...showEdit, id: e.target.value })}
            type="hidden"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          /> */}
        </div>
        <div className="mb-6">
          <label htmlFor="nameUpdate" className="label-form">
            Book_Name
          </label>
          <input
            value={showEdit.name}
            onChange={(e) => setShowEdit({ ...showEdit, name: e.target.value })}
            type="text"
            id="nameUpdate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="label-form">
            Book_Price
          </label>
          <input
            value={showEdit.price}
            onChange={(e) =>
              setShowEdit({ ...showEdit, price: e.target.value })
            }
            type="number"
            min="0"
            id="priceUpdate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="label-form">
            Category
          </label>
          <input
            value={showEdit.category}
            onChange={(e) =>
              setShowEdit({ ...showEdit, category: e.target.value })
            }
            type="text"
            id="categoryUpdate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="author" className="label-form">
            Author
          </label>
          <input
            value={showEdit.author}
            onChange={(e) =>
              setShowEdit({ ...showEdit, author: e.target.value })
            }
            type="text"
            id="authorUpdate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          onClick={(e) => update(showEdit.id)}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default ProductEdit;
