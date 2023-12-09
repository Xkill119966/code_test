import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    designation: "",
    name: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(formData),
    };

    fetch("http://localhost:9001/api/form", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        navigate(`/success?token=${result?.token}`);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 ">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Survey Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Name"
              aria-label="Full name"
              name="name"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Phone Number"
              aria-label="Phone Number"
              name="phoneNumber"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Company Name"
              aria-label="Company Name"
              name="companyName"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Designation"
              aria-label="Designation"
              name="designation"
              required
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Submit
            </button>
          </div>
        </form>
        {error ? (
          <div
            className="p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">{error}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
