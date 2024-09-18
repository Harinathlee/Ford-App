import React from "react";
import "./App.css";
import Login from "./features/user/Login";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold my-4">This is Login page</h1>
      <Login />
    </div>
  );
}

export default App;
