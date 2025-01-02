import { useState } from "react";
import { STAFFS } from "../Shared/staffs";

function ModalStaff({ onClose , onAddStaff }) {
  let departments = [];
  STAFFS.forEach((staff) => {
    const existingDepartment = departments.find(
      (department) => department.nameDepartment === staff.departmentId
    );

    if (existingDepartment) {
      return;
    } else {
      departments.push({
        key: departments.length + 1,
        nameDepartment: staff.departmentId,
      });
    }
  });
  
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    doB: "",
    salaryScale: "",
    startDate: "",
    departmentId: "",
    annualLeave: "",
    overTime: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    formData.image =
      "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_640.png";
    Create(formData);
    onAddStaff();
  };

  //==================== ADD DB ==========================
  let Create = (obj)=>{
    fetch("http://localhost:8080/staffs",{
      method : 'post',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };

  //======================================================

  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Thêm nhân viên</h5>
            <button type="button" className="close" onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label>Tên:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Ngày sinh:</label>
                <input
                  type="date"
                  name="doB"
                  value={formData.doB}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Hệ số lương:</label>
                <input
                  type="number"
                  name="salaryScale"
                  value={formData.salaryScale}
                  onChange={handleChange}
                  className="form-control"
                  required min="0" max="3"
                />
              </div>
              <div className="form-group">
                <label>Ngày bắt đầu:</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phòng ban:</label>
                <select
                  name="departmentId"
                  value={formData.departmentId}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Chọn phòng ban</option>{" "}
                 
                  {departments.map((department) => (
                    <option
                      key={department.key}
                      value={department.nameDepartment}
                    >
                      {department.nameDepartment}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Số ngày nghỉ:</label>
                <input
                  type="number"
                  name="annualLeave"
                  value={formData.annualLeave}
                  onChange={handleChange}
                  className="form-control"
                  required min="0"
                />
              </div>
              <div className="form-group">
                <label>Số giờ làm thêm:</label>
                <input
                  type="number"
                  name="overTime"
                  value={formData.overTime}
                  onChange={handleChange}
                  className="form-control" min="0"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Thêm Nhân Viên
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalStaff;
