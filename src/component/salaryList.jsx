function SalaryList({salarys}){
    return (
      <div className="Salary">
        <div className="row" style={{ margin: "20px 20px" }}>
          {salarys}
        </div>
      </div>
    );
  };
  
  export default SalaryList;
  