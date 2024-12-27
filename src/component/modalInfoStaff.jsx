function ModalStaff({ onClose }) {
    return (
      <div className="modal fade show" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm nhân viên</h5>
              <button type="button" className="close" onClick={onClose}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {/* Các trường nhập liệu */}
                <div className="form-group">
                  <label>Tên:</label>
                  <input type="text" name="name" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Ngày sinh:</label>
                  <input type="date" name="doB" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Hệ số lương:</label>
                  <input type="number" name="salaryScale" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Ngày bắt đầu:</label>
                  <input type="date" name="startDate" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label>Phòng ban:</label>
                  <input type="text" name="departmentId" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label>Số ngày nghỉ:</label>
                  <input type="number" name="annualLeave" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label>Số giờ làm thêm:</label>
                  <input type="number" name="overTime" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">
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
