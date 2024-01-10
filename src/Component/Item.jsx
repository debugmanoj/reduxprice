
import React,{useState,useContext} from 'react'

function Item() {
  

  
    let handleDelete=()=>{
      const newPhone = phone.map((item) => ({
        ...item,
        products: item.products.filter((val) => val.id !== products.id),
      }));
      setPhone(newPhone);

    }
    let handleIncrease=()=>{
      const newPhone = phone.map((item) => ({
        
        ...item,
        products: item.products.map((val) => {
          if(val.id===products.id){
            return {
              ...val,
              quantity: val.quantity + 1,
              total: val.total +=val.OrgPrice

            };
          }
          return val;
        }),
      }));
    
      setPhone(newPhone);

    }
    let handleDecrease=()=>{
      const newPhone = phone.map((item) => ({
        
        ...item,
        products: item.products.map((val) => {
          if(val.id===products.id){
          
            return {
              ...val,
              quantity: val.quantity - 1,
              total: val.total -=val.OrgPrice
              

            };
          }
          return val;
        }),
      }));
      console.log(newPhone);
      setPhone(newPhone);
      
    }
  return  
  <div className="row mb-4 d-flex justify-content-between align-items-center">
  <div className="col-md-2 col-lg-2 col-xl-2">
    <img
      src={image}
      className="img-fluid rounded-3" alt="Cotton T-shirt" />
  </div>
  <div className="col-md-3 col-lg-3 col-xl-3">
    <h6 className="text-muted">{products.title}</h6>
    <h6 className="text-black mb-0">{products.description}</h6>
  </div>
  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
    <button className="btn btn-link px-2"
      >
      <i className="fas fa-minus" onClick={handleDecrease}></i>
    </button>

    <input id="form1" min="0"  value={products.quantity}  name="quantity" type="number"
    
      className="form-control form-control-sm" />

    <button className="btn btn-link px-2"
     >
      <i className="fas fa-plus" onClick={handleIncrease}></i>
    </button>
  </div>
  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
    <h6 className="mb-0">${products.total}</h6>
    <br />
    <button className='btn btn-danger btn-sm' onClick={handleDelete}>Remove</button>
  </div>
  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
    <a href="#!" className="text-muted"><i className="fas "></i></a>
  </div>
  <hr className="my-4" />
</div>

}

export default Item