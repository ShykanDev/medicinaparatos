<template>
  <div class="">
    <MainLayout>
      <template #main>
<!-- Home Banner -->
<article class="flex flex-col w-full overflow-hidden bg-gray-100 lg:flex-row font-poppins">
  <!-- Div izquierdo: Imagen y tarjetas -->
  <div class="w-full p-5 lg:w-1/2">
    <!-- Imagen -->
    <img
      src="https://i.ibb.co/6NQqjWB/IMG-20241206-WA0017.jpg"
      class="object-cover w-full h-auto rounded-md animate-fade-up"
      alt="Imagen principal del suplemento">

    <!-- Tarjetas debajo de la imagen -->
    <div class="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
  <!-- Card 1 -->
  <div class="p-5 bg-white border rounded-lg shadow-md">
    <h3 class="text-xl font-bold text-emerald-800">Control de la tos</h3>
    <p class="mt-2 text-gray-600">Ayuda a aliviar la tos persistente, proporcionando un efecto calmante en la garganta.</p>
  </div>
  <!-- Card 2 -->
  <div class="p-5 bg-white border rounded-lg shadow-md">
    <h3 class="text-xl font-bold text-emerald-800">Apertura de las vías respiratorias</h3>
    <p class="mt-2 text-gray-600">Facilita la respiración al descongestionar las vías aéreas y reducir la inflamación.</p>
  </div>
  <!-- Card 3 -->
  <div class="p-5 bg-white border rounded-lg shadow-md">
    <h3 class="text-xl font-bold text-emerald-800">Fortalecimiento del sistema inmunológico</h3>
    <p class="mt-2 text-gray-600">Refuerza las defensas naturales del cuerpo para combatir infecciones respiratorias.</p>
  </div>
  <!-- Card 4 -->
  <div class="p-5 bg-white border rounded-lg shadow-md">
    <h3 class="text-xl font-bold text-emerald-800">Hidratación de las mucosas</h3>
    <p class="mt-2 text-gray-600">Mantiene las vías respiratorias hidratadas, reduciendo la irritación y sequedad.</p>
  </div>
</div>

  </div>

  <!-- Div derecho: Título y contenido -->
  <div class="flex flex-col items-center justify-center w-full p-5 text-gray-800 lg:w-1/2 ">
    <!-- Título principal -->
    <h2 class="text-2xl font-extrabold text-center lg:text-6xl font-poppins text-emerald-900 animate-fade-left">
      JICOF: Médicina Natural Para La
      <strong class="px-1 ">TOS</strong>
    </h2>

    <!-- Subtítulo -->
    <h1 class="mt-4 text-lg font-extrabold text-center lg:text-2xl font-poppins animate-fade-left animate-delay-300">
  <span class="text-emerald-800">
    <strong class="px-1 text-white rounded-sm bg-emerald-900">ALIVIE SU TOS</strong>
    y respire con facilidad nuevamente
  </span>
</h1>


    <!-- Descripción con imagen -->
    <div class="flex items-center mt-6 space-x-4">
      <h2 class="px-4 py-2 font-bold text-center rounded-md text-md lg:text-xl text-gray-50 bg-emerald-700 font-varela animate-fade-up">
        Medicina ayurvédica con origen milenario en la India.
      </h2>
      <img
        class="w-24 lg:w-36"
        src="https://i.ibb.co/VqZ4mch/saint-Indian-removebg-preview.png"
        alt="Representación de la medicina ayurvédica">
    </div>

   <img src="https://images.pexels.com/photos/6285304/pexels-photo-6285304.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="rounded-md">
  </div>
