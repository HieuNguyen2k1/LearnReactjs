import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import ListDepartment from "./Component/departmentList";
import Staff from "./Component/staff";
import StaffList from "./Component/staffList";

import CreateStaff from "./Component/createStaff";
import ModalStaff from "./Component/modalInfoStaff";
import SearchStaff from "./Component/search";

import Staffs from "./APIContact/staffs_api";
import SalaryPage from "./Pages/SalaryPage";
import StaffPage from "./Pages/staffPage";

function App() {
  let [STAFFS, setSTAFFS] = useState([]);
  let [clickedStaff, setClickedStaff] = useState();
  let [showModal, setShowModal] = useState(false);
  let [search, setSearch] = useState("");

  //========================== API 1==================

  const handleStaffsData = (data) => {
    setSTAFFS(data); 
  };
  //===================== Api====================
  // const fetchStaffs = () => {
  //   fetch("http://localhost:8080/staffs", {
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("fail");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setSTAFFS(data);
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the fetch operation:", error);
  //     });
  // };

  // // Gọi hàm fetchStaffs khi component được mount
  // useEffect(() => {
  //   fetchStaffs();
  // }, []);
  // // Hàm để xử lý khi thêm nhân viên thành công
  const handleAddStaff = () => {
    handleCloseModal(); 
  };
  //================ List Staff==================

  const filteredStaffs =
    search !== ""
      ? STAFFS.filter((staff) =>
          staff.name.toLowerCase().includes(search.toLowerCase())
        )
      : STAFFS;

  const staffs = filteredStaffs.map((staff) => {
    const StaffClicked = () => {
      setClickedStaff(staff);
    };

    return <Staff key={staff.id} staff={staff} onClick={StaffClicked}></Staff>;
  });

  //================= Modal ====================

  const CreateClicked = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //================= search handle ====================
  const SearchHandled = (value) => {
    setSearch(value);
  };

  return (
    <div>
      <div className="bg-primary">
        <nav className="navbar navbar-expand-sm navbar-light bg-light img-logo p-0">
          <div className="img-logo" style={{ padding: "0 0 0 2%" }}>
            <img
              className="img-fluid rounded-circle"
              src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
              alt="logo"
              width="40px"
              height="40px"
            ></img>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse bg-primary " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link text-white" to="/">
                  Nhân Viên
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/department">
                  Phòng Ban
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/salary">
                  Bảng Lương
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="row mt-2">
                  <CreateStaff onClick={CreateClicked} />
                  <SearchStaff onClick={SearchHandled} />
                </div>
                <Staffs staffs={handleStaffsData} />
                <StaffList staffs={staffs}></StaffList>{" "}
              </>
            }
          ></Route>
          <Route
            path="/staff/:id"
            element={<StaffPage staffInfo={clickedStaff}></StaffPage>}
          ></Route>
          <Route path="/department" element={<ListDepartment />}></Route>
          <Route path="/salary" element={<SalaryPage />}></Route>
        </Routes>
      </div>
      {showModal && <ModalStaff onClose={handleCloseModal} onAddStaff={handleAddStaff}  />}
    </div>
  );
}

export default App;
