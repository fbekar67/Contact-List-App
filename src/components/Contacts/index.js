import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'
import  './style.css'


function Contacts() {
    const[contacts, setContacts]=useState([
        {
            fullname:"Fatih Bekar",
            phone_number:"123456789"
        },{
            fullname:"Michael Scofield",
            phone_number:"753951456"
        },{
            fullname:"John Goodman",
            phone_number:"456987123"
        },{
            fullname:"Rose Pinkfish",
            phone_number:"951753987"
        },{
            fullname:"Steve Jobs",
            phone_number:"147852369"
        }
    ]);
    
    useEffect(()=> {
        console.log(contacts);
    },[contacts])
  
    return (
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts}></List>
        <Form setContacts={setContacts} contacts={contacts}></Form>
    </div>
    
  )
}

export default Contacts;