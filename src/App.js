import { useState } from 'react';
import './App.css';
import Staff from './component/staff';
import StaffDetail from './component/staffDetail';
import StaffList from './component/StaffListComponent';
import { STAFFS } from './Shared/staffs';
function App() {

 let [clickedStaff, setClickedStaff] = useState();

  const staffs =STAFFS.map( (staff) => {

    const StaffClicked = () =>
    {
      setClickedStaff(staff);
      
    }
    
      return <Staff  key={staff.id} staff={staff} onClick={StaffClicked}></Staff>
  }

)
  return (
    <div className="App">
      <StaffList staffs={staffs}></StaffList>
     
      {clickedStaff &&<StaffDetail staffInfo={clickedStaff}></StaffDetail>}
    </div>
  );
}

export default App;
