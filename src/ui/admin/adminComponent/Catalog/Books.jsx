import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReusableTable from "../../ReusableComponent/ReusableTable";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Box from "@mui/material/Box";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenuData } from "../../../../redux/actions/adminAction";
import { getBooksInventory } from "../../../../services/http.service";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = ["ISBN", "Title", "Author", "Location"];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Books() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [val, setval] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setval(value);
    axios.get("http://localhost:3001/tableData").then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  };
  const [value, setValue] = React.useState([null, null]);
  const [data, setdata] = useState([]);
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const handleChange1 = (newValue) => {
    setValue(newValue);
  };

  const filter1 = () => {
    console.log(val);
    if (val == "ISBN") {
      let result = data.filter((ele) => {
        return ele.ISBN.substring(0, text.length) === text;
      });
      console.log(result);
      setdata(result);
    }
    if (val == "Title") {
      let result = data.filter((ele) => {
        return ele.Title.substring(0, text.length) === text;
      });
      console.log(result);
      setdata(result);
    }
    if (val == "Location") {
      let result = data.filter((ele) => {
        return ele.Location.substring(0, text.length) === text;
      });
      console.log(result);
      setdata(result);
    }
  };

  const AddBook = () => {
    dispatch(setMenuData("addNewBook"));
  };
  useEffect(() => {
    getBooksInventory().then((res) => setdata(res.data));

    // axios.get("http://localhost:3001/tableData").then((res) => {
    //   console.log(res.data);
    //   setdata(res.data);
    // });
  }, []);

  return (
    <>
      <div>
        <Stack direction="row" spacing={2}>
          <Typography variant="h4" gutterBottom>
            Books
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "right",
              justifyContent: "right",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              style={{ backgroundColor: "#3c8dbc", marginRight: "5px" }}
              onClick={AddBook}
            >
              <AddBoxRoundedIcon sx={{ marginRight: "4px" }} />
              Add New
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#28a745", marginRight: "5px" }}
            >
              <DownloadRoundedIcon sx={{ marginRight: "4px" }} /> Export
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#dc3545", marginRight: "5px" }}
            >
              <DeleteRoundedIcon sx={{ marginRight: "4px" }} /> Delete
            </Button>
          </div>
        </Stack>
      </div>
      <Accordion sx={{ mt: "20px" }} expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <SearchIcon /> <Typography>Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "flex" }}>
            <FormControl sx={{ ml: "9%", width: 300, width: "40vh" }}>
              <Select
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Select for filter</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              onChange={(event) => {
                settext(event.target.value);
                {
                  axios.get("http://localhost:3001/tableData").then((res) => {
                    console.log(res.data);
                    setdata(res.data);
                  });
                }
              }}
              id="outlined-basic"
              label="input"
              variant="outlined"
              sx={{ width: "40vh", ml: "5%", mr: "5%" }}
            />
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              localeText={{ start: "Mobile start", end: "Mobile end" }}
            >
              <MobileDateRangePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
          </div>
          <div style={{ marginLeft: "29%", marginTop: "10vh" }}></div>
          <div
            style={{
              alignItems: "center",
              textAlign: "center",
              marginBottom: "10px",
              marginTop: "20px",
            }}
          >
            <Button
              onClick={filter1}
              variant="contained"
              disableElevation
              sx={{ width: "40vh", backgroundColor: "#FF7F50" }}
            >
              Filter
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          marginTop: "20px",
          borderRadius: "5px",
        }}
      >
        <ReusableTable data={data} />
      </div>
    </>
  );
}
