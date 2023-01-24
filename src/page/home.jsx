import axios from "axios";
import React, { useEffect, useState } from "react";
import { createBook, edit, getBookApi } from "../service/book.service";

const setData = {
  name: "",
};
export default function Home() {
  const [response, setResponse] = useState([]);

  const [book, setBook] = useState(setData);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    getBookApi().then((res) => {
      console.log(res);
      setResponse(res.data);
    });
  };

  const onCreate = async () => {
    console.log(book.name);
    const data = {
      BookName: document.querySelector("#name").value,
      Price: document.querySelector("#price").value,
      Category: document.querySelector("#category").value,
      Author: document.querySelector("#author").value,
    };

    createBook(data).then((res) => {
      getBook();
    });
  };

  const onEdit = async (id) => {
    await axios({
      url: `http://192.168.1.54:5234/api/Books/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json", //type jsan
      },
    })
      .then((res) => {
        console.log(res);
        document.querySelector("#idUpdate").value = res.data.Id;
        document.querySelector("#nameUpdate").value = res.data.BookName;
        document.querySelector("#priceUpdate").value = res.data.Price;
        document.querySelector("#categoryUpdate").value = res.data.Category;
        document.querySelector("#authorUpdate").value = res.data.Author;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onUpdate = async () => {
    const data = {
      Id: document.querySelector("#idUpdate").value,
      BookName: document.querySelector("#nameUpdate").value,
      Price: document.querySelector("#priceUpdate").value,
      Category: document.querySelector("#categoryUpdate").value,
      Author: document.querySelector("#authorUpdate").value,
    };
    console.log(data.Id);

    await axios({
      url: `http://192.168.1.54:5234/api/Books/${data.Id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json", //type jsan
      },
      data: data,
    }).then((res) => {
      console.log(res);
      getBook();
    });
  };

  const onDelete = async (id) => {
    console.log(id);

    await axios
      .delete(`http://192.168.1.54:5234/api/Books/${id}`)
      .then((res) => {
        getBook();
      });
  };

  return (
    <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
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
              {response.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.Id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.BookName}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.Price}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.Category}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.Author}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => onEdit(item.Id)}
                        className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => onDelete(item.Id)}
                        className="text-white bg-red-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="w-full flex">
            <form className="w-1/3 mb-6 mt-6">
              
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Book_Name
                </label>
                <input
                  onChange={(e) =>
                    setBook((prev) => ({ ...prev, name: e.target.value }))
                  }
                  value={book.name}
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Book_Price
                </label>
                <input
                  type="number"
                  min="0"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="author"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="button"
                onClick={onCreate}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
            </form>

            <form className=" w-1/3 mb-6 ml-40">
              <div className="mb-6"></div>
              <div className="mb-6">
                <label
                  htmlFor="nameUpdate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                ></label>
                <input
                  type="hidden"
                  id="idUpdate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <label
                  htmlFor="nameUpdate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Book_Name
                </label>
                <input
                  type="text"
                  id="nameUpdate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="priceUpdate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Book_Price
                </label>
                <input
                  type="number"
                  min="0"
                  id="priceUpdate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="categoryUpdate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="categoryUpdate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="authorUpdate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="authorUpdate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                onClick={onUpdate}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
