function Create({onClick}){
    return (
        <div className="w-50" >
            <div className="ms-5">
                <h2 >Nhân viên <span> <i className="fas fa-plus " style={{marginLeft:"6%"}} onClick={onClick} ></i> </span> </h2>

            </div>
        </div>
    )
}
export default Create;