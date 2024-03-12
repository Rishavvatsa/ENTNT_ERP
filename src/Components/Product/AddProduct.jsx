import { useState } from "react";
import mockProducts from "../../Data/data";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const history = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stockQuantity: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !product.name ||
      !product.category ||
      product.price <= 0 ||
      product.stockQuantity <= 0
    ) {
      setErrorMessage("Please fill in all fields with valid data.");
      return;
    }

    const newProduct = {
      id: mockProducts.length + 1,
      ...product,
    };

    mockProducts.push(newProduct);
    console.log("Product added:", newProduct);
    setProduct({ name: "", category: "", price: "", stockQuantity: "" });
    setErrorMessage("");
    history("/products");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Link
        to="/products"
        className="flex items-center text-blue-500 hover:text-blue-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>{" "}
        Back to Product Page
      </Link>

      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Add Product
        </h2>
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-100 border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              value={product.name}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="bg-gray-100 border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              value={product.category}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="0.01"
              className="bg-gray-100 border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              value={product.price}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stockQuantity" className="block text-gray-700">
              Stock
            </label>
            <input
              type="number"
              id="stockQuantity"
              name="stockQuantity"
              min="0"
              className="bg-gray-100 border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              value={product.stockQuantity}
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
