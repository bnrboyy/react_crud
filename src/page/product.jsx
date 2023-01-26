import React, { useEffect } from "react";
import { useState } from "react";
import "./product.scss";
import ProductEdit from "./productEdit";

export default function Product() {
  const setFormData = {
    id: "",
    name: "",
    price: 0,
    category: "",
    author: "",
  };
  const [data, setData] = useState(setFormData);

  const [product, setProduct] = useState([]);

  const [showEdit, setShowEdit] = useState(setFormData);

  useEffect(() => {}, [showEdit]);

  const create = () => {
    let currentData = data;
    currentData.id = Date.now(); //random number

    if (
      currentData.name == "" ||
      currentData.price == "" ||
      currentData.category == "" ||
      currentData.author == ""
    ) {
      return;
    } else {
      setProduct([...product, currentData]);
    }
  };

  useEffect(() => {
    console.log(showEdit);
  }, [showEdit]);

  const onDelete = (id) => {
    let result = product.filter((product) => product.id != id);
    setProduct(result);
    setShowEdit([]);
  };

  const editHandler = (id) => {
    const productById = product.find((el) => el.id === id);
    setShowEdit(productById);
  };

  const update = (id) => {
    let result = product.map((el, index) => {
      if (el.id == id) {
        return showEdit;
      } else {
        return el;
      }
    });

    setProduct(result);
  };

  return (
    <>
      <div className="product-all">
        <form className="w-1/3 mb-6 mt-6 ml-auto mr-auto">
          <div className="mb-6">
            <label htmlFor="name" className="label-form">
              Book_Name
            </label>
            <input
              onChange={(e) => {
                setData((prev) => ({ ...prev, name: e.target.value }));
              }}
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="price" className="label-form">
              Book_Price
            </label>
            <input
              onChange={(e) => {
                setData((prev) => ({ ...prev, price: e.target.value }));
              }}
              type="number"
              min="0"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="category" className="label-form">
              Category
            </label>
            <input
              onChange={(e) => {
                setData((prev) => ({ ...prev, category: e.target.value }));
              }}
              type="text"
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="author" className="label-form">
              Author
            </label>
            <input
              onChange={(e) => {
                setData((prev) => ({ ...prev, author: e.target.value }));
              }}
              type="text"
              id="author"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            onClick={() => create()}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
          </button>
        </form>
      </div>
      <ProductEdit
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        update={update}
      />

      <div className="w-2/3 ml-auto mr-auto">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Book_ID
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Book_Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Price
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Category
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Author
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.id}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.price}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.category}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.author}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => editHandler(item.id)}
                      type="button"
                      className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(item.id)}
                      type="button"
                      className="text-white bg-red-500 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
    </>
  );
}
