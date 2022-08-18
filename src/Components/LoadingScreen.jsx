import React from 'react'
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    //create a state varibale to hold data returned from the server
    const [data, setData] = useState("");
    //State varibale to maintain a loading state
    const [loading, setLoading] = useState(false);

    async function loadData() {
        //Set loading to true until API is able to fetch response
        setLoading(true);

        //function that performs the API call to load
        const data = await apiCall();
        setData(data);

        //When we have the data we set loading to false
        setLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

  return (
   <div>
    {loading ? "Loading..." : data}
   </div>
  )
}

async function apiCall() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Update News"), 5000);
    })
}