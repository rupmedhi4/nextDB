'use client'
import { useRouter } from "next/navigation";

export default function DeleteBtn({ id }) {
    const router = useRouter();

    const deleteProduct = async () => {
        try {
            let response = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: "DELETE"
            });

            response = await response.json();

            if (response.success) {
                alert("Product deleted")
                 
            } else {
                console.error("Failed to delete product");
            }
           
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }

    return (
        <button onClick={deleteProduct}>Delete Product</button>
    )
}
