import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useNavigate } from 'react-router-dom';


export const Signup = () => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();



  console.log(store.email)
  console.log(store.password)


  return (

    <>
      <div className='wrapper container mt-5'>


        <form onSubmit={(e) => {
          e.preventDefault()
          actions.fetchSignup()
          e.target.reset()
          navigate("/login")
        }}>
          <div className='row mt-4'>
            <div className='form-header col'>
              <h2>Sign-Up</h2>
            </div>
          </div>


          <div className="mb-3 row mt-4 justify-content-center">
            <div >
              <label className="col-sm-2 form-label">Email:</label>
            </div>
            <div className="col-sm-10">
              <input type="text" name="email" onChange={actions.handleChange} className="form-control input-style" placeholder='youremail@example.com' required></input>
            </div>
          </div>

          <div className="mb-3 row mt-4 justify-content-center">
            <div >
              <label className="col-sm-2 col-form-label">Password:</label>
            </div>
            <div className="col-sm-10">
              <input type="password" name="password" onChange={actions.handleChange} className="form-control input-style" placeholder='***********' required></input>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className='col-sm-10 mt-4'>
              <button type='submit' className='submit-button btn btn-primary'>Signup</button>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className='col-sm-10 mt-3'>
              <Link to={'/login'}>
                <button type='button' className='login-button btn btn-primary'>or Login</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>

  )
}