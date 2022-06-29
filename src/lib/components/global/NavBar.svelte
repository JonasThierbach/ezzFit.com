<script>
    import FaTrophy from 'svelte-icons/fa/FaTrophy.svelte'
    import FaCalendarAlt from 'svelte-icons/fa/FaCalendarAlt.svelte'
    import FaDumbbell from 'svelte-icons/fa/FaDumbbell.svelte'
    import MdAccountCircle from 'svelte-icons/md/MdAccountCircle.svelte'
    import FaPlus from 'svelte-icons/fa/FaPlus.svelte'
    import './NavBar.scss'

</script>

<nav id="bottomNav">
    <div class="trophyIcon ico"><FaTrophy /></div>
    <div class="calenderIcon ico"><FaCalendarAlt /></div>
    <div class="plusIcon"><div class="wrapper"><FaPlus /></div></div>
    <div class="dumbellIcon ico"><FaDumbbell /></div>
    <div class="accountIcon ico"><MdAccountCircle /></div>
</nav>