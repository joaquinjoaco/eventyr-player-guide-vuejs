<template>
     <section class="about" id="about">
          <div class="content">
               <h1>Mcmmo ✨</h1>
               <p class="guide-p">mcMMO es un plugin del servidor que agrega elementos RPG al mismo, creando nuevas
                    habilidades asociadas a armas, herramientas y otros, creando nuevas y mejores formas de generar
                    recursos y una mayor profundidad mecánicas al sistema PvP.</p>
               <div class="image-container">
                    <img class="guide-image mcmmo" src="/images/mcmmo.png" alt="Habilidades" />
               </div>

               <p class="guide-p">
                    Cada una de estas ramas tienen habilidades especiales, las cuales deben adquirirse y mejorarse
                    realizando acciones que otorguen experiencia para esa disciplina en particular, esta experiencia es
                    diferente a la experiencia normal del juego, obtenida por ejemplo al matar criaturas, y tampoco
                    tiene relación con la experiencia de los trabajos (jobs).
                    <br />
                    A diferencia de los trabajos, todos los jugadores tienen acceso a todas las ramas de habilidades,
                    pudiendo obtener experiencia y usar simultáneamente las 15 ramas de habilidades. Las habilidades en
                    detalle son cuanto menos extensas, para obtener mayor información de estas pueden recurrir a
                    <a href="https://mcmmo.fandom.com/wiki/McMMO_Wiki">https://mcmmo.fandom.com/wiki/McMMO_Wiki</a> o
                    bien las descripciones de las habilidades dentro del juego, usando el comando respectivo de cada una
                    (ej: /espadas).
               </p>
               <br />
               <br />
               <p class="guide-p">
                    Otro elemento importante que agrega mcmmo es el sistema de partys. Las partys son grupos creados por
                    jugadores que sirven para tener un chat privado de todos los miembros, desactivar pvp entre los
                    miembros, y compartir tanto exp de mcmmo como drops de mobs (dentro cierto radio). Los
                    comandos serán explicados a continuación.
               </p>
               <br />
               <ul>
                    <li><b>/party o /party info</b> Ve la información de la party en la cual te encuentres.</li>
                    <li><b>/party join [nombre del jugador] [contraseña]</b> Ingresa a la party del jugador
                         especificado, la contraseña se necesita sólo si la party tiene una.</li>
                    <li><b>/party quit</b> Abandonas tu party actual.</li>
                    <li><b>/pc</b> Activa o desactiva el chat de party.</li>
                    <li><b>/party invite [nombre del jugador]</b> Invita a un jugador a tu party.</li>
                    <li><b>/ptp [nombre jugador]</b> Te teletransporta a la ubicación de un jugador que esté en tu
                         party.</li>
                    <li><b>/party [lock/unlock]</b> Bloquea o desbloquea el acceso a la party.</li>
                    <li><b>/party password [contraseña]</b> Especifica una contraseña para tu party (Solo funciona si la
                         party está bloqueada).</li>
                    <li><b>/party create [nombre party] [contraseña]</b> Crea una party y le asigna nombre, agregarle
                         contraseña es opcional.</li>
                    <li><b>/party kick [nombre del jugador]</b> Expulsa de la party a un jugador.</li>
                    <li><b>/party leader [nombre del jugador]</b> Transfiere el liderazgo de la party.</li>
                    <li><b>/party disband</b> Elimina la party.</li>
                    <li><b>/party help</b> Muestra la lista de comandos de party.</li>
               </ul>
               <div class="link-container">
                    <router-link :to="{ name: 'Jobs' }" class="link">Siguiente - Jobs 👀</router-link>
               </div>
          </div>
     </section>
</template>