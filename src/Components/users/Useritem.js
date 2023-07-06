import React from 'react'

function Useritem(props) {
   
     const {avatar_url,login,html_url}=props.user;
        return (
          
            <div className='card text-center'> 
            <img src={avatar_url} alt='' className="round-img" style={{width:'60px'}} />
            <h3>{login}</h3>
            <div>
                <a href={html_url} className='btn btn-dark btn-sm my-1'>More </a>
            </div>
            </div >
             
        )
    
}


export default Useritem
