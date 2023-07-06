import React from 'react'
import Useritem from './Useritem'

function Users (props) {

        return (
            <div style={userstyle}>
                {props.users.map(user => (
                   <Useritem key={user.id} user={user} />
                ))}
            </div>
        )
    
}
const userstyle ={
   
    display :'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}
export default Users
