import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

const App = () => {
  const [state, setState] = useState('State information')
  
  const getState = async () => {
    const res = await axios.get('/api/testapi')

    setState(res.data)
  }
  
  useEffect(() => {
    getState();
  },[])

  console.log(state)

return <div className="App">Orders application {state}</div>;
}

export default App;
