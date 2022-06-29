<script>
    import NavBar from '$lib/components/global/NavBar.svelte'
    import '$lib/components/home/home.scss'
    
    let menuStatus = false;

    const toggleMenu = () => {
        menuStatus = !menuStatus
    }
</script>

<main>
    <nav id="topNav">
        <div on:click={toggleMenu} class="burgerMenu">
            <div class={`line ${menuStatus && "active"}`}></div>
            <div class={`line ${menuStatus && "active"}`}></div>
            <div class={`line ${menuStatus && "active"}`}></div>
        </div>
        <h3>ezzFit.com</h3>
        <img src="/images/global/profile.jpg" alt="Avatar">
    </nav>
    <NavBar />
    <div id="imageContainer">
        <img src="/images/global/Wallpaper.png" alt="ezzFit" id="fitnessWallpaper">
    </div>
    <div class="background">

    </div>
</main>