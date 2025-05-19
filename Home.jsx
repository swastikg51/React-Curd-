import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Home() {

      const [data, setData] = useState([])
      const [search, setSearch] = useState('');
        const FetchData = async () => {
              try {
      
                  const result = await axios.get('http://localhost:3000/users')
               
                  setData(result.data)
      
              } catch (err) {
                  console.log(err);
              }
          }
      
      
          useEffect(() => {
      
              FetchData()
      
          }, [])

            const DeleteUser = async (id) => {

                try {

                    const result = data.filter((val) => val.id !== id)
                    setData(result);

                    await axios.delete(`http://localhost:3000/users/${id}`)

                } catch (err) {
                    console.log(err)
                    return;
                }

            }

            const searchdataHandler = (e) => {
                 
                    console.log(e.target.value);
                    setSearch(e.target.value);
            }   

            const searchdata = () => {

                console.log(search);
                 const result  = data.filter(item => item.email === search || item.fullName === search);
                setData(result);
            }

    return (
        <>
             <div className="container mt-5">
                <h2 className='text-center fw-bold mb-4'>User List</h2>

                <div className="col-md-4 mb-4" style={{float:'inline-end'}}>
                    <div className="input-group">
                        <input type="search" className="form-control rounded"  name="search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(e)=>searchdataHandler(e)}/>
                        <button type="button" className="btn btn-outline-primary" onClick={()=>searchdata()} data-mdb-ripple-init>search</button>
                    </div>
                </div>
             
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                        <th> Sr. No </th>
                        <th >ID</th>
                        <th >FullName</th>
                        <th >Email</th>
                        <th >Phone</th>
                        <th >Role</th>
                        <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data.map((user,index) => (
                            <tr>
                            <td>{index+1}</td>
                            <td>{user.id}</td>
                            <td>{user.fullName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.role}</td>
                            <td>
                                <NavLink to={`/edituser/${user.id}`}><i className='fa fa-edit text-success fw-bold'></i></NavLink>
                                <i className='ms-3 fa fa-trash text-danger fw-bold' onClick={() => { if (window.confirm('Are You Sure ?')) { DeleteUser(user.id) } }}></i>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                    </table>
            </div>
        </>
    )
}

export default Home
