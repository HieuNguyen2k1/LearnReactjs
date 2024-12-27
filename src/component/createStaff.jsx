function Create({onClick}){
    return (
        <div className="create-staff col-sm-6 col-12" >
            <div className="">
                <h2 >Nhân viên <span> <i className="fas fa-plus " style={{marginLeft:"6%"}} onClick={onClick} ></i> </span> </h2>

            </div>
        </div>
    )
}
export default Create;