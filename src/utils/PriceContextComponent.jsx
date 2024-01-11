import React,{useState,useContext} from 'react'
import { DataContext } from './CardContext'; 
export const PriceData =React.createContext();
function PriceContextComponent({children}) {
    let {phone,setPhone}=useContext(DataContext)
    // let [phone,setPhone]=useState([{
    //     "products": [
    //         {
    //             "id": 1,
    //             "quantity":1,
    //             "title": "iPhone 9",
    //             "OrgPrice":549,
    //             "description": "An apple mobile which is nothing like apple",
    //             "total": 549,
    //             "discountPercentage": 12.96,
    //             "rating": 4.69,
    //             "stock": 94,
    //             "brand": "Apple",
    //             "category": "smartphones",
    //             "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    //             "images": [
    //                 "https://i.dummyjson.com/data/products/1/1.jpg",
    //                 "https://i.dummyjson.com/data/products/1/2.jpg",
    //                 "https://i.dummyjson.com/data/products/1/3.jpg",
    //                 "https://i.dummyjson.com/data/products/1/4.jpg",
    //                 "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    //             ]
    //         },
    //         {
    //             "id": 2,
    
    //             "quantity":1,
    //             "title": "iPhone X",
    //             "OrgPrice":899,
    //             "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    //             "total": 899,
    //             "discountPercentage": 17.94,
    //             "rating": 4.44,
    //             "stock": 34,
    //             "brand": "Apple",
    //             "category": "smartphones",
    //             "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    //             "images": [
    //                 "https://i.dummyjson.com/data/products/2/1.jpg",
    //                 "https://i.dummyjson.com/data/products/2/2.jpg",
    //                 "https://i.dummyjson.com/data/products/2/3.jpg",
    //                 "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    //             ]
    //         },
    //         {
    //             "id": 3,
    //             "quantity":1,
    //             "title": "Samsung Universe 9",
    //             "OrgPrice":1249,
    //             "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    //             "total": 1249,
    //             "discountPercentage": 15.46,
    //             "rating": 4.09,
    //             "stock": 36,
    //             "brand": "Samsung",
    //             "category": "smartphones",
    //             "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    //             "images": [
    //                 "https://i.dummyjson.com/data/products/3/1.jpg"
    //             ]
    //         },
    //         {
    //             "id": 4,
    //             "quantity":1,
    //             "title": "OPPOF19",
    //             "OrgPrice":280,
    //             "description": "OPPO F19 is officially announced on April 2021.",
    //             "total": 280,
    //             "discountPercentage": 17.91,
    //             "rating": 4.3,
    //             "stock": 123,
    //             "brand": "OPPO",
    //             "category": "smartphones",
    //             "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    //             "images": [
    //                 "https://i.dummyjson.com/data/products/4/1.jpg",
    //                 "https://i.dummyjson.com/data/products/4/2.jpg",
    //                 "https://i.dummyjson.com/data/products/4/3.jpg",
    //                 "https://i.dummyjson.com/data/products/4/4.jpg",
    //                 "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    //             ]
    //         },
    //         {
    //             "id": 5,
    //             "quantity":1,
    //             "title": "Huawei P30",
    //             "OrgPrice":499,
    //             "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    //             "total": 499,
    //             "discountPercentage": 10.58,
    //             "rating": 4.09,
    //             "stock": 32,
    //             "brand": "Huawei",
    //             "category": "smartphones",
    //             "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    //             "images": [
    //                 "https://i.dummyjson.com/data/products/5/1.jpg",
    //                 "https://i.dummyjson.com/data/products/5/2.jpg",
    //                 "https://i.dummyjson.com/data/products/5/3.jpg"
    //             ]
    //         }
    //     ]
    // }]);
    let [total,setTotal]=useState("0")
  return <PriceData.Provider value={{setPhone,phone,total,setTotal}}>
    {children}
  </PriceData.Provider>
}

export default PriceContextComponent