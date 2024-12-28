import { useEffect, useState } from "react";
import Salary from "../Component/salary";
import SalaryList from "../Component/salaryList";
function SalaryPage(){

    let [SALARYS, setSALARYS] = useState([]);

     useEffect(() => {
      fetch("http://localhost:8080/staffsSalary",{
        method:'get',
        headers:{
          'Content-Type' : 'application/json'
        }
      })
      .then (response => {
        if(!response.ok){
          throw new Error("fail");
        }
        return response.json();
      })
      .then (data =>{
        setSALARYS(data);
      
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error); 
      });
    }, []);
    
const salarys = SALARYS.map((salary) => {
    return <Salary key={salary.id} salary={salary}></Salary>
});

return <SalaryList salarys={salarys}></SalaryList>

}
export default SalaryPage;