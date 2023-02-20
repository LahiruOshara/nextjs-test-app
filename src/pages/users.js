import User from '../components/user'

export default function Users({ users }) {
    return (
        <dev>
            <h1>Users</h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <User user = {user}></User>
                    </div>
                )
            })};
        </dev>
    )
}

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    return {
        props: { users: data }, // will be passed to the page component as props
    }
}
