import { Routes, Route, useSearchParams } from "react-router-dom";

function Success(params) {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold m-6 text-center">
          Your Token Number is<br></br>..............
        </h2>
        <h2 className="text-4xl font-semibold m-6 text-center">
          {token ?? ""}
        </h2>
      </div>
    </div>
  );
}

export default Success;
