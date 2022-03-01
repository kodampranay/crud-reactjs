import axios from 'axios';
import React, { useState } from 'react'

export default function Create() {
    const [name,setName]=useState('')
    const [error,setError]=useState(false);
    const [alert,setAlert]=useState(false);
    const [alertData,setAlertData]=useState('');
    const err={border:"1px solid red"}
    async function submitForm(e)
    {   setError(false)      
        e.preventDefault();
        if(name)
        {
          const data= await axios.post('https://crud-repo-php.herokuapp.com/create.php/',{name:name},{headers:{'Content-Type': 'application/json'}}).then((res)=>{
            if(res.data.message==='ok')
            {
              setAlert('alert-success')   
              setAlertData(`Data Added Successfully`);
            }
            else{
              setAlert('alert-danger')   
              setAlertData(`Data added Error or Data Already Exist`);
            }
          });

            
            setName('')
            setTimeout(()=>
              {
                setAlert(false) 
                setAlertData('')
              },2000)
            
        }
        else{
          setAlert('alert-danger')   
          setAlertData(`Please Enter Name `);
            setError(true)
            setTimeout(()=>
              {
                setAlert(false) 
                setAlertData('')
              },2000)
        }
    }
  return (
    <>
    <div hidden={alert?false:true} className={alert?`alert ${alert}`:''} role="alert">
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
                    aria-describedby="emailHelp" onChange={(e)=>{setName(e.target.value)}} value={name} autoComplete="off"
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
      </div>
    </>
  );
}
