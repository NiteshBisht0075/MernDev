import React, { useEffect,useState} from 'react'
import axios from 'axios';

const About =  () =>{
  const [users , setUserdata] = useState([]);
  useEffect(()=>{
    axios.get('/user-list')
    .then(res =>{
      console.log(res)
      setUserdata(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  const deleteUser =async(id)=>{
    window.alert(id);
    await axios.delete(`/user-delete/${id}`);
    // About();
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
                <button id="deletebtn" onClick={()=>{
                  deleteUser(user._id)
                }}> Delete
                </button>
                {/* <button id="viewbtn" onClick={"window.location.href='/'"}
                > View
                </button> */}
                <a href={`/view/${user._id}`} className="w3-button w3-black">ViewUser</a>
                
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