export default function User({ user }) {
    return (
        <div>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    )
}