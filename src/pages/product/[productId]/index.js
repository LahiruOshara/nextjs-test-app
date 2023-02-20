import { useRouter } from 'next/router'

export default function ProductDetails() {
    const router = useRouter();
    const productId = router.query.productId;

    const handleClick = () => {
        console.log("Place order")
        router.push('/')
    }

    return (
        <dev>        
            <h1> Product {productId} Details Pgae </h1>
            <button onClick={handleClick} >Add Product</button>
        </dev>
    )
}
