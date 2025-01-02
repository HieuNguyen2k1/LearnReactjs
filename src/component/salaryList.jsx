function SalaryList({salarys}){
    return (
      <div className="Salary">
        <div className="row" style={{ margin: "20px 0px" }}>
          {salarys}
        </div>
      </div>
    );
  };
  
  export default SalaryList; 
  