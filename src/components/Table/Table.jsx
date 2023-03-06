import React from "react";
import Button from "@mui/material/Button";
const Table = ({data}) => {
  return (
    <div style={{ background: "#fff" }}>
      <table class="table table-hover table-fixed">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((el) => (
              <tr>
                <th scope="row">{el._id}</th>
                <td>{el.name}</td>
                <td>
                  {" "}
                  <Button variant="outlined">Edit</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
