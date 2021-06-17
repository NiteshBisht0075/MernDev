import React, { useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

 

const ViewUser =  () =>{
  const {id} = useParams();
  const [user , setUserdata] = useState({
    id:"",
    name:""
  });

  useEffect(()=>{
    axios.get(`/user-list/${id}`)
    .then(res =>{
      console.log(res)
      setUserdata(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  return (
    <>
        <h1>ViewUser</h1>
        <div className="container">
        <h2>User List</h2>
        <p></p>            
        <ul>
          <li>{user.id}</li>
          <li>{user.name}</li>
        </ul>       

        </div>     
    </>
  )
}
export default ViewUser