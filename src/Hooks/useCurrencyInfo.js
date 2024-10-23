import { useState,useEffect } from "react";

/*
    Creating Custom hooks
    1. using fetch to fetch the data from api
    2. we want to fetch the data whenever the user change the currency so we used useEffect
    3. we put currency as dependency array because it invokes whenever we change the currency
    4. the json data we get is in form of string so we convert it using .json()
    5. we create a use state to store data and setdata the data will be of object type and for
        safety we parse empty {} in the useState
    6. we return data and exported the whole function so that we can get the access of data as well as
        setData

*/ 
function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))

    },[currency])

    return data;
}

export default useCurrencyInfo;