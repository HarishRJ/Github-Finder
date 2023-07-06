import React,{ useState } from 'react'

function Search (props) {
   
  const [text, settext] = useState('')


const onSubmit=e=>{
    e.preventDefault();
    props.searchuser(text);
}
const onChange=e=>{
    settext(e.target.value);
}

    
        return (
            <div>
                <form className='form' onSubmit={onSubmit}>
                    <input type='text' name='text' placeholder='search users...' value={text} onChange={onChange}/>
                    <input type='submit' value='Search' className='btn btn-dark btn-block'/>
                </form>
            </div>
        )
    
}

export default Search
