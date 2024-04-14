import React from 'react'

const addSales = () => {
  return (
    <div className='col-md-8 col-lg-8  offset-md-2 mt-5'>
      <div className="bg-light p-5 border shadow">
        <h1 className='text-center'>ADD SALE ENTRY</h1>
        {/* <! Login form> */}
      <form>
        <div className="mb-4">
          <label for="product Name" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="productName" />
        </div>
        <div className="mb-4">
          <label for="Quantity" className="form-label">Quantity</label>
          <input type="number" className="form-control" id="quantity" />
        </div>
        <div className="mb-4">
          <label for="Amount" className="form-label" >Amount</label>
          <input type="number" className="form-control" id="amount" step="0.01" />
        </div>
        <button type="submit" className="btn btn-primary btn btn-primary w-100 my-3">Submit</button>
      </form>
      {/* <Login form> */}
      </div>
    </div>
  );
}
export default addSales;
