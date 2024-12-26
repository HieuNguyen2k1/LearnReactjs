function StaffPage({ staffInfo }) {
  return (
    <div>
    <div style={{marginLeft:'10%', marginBottom:'20px'}}>
        <h1 >Thông tin nhân viên</h1>
    </div>
      <div className="row" >
        <div className="col-md-3" style={{textAlign:'center'}}>
        <img src={staffInfo.image} alt={staffInfo.name} width="150" height="150"></img>
        </div>
        <div className="col-md-9">
         
          <div>Họ và tên : {staffInfo.name}</div>
          <div>Ngày sinh : {new Date(staffInfo.doB).toLocaleDateString('vi-VN')}</div>
          <div>Ngày vào công ty : {new Date(staffInfo.startDate).toLocaleDateString('vi-VN')}</div>
          <div>Phòng ban : {staffInfo.departmentId}</div>
          <div>Số ngày nghỉ còn lại : {staffInfo.annualLeave}</div>
          <div>Số ngày đã làm thêm : {staffInfo.overTime}</div>
        </div>
      </div>
    </div>
  );
}
export default StaffPage;
