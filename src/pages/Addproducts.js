import React, { useState } from 'react';
import { useContext, useEffect } from 'react/cjs/react.development';
import { ProductsList } from '../components/ProductsList';
import { Mycontext } from '../context/Mycontext';
import './Addproducts.css';





export const Addproducts = () => {

  const [number, setnumber] = useState(0)


  const {Orgproducts,setOrgproducts} = useContext(Mycontext);

  const [products,setproducts]=useState([])



  const createArray = (N = 1) => {
   
    const data = [...Array(N).keys()].map((i) => {
      const id = +new Date();
      return { id: id };
    });
    setproducts(data)

  };
  const fieldChange = (e, index) => {
    const { name, value } = e.target;
    const currentField = products[index] || {};
    const update = { ...currentField, [name]: value };
    const updatedArray = [...products];
    updatedArray[index] = update
    setproducts(updatedArray)
  };





  const idcheck=()=>
  {
  let arr1=products
  let arr2=Orgproducts
  console.log("products");
  console.log(products);
  console.log("Full product");
  console.log(Orgproducts);
  let common_arry = []
  let rep_list = []
  for (let rep_data of Orgproducts){
    rep_list.push(rep_data.productCode)
    
  }

  if (Orgproducts.length == 0)
  {
    setOrgproducts(arr1);
    console.log("First");
    // for (let data of arr1){
    //   common_id.push(data.productCode)
    // }
  }
  else{

        console.log("else");
      
        for (let main_product of products)
        {

          console.log(rep_list);
          let pro_code = (main_product.productCode).toString()

          console.log("main_product");
          console.log(pro_code);

          console.log(typeof pro_code);
          console.log(typeof rep_list[0]);


            if (rep_list.includes(pro_code))
                  { 
                          console.log("if");

                            for (let colle_pro of Orgproducts)
                            {
                              console.log("for");

                              if (colle_pro.productCode==main_product.productCode)
                              {       
                                console.log("if");
       
                                main_product.Quantity= (+main_product.Quantity + +colle_pro.Quantity).toString();
                                main_product.productCode = main_product.productCode.toString();
                                common_arry.push(main_product)
                              }
                            }
                  }
            else
            {
              console.log("skip");

                common_arry.push(main_product) 

            }

        }
    



    
      const results = Orgproducts.filter(({ productCode: id1 }) => !common_arry.some(({ productCode: id2 }) => id2 === id1));
      

      let final_array = common_arry.concat(results);


      console.log("Merged data");
      console.log(final_array);
  


      setOrgproducts(final_array)

      console.log("else complete");
    
      }

      console.log("Flow complete");
  }

  const onSubmit=()=>{
    idcheck()
    // setOrgproducts([...Orgproducts,...products])


    


    setproducts([])
    setnumber(0)
  }
  // console.log(products);
  // console.log(Orgproducts);
  




  return (
    <>
      <div className="number">Number of items going to add:<input value={number} onChange={(e) => {
        setnumber(e.target.value)
        createArray(parseInt(e.target.value))
      }} type="number"></input></div>
      {products.map((product, index) => {
        return <ProductsList key={index} index={index} onChange={fieldChange} product={product} />
      })}
      <div className='button'>
      <button className='btn btn-primary' type='submit' onClick={onSubmit}>Save Products</button>
      </div>
    </>
  )
};