</article>




        <p class="mb-6" id="LIVAD" ></p>
          <!-- Intro Info Content -->
        <section  class="px-3 mt-20 space-y-28">
          <HomeInfoCard :img-url="'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" :show-img-left="false"
          :title="info6.titleInfo" :strong-title="info6.strongTitle" :description1="info6.contentInfo" :description2="info6.contentInfo2" :exTitle="infoExtra1.title" :exInfo1="infoExtra1.info1" :exInfo2="infoExtra1.info2" :exInfo3="infoExtra1.info3" />

          <HomeInfoCard :show-img-left="true" :img-url="'https://images.pexels.com/photos/3782826/pexels-photo-3782826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" :title="info1.titleInfo" :strong-title="info1.strongTitle"
            :description1="'La tos persistente puede ser agotadora y afectar tu calidad de vida. JICOF, con su fórmula a base de Yashtimaghu y Bibhitaki, trabaja para calmar la irritación de la garganta, aliviando incluso las toses más persistentes. Su acción natural evita los efectos secundarios comunes de los medicamentos químicos.'"
            :description2="info1.contentInfo2" :exTitle="infoExtra2.title" :exInfo1="infoExtra2.info1" :exInfo2="infoExtra2.info2" :exInfo3="infoExtra2.info3" />

          <HomeInfoCard :show-img-left="false"
            :img-url="'https://images.pexels.com/photos/5302897/pexels-photo-5302897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
            :title="info2.titleInfo" :strong-title="info2.strongTitle" :description1="info2.contentInfo" :description2="info2.contentInfo2"  :exTitle="infoExtra3.title" :exInfo1="infoExtra3.info1" :exInfo2="infoExtra3.info2" :exInfo3="infoExtra3.info3" />

          <HomeInfoCard :show-img-left="true"
            :img-url="'https://plus.unsplash.com/premium_photo-1681207567220-e29da6ce635b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYXRofGVufDB8fDB8fHww'"
            :title="info3.titleInfo" :strong-title="info3.strongTitle" :description1="info3.contentInfo" :description2="info3.contentInfo2"   :exTitle="infoExtra4.title" :exInfo1="infoExtra4.info1" :exInfo2="infoExtra4.info2" :exInfo3="infoExtra4.info3" />

          <HomeInfoCard :show-img-left="false" :img-url="'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
            :title="info4.titleInfo" :strong-title="info4.strongTitle" :description1="info4.contentInfo" :description2="info4.contentInfo2"  :exTitle="infoExtra5.title" :exInfo1="infoExtra5.info1" :exInfo2="infoExtra5.info2" :exInfo3="infoExtra5.info3" />
          <HomeInfoCard :show-img-left="true"
            :img-url="'https://images.pexels.com/photos/4498216/pexels-photo-4498216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
            :title="info5.titleInfo" :strong-title="info5.strongTitle" :description1="info5.contentInfo" :description2="info5.contentInfo2"   :exTitle="infoExtra6.title" :exInfo1="infoExtra6.info1" :exInfo2="infoExtra6.info2" :exInfo3="infoExtra6.info3" />

          <HomeInfoCard :img-url="'https://images.pexels.com/photos/7269622/pexels-photo-7269622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" :show-img-left="true"
            :title="info7.titleInfo" :strong-title="info7.strongTitle" :description1="info7.contentInfo" :description2="info7.contentInfo2"  :exTitle="infoExtra7.title" :exInfo1="infoExtra7.info1" :exInfo2="infoExtra7.info2" :exInfo3="infoExtra7.info3" />
          <HomeInfoCard
            :img-url="'https://images.pexels.com/photos/6836522/pexels-photo-6836522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'"
            :show-img-left="true" :title="info11.titleInfo" :strong-title="info11.strongTitle" :description1="info11.contentInfo"
            :description2="info11.contentInfo2"  :exTitle="infoExtra8.title" :exInfo1="infoExtra8.info1" :exInfo2="infoExtra8.info2" :exInfo3="infoExtra8.info3" />
          </section>
          <div class="w-3/4 m-auto h-[1px] mt-6 bg-rose-900"/>
        <!-- ayurveda section -->
        <section class="flex flex-col px-3 space-y-5 font-poppins mt-11 ">
          <AyurvedaInfo/>
        </section>

        <!-- news section -->
        <h2 class="text-2xl font-bold text-center text-emerald-700 md:text-5xl">Noticias</h2>
        <section class="flex flex-col flex-wrap w-full px-3 space-y-5 font-poppins mt-11 md:flex-row md:justify-around">
          <NewsCard
          :href-link="'https://cinfasalud.cinfa.com/p/tos/'"
          :img-src="'https://cdn-cinfasalud.cinfa.com/wp-content/uploads/2019/10/CinfaSalud-tos-400_2-247x267.jpg?x72889'"
          :title="'¿Qué es la tos y qué la desencadena?'"
          :description="'La tos es un acto reflejo protector por el que se expulsa de manera brusca y a gran velocidad el aire de los pulmones. Se trata de un síntoma que, en función de su frecuencia y/o intensidad, puede ser muy molesto y mermar en gran medida la calidad de la vida de quien lo padece. Se trata, de hecho, de uno de los motivos más habituales de consulta médica.'"
          />
          <NewsCard
          :title="'¿Cuáles son las diferencias entre la bronquitis y la neumonía?'"
          :href-link="'https://www.mahatayurveda.com/como-limpiar-el-higado/'"
          :img-src="'https://salud.nih.gov/sites/salud/files/styles/max_2600x2600/public/2022-12/201706-hombre-tosiendo-panuelo-descartable.jpg?itok=3R3DLwaW'"
          :description="'Si bien las causas subyacentes de estas enfermedades pueden ser diferentes, los síntomas pueden ser similares, y ambas enfermedades pueden ser lo suficientemente graves como para que deba ir al médico.. '"
          />
          <NewsCard
          img-src="https://www.farmaceuticonline.com/wp-content/uploads/2019/07/tos.jpg"
          href-link="https://www.farmaceuticonline.com/es/tos/"
          title="¿Por qué tenemos tos?"
          description="Los receptores de la tos se concentran especialmente en la garganta y en los puntos de ramificación más importantes de las vías respiratorias, pero también pueden encontrarse en los senos, en los canales auditivos, en el esófago, en el abdomen y en los revestimientos del corazón y de los pulmones."
          />
          <NewsCard
          href-link="https://valleywisehealth.org/es/blog/que-significa-una-tos-persistente/"
          description="¿Le debería preocupar la tos? A todos nos da tos de vez en cuando, pero si esta persiste por más de dos semanas, podría comenzar a angustiarle. Aquí se enterará de lo que puede significar una tos persistente."
          img-src="https://valleywisehealth.org/wp-content/uploads/2021/04/persistent-cough-768x512.jpeg"
          title="¿Qué significa una tos persistente?"
          />
          <NewsCard
          href-link="https://www.normon.es/articulo-blog/la-tos-que-es-y-por-que-se-produce/"
          img-src="https://www.normon.es/themes/user/site/default/asset/img/blog/201905061628456552.jpeg"
          title="LA TOS: QUÉ ES Y POR QUÉ SE PRODUCE"
          description="Aparece, molesta y no te deja seguir con tu día. La tos puede entorpecer tu rutina pero, ¿qué es la tos exactamente? ¿por qué aparece? Y más importante aún, ¿cómo podemos aliviarla? En Laboratorios Normon te damos toda la información necesaria para calmar la tos, conocer sus posibles causas y consejos para remediarla."
          />
        </section>
        <div class="w-full h-[1px] bg-rose-900 my-8"/>
        <!-- Ads Section -->
        <h3 class="mt-6 text-4xl font-bold text-center text-white bg-emerald-800 py-7 font-poppins">Le puede interesar</h3>
        <section  class="flex justify-center w-full my-6 space-x-4"> <!-- ads section -->
              <div
                class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
                <span
                  class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
                <a href="https://shykandev.github.io/medicinaparadiabetes/" class="relative w-full h-full" target="_blank"
                  rel="noopener noreferrer">
                  <div
                    class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                    <p class="text-xs font-bold text-center text-white font-poppins md:text-3xl"></p>
                    <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">100% Natural</p>
                  </div>
                  <img class="w-full h-full bg-contain rounded-md" src="https://i.ibb.co/SKjtSS9/glufacAd.jpg" alt="">
                  <p class="absolute text-xs font-bold text-center text-rose-900 top-1 font-poppins md:text-3xl">
                    ¿Tiene Diabetes?</p>
                  <p class="absolute text-xs font-bold text-center text-white bottom-1 font-poppins md:text-3xl">
                    Conozca Glufac</p>
                </a>
              </div>

              <div
                class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
                <span
                  class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
                <a href="https://www.prasadam.mx/typography.html" class="relative w-full h-full" target="_blank"
                  rel="noopener noreferrer">
                  <div
                    class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                    <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">Jabón de Neem</p>
                    <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">100% natural</p>
                    <p class="hidden text-sm font-bold text-center text-white font-poppins md:text-3xl md:block">Sin químicos</p>
                  </div>
                  <img class="w-full h-full bg-contain rounded-md" src="https://i.ibb.co/QrxbhH9/neem2-1.png" alt="">
                  <p class="absolute top-0 text-xs font-bold text-center text-cyan-950 font-poppins md:text-3xl">Jabón Natural</p>
                  <p
                    class="absolute px-3 text-xs font-bold text-center text-cyan-950 md:px-0 bottom-3 font-poppins md:text-3xl">
                    Hidratante</p>
                </a>
              </div>
            </section>
        <!-- safe navigation section -->
        <h2 class="py-6 my-4 text-5xl font-bold text-center text-white bg-emerald-800 ">Seguridad en Nuestra Página</h2>
        <div class="container px-4 mx-auto font-poppins">
        <div class="mb-8 text-center">
            <p class="text-gray-600">Nos aseguramos de que tu conexión sea segura y confiable. A continuación, te presentamos las medidas de seguridad que implementamos para proteger tu información y garantizar una experiencia segura en nuestra página web.</p>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div class="p-6 text-center bg-white border rounded-lg shadow-lg border-emerald-800">
                <i class="mb-4 text-4xl text-green-500 fas fa-lock"></i>
                <h3 class="mb-2 text-xl font-semibold text-gray-800">Certificado SSL</h3>
                <p class="mb-4 text-gray-600">Nuestra página utiliza un certificado SSL para asegurar que tu información esté protegida. Esto incluye:</p>
                <ul class="text-left text-gray-600 list-disc list-inside">
                    <li>Encriptación de datos sensibles</li>
                    <li>Protección contra ataques de intermediarios</li>
                    <li>Autenticación de la identidad del servidor</li>
                    <li>Confianza y seguridad para los usuarios</li>
                </ul>
            </div>
            <div class="p-6 text-center bg-white border rounded-lg shadow-lg border-emerald-800">
                <i class="mb-4 text-4xl text-blue-500 fas fa-shield-alt"></i>
                <h3 class="mb-2 text-xl font-semibold text-gray-800">Conexión HTTPS</h3>
                <p class="mb-4 text-gray-600">Usamos HTTPS para garantizar que tu conexión sea segura y encriptada. Beneficios de HTTPS:</p>
                <ul class="text-left text-gray-600 list-disc list-inside">
                    <li>Protección de la integridad de los datos</li>
                    <li>Confidencialidad de la información transmitida</li>
                    <li>Autenticación del sitio web</li>
                    <li>Mejora en el ranking de búsqueda</li>
                </ul>
            </div>
            <div class="p-6 text-center bg-white border rounded-lg shadow-lg border-emerald-800">
                <i class="mb-4 text-4xl text-red-500 fas fa-user-shield"></i>
                <h3 class="mb-2 text-xl font-semibold text-gray-800">Conexión Segura</h3>
                <p class="mb-4 text-gray-600">Tu conexión es segura y protegida contra cualquier amenaza. Esto incluye:</p>
                <ul class="text-left text-gray-600 list-disc list-inside">
                    <li>Protección contra malware y phishing</li>
                    <li>Monitoreo constante de seguridad</li>
                    <li>Actualizaciones regulares de seguridad</li>
                    <li>Soporte técnico especializado</li>
                </ul>
            </div>
        </div>
        <div class="mt-8 text-center">
            <p class="text-gray-600">En resumen, nos comprometemos a mantener tu información segura y a proporcionarte una experiencia de navegación confiable. Si tienes alguna pregunta o inquietud sobre nuestra seguridad, no dudes en contactarnos.</p>
        </div>
    </div>

      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import HomeInfoCard from '@/components/cards/HomeInfoCard.vue';
