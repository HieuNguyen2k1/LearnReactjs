import { STAFFS } from "../Shared/staffs";
import Department from "./department";
function ListDepartment() {
  let departments = [];
  STAFFS.forEach((staff) => {
    const existingDepartment = departments.find(
      (department) => department.nameDepartment === staff.departmentId
    );

    if (existingDepartment) {
      existingDepartment.count += 1;
    } else {
      departments.push({ key: departments.length+1 , nameDepartment: staff.departmentId, count: 1 });
    }
  });

  const listDepartment = departments.map((dp) => {
    return (
     
        <Department key={dp.key} departmentInfo={dp}></Department>
      
    );
  });

  return (
    <div className="Department">
      <div className="row" style={{ margin: "20px 20px" }}>
        {listDepartment}
      </div>
    </div>
  );
}

export default ListDepartment;
