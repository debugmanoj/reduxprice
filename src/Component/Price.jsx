import React, { useContext, useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {handleTotal } from '../redux/CartInfo';

function Price() {
  let dispatch = useDispatch()
  let Cart = useSelector(state=>state.Cart)
  useEffect(() => {
    dispatch(handleTotal());
  }, [dispatch]);
  useEffect(()=>{
   let a= dispatch(handleTotal())
   console.log(a);
    // let total=0;
    // Cart.map((item)=>(item.products.map((val)=>{
    //   total+=val.total
    // })))
    // setTotal(total)
  },[])
  return  <div className="col-lg-4 bg-grey">
  <div className="p-5">
    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
    <hr className="my-4" />

    <div className="d-flex justify-content-between mb-4">
      <h5 className="text-uppercase">Price</h5>
      <h5>$ 2.00</h5>
    </div>
    <hr className="my-4" />
    <div className="d-flex justify-content-between mb-5">

    
<h5 className="text-uppercase">Discount</h5>
<h5>$ 0.00</h5>
</div>
  
    <div className="d-flex justify-content-between mb-5">

    
      <h5 className="text-uppercase">Total price</h5>
      <h5>$ 2.00</h5>
    </div>

 

  </div>
</div>
}

export default Price