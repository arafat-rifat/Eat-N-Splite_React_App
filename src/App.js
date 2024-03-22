import Button from "./Components/Button";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";
import FriendsList from "./Components/FriendsList";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export default function App() {

  const [isOpen,setIsOpen] = useState(false);

 function handleAddForm () {
   
  setIsOpen((isOpen)=> !isOpen)

 }

  return(
     
    <div className="app"> 
    <div className="sidebar">
    <FriendsList initialFriends={initialFriends}/>
    {
      isOpen && <FormAddFriend/>
    }
    <Button onHandleAddFrom={handleAddForm}>
     {isOpen ? "Close" :  "Add Friend"}
    </Button>
    </div>

    <FormSplitBill/>
    </div>

  )
}