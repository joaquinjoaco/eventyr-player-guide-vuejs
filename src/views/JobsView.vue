<template>
     <section class="about" id="about">
          <div class="content">
               <h1>Jobs 👷‍♂️</h1>
               <p class="guide-p">El servidor dispone de una amplia gama de trabajos a los que los jugadores pueden
                    unirse, usando el npc que se encuentra en el spawn, o usando el comando <b>/jobs browse</b> para
                    unirse a los trabajos más comunes.</p>
               <br />
               <p class="guide-p">Para otros trabajos más inusuales es necesario unirse directamente usando /jobs join
                    “nombre”. El listado completo es:</p>
               <ul>
                    <li>Alquimista</li>
                    <li>Artesano</li>
                    <li>Cazador</li>
                    <li>Constructor</li>
                    <li>Cuidador</li>
                    <li>Excavador</li>
                    <li>Fundidor</li>
                    <li>Granjero</li>
                    <li>Herrero</li>
                    <li>Leñador</li>
                    <li>Mago</li>
                    <li>Minero</li>
                    <li>Pescador</li>
               </ul>
               <br />
               <p class="guide-p">
                    Para mayor información de que acciones dan dinero y cuánto dinero, utilizar <b>/jobs info
                         “trabajo”</b>, lo que desplegará la información solicitada. Cabe mencionar que el límite de
                    jobs al cual un jugador puede unirse aumenta acorde a su rango en el servidor, iniciando en dos
                    hasta un
                    máximo de 5 trabajos simultáneos.
                    <br />
                    <br />
                    <i>Actualmente existe un límite diario de ganancias de $100.000 por medio de jobs</i>.
               </p>
               <div class="link-container">
                    <router-link :to="{ name: 'Subastas' }" class="link">Siguiente - Subastas 👀</router-link>
               </div>
          </div>
     </section>
</template>