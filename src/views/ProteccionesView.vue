<template>
     <section class="about" id="about">
          <div class="content">
               <h1>Protecciones 🚧</h1>
               <p class="guide-p">La protección de terrenos se realiza mediante el uso de bloques de protección
                    (<b>/ps</b>) los cuales son accesibles en <b>/warp protecciones</b> a cambio de minerales o
                    intercambiando con otros jugadores.</p>
               <br />
               <p class="guide-p">
                    Existen 3 tipos de bloques de protección, Carbón (20x20), Diamante (50x50) y Esmeralda (100x100),
                    cada uno de ellos protegen sin importar la altura en la que estés. Es posible colocar tantas
                    protecciones como uno desee, tanto en el mundo normal como en su respectivo Nether y End.
                    <br />
                    Estos son normalmente adquiridos mediante un npc en el spawn (/warp protecciones), donde son
                    intercambiados por distintos minerales:
               </p>
               <div class="image-container">
                    <img class="guide-image" src="/images/Capture.jpg" alt="Tradeos de protecciones en Eventyr" />
               </div>

               <p class="guide-p">Ocasionalmente pueden ser adquiridos de otros jugadores directamente por dinero u
                    otros objetos, o mediante la casa de subastas /ah. Los comandos completos para el uso de los bloques
                    de protección se encuentran a continuación:</p>
               <ul>
                    <li><b>/ps add "Nombre jugador"</b> Agregar a un jugador a tu protección para que puede
                         construir/destruir y abrir cofres.</li>
                    <li>
                         <b>/ps flag</b> Muestra la configuración de los flags de la protección donde se use el comando.
                         <ul class="nested">
                              <li><b>chorus-fruit-teleport</b> Activa o desactiva el uso de fruta chorus en la
                                   protección</li>
                              <li><b>enderpearl</b> Activa o desactiva el uso de perlas de ender en la protección.</li>
                              <li><b>glide</b> Activa o desactiva el uso de elytras en la protección.</li>
                              <li><b>mob-spawning</b> Activa o desactiva la generación de mobs agresivos y pasivos en la
                                   protección (tanto naturales como de spawners y huevos).</li>
                              <li><b>sit</b> Activa o desactiva el sentarse en escaleras y slabs con click derecho.</li>
                              <li><b>tnt</b> Activa o desactiva las explosiones dentro de la protección (tnt, creepers,
                                   etc).</li>
                              <li><b>use</b> Activa o desactiva el uso de botones, puertas, trampillas y placas de
                                   presión en la protección.</li>
                              <ul class="nested">
                                   <li><b>allow</b> Si quieres permitir algo en la protección, esta es la opción.</li>
                                   <li><b>default</b></li>
                                   <li><b>deny</b> Si quieres negar algo en la protección, esta es la opción.</li>
                                   <li><b>null</b></li>
                              </ul>
                         </ul>
                    </li>
                    <li><b>/ps help</b> Muestra el listado de comandos del plugin de protección.</li>
                    <li><b>/ps home "Nombre"</b> Te teletransportas a una protección a la que tengas acceso (si una
                         protección no aparece, ve al mismo mundo donde esta se encuentra e intentalo nuevamente).</li>
                    <li><b>/ps name "Nombre"</b> Asigna un nombre a una protección para identificarla más fácilmente a
                         la hora de transportarse.</li>
                    <li><b>/ps remove "Nombre jugador"</b> Remueves a un jugador de tu protección para que no pueda
                         construir/destruir ni abrir cofres.</li>
                    <li><b>/ps sethome</b> Cambia el lugar de transporte al teletransportarse a la protección (dentro
                         del área de la misma).</li>
                    <li><b>/ps view</b> Muestra los límites de la protección en la que te encuentres con efectos de
                         partículas en los bordes.</li>
               </ul>
               <div class="link-container">
                    <router-link :to="{ name: 'Pwarps' }" class="link">Siguiente - PWarps 👀</router-link>
               </div>
          </div>
     </section>
</template>
