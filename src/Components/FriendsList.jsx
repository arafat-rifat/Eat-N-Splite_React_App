import React from 'react'
import Friend from './Friend';

const FriendsList = ({friends , handleSelection}) => {
  return (
    <ul>
        {friends.map((friend) => (
           <Friend friend={friend} handleSelection={handleSelection} key={friend.id}/>
        ))}
    </ul>
  )
}

export default FriendsList