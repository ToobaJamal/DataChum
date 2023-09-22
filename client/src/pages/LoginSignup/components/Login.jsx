export const Login = ({setSignup}) => {
  return (
    <div>
        <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="*********" />
        </form>
        <p>Don't have an account? <a onClick={() => setSignup(true)}>Signup</a></p>
    </div>
  )
}
