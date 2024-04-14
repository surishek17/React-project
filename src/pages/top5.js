import React from 'react'

const top5 = () => {
  return (
    <div className="col-md-10 col-lg-10  offset-md-1 mt-5">
    
      <h1 className='text-center mb-4'>TOP 5 SALES</h1>
      {/* table of top 5 sales */}
    <div className="">
      <table className="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Sales id:</th>
      <th scope="col">Product Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Sale Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>S1212</td>
      <td>Laptop</td>
      <td>2</td>
      <td>90000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>S1423</td>
      <td>Mobile</td>
      <td>5</td>
      <td>85000</td>
    </tr>
    
  </tbody>
</table>
    </div>
    </div>
  )
}

export default top5;