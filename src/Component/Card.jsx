import React, { useContext, useState } from 'react';
import Item from './Item';
import Price from './Price';




function Card() {
  // let {phone,setPhone,setTotal,total}=useContext(DataContext) 
  return <>
        <section className="h-100 h-custom" style={{"backgroundColor": "#d2c9ff"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" style={{"borderRadius":" 15px"}}>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                         
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
  <div className="col-md-2 col-lg-2 col-xl-2">
    <img
      src="https://i.dummyjson.com/data/products/1/1.jpg"
      className="img-fluid rounded-3" alt="Cotton T-shirt" />
  </div>
  <div className="col-md-3 col-lg-3 col-xl-3">
    <h6 className="text-muted">TITLE</h6>
    <h6 className="text-black mb-0">description</h6>
  </div>
  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
    <button className="btn btn-link px-2"
      >
      <i className="fas fa-minus" ></i>
    </button>

    <input id="form1" min="0"    name="quantity" type="number"
    
      className="form-control form-control-sm" />

    <button className="btn btn-link px-2"
     >
      <i className="fas fa-plus" ></i>
    </button>
  </div>
  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
    <h6 className="mb-0">total</h6>
    <br />
    <button className='btn btn-danger btn-sm' >Remove</button>
  </div>
  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
    <a href="#!" className="text-muted"><i className="fas "></i></a>
  </div>
  <hr className="my-4" />
</div>
                        {/* {
                          phone.map((e, i) => (
                            e.products.map((items,i)=>{
                              // console.log(items.images[0]);
                              let image=items.images[0];
                              let products=items
                             return  <Item key={i}  phone={phone} setPhone={setPhone} image={image} products={products} />
                            })
                            ))

                        } */}
                      
                      
                   
        
                      
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
}



export default Card;
//products={items} phone={phone} setPhone={setPhone}  total={total} setTotal={setTotal} setQuanatity={setQuanatity} quantity={quantity} image={items.images[0]} key={i}

//Price 

//total={total} phone={phone} setPhone={setPhone} setTotal={setTotal}