<template>
  <div class="presentation">
    <img class="eventyr-logo" src="../assets/images/logogoodQ.png" alt="Eventyr logo" />
    <div class="hero">
      <h1>Guía del aventurero</h1>
      <a href="#about-home">
        <p class="hero-p">Desliza hacia arriba 👆</p>
        <p class="hero-p desktop">👇</p>
      </a>
    </div>
  </div>

  <img class="spacer" src="../assets/images/layer1.svg" alt="" />
  <!-- about -->
  <section class="index-section about-home" id="about-home">
    <div class="content-home">
      <h1>Eventyr</h1>
      <p class="guide-home">
        Es un servidor <u>Java Edition</u> que se enfoca en la supervivencia PvE. El servidor cuenta con encantamientos
        personalizados únicos para esta comunidad, además de tener un sistema de PvP completamente opcional. En Eventyr
        nos enfocamos fundamentalmente en mejorar la experiencia del modo
        supervivencia. <br /><br />
        <i> Estamos siempre preparados para actualizar a las últimas versiones de Minecraft y solemos ser los primeros
          en actualizarnos para siempre estar al tanto con las últimas características del juego.</i>
      </p>
    </div>
    <router-link :to="{name: 'Eventyr'}" class="about-button">Ver más 👀</router-link>
  </section>

  <img class="spacer" src="../assets/images/layer2.svg" alt="" />
  <!-- rules -->
  <section class="index-section rules">
    <div class="content-home">
      <h1>/reglas</h1>
      <p class="guide-home">Para que todos tengamos una grata experiencia: <br /><br /></p>
    </div>
    <a href="/pages/ruleseventyr.html" class="rules-link">Te invitamos a leer las reglas 👋</a>
  </section>

</template>

<style>
@import '../assets/css/index.css';
</style>