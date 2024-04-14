import React from 'react'

const register = () => {
  return (
    <div className='col-md-8 col-lg-8  offset-md-2 mt-5'>
      <h1 className='text-center text-uppercase mt-5'>Registration form </h1>
      <div className="bg-light p-5 border shadow">
       {/* Register form */}
      <form>
      <div className="mb-3">
    <label for="FirstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstName" />
  </div>
  <div className="mb-3">
  <label for="LastName" className="form-label">Last Name</label>
  <input type="text" className="form-control" id="lastName" />
</div>
  <div className="mb-3">
    <label for="Email" className="form-label">Email</label>
    <input type="email" className="form-control" id="emailId" />
  </div>
  <div className="mb-3">
  <label for="Password" className="form-label">Password</label>
  <input type="text" className="form-control" id="password" />
</div>
<button type="submit" className="btn btn-primary btn btn-primary w-100 my-3">Submit</button>
  </form>
      </div>
    </div>
  )
}

export default register;