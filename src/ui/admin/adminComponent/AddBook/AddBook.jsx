// import React, { useEffect } from "react";
import { Button, OutlinedInput } from "@mui/material";
import { useDispatch } from "react-redux";
import { setMenuData } from "../../../../redux/actions/adminAction";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
// import Stack from "@mui/material/Stack";
import {
  addBooksInventory,
  getBookCondition,
  validateIsbn,
} from "../../../../services/http.service";
import TextField from "@mui/material/TextField";
import {
  Field,
  FieldArray,
  useFormik,
  FormikProvider,
  Form,
  ErrorMessage,
} from "formik";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";

export default function AddBook() {
  const [inventoryList, setInventoryList] = useState([1]);

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getBookCondition().then((res) => setBookList(res));
  }, []);
  const handleSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));

    validateIsbn(values.isbn).then((res) => {
      if (res) {
        addBooksInventory(values).then((res) => alert(res.data));
      }else{
        alert("Invalid ISBN")
      }
    });
  };
  const formik = useFormik({
    initialValues: {
      isbn: "",
      mrp: "",
      pricing: [
        {
          book_condition: "",
          price: "",
        },
      ],
      inventory: [
        {
          book_condition: "",
          city: "",
          quantity: "",
          location: "",
        },
      ],
    },

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const dispatch = useDispatch();
  return (
    <>
      <Button
        variant="contained"
        onClick={() => dispatch(setMenuData("Books"))}
      >
        Go back
      </Button>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <MDBContainer fluid className="my-10">
            <MDBRow className="g-0 align-items-center">
              <MDBCol col="6">
                <MDBCard
                  className="my-5 cascading-right"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <MDBCardBody className="p-5 shadow-5">
                    <h2 className="fw-bold mb-5">Add New Book</h2>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <Box
                          sx={{
                            width: 500,
                            maxWidth: "100%",
                          }}
                        >
                          <TextField
                            required
                            fullWidth
                            variant="outlined"
                            onChange={formik.handleChange}
                            label="ISBN 13"
                            id="isbn"
                            type="text"
                            name={"isbn"}
                            value={formik.values.isbn}
                            // inputProps={{ inputmode: 'numeric', pattern: '[0-9]*' }}
                          />
                        </Box>
                      </div>

                      <div className="col-md-6">
                        <Box
                          sx={{
                            width: 500,
                            maxWidth: "100%",
                          }}
                        >
                          <TextField
                            required
                            fullWidth
                            variant="outlined"
                            onChange={formik.handleChange}
                            label="MRP"
                            id="mrp"
                            type="number"
                            name={"mrp"}
                            value={formik.values.mrp}
                          />
                        </Box>
                      </div>
                    </div>
                    <h2 className="fw-bold mb-5">Pricing</h2>
                    <FieldArray
                      name="pricing"
                      render={(arrayHelpers) => {
                        const pricing = formik.values.pricing;
                        return (
                          <>
                            {pricing && pricing.length > 0
                              ? pricing.map((user, index) => (
                                  <div key={index}>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <FormControl
                                          sx={{
                                            width: 500,
                                            maxWidth: "100%",
                                          }}
                                          size="medium"
                                        >
                                          <InputLabel id="demo-select-small">
                                            Book Condition
                                          </InputLabel>
                                          <Select
                                            input={
                                              <OutlinedInput label="Book Condition" />
                                            }
                                            labelId="demo-select-small"
                                            id="select"
                                            name={`pricing.${index}.book_condition`}
                                            value={
                                              formik.values.pricing
                                                .book_condition
                                            }
                                            onChange={formik.handleChange}
                                          >
                                            {bookList &&
                                              bookList.map((item, idx) => (
                                                <MenuItem value={item.name}>
                                                  {item.name}
                                                </MenuItem>
                                              ))}
                                          </Select>
                                        </FormControl>
                                      </div>

                                      <div className="col-md-6">
                                        <Box
                                          sx={{
                                            width: 500,
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <TextField
                                            required
                                            fullWidth
                                            label="Price"
                                            id="form"
                                            type="number"
                                            name={`pricing.${index}.price`}
                                            value={formik.values.pricing.price}
                                            onChange={formik.handleChange}
                                          />
                                        </Box>
                                      </div>
                                    </div>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                      <MDBBtn
                                        className="w-20 mb-4 float-right"
                                        size="md"
                                        type="button"
                                        color="danger"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
                                      >
                                        Remove row
                                      </MDBBtn>
                                    </div>
                                  </div>
                                ))
                              : null}
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                              <MDBBtn
                                size="lg"
                                type="button"
                                onClick={() =>
                                  arrayHelpers.push({
                                    book_condition: "",
                                    price: "",
                                  })
                                }
                              >
                                Add
                              </MDBBtn>
                            </div>
                          </>
                        );
                      }}
                    />

                    <h2 className="fw-bold mb-5">Inventory</h2>
                    <FieldArray
                      name="inventory"
                      render={(arrayHelpers) => {
                        const inventory = formik.values.inventory;
                        return (
                          <>
                            {inventory && inventory.length > 0
                              ? inventory.map((user, index) => (
                                  <div key={index}>
                                    <section className="row">
                                      <div className="col-md-3">
                                        <FormControl
                                          sx={{ width: "100%" }}
                                          size="medium"
                                        >
                                          <InputLabel id="demo-select-small">
                                            Book Condition
                                          </InputLabel>
                                          <Select
                                            input={
                                              <OutlinedInput label="Book Condition" />
                                            }
                                            labelId="demo-select-small"
                                            id="select"
                                            name={`inventory.${index}.book_condition`}
                                            value={
                                              formik.values.inventory
                                                .book_condition
                                            }
                                            onChange={formik.handleChange}
                                          >
                                            {bookList &&
                                              bookList.map((item, idx) => (
                                                <MenuItem value={item.name}>
                                                  {item.name}
                                                </MenuItem>
                                              ))}
                                          </Select>
                                        </FormControl>
                                      </div>

                                      <div className="col-md-3">
                                        <Box
                                          sx={{
                                            width: 500,
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <TextField
                                            required
                                            fullWidth
                                            label="City"
                                            id="form"
                                            type="text"
                                            name={`inventory.${index}.city`}
                                            value={formik.values.inventory.city}
                                            onChange={formik.handleChange}
                                          />
                                        </Box>
                                      </div>
                                      <div className="col-md-3">
                                        <Box
                                          sx={{
                                            width: 500,
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <TextField
                                            fullWidth
                                            required
                                            label="Quantity "
                                            id="form"
                                            type="number"
                                            name={`inventory.${index}.quantity`}
                                            value={
                                              formik.values.inventory.quantity
                                            }
                                            onChange={formik.handleChange}
                                          />
                                        </Box>
                                      </div>
                                      <div className="col-md-3">
                                        <Box
                                          sx={{
                                            width: 500,
                                            maxWidth: "100%",
                                          }}
                                        >
                                          <TextField
                                            fullWidth
                                            required
                                            wrapperClass="mb-4"
                                            label="Location"
                                            id="inventoryLocation"
                                            type="text"
                                            name={`inventory.${index}.location`}
                                            value={
                                              formik.values.inventory.location
                                            }
                                            onChange={formik.handleChange}
                                          />
                                        </Box>
                                      </div>
                                    </section>
                                    <div className="d-grid gap-2 d-md-flex mt-3 justify-content-md-end">
                                      <MDBBtn
                                        className="w-20 mb-4 float-right"
                                        size="md"
                                        type="button"
                                        color="danger"
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
                                      >
                                        Remove row
                                      </MDBBtn>
                                    </div>
                                  </div>
                                ))
                              : null}
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                              <MDBBtn
                                // disabled={button}
                                size="lg"
                                onClick={() =>
                                  arrayHelpers.push({
                                    book_condition: "",
                                    city: "",
                                    quantity: "",
                                    location: "",
                                  })
                                }
                              >
                                Add
                              </MDBBtn>
                            </div>
                          </>
                        );
                      }}
                    />

                    <div style={{ float: "right", marginTop: "50px" }}>
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="contained"
                          color="success"
                          type="submit"
                        >
                          Submit
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => {
                            console.log("cancel");
                          }}
                        >
                          Cancel
                        </Button>
                      </Stack>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </form>
      </FormikProvider>
    </>
  );
}
