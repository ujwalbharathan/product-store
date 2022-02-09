import React, { useState } from 'react';


export const Mycontext =React.createContext()

export const  Myprovider=(props)=>{

    const [Orgproducts,setOrgproducts]=useState([])
      
    const name="ujwal"

    return(
        <Mycontext.Provider value={{Orgproducts,setOrgproducts}}>
         {props.children}
        </Mycontext.Provider>
    )
}
