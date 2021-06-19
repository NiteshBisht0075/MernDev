import React from 'react'
import { useHistory } from 'react-router'
const Logout =()=>{
    window.alert("User Logout Successful")
    const history=useHistory()
    history.push("/login")
    return(
        <>


        </>
    )
}
export default Logout