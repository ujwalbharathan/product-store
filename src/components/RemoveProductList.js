import React from 'react';


export const RemoveProductList = (props) => {
  
    const onChange=(e)=>{
        props.onChange(e,props.index)
      
    }
  return  (<>
  <h3>item:{props.index}</h3>
  <div className='row'>
    <div className='col-md-6'>
      product Code:<input type="text" name='productCode' value={props.removedata.productCode} onChange={onChange}></input>
    </div>
    <div className='col-md-6'>
      Quantity:<input type="number" name='Quantity' value={props.removedata.Quantity} onChange={onChange}></input>
    </div>

  </div>


</>)
};
