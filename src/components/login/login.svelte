<script>
    import UserIcon from 'svelte-icons/fa/FaUserAlt.svelte'
    import LockIcon from 'svelte-icons/fa/FaLock.svelte'
    import './login.scss'

    let focusUser = false;
    let focusPW = false;

    function focus(inputName) {
        if (inputName === "username") {
            focusUser = !focusUser
        } else {
            focusPW = !focusPW
        }
    }
</script>

<img class="wave" src="/images/login/wave.png" alt="ezzFit">
<div class="container">
    <div class="img">
        <img src="/images/login/tracker.svg" alt="ezzFit">
    </div>
    <div class="login-content">
        <form action="index.html">
            <img src="/images/login/profile.svg" alt="ezzFit">
            <h2 class="title">Wilkommen</h2>
               <div class={`input-div one ${focusUser && 'focus'}`}>
                  <div style="width: 20px;" class="i">
                          <UserIcon />
                  </div>
                  <div class="div">
                          <h5>Username</h5>
                          <input on:focus={() => focus("username")} on:blur={() => focus("username")} type="text" class="input">
                  </div>
               </div>
               <div class={`input-div pass ${focusPW && 'focus'}`}>
                  <div style="width: 20px;" class="i"> 
                       <LockIcon />
                  </div>
                  <div class="div">
                       <h5>Passwort</h5>
                       <input on:focus={() => focus("password")} on:blur={() => focus("password")} type="password" class="input">
               </div>
            </div>
            <a href="/">Passwort vergessen?</a>
            <input type="submit" class="btn" value="Login">
        </form>
    </div>
</div>