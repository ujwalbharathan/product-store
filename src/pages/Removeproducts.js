import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { RemoveProductList } from '../components/RemoveProductList';
import { Mycontext } from '../context/Mycontext';

export const Removeproducts = () => {


  const {Orgproducts,setOrgproducts} = useContext(Mycontext);
  const [number,setnumber]=useState(0)
  const [removedata,setremovedata]=useState([])

  const Createarray=(N)=>{
    const data=[...Array(N).keys()].map((i)=>{
     const id= +new Date()
     return {id:id}
    })
     setremovedata(data)
    
  }
const fieldChange=(e,index)=>{
  const {name,value}=e.target
  const currentField=removedata[index]||{}
  const update={...currentField,[name]:value}
  const updatedArray=[...removedata]
  updatedArray[index]=update
  setremovedata(updatedArray)
}



const filter=()=>{
    
  let index = 0
  let arr1 = removedata
  let data_to_delete = []


  for (let product of arr1)
  {
    index = index+1
     for (let i=index; i<arr1.length; i++)
     {
       if (product.productCode==arr1[i].productCode)
       {
        product.Quantity = (+product.Quantity + +arr1[i].Quantity).toString()
        data_to_delete.push(arr1[i])
       }
     }
    
  }

  console.log("Added_array")
  const finally_added_array = arr1.filter(({ productCode: id1,Quantity:q1 }) => !data_to_delete.some(({ productCode: id2, Quantity:q2 }) => (id2 == id1)&&(q1==q2)));






    //Remove product
    let unwanted_data=[]
    for (let del_product  of finally_added_array )
      {
        for (let product of Orgproducts)
        {
          if (del_product.productCode == product.productCode)
            {
              product.Quantity = (+product.Quantity - +del_product.Quantity ).toString();

                if (product.Quantity <= 0)
                    {
                      unwanted_data.push(product)
                    }
            }

        }
      }
    
    const final_product = Orgproducts.filter(({ productCode: id1 }) => !unwanted_data.some(({ productCode: id2 }) => id2 === id1));
 
      console.log(final_product)

setOrgproducts(final_product);
  
}

  return (
      <>
   <div className='number'>No of items going to Remove<input type="number" value={number} onChange={(e)=>{
     setnumber(e.target.value)
     Createarray(parseInt(e.target.value))
   }}></input>
   </div>
   <div>
     {removedata.map((data,index)=>{
      return <RemoveProductList key={index} index={index} removedata={removedata} onChange={fieldChange} />
       
     })}
   </div>
   <div className='button'>
      <button className='btn btn-primary' type='submit' onClick={filter} >Save Products</button>
      </div>
      </>
  )
};
