import {React, useEffect, useState } from 'react'
import { Link, useLocation  } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' 

function Update() {    
    let navigate = useNavigate()  

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [theme, setTheme] = useState('light'); // Initial theme state

 let handleDarkMode = (e) =>{
  const isChecked = e.target.checked; 
if (isChecked) {
  setTheme('dark'); // Change theme to dark
} else {
  setTheme('light'); // Change theme to light
}
}
    

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    
    // console.log('ID from URL:', id);
   
    const fetchData = async () => {
        try {
          const response = await axios.get(`https://6697b1c602f3150fb66e9da8.mockapi.io/crud-apis/${id}`);        
          setName(response.data.name);
          setEmail(response.data.email);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };


    let handleUpdate = async (e) =>{
        e.preventDefault();
        try {
            await axios.put(`https://6697b1c602f3150fb66e9da8.mockapi.io/crud-apis/${id}`, {
              name: name,
              email: email,
            });
            navigate('/read'); // Redirect to the list page after successful update
          } catch (error) {
            console.error('Error updating data:', error);
          }
    }
    
 useEffect(() => {  
      fetchData();
 }, [location])




  return (
    <>   
   
    
     <div className="shadow p-3 mb-5 bg-body-tertiary rounded w-50 mx-auto mt-4" data-bs-theme={theme}> 
     <div className={`d-flex justify-content-between color ${theme}`}>
      <h3>Update</h3> 
      <div className="form-check form-switch">        
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onChange={handleDarkMode}/>  
       </div>
      </div>
        
        <hr/>

        <div className="row">
          <div className="col-12 mt-1">
              <form className={`form-label color ${theme}`}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name</label>
                <input type="text" className="form-control" id="Name" placeholder='Enter Your Name...' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Ente Your Email...' value={email} onChange={(e) => setEmail(e.target.value)}/>                
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button> <Link to="/read" className="btn btn-primary">Go to List</Link>
            </form>
          </div>
        </div>
        </div>    
    
    </>
  )
}

export default Update

