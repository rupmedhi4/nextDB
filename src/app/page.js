import Link from "next/link";
import style from '@/app/style.module.css';

export default function Page() {
  return (
    <div className={`${style.input} ${style.home}`}>
      <Link href="/addproduct" >Add Product</Link>
      <br />
      <Link href="/products">Products</Link>
    </div>
  );
}
