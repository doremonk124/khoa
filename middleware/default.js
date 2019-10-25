export default function ({ store,redirect }) {
    if (sessionStorage.getItem('data')) {
        return redirect('/' + ACCOUNT_DASHBOARD)
    }
}
