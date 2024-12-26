import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import ListDepartment from "./Component/departmentList";
import Staff from "./Component/staff";
import StaffList from "./Component/staffList";

import SalaryPage from "./Pages/SalaryPage";
import StaffPage from "./Pages/staffPage";
import { STAFFS } from "./Shared/staffs";

function App() {
  let [clickedStaff, setClickedStaff] = useState();
  let departments = [];
  const staffs = STAFFS.map((staff) => {
    const StaffClicked = () => {
      setClickedStaff(staff);
    };

    return <Staff key={staff.id} staff={staff} onClick={StaffClicked}></Staff>;
  });

  return (
    <div>
      <div style={{ backgroundColor: "blue" }}>
        <nar>
          <ul style={{ display: "flex", listStyleType: "none" }}>
            <li style={{ marginRight: "10px" }}>
              <div>
                <img
                  src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
                  alt="logo"
                  width="30px"
                  height="30px"
                ></img>
              </div>
            </li>
            <li style={{ marginRight: "10px" }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Nhân Viên
              </Link>
            </li>
            <li style={{ marginRight: "10px" }}>
              <Link
                to="/department"
                style={{ textDecoration: "none", color: "white" }}
              >
                Phòng Ban
              </Link>
            </li>
            <li>
              <Link
                to="/salary"
                style={{ textDecoration: "none", color: "white" }}
              >
                Bảng Lương
              </Link>
            </li>
          </ul>
        </nar>
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={<StaffList staffs={staffs}></StaffList>}
          ></Route>
          <Route
            path="/staff/:id"
            element={<StaffPage staffInfo={clickedStaff}></StaffPage>}
          ></Route>
          <Route
            path="/department"
            element={<ListDepartment/>}
          ></Route>
          <Route
            path="/salary"
            element={<SalaryPage/>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