import MainLayout from '@/layouts/MainLayout.vue'
import personThinking from '@/assets/img/womenThinking.jpg'
import NewsCard from '@/components/cards/NewsCard.vue';
import AyurvedaInfo from '@/components/AvurvedaInfo.vue';

const info1 = {
  titleInfo: 'Respira libremente con JICOF: El alivio que necesitas',
  strongTitle: 'ALIVIO NATURAL PARA TUS PULMONES',
   contentInfo: 'JICOF es un suplemento 100% natural formulado para cuidar y restaurar tu salud respiratoria. Gracias a una combinación única de ingredientes ayurvédicos como Kantakari, Yashtimaghu, Bibhitaki, Vasa y Talishadi churma, este producto aborda problemas como la tos persistente, la acumulación de flema y la irritación en las vías respiratorias. Cada hierba ha sido seleccionada por sus propiedades específicas: Kantakari ayuda a despejar las vías respiratorias; Yashtimaghu calma y protege la garganta; Bibhitaki fortalece el sistema inmunológico y reduce inflamaciones, mientras que Vasa y Talishadi churma trabajan para facilitar la expulsión de mucosidad atrapada en los pulmones.',
  contentInfo2: 'A diferencia de los productos químicos convencionales, JICOF ofrece un alivio suave pero efectivo, sin efectos secundarios ni adicciones. Este suplemento no solo se enfoca en aliviar los síntomas, sino también en mejorar tu salud respiratoria a largo plazo. Al incluir JICOF en tu rutina, no solo recuperas tu capacidad de respirar libremente, sino que también fortaleces tu sistema respiratorio para prevenir futuras afecciones. Es ideal para quienes buscan una solución natural, segura y respaldada por la sabiduría ayurvédica.'
};

