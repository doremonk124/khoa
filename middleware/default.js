export default function ({ store,redirect }) {
    if (sessionStorage.getItem('data')) {
        return redirect({name : ACCOUNT_DASHBOARD})
    }
}
