import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { SwitchContext } from '../SwitchContext';
import { useContext } from 'react';
import './Product.css'
function Product() {

  let {state} = useLocation()
  let product = state

  let navigate = useNavigate()
  let [switchContextValue,setSwitchContextValue]=useContext(SwitchContext)


    if (!product) {
        return <div>No product information available.</div>;
    }

    function handleBack(){
        setSwitchContextValue(false)
        navigate('/home')
    }


  return (
    <div className='product p-5'>
        <button className='btn fs-3' onClick={handleBack}>back</button>
      <div className='row prod-div m-5 p-5 mx-auto rounded bg-white' style={{width:'80%', minHeight:'80vh',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <div className='col-6 Col'>
          <img src={product.image} alt = 'image' className='image d-block w-50 h-75 mx-auto mt-5'/>
        </div>
        <div className='info rounded shadow col-6 Col p-4'>

          <h3>Title : </h3>
          <p className='fs-5'>{product.title}</p>

          <h3>Category : </h3>
          <p className='fs-5'>{product.category}</p>

          <h3>Description : </h3>
          <p className='fs-5'>{product.description}</p>

          <h3>Price : ${product.price}</h3>
          
          <h3>Rating</h3>
          <div className='row'>
            <p className='fs-4 col-6'>Count : {product.rating.count}</p>
            <p className='fs-4 col-6'>Rate : {product.rating.rate}</p>
          </div>

          <button className='btn btn-primary mt-2 fs-5'>Add to Cart</button>
          
        </div>
      </div>
    </div>
  )
}

export default Product