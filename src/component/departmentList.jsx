import { useEffect, useState } from "react";
import Department from "./department";
function ListDepartment() {
  
  let [DEPARTMENTS,setDEPARTMENT] =  useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/departments",{
      method : 'get',
      headers : {'Content-Type' : 'application/json'}

    })
    .then(response => {
      if(!response.ok){
        throw new Error("fail department!");
      }
      return response.json();
    })
    .then(data =>{
      setDEPARTMENT(data);
    })
    .catch(error=>{
      console.log(error);
    });
    
  },[]);


  const listDepartment = DEPARTMENTS.map((dp) => {
    return (
     
        <Department key={dp.id} departmentInfo={dp}></Department>
      
    );
  });

  return (
    <div className="Department">
      <div className="row" style={{ margin: "20px 0px" }}>
        {listDepartment}
      </div>
    </div>
  );
}

export default ListDepartment;
