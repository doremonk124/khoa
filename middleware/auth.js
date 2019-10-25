export default function ({ store,redirect }) {
    if (!localStorage.getItem('data') && !sessionStorage.getItem('data')) {
        return redirect({name : ACCOUNT_USER_LOGIN})
    }
}
