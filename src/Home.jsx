import React from 'react'
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
const Home = () => {
    const {data:catData,isLoading,isError,refetch} = useQuery(
        ["cat"],
        () => {
           return axios.get("https://catfact.ninja/fact")
            .then((res)=> res?.data)
      }
    )

    if (isError) {
        return <h1>Sorry, there was an error</h1>
    }

    if (isLoading) {
        return <h1>Loading....</h1>
    }
  return (
    <div>
          <h1>this is home page data = { catData?.fact}</h1>
          <button onClick={refetch}>Fetch Data</button>
    </div>
  )
}

export default Home
