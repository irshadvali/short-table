import React, {useState} from "react";
import Mockdata from "../MOCK_DATA.json"

function Shorttable() {
    const [data, setData] = useState(Mockdata);
    const [order, setorder] = useState("ASC")

const sorting =(col)=>{
    if(order==="ASC") {
        const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1: -1
        );
        setData(sorted);
        setorder("DSC")
    }
    if(order==="DSC") {
        const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1: -1
        );
        setData(sorted);
        setorder("ASC")
    }

    };
  return (
    <div className="container">
      
      <table className="table with border">
          <thead>
              <th onClick={()=>sorting("first_name")}>First Name</th>
              <th onClick={()=>sorting("last_name")}>Last Name</th>
              <th onClick={()=>sorting("email")}>Email</th>
              <th onClick={()=>sorting("gender")}>Gender</th>
          </thead>
          <tbody>
            {data.map((x)=>(
                <tr key={x.id}>
                    <td>{x.first_name}</td>
                    <td>{x.last_name}</td>
                    <td>{x.email}</td>
                    <td>{x.gender}</td>
                </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
}

export default Shorttable;

