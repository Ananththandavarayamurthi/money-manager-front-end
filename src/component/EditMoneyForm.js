
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate} from "react-router-dom";

function EditMoneyForm({ money }) {
    const navigate = useNavigate();
    const { handleChange, values, handleSubmit } =
      useFormik({
        initialValues: {
          Date: money.Date,
          Description: money.Description,
          Amount: money.Amount,
        },
        onSubmit: (updateMoney) => {
          editMoney(updateMoney);
        },
      });
  
    const editMoney = (updateMoney) => {
      fetch(`https://6354ef52483f5d2df3a96755.mockapi.io/money/${money.id}`, {
        method: "PUT",
        body: JSON.stringify(updateMoney),
        headers: { "Content-type": "application/json" },
      }).then(() => navigate("/dashboard"));
    };
  
    return (
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
        type="text"
        value={values.Amount}
        name="Amount"
        onChange={handleChange}
        />
  
        <Button variant="contained" type="submit" color="success">
          UPDATE 
        </Button>
      </form>
    );
  }
  
  export default EditMoneyForm