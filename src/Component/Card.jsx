import React, { useContext, useState } from 'react';
import Item from './Item';
import Price from './Price';
import { DataContext } from '../utils/CardContext';
import PriceContextComponent from '../utils/PriceContextComponent';




function Card() {



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
                        <Item/>
                        {/* {
                                          phone.map((e, i) => (
                                            e.products.map((items,i)=>{
                                              // console.log(items.images[0]);
                                              let image=items.images[0];
                                              let products=items
                                              
                                           return  <Item image={image} products={products} phone={phone} setPhone={setPhone} key={i}/>
                                            })
                                            // 
                                          ))
                        } */}
                    
                      
                    
                      
                      
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