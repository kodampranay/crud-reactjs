import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Table = () => {
    const [users,setUsers]=useState();
    const [isupdate,setIsUpdate]=useState(false);
    const [alert,setAlert]=useState(false);
    const [alertData,setAlertData]=useState('');
    useEffect(()=>
    {
        axios.get('https://crud-repo-php.herokuapp.com/').then((res)=>
        { 
          
          if(res.data.message!=='error')
            {
              // console.log(res.data.message)
              setUsers(res.data.message);      
              setAlert('alert-success')   
              setAlertData(`Data fetched Successfully`);

              setTimeout(()=>
              {
                setAlert(false) 
                setAlertData('')
              },2000)
            }
            
            else{
              setAlert('alert-danger')   
              setAlertData(`No Data is there`);

              setTimeout(()=>
              {
                setAlert(false) 
                setAlertData('')
              },2000)
              setUsers();   
            }
            setIsUpdate(false);
            
            
        }).catch((err)=>
        {
          // console.log('no data found')
        })
        
    },[isupdate])

    function deleteRow(value)
    {
        axios.delete('https://crud-repo-php.herokuapp.com/delete.php?'+"id="+value,{headers:{'Access-Control-Allow-Origin': '*'}}).then((res)=>{
          if(res.data.message==='ok')
          {
            setAlert('alert-success')   
            setAlertData(`Data Deleted Successfully`);

            setTimeout(()=>
            {
              setAlert(false) 
              setAlertData('')
            },2000)
              setIsUpdate(true);
          }
          else
          {
            setAlert('alert-danger')   
              setAlertData(`Data delete error`);

              setTimeout(()=>
              {
                setAlert(false) 
                setAlertData('')
              },2000)
          }
        })

      // axios.delete('')
    }

    

  return (
    <>
      <div hidden={alert?false:true} className={alert?`alert ${alert}`:''} role="alert">
        {alertData}
      </div>

      <div className="row mt-5 mx-auto text-left">
        <div className="col-md-6 m-auto">
        <Link className="btn-center mb-2 btn btn-custom btn-sm text-center  text-white" to="/create">Create <i className="fas fa-plus-circle"></i></Link>
        
          <div className="card shadow-lg">              
          <table className="table table-borderless text-center ">
            <thead className="bg-custom-2 text-white ">
              <tr>
                <th scope="col">#</th>
                <th scope="col">NAME</th>
                <th scope="col">ID </th>
                <th colSpan="2"scope="col">ACTION</th>
                
              </tr>
            </thead>
            <tbody>              
                {users&&users.map((value)=>
                    {
                        return <tr key={value.id}>
                        <td scope="row">{value.id}</td>
                        <td>{value.name}</td>
                        <td className="text-truncate">{value.idnumber}</td>
                        <td className="text-center"> 
                        {/* <i className="fas fa-eye mx-1 text-blue"></i>    */}
                        <Link to={'edit/'+value.id}><i className="fa-solid fa-pen-to-square  text-green "></i>     </Link> 
                        <i className="fas fa-trash mx-1 text-danger" onClick={()=>deleteRow(value.id)}></i> </td>                        
                      </tr> 
                    })
                }
             
             
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
