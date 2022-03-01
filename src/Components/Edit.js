import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
export default function Edit() {
  const segment = useLocation().pathname.split('/');
  const id=segment[segment.length-1]
  const [user,setUser]=useState();
  const [alert,setAlert]=useState(false);
  const [error,setError]=useState(false);
  const [alertData,setAlertData]=useState('');
  const err={border:"1px solid red"}
  
  // console.log(id)

    useEffect(()=>
    {
      axios.get('https://crud-repo-php.herokuapp.com/single-fetch.php?id='+id).then((res)=>
      { 
        if(res.data.message!=='error')
        {
        // console.log(res.data.message[0])
        setUser(res.data.message[0])
        }
        else{

        }
        
      })
    },[])
    
    function changeName(e)
    {
      const {name}=user;
      const value=e.target.value
      setUser({...user,name:value})
    }
    function submitForm(e)
    {  
      e.preventDefault();
      setError(false)
      const {name}=user;
      if(name)
      {
        axios.put('https://crud-repo-php.herokuapp.com/update.php?id='+id,{name},{headers:{'Content-Type':'application/json'}}).then((res)=>
      {
        if(res.data.message==='ok')
        {
          setAlert('alert-success')
          setAlertData('Update Success')
        }
        else{
          setAlert('alert-danger')
          setAlertData('Update Failed')
        }
        setTimeout(()=>
        {
          setAlert(false) 
          setAlertData('')
        },2000)
      })
      }
      else
      {
        setError(true);
        setAlert('alert-danger')
        setAlertData('Please Fill Details');
        setTimeout(()=>
        {
          setAlert(false) 
          setAlertData('')
        },2000)
      }
    }
  return (
    <>
      {
        user?<><div hidden={alert?false:true} className={alert?`alert ${alert}`:''} role="alert">
        {alertData}
      </div>
      <div className="row mt-5 mx-auto text-left">
        <div className="col-md-6 m-auto">
          <div className="card shadow-lg">
            <div className="form-group p-3">
              <form onSubmit={submitForm}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="rext"
                    className="form-control" style={error?err:{}}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" onChange={changeName} value={user.name} autoComplete="off"
                  />
                  <div id="emailHelp" className="form-text ">
                    Please Enter Your Name in Above field.
                  </div>
                </div>                
                
                <button type="submit" className="btn submit-btn">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div></>:<div className="row mt-5 mx-auto text-left">   
        <h6 className='text-center'>EDIT</h6>
            <div className="col-md-6 m-auto">            
              <div className="card shadow-lg">
                <div className="form-group p-3">
                  
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                      USER NOT EXIST
                      </label>
                      
                      
                    </div>                
                    
                    <Link to='/' className="btn submit-btn">
                      GOTO HOME
                    </Link>
                  
                </div>
              </div>
            </div>
          </div>
      }
    
    </>
  )
}
