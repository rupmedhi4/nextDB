'use client'
import Link from 'next/link'
import style from '@/app/style.module.css'
import { useEffect, useState } from 'react'

export default function page({params}) {
  let [name, setName]=useState("")
  let [price, setprice]=useState("")
  let [color, setcolor]=useState("")
  let [company, setcompany]=useState("")
  let [category, setcategory]=useState("")

useEffect(()=>{
getProductsDetsils()
},[])

const getProductsDetsils = async()=>{
  let productData=await fetch(`http://localhost:3000/api/products/${params.editproduct}`);
  productData = await productData.json()
 if(productData.sucess){

  setName(productData.result.name)
  setprice(productData.result.price)
  setcolor(productData.result.color)
  setcompany(productData.result.company)
  setcategory(productData.result.category)
 };
}

  return (
    <div>
      <h1>update product</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter product name' className={style.input}/>
      <input type="text"  value={price} onChange={(e)=>setprice(e.target.value)} placeholder='enter product price' className={style.input} />
      <input type="text" value={color} onChange={(e)=>setcolor(e.target.value)} placeholder='enter product color' className={style.input} />
      <input type="text" value={company} onChange={(e)=>setcompany(e.target.value)} placeholder='enter product company' className={style.input} />
      <input type="text" value={category} onChange={(e)=>setcategory(e.target.value)} placeholder='enter product category' className={style.input} />

      <button  className={style.btn}>update product</button>
    </div>
  )
}
