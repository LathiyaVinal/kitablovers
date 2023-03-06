import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const arr = ["Delhi", "Mumbai", "Patna", "Ranchi"];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "Sno",
    numeric: false,
    disablePadding: true,
    label: "S.No",
  },
  {
    id: "Image",
    numeric: true,
    disablePadding: false,
    label: "Image",
  },
  {
    id: "Title",
    numeric: true,
    disablePadding: false,
    label: "Title",
  },
  {
    id: "ISBN",
    numeric: true,
    disablePadding: false,
    label: "ISBN",
  },
  {
    id: "MRP",
    numeric: true,
    disablePadding: false,
    label: "MRP",
  },
  {
    id: "Price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "Stocks",
    numeric: true,
    disablePadding: false,
    label: "Stocks",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel style={{
              fontWeight: 'bold',
              fontSize: 'larger'
            }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        ></Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable(props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open1, setOpen1] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = props.data.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.data.length) : 0;
  {
    console.log("sdsds", props.data);
  }
  return (
    <>
      <EnhancedTableToolbar numSelected={selected.length} />
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={props.data.length}
          />
          <TableBody>
            {(rowsPerPage > 0
              ? props.data.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
              : props.data
            ).map((ele, index) => {
              const isItemSelected = isSelected(ele.SNo);
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, ele.SNo)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={ele.SNo}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    {ele.SNo}
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <img
                      style={{ width: 100, height: 75 }}
                      src={ele.Image}
                      srcSet={`${ele.Image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={"No image found"}
                      loading="lazy"
                    />
                  </TableCell>
                  <TableCell align="right">{ele.Title}</TableCell>
                  <TableCell align="right" sx={{ width: "50%" }}>
                    <b>ISBN</b> : <p className="tableMore"> {ele.isbn}</p>
                    <br />
                    <b>ISBN Added Date:</b>{" "}
                    <p className="tableMore"> {ele.createdAt}</p>
                    <br />
                    <b>ISBN Updated Date :</b>{" "}
                    <p className="tableMore">{ele.updatedAt}</p>
                  </TableCell>
                  <TableCell align="right">
                    <div className="d-flex" style={{alignItems:'center'}}>
                      <div>
                        <OutlinedInput
                          defaultValue={ele.mrp}
                          sx={{ minWidth: 60, fontSize: "10px",margin:1 }}
                          onChange={(event) => {
                            console.log(event.target.value);
                          }}
                        />
                      </div>
                      <div>
                        {/* {" "} */}
                        <SaveIcon/>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right" sx={{ width: "100%" }}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 30 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Condition</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {ele.pricing.map((row) => (
                            <>
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  <FormControl
                                    variant="filled"
                                    sx={{ minWidth: 30 }}
                                  >
                                    <InputLabel
                                      id="demo-simple-select-filled-label"
                                      sx={{ fontSize: "10px" }}
                                    >
                                      {row.book_condition}
                                    </InputLabel>
                                    <Select
                                      disabled
                                      labelId="demo-simple-select-filled-label"
                                      id="demo-simple-select-filled"
                                      sx={{ height: 60, width: 70 }}
                                    ></Select>
                                  </FormControl>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                  <FormControl sx={{ width: "10ch" }}>
                                    <OutlinedInput  defaultValue={row.price} inputProps={{
                                      style: {
                                        paddingLeft:0,
                                        paddingRight:0,
                                        textAlign:'center'
                                      }
                                    }} />
                                  </FormControl>
                                </TableCell>
                                <TableCell>
                                  <SaveIcon />
                                  <DeleteIcon />
                                </TableCell>
                              </TableRow>
                              <TableRow sx={{ textAlign: "center" }}>
                                <TableCell></TableCell>
                                <TableCell>
                                  <div>
                                    <Button
                                      variant="outlined"
                                      onClick={handleClickOpen2}
                                    >
                                      Add
                                    </Button>
                                    <Dialog
                                      open={open}
                                      onClose={handleClose2}
                                      aria-labelledby="alert-dialog-title"
                                      aria-describedby="alert-dialog-description"
                                    >
                                      <div>
                                        <DialogTitle id="alert-dialog-title">
                                          <p
                                            style={{
                                              fontSize: "150%",
                                              color: "Black",
                                            }}
                                          >
                                            Add New Price
                                          </p>
                                          <hr />
                                        </DialogTitle>
                                        <DialogContent>
                                          <DialogContentText id="alert-dialog-description">
                                            <div
                                              style={{
                                                display: "flex",
                                                flexWrap: "nowrap",
                                                marginTop: "10px",
                                              }}
                                            >
                                              <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">
                                                  Condition
                                                </InputLabel>
                                                <Select
                                                  labelId="demo-simple-select-label"
                                                  id="demo-simple-select"
                                                  label="Condition"
                                                >
                                                  <MenuItem value={10}>
                                                    New
                                                  </MenuItem>
                                                  <MenuItem value={20}>
                                                    Almost New
                                                  </MenuItem>
                                                  <MenuItem value={30}>
                                                    Good
                                                  </MenuItem>
                                                  <MenuItem value={30}>
                                                    Redable
                                                  </MenuItem>
                                                </Select>
                                              </FormControl>
                                              <TextField
                                                sx={{ ml: 5, width: 100 }}
                                                id="outlined-basic"
                                                label="Price"
                                                variant="outlined"
                                              />
                                            </div>
                                          </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                          <Button onClick={handleClose2}>
                                            Cancel
                                          </Button>
                                          <Button
                                            onClick={handleClose2}
                                            autoFocus
                                          >
                                            Submit
                                          </Button>
                                        </DialogActions>
                                      </div>
                                    </Dialog>
                                  </div>
                                </TableCell>
                              </TableRow>
                            </>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TableCell>
                  <TableCell align="right">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 50 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Condition</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {ele.inventory.map((row) => (
                            <>
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  <FormControl
                                    variant="filled"
                                    sx={{ minWidth: 50 }}
                                  >
                                    <InputLabel
                                      id="demo-simple-select-filled-label"
                                      sx={{ fontSize: "10px" }}
                                    >
                                      {row.book_condition}
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-filled-label"
                                      id="demo-simple-select-filled"
                                      sx={{ height: 60, width: 70 }}
                                    >
                                      <MenuItem>New</MenuItem>
                                      <MenuItem>Almost New</MenuItem>
                                      <MenuItem>Good</MenuItem>
                                      <MenuItem>Redable</MenuItem>
                                    </Select>
                                  </FormControl>
                                </TableCell>
                                <TableCell>
                                  <FormControl
                                    variant="filled"
                                    sx={{ minWidth: 50 }}
                                  >
                                    <InputLabel
                                      id="demo-simple-select-filled-label"
                                      sx={{ fontSize: "10px" }}
                                    >
                                      City
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-filled-label"
                                      id="demo-simple-select-filled"
                                      sx={{ height: 60, width: 70 }}
                                    >
                                      <MenuItem value={row.city}>
                                        {row.city}
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                  <FormControl sx={{ width: "10ch" }}>
                                    <OutlinedInput
                                      defaultValue={row.location}
                                      sx={{
                                        fontSize: "10px",
                                        width: "100px",
                                      }}
                                    />
                                  </FormControl>
                                </TableCell>
                                <TableCell>
                                  <OutlinedInput
                                    defaultValue={row.quantity}
                                    sx={{ ml: 2 }}
                                  />
                                </TableCell>

                                <TableCell>
                                  <SaveIcon />
                                  <DeleteIcon />
                                </TableCell>
                              </TableRow>
                              <TableRow sx={{ textAlign: "center" }}>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                  <div>
                                    <Button
                                      variant="outlined"
                                      onClick={handleClickOpen1}
                                    >
                                      Add
                                    </Button>
                                    <Dialog
                                      open={open1}
                                      onClose={handleClose1}
                                      aria-labelledby="alert-dialog-title"
                                      aria-describedby="alert-dialog-description"
                                    >
                                      <div>
                                        <DialogTitle id="alert-dialog-title">
                                          <p
                                            style={{
                                              fontSize: "150%",
                                              color: "black",
                                            }}
                                          >
                                            Add New Stock
                                          </p>
                                          <hr />
                                        </DialogTitle>
                                        <DialogContent>
                                          <DialogContentText id="alert-dialog-description">
                                            <div
                                              style={{
                                                display: "flex",
                                                flexWrap: "nowrap",
                                                marginTop: "10px",
                                              }}
                                            >
                                              <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">
                                                  Condition
                                                </InputLabel>
                                                <Select
                                                  labelId="demo-simple-select-label"
                                                  id="demo-simple-select"
                                                  label="Condition"
                                                >
                                                  <MenuItem value={10}>
                                                    New
                                                  </MenuItem>
                                                  <MenuItem value={20}>
                                                    Almost New
                                                  </MenuItem>
                                                  <MenuItem value={30}>
                                                    Good
                                                  </MenuItem>
                                                  <MenuItem value={30}>
                                                    Redable
                                                  </MenuItem>
                                                </Select>
                                              </FormControl>
                                              <TextField
                                                sx={{ ml: 5, minWidth: 150 }}
                                                id="outlined-basic"
                                                label="Location"
                                                variant="outlined"
                                              />
                                              <TextField
                                                sx={{ ml: 5, minWidth: 100 }}
                                                id="outlined-basic"
                                                label="Quantity"
                                                variant="outlined"
                                              />
                                            </div>
                                          </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                          <Button onClick={handleClose1}>
                                            Cancel
                                          </Button>
                                          <Button
                                            onClick={handleClose1}
                                            autoFocus
                                          >
                                            Submit
                                          </Button>
                                        </DialogActions>
                                      </div>
                                    </Dialog>
                                  </div>
                                </TableCell>
                              </TableRow>
                            </>
                          ))}
                          <TableRow></TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={props.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      `<FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />`
    </>
  );
}
