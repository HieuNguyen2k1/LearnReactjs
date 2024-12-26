function StaffDetail({staffInfo}){
    
    return(
        <div>
        <div>{staffInfo.id}</div>
        <div>{staffInfo.name}</div>
        <div>{staffInfo.doB}</div>
        <div>{staffInfo.salaryScale}</div>
        <div>{staffInfo.overTime}</div>
        </div>
    )
}
export default StaffDetail;