import Salary from "../Component/salary";
import SalaryList from "../Component/salaryList";
import { STAFFS } from "../Shared/staffs";
function SalaryPage(){
    
const salarys = STAFFS.map((salary) => {
    return <Salary salary={salary}></Salary>
})

return <SalaryList salarys={salarys}></SalaryList>

}
export default SalaryPage;