function Department({ departmentInfo }) {
  return (
    <div  className="staff  col-6 col-md-4 ">
      <div
       
        style={{ padding: "0", border: "1px solid" ,margin: " 10px 0"}}
      >
        <h1 style={{marginLeft:'2%'}}>{departmentInfo.id}</h1>
        <p style={{marginLeft:'10%'}}>Số lượng nhân viên : {departmentInfo.numberOfStaff}</p>
      </div>
    </div>
  );
}

export default Department;
