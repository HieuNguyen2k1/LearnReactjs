import { useEffect } from "react";
function Salaries({salaries}) {
  useEffect(()=>{
  const fetchSalaries = () => {
    fetch("http://localhost:8080/staffsSalary", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      }, 
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("fail salary!");
        }
        return response.json();
      })
      .then((data) => {
       
        salaries(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
    fetchSalaries();
  },[])

}
export default Salaries;
