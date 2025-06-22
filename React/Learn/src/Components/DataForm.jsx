import React, { useState } from "react";

export const DataForm = () => {

    const [formData,setFormData]=useState({
        name:'',
        email:'',
    })
    const [errors,setErrors]=useState({});

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }

    const valideForm=()=>{
        const newError={};
        if(!formData.name.trim()){
            newError.name="Name is Required"

        }
        if(!formData.email.trim()){
            newError.email='Invalid email format'
        }
        setErrors(newError);
        return Object.keys(newError).length===0
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        if(valideForm()){
            alert("Form SUbmit successfully")
            setFormData({name:"",email:""})
        }
    }


  return (
    <div>
        <div className="container mt-4">
      <h1>React Form Validation</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}
