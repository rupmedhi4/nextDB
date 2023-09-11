'use client'
import Link from 'next/link'
import style from '@/app/style.module.css'
import { useState } from 'react'


export default function page() {
  let [name, setName]=useState("")
  let [price, setprice]=useState("")
  let [color, setcolor]=useState("")
  let [company, setcompany]=useState("")
  let [category, setcategory]=useState("")

  const addProduct = async()=>{
    let result = await fetch("http://localhost:3000/api/products",{
      method: "POST",
      body:JSON.stringify({name, price,color,company,category})
    })
    
    result = await result.json()

    if(result.success){
      alert("new product added")
    }

}

  return (
    <div>
      <h1>Add product</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter product name' className={style.input}/>
      <input type="text"  value={price} onChange={(e)=>setprice(e.target.value)} placeholder='enter product price' className={style.input} />
      <input type="text" value={color} onChange={(e)=>setcolor(e.target.value)} placeholder='enter product color' className={style.input} />
      <input type="text" value={company} onChange={(e)=>setcompany(e.target.value)} placeholder='enter product company' className={style.input} />
      <input type="text" value={category} onChange={(e)=>setcategory(e.target.value)} placeholder='enter product category' className={style.input} />

      <button onClick={addProduct} className={style.btn}>Add product</button>
    </div>
  )
}
