import React, { useState ,useEffect} from 'react';

import './myStyle.css';

function FetchApi() {
    let random=Math.round(Math.random()*29);
const [datas, setData]=useState();
const [loading, isLoading]=useState(true);
    const getApi=async()=>{
      const res= await fetch('https://dummyjson.com/quotes')
      const data=await res.json();
        console.log(data);
        setData(data);
    }
useEffect(()=>{
    getApi();
},[])


  return (
    <>


        <div className='container'>
<h1>{datas?.quotes[random].quote}</h1>
<button onClick={getApi} className='btn btn-lg btn-primary mx-auto'>Generate Quote</button>
</div>

  
  </>
  )
}

export default FetchApi;