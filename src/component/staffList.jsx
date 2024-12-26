const StaffList = ({ staffs }) => {
  return (
    <div className="App">
      <div className="row" style={{ margin: "20px 20px" }}>
        {staffs}
      </div>
    </div>
  );
};

export default StaffList;
