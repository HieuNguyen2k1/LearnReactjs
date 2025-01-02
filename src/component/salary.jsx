function Salary({salary}) {
  return (
  <div className="staff col-md-4  col-sm-6" style={{marginBottom:"10px"}}>
    <div style={{border:"1px solid black"}}>
        <h5>{salary.name}</h5>
        <p>Mã nhân viên : {salary.id}</p>
        <p>Hệ số lương : {salary.salaryScale}</p>
        <p>Giờ làm thêm : {salary.overTime}</p>
        <h5>Lương : {(salary.salaryScale * salary.overTime* 100000).toFixed(1)}</h5>
    </div>
  </div>);
}
export default Salary; 