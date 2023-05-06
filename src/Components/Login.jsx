import React, { useEffect, useState } from 'react'
import apiCall from '../Auth/auth';
import { apiKey } from '../Auth/auth';

function Login() {
    const [apiData,setApiData]=useState({})
    useEffect(()=>{
        let fetchData=apiCall.get('/current.json',{
            params:{
                key:apiKey,
                q:'Paris',
                lang:'ta',
            }
        }).then((res)=>{
            console.log(res.data);
            return res.data;
        }).catch((err)=>{
            console.error(err);
        })
        setApiData(fetchData);
    },[apiCall])

    return (
    <div>
        Login Page

    </div>
  )
}

export default Login