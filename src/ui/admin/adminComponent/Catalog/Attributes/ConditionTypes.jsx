import React, { useEffect, useState } from "react";
import { getBookCondition } from "../../../../../services/http.service";

import Table from "../../../../../components/Table/Table";
import { Typography } from "@mui/material";

export default function ConditionTypes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBookCondition().then((res) => setData(res));
  }, []);
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Book Conditions
      </Typography>
      <Table data={data} />
    </div>
  );
}
