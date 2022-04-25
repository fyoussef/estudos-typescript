type VerifyUserFn = (user: User, sentValue: User) => boolean
type User = {username: string, password: string}

const verifyUser: VerifyUserFn = (user, sentvalue) => {
    return (user.username === sentvalue.username && user.password === sentvalue.password)
}

const bdUser = {username: 'Filipi', password: '123456'}
const sentUser = {username: 'Filipi', password: '123456'}
const loggedIn = verifyUser(bdUser, sentUser)
console.log(loggedIn)