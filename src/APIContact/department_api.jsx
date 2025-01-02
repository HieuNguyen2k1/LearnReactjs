import { useEffect } from "react";
function Departments({onFetchDepartments }) {
  useEffect(() => {
  const fetchDepartments = () => {
    fetch("http://localhost:8080/departments", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("fail departments!");
        }
        return response.json();
      })
      .then((data) => {
       onFetchDepartments (data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
    fetchDepartments();
  },[]);
}
export default Departments;
