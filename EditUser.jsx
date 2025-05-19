import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {

      const [data, setData] = useState({ fullName: '', email: '', role: '', phone: '' });

          var paramsdata = useParams();
            const nav=useNavigate();
          
            const FetchData = async () => {
        
                const result = await axios.get(`http://localhost:3000/users/${paramsdata.id}`)
               
                setData(result.data);
        
            }
        
            useEffect(() => {
                FetchData()
            }, [])
        
           const dataHandler=(e)=>{
                setData({...data,[e.target.name]:e.target.value})
           }

            const UpdateUser = async (e) => {
                e.preventDefault()
              
                await axios.put(`http://localhost:3000/users/${paramsdata.id}`, data)
        
                nav('/')
        
            }

    return (
       <>
         
                   <form action=""  onSubmit={(e) => UpdateUser(e)}>
       
                       <div className="container border p-4 shadow-lg mt-4">
                           <div className="row fw-bold">
                               <div className="col-md-12">
                                   <label htmlFor="">Enter Your Full Name</label>
                                   <input type="text" name="fullName" value={data.fullName} id="" onChange={(e)=>dataHandler(e)} className='form-control' placeholder='enter username' />
                               </div>
       
                               <div className="col-md-12 my-3">
                                   <label htmlFor="">Enter Your Email</label>
                                   <input type="email" name="email" value={data.email}  onChange={(e)=>dataHandler(e)} id="" className='form-control' placeholder='enter email id' />
                               </div>
       
       
                               <div className="col-md-12 my-3">
                                   <label htmlFor="">Enter phone</label>
                                   <input type="tel" name="phone" value={data.phone}  onChange={(e)=>dataHandler(e)} id="" className='form-control'  placeholder='enter mobile number' />
                               </div>
       
            
                               <div className="col-md-12 my-3">
                                   <label htmlFor="">Choose Your role</label>
                                   <select name="role" id="" className='form-control'  onChange={(e)=>dataHandler(e)} value={data.role}>
                                       <option value="none">select</option>
                                       <option value="Admin">Admin</option>
                                       <option value="Manager">Manager</option>
                                       <option value="Developer">Developer</option>
                                   </select>
                               </div>
       
                               <div className="col-md-12 mt-3 text-center" >
                                   <button className='btn btn-sm btn-dark px-4 fw-bold shadow-lg'>Update User</button>
                               </div>
       
                           </div>
                       </div>
       
       
       
       
                   </form>

       </>
    )
}

export default EditUser
