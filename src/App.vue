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
            <router-link :to="{ name: 'Home' }" class="inicio">Inicio</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Eventyr' }">Eventyr ð</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Reglas' }">Reglas ð</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Protecciones' }">Protecciones ð§</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Pwarps' }">Pwarps ð</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Rangos' }">Rangos ð</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Enchants' }">Encantamientos custom ð</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Quests' }">Quests ð°</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Dungeon' }">Dungeon ð¹</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Mcmmo' }">Mcmmo â¨</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Jobs' }">Jobs ð·ââï¸</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Subastas' }">Subastas ð°</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Vehiculos' }">VehÃ­culos ð</router-link>
          </li>
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
