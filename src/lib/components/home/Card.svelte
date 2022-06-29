<script>
    import './Card.scss'

    export let name;
    export let data;

    export let icon;
    export let line;
</script>

<div class="customCard">
    <img id="icon" src={icon} alt="CardIcon">
    <p>{name}</p>
    <h3>{data}</h3>
    <img id="line" src={line} alt="CardLine">
</div>