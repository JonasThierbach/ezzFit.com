<script>
    import './Circle.scss'

</script>

<div class="circleContainer">
    <svg viewBox="0 0 36 36" class="circular-chart">
        <path class="circle"
        stroke-dasharray="60, 100"
        d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
    </svg>
    <div class="backgroundCircle">
        <svg viewBox="0 0 36 36" class="circular-chartbg">
            <path class="circlebg"
            stroke-dasharray="100, 100"
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
        </svg>
    </div>
    <div class="textContainer">
        <h1>2000cal</h1>
        <h3>/ 34234cal</h3>
    </div>
</div>