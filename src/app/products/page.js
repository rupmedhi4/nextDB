import style from '@/app/style.module.css'

export default async function page() {

    const getProducts = async () => {
        let data = await fetch("http://localhost:3000/api/products")
        data = await data.json();
        if (data.success) {
            return data.result
        } else {
            return data.success
        }
    }

    const products = await getProducts()
    console.log(products);

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
           <div>
            {products.map((data)=>(
                <ul key= {data._id} className={`${style.ul} ${style.listStyle}`}>
                    <li>{data.name}</li>
                    <li>{data.price}</li>
                    <li>{data.company}</li>
                    <li>{data.color}</li>
                    <li>{data.category}</li>

                </ul>
            ))}
           </div>



        </div>
    )
}
