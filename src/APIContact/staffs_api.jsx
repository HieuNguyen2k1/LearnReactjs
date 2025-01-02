import { useEffect } from "react";
function Staffs({staffs}) {
    useEffect(() => {
        const fetchStaffs = () => {
          fetch("http://localhost:8080/staffs", {
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("fail");
              }
              return response.json();
            })
            .then((data) => {
              staffs(data);
            })
            .catch((error) => {
              console.error("There was a problem with the fetch operation:", error);
            });
        };
    
        fetchStaffs(); // Gọi hàm ở đây
      }, []);

}
export default Staffs;
