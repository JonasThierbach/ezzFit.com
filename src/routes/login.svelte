<script>
    import UserIcon from 'svelte-icons/fa/FaUserAlt.svelte'
    import Toast from '$lib/components/global/Toast.svelte'
    import { notifications } from '$lib/components/global/notifications.js'
    import { goto } from '$app/navigation'
    import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
    import '$lib/components/login/login.scss'

    const auth = getAuth()

    function login() {
        let email = document.getElementById('emailInput').value;
        let password = document.getElementById('passInput').value;

        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            localStorage.setItem("uid", user.uid);
            goto("/")
        }).catch(() => {
            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            localStorage.setItem("uid", user.uid);
            goto("/")
            }).catch((error) => {
                notifications.danger('Ein Fehler ist aufgetreten.', 2000)
            })
        })
    }

    let inputTextUser = "";
    let inputTextPass = "";
    let focusUserVar = false;
    let focusPassVar = false;

    function focusUser() {
        if (inputTextUser == "") {
            focusUserVar = !focusUserVar
        } else {
            focusUserVar = true;
        }
    }

    function focusPass() {
        if (inputTextPass == "") {
            focusPassVar = !focusPassVar
        } else {
            focusPassVar = true;
        }
    }
</script>

<img class="wave" src="/images/login/wave.png" alt="ezzFit">
<div style="	background-color: white;" class="container">
    <Toast />
    <div class="img">
        <img src="/images/login/tracker.svg" alt="ezzFit">
    </div>
    <div class="login-content">
        <form on:submit|preventDefault={login}>
            <img src="/images/login/profile.svg" alt="ezzFit">
            <h2 class="title">Wilkommen</h2>
            <div class={`input-div one ${focusUserVar && 'focus'}`}>
                <div style="width: 20px;" class="i">
                        <UserIcon />
                </div>
                <div class="div">
                        <h5>E-Mail</h5>
                        <input on:focus={() => focusUser()} on:blur={() => focusUser()} bind:value={inputTextUser} type="email" class="input" id="emailInput">
                </div>
            </div>
            <div class={`input-div one ${focusPassVar && 'focus'}`}>
                <div style="width: 20px;" class="i">
                        <UserIcon />
                </div>
                <div class="div">
                        <h5>Passwort</h5>
                        <input on:focus={() => focusPass()} on:blur={() => focusPass()} bind:value={inputTextPass} type="password" class="input" id="passInput">
                </div>
            </div>
            <a href="/register">Passwort vergessen?</a>
            <input type="submit" class="btn" value="Login">
        </form>
    </div>
</div>