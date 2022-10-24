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
            <router-link :to="{ name: 'Eventyr' }">Eventyr 💎</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Reglas' }">Reglas 📜</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Protecciones' }">Protecciones 🚧</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Pwarps' }">Pwarps 📌</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Rangos' }">Rangos 👑</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Enchants' }">Encantamientos custom 📚</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Quests' }">Quests 🔰</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Dungeon' }">Dungeon 👹</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Mcmmo' }">Mcmmo ✨</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Jobs' }">Jobs 👷‍♂️</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Subastas' }">Subastas 💰</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Vehiculos' }">Vehículos 🚁</router-link>
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
