import { response } from 'express';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
const [data, setData]=useState([]);

useEffect(()=> {
  showData()
},[]);

const showData = () => {
    axios.get('https://course-api.com/react-store-products')
    .then((response)=> {
      console.log(response);
      setData(response.data);
    });

}

  return (
 
  <div>hiii</div>

    );
}

export default App;
