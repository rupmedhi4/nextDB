import style from '@/app/style.module.css'

export default function page() {
  return (
    <div >
      <h1  className={style.input}>Products List</h1>
      <ul className={style.ul}>
        <li>name</li>
        <li>price</li>
        <li>company</li>
        <li>color</li>
        <li>category</li>
      </ul>
    

     
    </div>
  )
}
