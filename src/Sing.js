import React, { useState } from "react";

function Sing() {
    const [sing, setUserSing] = useState({
        username:"",
        Email:"",
        password:""
    })

    const [ record,setRecord] =useState([])
    
const handlerchange=(e)=>{
 const name= e.target.name;
 const value= e.target.value;
 console.log(name,value);
 setUserSing({...sing , [name]:value});
}
 
    const submithandler = (e) => {
        e.preventDefault();
       const newRecord ={ ...sing, id:new Date().getTime().toString()}
       console.log(record,"hii");
       setRecord([...record, newRecord])
       console.log(record,"hiiiii");
       setUserSing({username:"",Email:"",password:""})
    }
    return (
        <>
        <form onClick={submithandler}>
            <label> name:</label><br></br>
            <input type="text"  autoCompelet="off" value={sing.username} name="username" onChange={handlerchange} /> <br></br>
            <label> Email</label><br></br>
            <input type="text"  value={sing.Email} name="Email" onChange={handlerchange} /> <br></br>
            <label>password</label><br></br>
            <input type="text" value={sing.password}  name="password" onChange={handlerchange} /> <br></br>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female<br></br>

            <button> submit</button>


</form>
<div>
    {
        record.map((curelm)=>{
            
            return(
                <div key={curelm.id}>
                    <p>{curelm.username}</p>
                    <p> { curelm.Email}</p>
                    <p>{curelm.password}</p>
                    </div>
                
            )
        })
    }
</div>
        </>
    )
}
export default Sing