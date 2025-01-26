const StaffList = ( {staffs} ) => {
  return (
    <div className="App">
      <div className="row" style={{ margin: "20px 0px" }}>
        {staffs}
      </div>
    </div>
  );
};

export default StaffList;
