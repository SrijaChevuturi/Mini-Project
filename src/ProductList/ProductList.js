import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SwitchContext } from '../SwitchContext'

import './ProductList.css'
function ProductList() {

  let [switchContextValue, setSwitchContextValue] = useContext(SwitchContext)

    let [search, setSearch] = useState('') 
    let [products, setProducts] = useState([])
    let navigate = useNavigate();

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{setProducts(data)})
        .catch(err=>console.log('error in fetching the data',err))
    },[])

    function handleDetails(itemId) {
        let product = products.find((prod) => prod.id === itemId);
        console.log(product)
        setSwitchContextValue(true)
        navigate('/product', {state:product});
      }
      
      function handleSearch(searchEvent){
        setSearch(searchEvent.target.value)
      }

  return (
    <div className='bcg p-3'>
    <div className='app-div'>
        <div className='pt-3'>
            <div className='title w-75 mx-auto rounded'>
            <p className='text-light text-center p-3 m-5 display-2 fw-bold'>URBAN ELEGANCE</p>
            </div>
        <input type='text' className='form-control w-50 mx-auto Shadow fs-3 m-5 border-3 border-secondary' placeholder='Search here' onChange={handleSearch}/>
      {search===''?
        <div className='row m-2'>
        {//iterating through the products array
            products.map(item => (
            <div key={item.id} className="col-md-4 mb-4 d-grid justify-content-space-around p-5" style={{minHeight:'50vh'}} >
                <div className="card Card bg-white p-3 shadow">
                   <img src={item.image} className="card-img w-50 h-50 mx-auto mb-5 p-2" alt={item.title} />
                    <div className="card-body text-center">
                        <p className="card-title text-center fs-4 fw-bold">{item.title}</p>
                        <p className='text-center fs-5 fw-semibold'>{item.category}</p>
                    </div>
                    <div className='btn btn-light details mx-auto fw-semibold fs-4 mb-3' onClick={()=>handleDetails(item.id)}>Details</div>
                </div>
            </div>
            ))
        }
        </div>:
        <div className='row'>
          {
            products.map(item => (
              item.title.toLowerCase().includes(search.toLowerCase())===true &&
              <div key={item.id} className="col-md-4 mb-4 d-grid justify-content-space-around" style={{minHeight:'50vh'}}>
                <div className="card Card bg-white p-3 shadow">
                 <img src={item.image} className="card-img w-50 mx-auto h-50 mb-5 p-2" alt={item.title} />
                  <div className="card-body text-center">
                      <h5 className="card-title fs-4 fw-bold">{item.title}</h5>
                  </div>
                  <div className='btn btn-light details mx-auto fw-semibold fs-4 mb-3' onClick={()=>handleDetails(item.id)}>Details</div>
                </div>
              </div>
            ))
          }
        </div>
        }
        </div>
    </div>
    </div>
  )
}

export default ProductList