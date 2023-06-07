import logo from './logo.svg';
import React, {useState, useEffect} from 'react';

function App() {
  const [record,setRecord]=useState([]);
useEffect(()=>{
  fetch('https://dummyjson.com/quotes')
  .then((res)=>res.json()).then((data)=>{
setRecord(data)
.catch(err=>console.log(err))

  })

},[]);

  return (
<div>
<ul>


</ul>
</div>
  );
}

export default App;
