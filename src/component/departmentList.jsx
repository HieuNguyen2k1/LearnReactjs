import { useState } from "react";
import Departments from "../APIContact/department_api";
import Department from "./department";

function ListDepartment() {
  const [departments, setDepartments] = useState([]);

  const handleDepartmentsData = (data) => {
    setDepartments(data);
  };

  return (
    <div>
      <Departments onFetchDepartments={handleDepartmentsData} /> 
      <div className="Department">
        <div className="row" style={{ margin: "20px 0px" }}>
          {departments.map((dp) => (
            <Department key={dp.id} departmentInfo={dp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListDepartment;