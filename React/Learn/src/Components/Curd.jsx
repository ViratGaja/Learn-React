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

    const handleDelete=(index)=>{
      const updatedItem=items.filter((_,i)=>i!==index);
      setItems(updatedItem)
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
            {items.length > 0 && (
              <ul className="list-group">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item}
                    <button
                      onClick={() => handleDelete(index)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
