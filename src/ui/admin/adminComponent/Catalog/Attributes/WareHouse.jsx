import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "../../../../../components/Table/Table";
import { getWareHouse } from "../../../../../services/http.service";

const WareHouse = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getWareHouse().then((res) => setData(res));
  }, []);
  return (
    <div>
      {console.log("w", data)}{" "}
      <Typography variant="h4" gutterBottom>
        Warehouse Cities
      </Typography>
      <Table data={data} />
    </div>
  );
};

export default WareHouse;
