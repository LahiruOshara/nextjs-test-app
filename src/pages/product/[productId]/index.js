import { useRouter } from 'next/router'

export default function ProductDetails() {
    const router = useRouter();
    const productId = router.query.productId;

    return (
        <dev>        
            <h1> Product {productId} Details Pgae </h1>
        </dev>

    )
}
