import { useState } from "react";
import Salaries from "../APIContact/salary_api";
import Salary from "../Component/salary";
import SalaryList from "../Component/salaryList";
function SalaryPage() {
  let [SALARYS, setSALARYS] = useState([]);

  const salarys = SALARYS.map((salary) => {
    return <Salary key={salary.id} salary={salary}></Salary>;
  });
  const handelSalary = (data) => {
    setSALARYS(data);
  };

  return (
    <div>
      <Salaries salaries={handelSalary} />
      <SalaryList salarys={salarys}></SalaryList>
    </div>
  );
}
export default SalaryPage;
