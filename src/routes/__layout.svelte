<script>
    import App from '$lib/addons/firebase.js';
    import { onMount } from 'svelte/internal';
    import { getAuth, onAuthStateChanged } from 'firebase/auth'
    import { goto } from '$app/navigation';
    import { isLoggedIn } from './stores/authStore'

    onMount(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedIn.update(() => true)
            } else {
                isLoggedIn.update(() => false)
                goto("/login")
            }
        })
    })
</script>

<slot />