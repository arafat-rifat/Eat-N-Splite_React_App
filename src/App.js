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
 
  
  const [friends,setFriends] = useState(initialFriends);

  const [selectedFriend , setSelectedFriend] = useState(null);

  const [isOpen,setIsOpen] = useState(false);

  const [name , setName] = useState('');
  const [image , setImage] = useState("https://i.pravatar.cc/48?u=933372");

 
 function handleSelection (friend) {
  // setSelectedFriend(friend);
  setSelectedFriend((selectedFriend) => (selectedFriend?.id === friend.id ? null : friend));

  setIsOpen(false);

 }


 function handleAddForm () {
   
  setIsOpen((isOpen)=> !isOpen)

 }

  return(
     
    <div className="app"> 
    <div className="sidebar">
    <FriendsList friends={friends} handleSelection={handleSelection} selectedFriend={selectedFriend} />
    {
      isOpen && <FormAddFriend  name={name} setName={setName} image={image} setImage={setImage} friends={friends} setFriends={setFriends} setIsOpen={setIsOpen}/>
    }
    <Button onClick={handleAddForm}>
     {isOpen ? "Close" :  "Add Friend"}
    </Button>
    </div>

    {
      selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>
    }
    </div>

  )
}