const info2 = {
  titleInfo: 'JICOF: El poder natural para cuidar tus pulmones',
  strongTitle: 'SALUD RESPIRATORIA INTEGRAL',
 contentInfo: 'JICOF es más que un simple remedio; es un suplemento que combina la tradición y la naturaleza para cuidar tu sistema respiratorio. Formulado con ingredientes como Talishadi churma y Vasa, este producto se basa en la medicina ayurvédica, conocida por sus métodos holísticos para tratar la tos y otros problemas respiratorios. Su acción 100% natural asegura que los componentes sean fácilmente absorbidos por el cuerpo, maximizando su efectividad sin causar efectos secundarios. Además, al estar libre de químicos y aditivos sintéticos, JICOF es una opción más segura y confiable para cualquier persona, incluyendo aquellos con sensibilidad a los medicamentos convencionales.',
  contentInfo2: 'Cada ingrediente de JICOF tiene un propósito claro: reducir la flema, calmar la inflamación y proteger las vías respiratorias de irritantes externos como el polvo y la contaminación. Yashtimaghu, por ejemplo, es conocido por sus propiedades calmantes para la garganta, mientras que Kantakari y Bibhitaki trabajan para fortalecer las defensas del sistema respiratorio. Al elegir JICOF, estás optando por un enfoque natural y efectivo para recuperar la salud de tus pulmones y aliviar problemas respiratorios comunes.'
};

