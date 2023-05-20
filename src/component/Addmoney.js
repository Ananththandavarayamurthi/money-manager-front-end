import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { GlobalContext } from './redux/GlobalState';




function Addmoney() {
  const navigate = useNavigate();
  const { addMoney} = useContext(GlobalContext);

  const { values, handleSubmit, handleChange, } =
    useFormik({
      initialValues: [{
        Date: "",
        Description: "",
        Amount: "",
        Flow:"",
     
      }],
      onSubmit: (values) => {
        console.log("form values", values);
        addMoney(values);

        navigate("/navbar/weeklyreport")
      },
    });
  return (
    <div>
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        label="Date"
        variant="outlined"
        type="date"
        value={values.Date}
        name="Date"
        onChange={handleChange}
        
      />

      <TextField
        label="Description"
        variant="outlined"
        type="text"
        value={values.Description}
        name="Description"
        onChange={handleChange}
        />

      <TextField
        label="Amount"
        variant="outlined"
        type="number"
        value={values.Amount}
        name="Amount"
        onChange={handleChange}
        />
       <select
                className="form-select"
                aria-label="Default select example"
                name="Flow"
                type="text"
                value={values.Flow}
                onChange={handleChange}
              >
                <option selected>--Select--</option>
                <option value={true}>Income</option>
                <option value={false}>Expences</option>
              </select>

      <Button variant="contained" type="submit">
        ADD MOVIE
      </Button>
    </form>
   </div>
  )
}

export default Addmoney