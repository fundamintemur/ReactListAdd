import {useState,useEffect} from 'react'
import './styles.css'
import Form from './Form';
import List from './List';
function Contacts() {
    const[contacts,setContacts]=useState([
      //kayıtların eklenecek state burda olacak
      {fullname:"Funda",
       phone_number:"1234"
      },
      {
       fullname:"Deniz",
       phone_number:"Derya"
      }
    ]);

    useEffect=(()=>{
    console.log(contacts);
  },[contacts])
  //elimizdeki array son halini görmek için kullanıyoruz.
  return (
    <div id="container">
      <h1>Contacts</h1>
     <List contacts={contacts}/>
     <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
