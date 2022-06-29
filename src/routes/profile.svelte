<script>
    import { goto } from '$app/navigation'
    import { getAuth, signOut } from 'firebase/auth'
    import { isLoggedIn } from './stores/authStore'

    const auth = getAuth();

    function logout() {
        signOut(auth).then(() => {
            localStorage.removeItem("uid")
            goto("/login")
        }).catch((error) => {
            console.error(error)
        })
    }
</script>

<a href="/login" class="logout" on:click|preventDefault={logout}>Logout</a>