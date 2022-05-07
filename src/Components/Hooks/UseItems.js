import { useEffect, useState } from "react";

const UseItems=()=>{
    const [items, setItems]=useState([]);
    useEffect(()=>{
        fetch('fake_data.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return [items,setItems];
}
export default UseItems;