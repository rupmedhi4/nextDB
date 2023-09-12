import style from '@/app/style.module.css'
import Link from 'next/link';
import DeleteBtn from '../components/DeleteBtn';


export default async function page() {

    const getProducts = async () => {
        let data = await fetch("http://localhost:3000/api/products", {cache:"no-cache"})
        data = await data.json();
        if (data.success) {
            return data.result
        } else {
            return data.success
        }
    }

    const products = await getProducts()

    return (
        <div >
            <h1 className={style.input}>Products List</h1>
            <ul className={style.ul}>
                <li className={style.list}>name</li>
                <li className={style.list}>price</li>
                <li className={style.list}>company</li>
                <li className={style.list}>color</li>
                <li className={style.list}>category</li>
            </ul>
           <div className={style.main_div}>
            {products.map((data)=>(
                <ul key= {data._id} className={`${style.ul} ${style.listStyle}`}>
                    <li>{data.name}</li>
                    <li >{data.price}</li>
                    <li >{data.company}</li>
                    <li >{data.color}</li>
                    <li >{data.category}</li>

                    <Link href={`/products/${data._id}`}>Edit data</Link>
                   <DeleteBtn id={data._id}/>
                    
                    
                </ul>
            ))}
           </div>



        </div>
    )
}
