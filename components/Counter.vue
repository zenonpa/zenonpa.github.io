<template>
    <ul class="vuejs-countdown">
        <button>Iniciar sesión</button>
        <li>
            <p class="digit">{{ minutes | twoDigits }}</p>
            <!-- <p class="text">min</p> -->  19
        </li>
        <li>
            <p class="digit">{{ seconds | twoDigits }}</p>
            <!-- <p class="text">Sec</p> -->
        </li>
    </ul>
</template>

<script>

let interval = null;

export default {
    name: 'Counter'

}
</script>
<style>
.vuejs-countdown {
    position: absolute;
    right: 8em;
    top: 2em;    
    margin: 0;
}
.vuejs-countdown li {
  display: inline-block;
  margin: 0 2px;
  text-align: center;
  position: relative;
}
.vuejs-countdown li p {
    margin: 0;
}
.vuejs-countdown li:after {
  content: ":";
  position: absolute;
  top: -1px;
  right: -4px;
  font-size: 14px;
}
.vuejs-countdown li:first-of-type {
  margin-left: 0;
}
.vuejs-countdown li:last-of-type {
  margin-right: 0;
}
.vuejs-countdown li:last-of-type:after {
  content: "";
}
.vuejs-countdown .digit {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0;
}
.vuejs-countdown .text {
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 10px;
}
</style>