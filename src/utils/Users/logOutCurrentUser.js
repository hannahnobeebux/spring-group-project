

export default function logOutCurrentUser() {
    console.log('User has logged out! 👾')

    localStorage.removeItem("access_token")
    localStorage.removeItem("token_type")
    localStorage.removeItem("user_id")

}