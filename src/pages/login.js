import React from 'react'

const login = () => {
  return (
    <div className='col-md-8 col-lg-8  offset-md-2 mt-5'>
      <h1 className='text-center text-uppercase'>Login form</h1>
      <div className="bg-light p-4 border shadow">

      <form>
  <div className="mb-3">
    <label for="Email" className="form-label">Email</label>
    <input type="email" className="form-control" id="emailId" />
  </div>
  <div className="mb-3">
  <label for="Password" className="form-label">Password</label>
  <input type="password" className="form-control" id="password" />
</div>
<button type="submit" className="btn btn-primary btn btn-primary w-100 my-3">Submit</button>
  </form>
      </div>
    </div>
  )
}

export default login;