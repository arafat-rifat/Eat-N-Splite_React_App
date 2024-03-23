import React from 'react'
import Button from './Button'

const FormAddFriend = ({ name , setName , image , setImage}) => {

  function handleSubmit(e){
     e.preventDefault();
    
     const id = crypto.randomUUID();

     const newFriend = {
       name,
       image: `${image}?=${id}`,
       balance: 0,
       id,
    }
   
    console.log(newFriend);

  }

  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
        <label>🧑‍🤝‍🧑Friend name</label>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>

        <label>🖼️ Image URL</label>
        <input type='text' value={image} onChange={(e) => setImage(e.target.value)}/>

        <Button>
          Add
        </Button>
    </form>
  )
}

export default FormAddFriend