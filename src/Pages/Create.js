import React from 'react'
import { useState } from 'react'
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'


function Create() {

  let navigate = useNavigate()

  // https://mockapi.io/projects/6697b1c602f3150fb66e9da9


const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [theme, setTheme] = useState('light'); // Initial theme state

 let handleDarkMode = (e) =>{
  const isChecked = e.target.checked; 
if (isChecked) {
  setTheme('dark'); // Change theme to dark
} else {
  setTheme('light'); // Change theme to light
}
}

let handleSubmit = async (e)=>{
    e.preventDefault();
if(!name || !email){
  setMessage('Please fill all required!')
}
else{
  try {
    await axios.post(`https://6697b1c602f3150fb66e9da8.mockapi.io/crud-apis`,{
      name: name,
      email: email
    });
    navigate('/read');      
  } catch (error) {
    console.error('Error post data:', error);
  }
}

    
  
  // let url = 'https://6697b1c602f3150fb66e9da8.mockapi.io/crud-apis';
  // let method = 'POST';
  // let headers = 'Access-Control-Allow-Origin'
  // let data = {
  //   name: name,
  //   email: email
  // }

  // axios({url, method, headers, data})
  // .then((respose) =>{
  // console.log('respose', respose);
  // navigate('/read')
  // }) 
  
}

  return (
    <> 
    <div className="p-4">
     <div className="shadow p-3 mb-5 bg-body-tertiary rounded w-50_ col-md-6 mx-auto mt-4" data-bs-theme={theme}> 
     <div className={`d-flex justify-content-between flex-wrap color ${theme}`}>
      <h3>Create </h3> 
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
                <input type="text" className="form-control" id="Name" placeholder='Enter Your Name...' required onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Ente Your Email...' required onChange={(e) => setEmail(e.target.value)}/>                
              </div>

              <div>
                <label htmlFor="exampleInputEmail1" className="form-label text-danger">{message}</label>                               
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>


              
            </form>
          </div>
        </div>
        </div>

        </div>

    
    
    
    
    </>
  )
}

export default Create