<template>
  <header>
    <nav role="navigation" id="navbar">
      <div id="menu-toggle">
        <input type="checkbox" id="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <li>
            <router-link :to="{name: 'Home'}" class="inicio">Inicio</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Eventyr'}">Eventyr 💎</router-link>
          </li>
          <li><a href="/pages/ruleseventyr.html">Reglas 📜</a></li>
          <li><a href="/pages/protecciones.html">Protecciones 🚧</a></li>
          <li><a href="/pages/pwarps.html">Pwarps 📌</a></li>
          <li><a href="/pages/rangos.html">Rangos 👑</a></li>
          <li><a href="/pages/customenchants.html">Encantamientos custom 📚</a></li>
          <li><a href="/pages/quests.html">Quests 🔰</a></li>
          <li><a href="/pages/dungeon.html">Dungeon 👹</a></li>
          <li><a href="/pages/mcmmo.html">Mcmmo ✨</a></li>
          <li><a href="/pages/jobs.html">Jobs 👷‍♂️</a></li>
          <li><a href="/pages/subastas.html">Subastas 💰</a></li>
          <li><a href="/pages/vehiculos.html">Vehículos 🚁</a></li>
        </ul>
      </div>
    </nav>
  </header>
  <router-view />
</template>

<script>
// get the menu and the checkbox
const menu = document.getElementById('menu');
const checkbox = document.getElementById("checkbox");

// listen for clicks outside the menu to close it
document.onclick = function (clickEvent) {
  if (clickEvent.target.id !== 'menu' && clickEvent.target.id !== 'checkbox') {
    document.getElementById("checkbox").checked = false;
  }
}</script>

<style>
@import './assets/css/nav.css';


#menu a.router-link-exact-active {
  color: #79e051;
}
</style>
