import React, { useEffect,useState} from 'react'
// import {useHistory} from 'react-router-dom'
import axios from 'axios';

const About =  () =>{
  const [users , setUserdata] = useState([]);
  useEffect(()=>{
    axios.get('/userList')
    .then(res =>{
      console.log(res)
      setUserdata(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  const deleteUser =async(id)=>{
    // console.log(_id)
    window.alert(id);
    await axios.delete('/userDelete/',id);
    window.alert(id);
  }

  return (
    <>
        <h1>About</h1>
        <div className="container">
        <h2>User List</h2>
        <p></p>            
        <table className="table" method="GET">
        <thead>
          <tr>
            <th>_id</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody >
         {
            users.map((user,key)=>(
            <tr>
              <td>{user._id}</td>
              <td key={key}>{key+1}</td>
              <td>{user.name}</td>  
              <td>{user.email}</td>
              <td>
                {/* <link className="btn btn-primary mr-14" ></link> */}
                {/* <link className="btn btn-outline-primary mr-14"></link> */}
                {/* <link className="btn btn-danger mr-14" }></link> */}
                <i class="material-icons" onClick={()=>deleteUser(user._id)}>delete</i>
                {/* <i className="fa fa-trash"></i> */}
                {/* <i className="bi bi-trash" onClick={()=>deleteUser(user._id)}></i> */}
              </td>
            </tr>
            ))
          }
        </tbody>
        </table>
        </div>     
    </>
  )
}
export default About