const info3 = {
  titleInfo: 'Despierta tu bienestar respiratorio con JICOF',
  strongTitle: 'UN SISTEMA RESPIRATORIO FUERTE',
  contentInfo: 'JICOF ha sido diseñado para abordar múltiples problemas respiratorios de manera integral. Desde el alivio inmediato de la tos hasta la mejora de la función pulmonar, este suplemento es un aliado esencial para mantener tus vías respiratorias en óptimas condiciones. Ingredientes como Vasa y Bibhitaki trabajan en conjunto para desinflamar las vías respiratorias, mejorar la oxigenación y facilitar la expulsión de flema acumulada. Además, la presencia de Yashtimaghu asegura que se calme la irritación en la garganta, aliviando molestias mientras se promueve una recuperación rápida.',
  contentInfo2: 'El uso constante de JICOF no solo alivia los síntomas actuales, sino que también ayuda a prevenir futuros episodios de congestión y tos. Talishadi churma aporta propiedades antibacterianas y antiinflamatorias, mientras que Kantakari fortalece el sistema inmunológico para que puedas enfrentar mejor los cambios de clima o la exposición a contaminantes. Este enfoque integral convierte a JICOF en una solución confiable y natural para mantener un sistema respiratorio saludable y protegido.'

};

const info4 = {
  titleInfo: 'La fórmula ancestral de JICOF para liberar flemas',
  strongTitle: 'LIBERACIÓN DE FLEMAS',
   contentInfo: 'JICOF no solo está diseñado para aliviar los síntomas respiratorios, sino también para promover una limpieza profunda de las vías respiratorias. La acción de sus ingredientes ayurvédicos contribuye a eliminar toxinas y otros agentes nocivos que pueden obstruir las vías respiratorias. El Vasa y Talishadi churma son esenciales en este proceso, ya que ayudan a despejar la mucosidad y eliminar las impurezas, promoviendo una respiración más libre y eficiente. Además, la sinergia de estos ingredientes favorece la desintoxicación de los pulmones, ayudando a restaurar su funcionamiento óptimo.',
  contentInfo2: 'A través de un uso regular de JICOF, se mejora no solo la limpieza de las vías respiratorias, sino también la protección frente a contaminantes y partículas externas. Esto es especialmente beneficioso para quienes viven en entornos urbanos o tienen contacto frecuente con alérgenos. JICOF se convierte en una herramienta integral para mantener las vías respiratorias limpias y libres de obstrucciones, promoviendo una respiración más profunda y relajada.'
};

const info5 = {
  titleInfo: 'Cómo JICOF transforma tu respiración',
  strongTitle: 'RESPIRACIÓN RENOVADA',
contentInfo: 'La regeneración de las vías respiratorias es otro de los beneficios claves que JICOF ofrece. Con ingredientes como Yashtimaghu, Bibhitaki y Kantakari, este suplemento actúa como un regenerador natural de los tejidos respiratorios, reparando el daño causado por infecciones respiratorias o la exposición constante a irritantes. Estos ingredientes favorecen la regeneración celular, mejorando la salud de las membranas mucosas en los pulmones y la garganta, lo que se traduce en una mejor capacidad respiratoria.',
  contentInfo2: 'Además de reparar los daños, JICOF ayuda a fortalecer las defensas del sistema respiratorio. La acción antioxidante de algunos de sus componentes combate el daño causado por los radicales libres, lo que previene afecciones respiratorias crónicas y reduce la vulnerabilidad a futuros problemas pulmonares. De esta manera, JICOF no solo alivia, sino que también restaura la salud respiratoria a largo plazo.'
};

