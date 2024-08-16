import { useEffect, useState } from "react";
import axios from "../api/axios";

const useFetch = (URL) => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function loadData(){
             try{
                 const response = await axios(URL);
                 setData(response.data.recipes || response.data)
             }
             catch(error){
                 console.log(error)
             }
        }
 
        loadData()
     }, [URL])

    return data
}

export {useFetch}