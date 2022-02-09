import React, { useContext, useState } from 'react';




export const ProductsList = (props) => {




  const onChange = (e) => {
    props.onChange(e, props.index)
  }

  return (
    <>
      <h3>item:{props.index}</h3>
      <div className='row'>
        <div className='col-md-4'>
          product Code:<input type="text" name='productCode' value={props.product.productCode} onChange={onChange}></input>
        </div>
        <div className='col-md-4'>
          product Name:<input type="text" name='productName' value={props.product.productName} onChange={onChange}></input>
        </div>
        <div className='col-md-4'>
          Quantity:<input type="number" name='Quantity' value={props.product.Quantity} onChange={onChange}></input>
        </div>

      </div>


    </>
  )
};
