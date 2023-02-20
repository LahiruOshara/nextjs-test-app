import Link from 'next/link'

export default function Root() {
    return (
        <div>
            <h1>
                Welcome... root
            </h1>
            <Link href = { '/blog' } >
                Blog
            </Link>
        </div>
    )
}
