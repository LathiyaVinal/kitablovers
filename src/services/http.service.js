import axios from "axios";

const client = axios.create({
  baseURL: "http://103.4.14.155/api/",
});

export const validateIsbn = async (isbn) => {
  try {
    let res = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn
    );
    console.log("isbn", res);
    if (res.data.totalItems === 0) {
      alert("Invalid ISBN");
      return false;
    } else if (res.data.totalItems === 1) {
      return true;
    }
  } catch (e) {
    alert("error", e);
    console.log("error", e);
  }
};
export const getBooksInventory = async () => {
  try {
    const res = await client.get("BooksInventory");
    if (res) {
      return res;
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const addBooksInventory = async (payload) => {
  try {
    const res = await client.post("BooksInventory", payload);
    console.log("res", res);
    if (res) {
      return res;
    }
  } catch (e) {
    console.log("error", e);
  }
};
export const getBookCondition = async () => {
  try {
    const res = await client.get("BookCondition");
    if (res?.data) {
      return res.data;
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const getWareHouse = async () => {
  try {
    const res = await client.get("WarehouseCity");
    if (res?.data) {
      return res.data;
    }
  } catch (e) {
    console.log("error", e);
  }
};
