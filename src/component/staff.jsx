function Staff({staff , onClick}){
   
    return  <div className="staff col-sm-4" onClick={onClick}>{staff.name}</div>

}

export default Staff;