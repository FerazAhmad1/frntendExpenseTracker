import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../feature/Auth/authSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { ExpenseList } from "./ExpenseList";
import {
  createExpense,
  deleteExpense,
  updateExpense,
} from "../feature/Expense/expenseSlice";
import { Buypremium } from "./Buypremium";
import { Pagebutton } from "./Pagebutton";

export const ExpenseForm = () => {
  const [created, setCreated] = useState(false);
  const [id, setEdited] = useState("");
  const [deleteId, setDeleted] = useState(false);
  const [allfetch, setallFetch] = useState([]);
  const selectCategoryRef = useRef();
  const moneyInputRef = useRef();
  const descriptionInputRef = useRef();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: 3,
  });
  for (const [param, value] of searchParams.entries()) {
    console.log(`${param}: ${value}`);
  }
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const authState = useSelector((state) => state.auth);
  const expenseState = useSelector((state) => state.expense);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    console.log(e);
    e.preventDefault();
    const amount = moneyInputRef.current.value
      ? moneyInputRef.current.value.trim()
      : "";
    const category = selectCategoryRef.current.value;
    const description = descriptionInputRef.current.value
      ? descriptionInputRef.current.value.trim()
      : "";
    if (!amount) {
      alert("please fill the amount");
      return;
    }
    if (!category) {
      alert("please chose category ");
      return;
    }
    if (!description) {
      alert("Please write description");
      return;
    }
    const body = { amount, category, description };
    const { token } = authState;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      if (id) {
        const response = await axios.patch(
          `http://localhost:3002/api/v1/expense/${id}`,
          body,
          config
        );
        console.log("iddddddddddddddddd");
        if (response.statusText === "OK") {
          dispatch(updateExpense({ id, body }));
          setCreated((previousState) => !previousState);
          return;
        }
      }
    } catch (error) {}

    try {
      console.log(page * 1, limit * 1);
      const response = await axios.post(
        `http://localhost:3002/api/v1/expense`,
        body,
        config
      );
      console.log("xxxxxxxxxxxxxxxxxxxxxx", response);
      const data = response.data.data;
      console.log(data);
      dispatch(createExpense(data));
      setCreated((previousState) => !previousState);
    } catch (error) {
      console.log(error);
    }
  };

  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const fetchAllExpense = async () => {
      try {
        const { token } = authState;
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const allExpense = await axios.get(
          `http://localhost:3002/api/v1/expense?page=${page * 1}&limit=${
            limit * 1
          }`,
          config
        );
        if (allExpense.statusText === "OK") {
          localStorage.setItem(
            "allExpense",
            JSON.stringify(allExpense.data.data)
          );
          localStorage.setItem(
            "totalPages",
            JSON.stringify(allExpense.data.totalPages)
          );
          console.log(allExpense.data);
          setallFetch(allExpense.data.data);
        }
      } catch (error) {
        console.log(error.response.data);
        localStorage.clear();
        navigate("/", { replace: true });
      }
    };
    fetchAllExpense();
  }, [searchParams]);
  const editHandler = (id) => {
    let data = JSON.parse(localStorage.getItem("allExpense"));
    const { amount, description, category } = data.filter(
      (expense) => expense.id === id
    )[0];
    moneyInputRef.current.value = amount;
    selectCategoryRef.current.value = category;
    descriptionInputRef.current.value = description;
    setEdited(id);
  };
  const deleteHandler = async (id) => {
    try {
      console.log("id", id);
      const { token } = authState;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(
        `http://localhost:3002/api/v1/expense/${id}`,
        config
      );

      console.log(response);
      if (response.statusText === "OK") {
        dispatch(deleteExpense({ id }));
        setDeleted((previousState) => !previousState);
      }
    } catch (error) {
      console.log(error);
    }
  };
  let allExpense = [];

  if (localStorage.getItem("allExpense")) {
    allExpense = JSON.parse(localStorage.getItem("allExpense"));
  }

  return (
    <>
      <div className="flex justify-between items-center bg-black ">
        <h1 className=" flex-1 text-white text-3xl ">Expense Tracker</h1>
        <button
          onClick={logOutHandler}
          className="px-8 py-8 text-3xl border-none outline-none text-white ">
          LOGOUT
        </button>
      </div>
      {console.log("i am running")}
      <form
        onSubmit={submitHandler}
        className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center md:p-4 md:bg-blue-700 md:min-w-max gap-2 mt-2 justify-center items-center">
        <div className="flex flex-col bg-white p-1 rounded-lg shadow-2xl w-80 md:w-{20/100} mb-1 md:text-2xl ">
          <label>Money</label>
          <input
            ref={moneyInputRef}
            className=" border-none outline-none "
            type="text"
          />
        </div>
        <div className="flex flex-col bg-white p-1 rounded-lg shadow-2xl w-80 md:w-{20/100}  mb-1 md:text-2xl ">
          <label>Description</label>
          <input
            ref={descriptionInputRef}
            className=" border-none outline-none "
            type="text"
          />
        </div>
        <div className="flex flex-col w-80  h-14 shadow-2xl mb-1 md:text-2xl md:w-{20/100} ">
          <select
            ref={selectCategoryRef}
            className="flex-1 rounded-lg outline-none md:h-16  ">
            <option>Milk</option>
            <option>Bread</option>
            <option>Vegitables</option>
            <option>Burger</option>
            <option>Piza</option>
            <option>Beer</option>
            <option>Dineer</option>
            <option>Lunch</option>
            <option>Break fast</option>
            <option>Salary</option>
            <option>Birth Day Treet</option> <option>Education</option>
          </select>
        </div>

        <div className=" flex bg-green-600 outline-none  h-14  text-white justify-center items-center w-80 rounded-lg shadow-2xl mb-1 md:text-2xl md:h-16 md:w-{20/100}">
          <button type="submit" className="flex-1">
            SUBMIT
          </button>
        </div>
      </form>
      <Buypremium />
      {allExpense.map((exp) => (
        <ExpenseList
          {...exp}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      ))}
      <Pagebutton />
    </>
  );
};