const info6 = {
  titleInfo: 'JICOF: Inspirado en la naturaleza, diseñado para ti',
  strongTitle: '100% NATURAL Y EFECTIVO',
 contentInfo: 'JICOF es un suplemento natural que utiliza los principios de la medicina ayurvédica para promover la salud respiratoria. A diferencia de otros productos que pueden contener químicos o aditivos artificiales, JICOF es completamente libre de sustancias sintéticas, lo que garantiza una experiencia más segura y suave para tu cuerpo. Las hierbas utilizadas, como Kantakari y Talishadi churma, son conocidas por su capacidad para despejar las vías respiratorias y proteger los pulmones de la irritación, la tos y la acumulación de flema.',
  contentInfo2: 'Además, la combinación de ingredientes naturales de JICOF hace que el cuerpo los asimile fácilmente, lo que potencia su efectividad. Al no depender de productos químicos, JICOF no solo es una opción más saludable, sino también una forma más respetuosa con tu cuerpo para mantener las vías respiratorias en condiciones óptimas. Si buscas una solución natural y eficaz para aliviar la tos, eliminar flemas y mejorar la respiración, JICOF es la opción ideal.'
};

const info7 = {
  titleInfo: 'Protege tus pulmones con JICOF',
  strongTitle: 'FORTALECIMIENTO RESPIRATORIO',
  contentInfo: 'Las vías respiratorias son esenciales para una correcta oxigenación del cuerpo. No solo se encargan de llevar el aire a los pulmones, sino que también filtran y protegen de agentes externos como polvo, contaminantes y alérgenos. Mantenerlas saludables es crucial para una buena calidad de vida, ya que cualquier obstrucción o inflamación puede afectar la capacidad del cuerpo para obtener el oxígeno necesario. JICOF ayuda a limpiar y proteger las vías respiratorias, asegurando que el aire llegue a los pulmones de manera eficiente.',
  contentInfo2: 'Unas vías respiratorias saludables permiten una mejor oxigenación del cuerpo, lo que mejora la energía, la concentración y el bienestar general. JICOF, con sus ingredientes naturales, favorece una respiración fluida y sin obstrucciones, además de ayudar a reducir la irritación y la inflamación en la garganta y los pulmones. Con su uso regular, no solo aliviarás la tos y eliminarás las flemas, sino que también optimizarás la salud respiratoria, asegurando que tu cuerpo reciba el aire que necesita para funcionar correctamente.'
};

const info11 = {
  titleInfo: 'JICOF y su poder en la salud respiratoria',
  strongTitle: 'DESCONGESTIÓN NATURAL',
  contentInfo: 'El uso de JICOF no solo ofrece un alivio inmediato para la tos y las flemas, sino que también promueve la salud respiratoria a largo plazo. Los ingredientes naturales de JICOF, como Kantakari, Yashtimaghu y Bibhitaki, ayudan a fortalecer las defensas respiratorias, evitando futuras afecciones. Además, estos ingredientes tienen propiedades antiinflamatorias y antioxidantes que protegen los pulmones y las vías respiratorias del daño causado por la exposición constante a agentes irritantes como la contaminación, el humo o los alérgenos.',
  contentInfo2: 'A largo plazo, el uso continuo de JICOF puede mejorar la capacidad respiratoria general, fortalecer las mucosas respiratorias y reducir la probabilidad de desarrollar problemas respiratorios crónicos. Con JICOF, no solo estás aliviando los síntomas actuales, sino también protegiendo tus pulmones y favoreciendo una respiración más saludable. Esto convierte a JICOF en una excelente opción para quienes buscan un enfoque natural y duradero para mantener la salud respiratoria, incluso en condiciones difíciles o alérgicas.'
};

const infoExtra1 = {
  title: '¿Por qué elegir JICOF para tu salud respiratoria?',
  info1: 'JICOF es un suplemento formulado con ingredientes naturales de la medicina ayurvédica, conocidos por sus propiedades para aliviar la tos, reducir la congestión y facilitar la respiración. Al elegir JICOF, optas por una opción eficaz y segura, libre de aditivos y productos químicos artificiales, que trabaja de manera integral para mantener tus vías respiratorias saludables.',
  info2: 'Este suplemento es ideal para quienes buscan un alivio rápido y efectivo de la tos y la flema, y también para quienes desean prevenir futuras afecciones respiratorias. Los ingredientes de JICOF, como el Kantakari y el Vasa, son conocidos por sus potentes efectos expectorantes, que ayudan a eliminar la mucosidad acumulada en las vías respiratorias.',
  info3: 'Al elegir JICOF, no solo estás mejorando la calidad de tu respiración, sino también protegiendo la salud de tus pulmones de irritaciones y posibles infecciones. Es una opción natural, segura y confiable para el bienestar respiratorio en cualquier momento del año.'
};

