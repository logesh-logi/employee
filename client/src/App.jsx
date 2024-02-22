import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import DisplayTable from "./components/DisplayTable";

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/getEmp";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <Form setEmployees={setEmployees} />
      <div className="m-6">
        <h1 className="flex flex-col items-center text-3xl m-5 text-white">
          Employee Details
        </h1>
        <DisplayTable rows={employees} />
      </div>
    </div>
  );
};

export default App;
