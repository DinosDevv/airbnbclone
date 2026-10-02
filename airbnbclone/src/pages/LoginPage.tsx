function LoginPage () {
  return (
    <>
      <form>
        <h1>Login Form</h1>
        <label htmlFor="email">User Email: </label>
        <input type="text" placeholder="you@example.com"/>
      
        <label htmlFor="password">User Password: </label>
        <input type="text" placeholder="123abc!@#"/>
      </form>
    </>
  )
}
export default LoginPage