const infoExtra2 = {
  title: 'JICOF: Un suplemento natural para las vías respiratorias',
  info1: 'JICOF está compuesto por una mezcla única de hierbas ayurvédicas que han sido utilizadas durante siglos para mejorar la salud respiratoria. Entre sus ingredientes se encuentran el Yashtimaghu y el Bibhitaki, conocidos por sus propiedades antiinflamatorias que ayudan a reducir la irritación en las vías respiratorias y favorecen una respiración más fácil y libre.',
  info2: 'Este suplemento natural no solo alivia los síntomas de la tos, sino que también promueve la limpieza profunda de las vías respiratorias, eliminando toxinas y alérgenos. Gracias a sus efectos calmantes, JICOF es adecuado para todas las edades y puede usarse tanto de manera preventiva como para el tratamiento de molestias respiratorias agudas.',
  info3: 'Con JICOF, estás eligiendo un enfoque completamente natural para el cuidado de tus vías respiratorias. Los ingredientes tradicionales ayurvédicos trabajan sinérgicamente para mantener el equilibrio en el sistema respiratorio, ayudando a reducir la congestión y promover una respiración más clara y sin esfuerzo.'
};

const infoExtra3 = {
  title: 'Beneficios del uso de JICOF para la salud respiratoria',
  info1: 'JICOF no solo alivia la tos, sino que también mejora la salud general de las vías respiratorias. Sus ingredientes naturales, como el Vasa y el Kantakari, ayudan a fortalecer los pulmones y proteger las vías respiratorias de infecciones y enfermedades. Además, tienen un efecto de limpieza que facilita la eliminación de flemas y reduce la congestión nasal y bronquial.',
  info2: 'El uso regular de JICOF también puede contribuir a una mejor oxigenación del cuerpo, aliviando los síntomas de la tos persistente y ayudando a respirar más fácilmente. Los efectos expectorantes y antiinflamatorios de sus ingredientes apoyan una respiración más fluida, especialmente en temporadas de alergias o infecciones respiratorias.',
  info3: 'A largo plazo, JICOF ayuda a mantener las vías respiratorias saludables, favoreciendo una mayor resistencia a los factores ambientales que pueden afectar la salud respiratoria, como la contaminación o el clima frío. Su fórmula natural es ideal para aquellos que buscan fortalecer sus defensas respiratorias de manera preventiva.'
};

const infoExtra4 = {
  title: 'Cómo JICOF apoya la limpieza de las vías respiratorias',
  info1: 'JICOF tiene un efecto limpiador y purificador en las vías respiratorias. Gracias a la combinación de hierbas como el Bibhitaki y el Talishadi Churma, este suplemento ayuda a despejar las vías respiratorias al eliminar la mucosidad y las toxinas acumuladas. La acción expectorante de estos ingredientes facilita la eliminación de flemas, lo que resulta en una respiración más fácil y sin esfuerzo.',
  info2: 'Además, JICOF ayuda a reducir la inflamación en las vías respiratorias, lo que mejora la circulación del aire y reduce la sensación de opresión en el pecho. Al limpiar las vías respiratorias de impurezas y alérgenos, JICOF contribuye a un sistema respiratorio más limpio y saludable, permitiendo que el aire llegue de manera eficiente a los pulmones.',
  info3: 'Utilizar JICOF regularmente apoya la desintoxicación de las vías respiratorias y mejora la capacidad del cuerpo para prevenir infecciones respiratorias. Es una opción ideal para quienes buscan un suplemento natural para mantener las vías respiratorias despejadas y saludables.'
};

