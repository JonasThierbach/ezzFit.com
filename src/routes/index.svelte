<script>
    import Card from'$lib/components/home/Card.svelte'
    import '$lib/components/home/home.scss'
    import FaTrophy from 'svelte-icons/fa/FaTrophy.svelte'
    import FaCalendarAlt from 'svelte-icons/fa/FaCalendarAlt.svelte'
    import FaDumbbell from 'svelte-icons/fa/FaDumbbell.svelte'
    import MdAccountCircle from 'svelte-icons/md/MdAccountCircle.svelte'
    import FaPlus from 'svelte-icons/fa/FaPlus.svelte'
    
    let menuStatus = false;

    const toggleMenu = () => {
        menuStatus = !menuStatus
    }
</script>

<div class="backgroundBlue"></div>
<main style="font-family: 'Poppins', sans-serif;">
    <nav id="topNav">
        <div on:click={toggleMenu} class="burgerMenu">
            <div class={`line ${menuStatus && "active"}`}></div>
            <div class={`line ${menuStatus && "active"}`}></div>
            <div class={`line ${menuStatus && "active"}`}></div>
        </div>
        <h3>ezzFit.com</h3>
        <img src="/images/global/profile.jpg" alt="Avatar">
    </nav>
    <div id="imageContainer">
        <img src="/images/global/Wallpaper.png" alt="ezzFit" id="fitnessWallpaper">
    </div>
    <div class="background">
        <div class="cards">
            <div style="z-index: 100;"><Card name={"sd"} data={2000} icon={"/images/home/Calories.svg"} line={"/images/home/CaloriesLine.svg"}/></div>
            <div style="z-index: 100;"><Card name={"sd"} data={2000} icon={"/images/home/Calories.svg"} line={"/images/home/CaloriesLine.svg"}/></div>
            <div style="z-index: 100;"><Card name={"sd"} data={2000} icon={"/images/home/Calories.svg"} line={"/images/home/CaloriesLine.svg"}/></div>
            <div style="z-index: 100;"><Card name={"sd"} data={2000} icon={"/images/home/Calories.svg"} line={"/images/home/CaloriesLine.svg"}/></div>
        </div>
    </div>
    <nav id="bottomNav">
        <div class="trophyIcon ico"><FaTrophy /></div>
        <div class="calenderIcon ico"><FaCalendarAlt /></div>
        <div class="plusIcon"><div class="wrapper"><FaPlus /></div></div>
        <div class="dumbellIcon ico"><FaDumbbell /></div>
        <div class="accountIcon ico"><MdAccountCircle /></div>
    </nav>
</main>