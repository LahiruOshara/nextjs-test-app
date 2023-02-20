import { useRouter } from 'next/router'

export default function ProductReviews() {
    const router = useRouter();
    const productId = router.query.productId;
    const reviewId = router.query.reviewId;

    return (
        <dev>        
            <h1> Product {productId} || Review {reviewId} </h1>
        </dev>

    )
}