const infoExtra5 = {
  title: 'El rol de JICOF en el alivio de la tos y la congestión',
  info1: 'JICOF es altamente eficaz para aliviar la tos y reducir la congestión en las vías respiratorias. Los ingredientes clave, como el Vasa y el Talishadi Churma, tienen propiedades que ayudan a suavizar la garganta, calmar la tos y reducir la irritación en las vías respiratorias superiores. Además, sus efectos expectorantes ayudan a expulsar las flemas, proporcionando alivio inmediato.',
  info2: 'Este suplemento natural actúa rápidamente para reducir la inflamación y el malestar asociado con la tos persistente, ayudando a restaurar la normalidad en el sistema respiratorio. Además, su fórmula a base de hierbas también protege contra los efectos irritantes de la contaminación y otros factores ambientales que pueden empeorar la tos.',
  info3: 'JICOF es una opción ideal para aquellos que sufren de tos crónica o congestión recurrente. Gracias a su fórmula de ingredientes naturales, ofrece un alivio suave pero efectivo, sin los efectos secundarios comunes de los medicamentos tradicionales para la tos.'
};

const infoExtra6 = {
  title: 'JICOF: Un suplemento natural para una respiración libre',
  info1: 'JICOF promueve una respiración más libre y sin obstrucciones al apoyar la limpieza de las vías respiratorias y reducir la inflamación. Con ingredientes como Kantakari y Yashtimaghu, JICOF ofrece un enfoque completamente natural para mantener las vías respiratorias abiertas y saludables, mejorando la calidad de la respiración en general.',
  info2: 'Además de aliviar la tos y reducir la congestión, JICOF favorece la circulación del aire a través de los pulmones, lo que mejora la oxigenación del cuerpo. Sus ingredientes naturales también ayudan a proteger las vías respiratorias de agentes patógenos y factores irritantes que pueden obstruir el paso del aire.',
  info3: 'El uso continuo de JICOF contribuye a un sistema respiratorio más eficiente y saludable, permitiendo respirar con facilidad, incluso en entornos con alta contaminación o durante las temporadas de alergias respiratorias.'
};

const infoExtra7 = {
  title: 'La importancia de unas vías respiratorias saludables',
  info1: 'Las vías respiratorias son esenciales para el correcto funcionamiento del cuerpo. Aseguran que el aire llegue a los pulmones, donde se oxigena la sangre. Mantenerlas libres de obstrucciones y saludables es vital para una correcta oxigenación y un buen estado general de salud. JICOF trabaja para mantener las vías respiratorias limpias, despejadas y sin inflamación.',
  info2: 'La acumulación de mucosidad, el polvo, la contaminación o las infecciones pueden afectar la salud respiratoria, provocando tos, dificultad para respirar o infecciones recurrentes. JICOF, con sus ingredientes naturales, combate estos problemas de manera eficaz, ayudando a restaurar la salud de las vías respiratorias.',
  info3: 'El uso regular de JICOF refuerza las defensas respiratorias y promueve la limpieza profunda de las vías respiratorias, lo que favorece la salud a largo plazo y reduce el riesgo de enfermedades respiratorias.'
};

const infoExtra8 = {
  title: 'Cómo JICOF mejora la respiración y combate la tos',
  info1: 'JICOF está diseñado para aliviar la tos y las afecciones respiratorias, proporcionando un alivio rápido y eficaz. Los ingredientes naturales como el Bibhitaki y el Vasa tienen propiedades calmantes que ayudan a reducir la irritación en la garganta, mientras que otros componentes expectorantes facilitan la eliminación de la flema acumulada.',
  info2: 'Además, JICOF ayuda a reducir la congestión nasal y bronquial, lo que mejora la capacidad de respirar sin esfuerzo. Su acción antiinflamatoria alivia la presión en el pecho y permite una respiración más profunda y fluida.',
  info3: 'Con JICOF, experimentarás un alivio efectivo para la tos y la congestión, sin los efectos secundarios de los productos farmacéuticos tradicionales, lo que lo convierte en una opción segura y natural para mantener las vías respiratorias claras.'
};

const infoExtra11 = {
  title: 'Los beneficios de usar JICOF para la salud respiratoria a largo plazo',
  info1: 'El uso prolongado de JICOF ayuda a fortalecer las vías respiratorias y protegerlas de futuros problemas respiratorios. Su fórmula de hierbas ayurvédicas promueve una limpieza continua de las vías respiratorias, evitando la acumulación de mucosidad y ayudando a prevenir la irritación y la inflamación.',
  info2: 'Además, JICOF fortalece las defensas respiratorias del cuerpo, lo que mejora la capacidad para resistir infecciones y otros factores ambientales dañinos, como la contaminación o los cambios de temperatura. A largo plazo, el uso de JICOF favorece una respiración más saludable y menos obstruida.',
  info3: 'Con los beneficios acumulativos de JICOF, estarás mejor preparado para enfrentar las estaciones de alergias o la exposición a agentes irritantes, manteniendo tus vías respiratorias limpias y funcionando de manera óptima.'
};


</script>

<style scoped></style>
