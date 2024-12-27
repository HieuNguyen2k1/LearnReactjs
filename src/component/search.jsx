function Search(){
    return(
        <div className="search-staff col-sm-6 col-12">
            <div >
            <input className="mt-1" style={{width:"50%"}} type="text" placeholder="Tìm kiếm..." /> 
                
                <button className="btn btn-primary ms-3" > Search </button> 
            </div>
        </div>
    )
}

export default Search;