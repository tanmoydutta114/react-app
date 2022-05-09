import React, { useState, useEffect } from "react";
import "./style.css";
export const FetchData = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  
  return (
    <div>
      <table border="1">
        <tr>
          <th>Email Id</th>
          <th>Password</th>
        </tr>
        {data.map((d) => (
          <tr>
            <td>{d["email"]}</td>
            <td>{d["password"]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
