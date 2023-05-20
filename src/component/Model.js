import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState,useContext} from "react"
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { GlobalContext } from './redux/GlobalState';

function Model() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { addMoney} = useContext(GlobalContext);
  
    const { values, handleSubmit, handleChange } =
      useFormik({
        initialValues: {
          Date: "",
          Description: "",
          Amount: "",
          Flow:"",
       
        },
        onSubmit: (values,{resetForm}) => {
          console.log("form values", values);
          addMoney(values);
        resetForm({values: ""})
        setShow(!show)
        },
       

      });
      
  return (
    <div><Button variant="primary" onClick={handleShow}>
    ADD MONEY
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>ADD MONEY 
        <div>Track your money in proper maintanable way</div>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>

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
     <Button variant="secondary" type="submit" >
     Save
      </Button>
    </form>

    </Modal.Body>
  </Modal></div>
  )
}

export default Model


