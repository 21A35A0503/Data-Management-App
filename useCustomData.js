import { useState, useEffect } from "react";
function useCustomData(initialData, type){
    const [data,setData]=useState([]);
    useEffect(()=>{
        setData(initialData);
    },[initialData]);
    const addData=()=>{
        if(type==="rows"){
            const newRows=Array.from(
                {length:10},
                (_,index)=>({
                    id:data.length+index+1,
                    name:`Row ${data.length+index+1}`
                })
            );
            setData(prev=>[...prev,...newRows]);
        }
        if(type==="cards"){
            const newCards=Array.from(
                {length:2},
                (_,index)=>({
                    id:data.length+index+1,
                    title:`Card ${data.length+index+1}`,
                    description:"New Card Added"
                })
            );
            setData(prev=>[...prev,...newCards]);
        }
    };
    return{
        data,addData
    };
}
export default useCustomData;