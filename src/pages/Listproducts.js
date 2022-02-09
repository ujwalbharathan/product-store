import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { Mycontext } from '../context/Mycontext';


export const Listproducts = () => {
  const { Orgproducts, setOrgproducts } = useContext(Mycontext);



  return (
    <>

      <table className='table'>
        <thead>
          <tr>
            <th>Product Code</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
    
          {
            Orgproducts && Orgproducts.map((product)=>{
              return (
                <tr>
                <td>{product.productCode}</td>
                <td>{product.productName}</td>
                <td>{product.Quantity}</td>
                </tr>
              )
            })
          }
    

        </tbody>
      </table>

    </>
  )
};
