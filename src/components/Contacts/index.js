import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import "./style.css"

function Contacts() {

    const [contacts,setContacts] = useState([
      {
        fullname: "Arda",
        phone_number: "13432141341"
      },
      {
        fullname: "Kerem",
        phone_number: "59992141341"
      },
      {
        fullname: "Mehmet",
        phone_number: "65635643341"
      }
    ])

    useEffect( () => {
        console.log(contacts)
    },[contacts])

  return (
    <div id='my-container'>
        <h2>Kişiler</h2>
        <List listContacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
