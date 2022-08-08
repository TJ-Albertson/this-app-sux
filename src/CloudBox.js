import { React, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import NavBar from "./NavBar"
import Box from "./Box"
import Upload from "./Upload"
import ShareMenuModal from "./ShareMenuModal"

import './CSS/App.css'
import './CSS/CloudBox.css'

export default function CloudBox(props) {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [emailGroups, setEmailGroups] = useState({ boxArray : [], emailArray: [], shareArray : [] })
  const [modalShow, setModalShow] = useState(false);

  const showModal = () => { setModalShow(true) }

  async function removeFromBox(removeEmailBox) {
    const url = `http://localhost:5000/removeFromBox/${email}:removeEmailBox`

    axios.post(url, { 
      data: removeEmailBox
    })
  } 

  //data fetch + auto logout
  useEffect(() => {

    const url = "http://localhost:5000/isLoggedIn"
  /*
    axios.post(url, { 
      headers: {'x-acess-token' : localStorage.getItem("token")}
    })
    .then(
      (res) => {
        if(res.data.isLoggedIn) {
          setEmail(res.data.email)
          setEmailGroups(res.data.emailGroups[0])
        } else {
          navigate("../", { replace: true });
        }
      }
    )
*/

    fetch("http://localhost:5000/isLoggedIn", {
      headers: { "x-access-token": localStorage.getItem("token")}
    })
    .then(res => res.json())
    .then(
      (data) => {
        if(data.isLoggedIn) {
          setEmail(data.email)
          setEmailGroups(data.emailGroups[0])
        } else {
          navigate("../", { replace: true });
        }
    })

  }, [])  

  return (
    <div>
      
      <NavBar email={email} showModal={showModal}/>

      <ShareMenuModal
        show={modalShow}
        emailgroups={emailGroups}
        onHide={() => setModalShow(false)}
      />

      <div className='Grid'>  
        {emailGroups.boxArray.map((box) => 
          <Box key={box.toString()} id={box} email={box} />
        )}

        <Upload email={email}/>
      </div>
    </div>
  )
}