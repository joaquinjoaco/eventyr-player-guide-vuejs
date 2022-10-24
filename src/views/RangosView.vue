<template>
     <section class="about" id="about">
          <div class="content">
               <h1>Rangos 👑</h1>
               <p class="guide-p">
                    Todos los usuarios tienen acceso a /home para volver al lugar donde usaron el comando /sethome
                    “nombre” cantidad que aumenta según el rango del jugador, adicionalmente disponen de /back en caso
                    de que mueran y necesitan volver a su tumba (no funciona en el Nether) y teletransportarse a
                    otros jugadores con /tpa “nombre jugador”, o transportarlos a ti con /tpahere “nombre jugador”, cabe
                    mencionar que el tpa kill está estrictamente prohibido (incluso con pvp activo).
               </p>
               <br />
               <p class="guide-p">
                    Los rangos del servidor son adquiridos con dinero del mismo, partiendo todos como “①Desterrado”
                    hasta culminar en “⑫Leyenda”, siendo necesario ascender a cada uno de los rangos, no pudiendo omitir
                    ninguno. Cada rango incluye beneficios adicionales que pueden ser consultados directamente
                    con /ranks. La excepción a lo anterior es el rango de donación “Titán” el cual posee los beneficios
                    de todos los rangos, y otros adicionales exclusivos al rango.

                    <br />
                    Para mayor información visitar
                    <a href="https://tienda.eventyrmc.net">https://tienda.eventyrmc.net </a>
               </p>
               <br />
               <ul>
                    <li>
                         Titán (Adquirible a través de la tienda de Eventyr)
                         <ul class="nested">
                              <li>
                                   Prefijo <b>[<span style="color: #084bf8">T</span><span
                                             style="color: #3075f9">i</span><span style="color: #5a9ef9">t</span><span
                                             style="color: #82c7fa">á</span><span style="color: #abf0fa">n</span>]</b>
                              </li>
                              <li>Todas las ventajas de los rankups</li>
                              <li>Nombre en color celeste cielo</li>
                              <li>
                                   <b>/kit titan</b>
                                   <br />
                                   Cooldown: 1 mes
                                   <br />
                                   (espada, pico, pala, hacha, y arco míticos)
                              </li>
                              <li>Vuela en los mundos protegibles (<b>/fly</b>)</li>
                              <li>Mina spawners (solo en el mundo survival)</li>
                              <li>Repair all cada 3 horas (<b>/fix all</b>)</li>
                              <li>Cambia tu nick (<b>/nick</b>)</li>
                              <li>Comando <b>/back</b> sin tiempo de espera</li>
                              <li>Doble XP en Trabajos y McMMO</li>
                              <li>Acceso a muchos cosméticos (<b>(/cos)</b></li>
                              <li>No serás kickeado por estar AFK</li>
                              <li>Teletransportes sin esperas</li>
                              <li>Escribe carteles con colores</li>
                              <li>Entra al servidor cuando esté lleno</li>
                         </ul>
                    </li>
               </ul>
               <br />
               <br />
               <p class="guide-p">El acceso a comandos y beneficios de los rangos puede ser revisado in-game utilizando
                    el comando <b>/ranks</b></p>
               <br />
               <ul>
                    <li><b>①Desterrado: Rango inicial</b></li>
                    <br />
                    <li>
                         <b> ②Explorador: $2000</b>
                         <ul class="nested">
                              <li>2 Espacios en <b>/ah</b></li>
                              <li>Mesa de crafteo virtual (<b>/workbench</b>)</li>
                         </ul>
                    </li>
                    <br />
                    <li>
                         <b>③Pirata: $2000</b>
                         <ul class="nested">
                              <li>4 espacios en <b>/ah</b></li>
                              <li>Más espacio en la mochila (<b>/bp</b>)</li>
                              <li>Únete a 3 trabajos</li>
                              <li>2 Homes</li>
                              <li>Basurero virtual (<b>/trash</b>)</li>
                              <li>5 misiones simultáneas</li>
                         </ul>
                    </li>
                    <br />
                    <li>
                         <b> ④Corsario: $8000</b>
                         <ul class="nested">
                              <li>5 espacios en <b>/ah</b></li>
                              <li>Más espacio en la mochila (<b>/bp</b>)</li>
                              <li>Yunque virtual (<b>/anvil</b>)</li>
                         </ul>
                    </li>
                    <br />
                    <li>
                         <b>⑤Colono: $15000</b>
                         <ul class="nested">
                              <li>6 espacios en <b>/ah</b></li>
                              <li>Más espacio en la mochila (<b>/bp</b>)</li>
                              <li>Convierte lingotes a bloques (<b>/blocks</b>)</li>
                              <li>6 misiones simultáneas</li>
                         </ul>
                    </li>
                    <br />
                    <li>
                         <b>⑥Conquistador: $30000</b>
                         <ul class="nested">
                              <li>7 espacios en <b>/ah</b></li>
                              <li>Más espacio en la mochila (<b>/bp</b>)</li>
                              <li>Únete a 4 trabajos</li>
                              <li>3 Homes</li>
                              <li>Renombra items (<b>/rename</b>)</li>
                              <li>2 pwarps</li>
                         </ul>
                    </li>
                    <br />
                    <li>
                         <b>⑦Gobernador: $60000</b>
                         <ul class="nested">
                              <li>8 espacios en <b>/ah</b></li>
                              <li>Más espacio en la mochila (<b>/bp</b>)</li>
                              <li>4 Homes</li>
                              <li>Guarda tu xp (<b>/xpbottle</b>)</li>
                              <li>7 misiones simultáneas</li>
                         </ul>
                    </li>
                    <br />
                    <li>
                         <b>⑧Noble: $100000</b>
                         <ul class="nested">
                              <li>9 espacios en <b>/ah</b></li>
                              <li>Muestra items en el chat con <b>[item]</b></li>
                         </ul>
                    </li>
                    <br />
                    <li>
                         <b>⑨Virrey: $200000</b>
                         <ul class="nested">
                              <li>Únete a 5 trabajos</li>
                              <li>5 Homes</li>
                              <li>Visión nocturna (<b>/nv</b>)</li>
                              <li>8 misiones simultáneas</li>
                         </ul>
                    </li>
                    <br />
                    <li>
                         <b>⑩Rey: $400000</b>
                         <ul class="nested">
                              <li>Teletransportate al bloque de arriba (<b>/top</b>)</li>
                              <li>Ender chest virtual (<b>/ec</b>)</li>
                              <li>3 pwarps</li>
                         </ul>
                    </li>
                    <br />
                    <li>
                         <b>⑪Héroe: $600000</b>
                         <ul class="nested">
                              <li>10 espacios en <b>/ah</b></li>
                              <li>6 homes</li>
                              <li>Arregla un item cada 3h (<b>/fix</b>)</li>
                              <li>10 misiones simultáneas</li>
                         </ul>
                    </li>
                    <br />
                    <li>
                         <b>⑫Leyenda: $100000</b>
                         <ul class="nested">
                              <li>Espacios ilimitados en <b>/ah</b></li>
                              <li>Homes ilimitados</li>
                              <li>Vuela en tus protecciones (<b>/fly</b>)</li>
                              <li>
                                   Prefijo <b>[<span style="color: #b21e0a">L</span><span
                                             style="color: #b02c0e">e</span><span style="color: #ad3b12">y</span><span
                                             style="color: #ab4a16">e</span><span style="color: #a8591a">n</span><span
                                             style="color: #a6681e">d</span><span style="color: #a37722">a</span>]</b>
                              </li>
                         </ul>
                    </li>
               </ul>
               <div class="link-container">
                    <router-link :to="{ name: 'Enchants' }" class="link">Siguiente - Encantamientos custom 👀
                    </router-link>
               </div>
          </div>
     </section>
</template>
