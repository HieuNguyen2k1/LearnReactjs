import { Link } from "react-router-dom";

function Staff({ staff, onClick }) {
  return (
    <div
      className="staff  col-6 col-lg-2  col-md-4"
      style={{ padding: "0" }}
      onClick={onClick}
    >
      <Link to={`/staff/${staff.id}`}>
        <div
          style={{
            border: "0.5px solid",
            margin: "1px",
          }}
        >
          <div>
            <img
              src={staff.image}
              alt={staff.name}
              width="90"
              height="100"
            ></img>
          </div>
          <div>{staff.name}</div>
        </div>
      </Link>
    </div>
  );
}

export default Staff;
