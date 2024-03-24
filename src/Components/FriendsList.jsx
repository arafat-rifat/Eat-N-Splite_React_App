import React from 'react'
import Friend from './Friend';

const FriendsList = ({friends , handleSelection , selectedFriend}) => {
  return (
    <ul>
        {friends.map((friend) => (
           <Friend friend={friend} handleSelection={handleSelection} selectedFriend={selectedFriend} key={friend.id}/>
        ))}
    </ul>
  )
}

export default FriendsList