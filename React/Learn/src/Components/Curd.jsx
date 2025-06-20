import React, { useState } from 'react';

export const Curd = () => {

    const[inputValue,setInputValue]=useState('');
    const[items,setItems]=useState([])

    const  handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }
    const handleSubmit=()=>{
        if(inputValue.trim()!==''){
            setItems([...items,inputValue]);
            setInputValue('')
        }
    }



  return (
    <div>
      <div className="container d-flex justify-content-center mt-5">
        <div className="row">
          <div className="col-12 d-flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter something"
            />
            <button onClick={handleSubmit}  className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <ul>
                {items.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
