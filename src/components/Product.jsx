import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <h1>Product</h1>
        <Outlet/>
        <Link to = "list">List</Link> 
        <Link to = "details">details</Link>

    </div>
  )
}

export default Product