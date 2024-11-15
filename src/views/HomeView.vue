<template>
  <div class="">
    <MainLayout>
      <template #main>

        <!-- Home Banner -->
          <article class="w-full overflow-hidden lg:flex lg:items-center">
    <!-- Imagen a la izquierda -->
    <img 
        src="../assets/img/mainHome.jpg" 
        class="lg:w-2/3 animate-fade-up lg:h-screen" 
        alt="">

    <!-- Contenido a la derecha -->
    <div
  class="flex flex-col items-center pt-2 lg:items-center lg:flex lg:justify-around lg:w-1/3 lg:h-screen rounded-bl-md rounded-br-md bg-gradient-to-tl from-orange-50 via-orange-100 to-orange-200 lg:py-20">
  <h2 class="hidden text-3xl font-extrabold text-center text-orange-900 font-poppins animate-fade-left lg:block">
    El suplemento natural para un 
    <strong class="px-1 text-white bg-orange-900">HÍGADO</strong>
     fuerte y vital
  </h2>
  <h1 class="text-xl font-extrabold text-center text-gray-800 lg:text-3xl font-poppins animate-fade-left animate-delay-300">
    <span class="text-orange-800"> 
      <strong class="px-1 text-white bg-orange-900">PURIFIQUE SU HÍGADO</strong>
       con LIVAD</span>
  </h1>
  <h4 class="text-xl font-extrabold text-center text-green-900 lg:text-3xl font-concert-one animate-fade-left animate-delay-300">
    Medicina ayurvédica con origen en la India
  </h4>

  <a href="#LIVAD"
    class="p-1 my-3 font-bold text-white bg-orange-600 rounded-md lg:rounded-lg lg:text-xl lg:p-2 font-poppins animate-bounce">
    Conozca más
  </a>
</div>

</article>

        <p class="mb-6" id="LIVAD" ></p>
          <!-- Intro Info Content -->
        <section  class="px-3 mt-20 space-y-28">
          <HomeInfoCard :img-url="'https://i.ibb.co/0nwdqw2/ayurvedicimages.webp'" :show-img-left="false"
          :title="info6.titleInfo" :strong-title="info6.strongTitle" :description1="info6.contentInfo" :description2="info6.contentInfo2" />
          <HomeInfoCard :show-img-left="true" :img-url="personThinking" :title="info1.titleInfo" :strong-title="info1.strongTitle"
            :description1="'LIVAD es un suplemento 100% natural formulado con los mejores ingredientes de la medicina ayurvédica, conocido por su capacidad para apoyar la salud del hígado de manera efectiva y sin efectos secundarios. A diferencia de otros suplementos hepáticos disponibles en el mercado, LIVAD no contiene aditivos ni productos químicos artificiales, lo que lo convierte en una opción segura y confiable.'"
            :description2="info1.contentInfo2" />
          <HomeInfoCard :show-img-left="false"
            :img-url="'https://images.pexels.com/photos/5416013/pexels-photo-5416013.jpeg?auto=compress&cs=tinysrgb&w=600'"
            :title="info2.titleInfo" :strong-title="info2.strongTitle" :description1="info2.contentInfo" :description2="info2.contentInfo2" />
          <HomeInfoCard :show-img-left="true"
            :img-url="'https://i.ibb.co/5RJtcnf/F4-Qm-Ec-WYRAIx-AJi-Tzho76u-Le-UBQpu7-Geq-YLbbv-Wgo-P4-Of-Egn-A.webp'"
            :title="info3.titleInfo" :strong-title="info3.strongTitle" :description1="info3.contentInfo" :description2="info3.contentInfo2" />
          <HomeInfoCard :show-img-left="false" :img-url="'https://i.ibb.co/mt41X1z/desinc.webp'"
            :title="info4.titleInfo" :strong-title="info4.strongTitle" :description1="info4.contentInfo" :description2="info4.contentInfo2" />
          <HomeInfoCard :show-img-left="true"
            :img-url="'https://i.ibb.co/BzMK61R/DALL-E-2024-11-11-15-49-01-A-realistic-illustration-of-a-human-liver-on-a-white-background-Beside-th.jpg'"
            :title="info5.titleInfo" :strong-title="info5.strongTitle" :description1="info5.contentInfo" :description2="info5.contentInfo2" />
         
          <HomeInfoCard :img-url="'https://i.ibb.co/sjkTMVR/higado-Tocando.webp'" :show-img-left="true"
            :title="info7.titleInfo" :strong-title="info7.strongTitle" :description1="info7.contentInfo" :description2="info7.contentInfo2" />
          <HomeInfoCard
            :img-url="'https://i.ibb.co/jTMFxKX/DALL-E-2024-11-11-16-03-07-A-human-liver-in-the-center-of-the-image-with-surrounding-medicinal-plant.jpg'"
            :show-img-left="true" :title="info11.titleInfo" :strong-title="info11.strongTitle" :description1="info11.contentInfo"
            :description2="info11.contentInfo2" />
          </section>
          <div class="w-3/4 m-auto h-[1px] mt-6 bg-rose-900"/>
        <!-- ayurveda section -->
        <section class="flex flex-col px-3 space-y-5 font-poppins mt-11 ">
          <h2 class="text-2xl font-medium text-center text-rose-700">¿Que significa que LIVAD sea ayurvédico?</h2>

          <h3>LIVAD es un suplemento ayurvédico
            <strong class="text-emerald-700">
              100% natural
            </strong>, formulado para apoyar y mantener la 
            <strong class="text-rose-700">SALUD DEL HÍGADO</strong>
            . Gracias a sus ingredientes naturales, ayuda
            a promover una
            <strong class="text-rose-700">FUNCIÓN  HEPÁTICA EQUILIBRADA</strong> 
             función hepática equilibrada
             , favoreciendo el bienestar general y la vitalidad.
          </h3>

          <div class="flex justify-center">
            <img class="rounded-lg"
              src="https://images.pexels.com/photos/20419194/pexels-photo-20419194/free-photo-of-flowers-in-glass-bottles-on-table.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="">
          </div>
          <h4>La Ayurveda es un sistema tradicional de medicina originario de la India, con más de 5,000 años de
            historia. Su nombre proviene del sánscrito, donde "Ayur" significa "vida" y "Veda" significa "sabiduría" o
            "conocimiento", por lo que se traduce como "el conocimiento de la vida". La Ayurveda se enfoca en mantener
            el equilibrio entre cuerpo, mente y espíritu, considerando a cada individuo como un ser único.</h4>

          <h4>El sistema ayurvédico se basa en la idea de que todos los seres vivos están compuestos por cinco elementos
            (tierra, agua, fuego, aire y éter) y que la salud depende del equilibrio de tres doshas: Vata, Pitta y
            Kapha, que son combinaciones de estos elementos. Cada persona tiene una constitución única de doshas, y la
            salud se logra cuando estos están en equilibrio.</h4>

            <div class="w-3/4 m-auto h-[1px] t-14 bg-rose-900"/>
        </section>

        <!-- news section -->
        <h2 class="text-2xl font-medium text-center text-rose-700 md:text-3xl">Noticias</h2>
        <section class="flex flex-col flex-wrap w-full px-3 space-y-5 font-poppins mt-11 md:flex-row md:justify-around">
          <NewsCard 
          :href-link="'https://salud.nih.gov/preguntele-a-carla/por-que-es-importante-la-salud-del-higado'"
          :img-src="'https://salud.nih.gov/sites/salud/files/styles/teaser_900x527/public/2022-12/201403-higado-estomago-intestinos-cuerpo.jpg?itok=Li-SVfnn'"
          :title="'¿Por qué es importante la salud del hígado?'"
          :description="'El hígado es uno de los órganos más importantes del cuerpo y el órgano interno más grande. Ayuda al cuerpo a digerir los alimentos, almacenar energía y eliminar toxinas.'"
          />
          <NewsCard
          :title="'Cómo limpiar el hígado según Ayurveda – Limpieza hepática'"
          :href-link="'https://www.mahatayurveda.com/como-limpiar-el-higado/'"
          :img-src="'https://images.pexels.com/photos/4051643/pexels-photo-4051643.jpeg?auto=compress&cs=tinysrgb&w=600'"
          :description="'Nuestro cuerpo es sabio y tiene el poder de auto-regenerarse de forma autónoma haciendo solo uso del poder de sus órganos y las sustancias que estos generan.  Pero muchas veces, nuestro cuerpo está cargado y fatigado por agentes externos y toxinas; eso hace que debamos ayudarle en su proceso de limpieza hepática y regeneración, pero ¿Por qué debemos desintoxicar el hígado? ¿Cómo limpiar el hígado?. '"
          />
          <NewsCard
          img-src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600"
          href-link="https://www.infobae.com/leamos/2022/08/28/depurar-el-higado-para-una-limpieza-fisica-y-emocional/"
          title="Depurar el hígado para una limpieza física y emocional"
          description="El hígado es uno de los órganos mas importantes del cuerpo, y ayuda al cuerpo a digerir los alimentos, almacenar energía y eliminar toxinas."
          />
          <NewsCard
          href-link="https://indiaveda.com/blog/post/limpia-cuerpo-hierbas-ayurveda"
          description="Imagina en cómo sientes tu cuerpo cuando está limpio y libre de sustancias tóxicas y nocivas que encuentras a diario. Con hierbas desintoxicantes, no solo tu piel puede volverse más clara y tu cabello más saludable, sino que puedes concentrarte mejor y tener más vitalidad."
          img-src="https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="7 Poderosas Hierbas del Ayurveda para Desintoxicar tu cuerpo"
          />
          <NewsCard
          href-link="https://www.lavanguardia.com/magazine/experiencias/20240831/9901400/ayurveda-filosofia-detox-vida-moderna.html"
          img-src="https://www.lavanguardia.com/files/image_607_298/files/fp/uploads/2018/10/08/5fa44641ecacf.r_d.217-96-7969.jpeg"
          title="Ayurveda: Filosofía de detox y vida moderna"
          description="Originaria de India, esta ciencia milenaria enseña a equilibrar cuerpo, mente y alma. Su base es la alimentación saludable y la depuración de toxinas"
          />
        </section>
        <div class="w-full h-[1px] bg-rose-900 my-8"/>
        <!-- Ads Section -->
        <h3 class="mt-6 text-2xl font-bold text-center text-rose-900 font-poppins">Le puede interesar</h3>
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
        <section class="p-6 bg-white rounded-lg shadow-md security-info">
  <h2 class="mb-4 text-2xl font-extrabold text-center text-rose-800">🔒 Página Segura</h2>
  <p class="mb-4 text-gray-700">Nuestra página utiliza HTTPS para garantizar una conexión segura. HTTPS (Protocolo de Transferencia de Hipertexto Seguro) es una versión protegida de HTTP, el protocolo utilizado para la transmisión de datos entre tu navegador y el sitio web. La "S" al final de HTTPS significa "Seguro", lo que implica que la comunicación está cifrada y protegida.</p>
  
  <p class="mb-4 text-gray-700">Además, contamos con tecnología SSL (Capa de Conexión Segura) para salvaguardar tus datos. SSL es un estándar global de seguridad que asegura una comunicación cifrada entre tu navegador y nuestro servidor, garantizando que la información transmitida se mantenga privada e íntegra.</p>
  
  <p class="text-gray-700">Gracias a estas tecnologías, puede tener la tranquilidad de que sus datos están protegidos mientras navegas por nuestro sitio web.</p>
</section>

      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import HomeInfoCard from '@/components/cards/HomeInfoCard.vue';
import MainLayout from '@/layouts/MainLayout.vue'
// images input
import personThinking from '@/assets/img/womenThinking.jpg'
import NewsCard from '@/components/cards/NewsCard.vue';


const info1 = {
  titleInfo: '¿Por qué elegir LIVAD para su salud hepática?',
  strongTitle:'SU SALUD HEPÁTICA',
  contentInfo: 'LIVAD es un suplemento 100% natural formulado con los mejores ingredientes de la medicina ayurvédica, conocido por su capacidad para apoyar la salud del hígado de manera efectiva y sin efectos secundarios. A diferencia de otros suplementos hepáticos disponibles en el mercado, LIVAD no contiene aditivos ni productos químicos artificiales, lo que lo convierte en una opción segura y confiable. El hígado es uno de los órganos más importantes para la desintoxicación del cuerpo, por lo que mantenerlo en óptimas condiciones es esencial para una buena salud general. LIVAD combina hierbas tradicionales que han sido utilizadas durante siglos para promover la salud hepática, como el Amalaki, Guduchi y Bhringraj, que ayudan a desintoxicar, regenerar y proteger el hígado de toxinas y daños. Además, la inclusión de probióticos en LIVAD mejora la digestión, lo que facilita la absorción de nutrientes y apoya una detoxificación efectiva. Elegir LIVAD significa elegir un suplemento que respeta la naturaleza de su cuerpo y promueve la salud de manera integral. Con LIVAD, su hígado obtiene el apoyo que necesita para funcionar correctamente, mejorando su bienestar general.',
  contentInfo2: ' El hígado es uno de los órganos más importantes para la desintoxicación del cuerpo, por lo que mantenerlo en óptimas condiciones es esencial para una buena salud general. LIVAD combina hierbas tradicionales que han sido utilizadas durante siglos para promover la salud hepática, como el Amalaki, Guduchi y Bhringraj, que ayudan a desintoxicar, regenerar y proteger el hígado de toxinas y daños. Además, la inclusión de probióticos en LIVAD mejora la digestión, lo que facilita la absorción de nutrientes y apoya una detoxificación efectiva. Elegir LIVAD significa elegir un suplemento que respeta la naturaleza de su cuerpo y promueve la salud de manera integral. Con LIVAD, su hígado obtiene el apoyo que necesita para funcionar correctamente, mejorando su bienestar general.'
};

const info2 = {
  titleInfo: 'LIVAD: Un suplemento ayurvédico',
  strongTitle: '100% NATURAL',
  contentInfo: 'LIVAD es un suplemento completamente natural que emplea el poder de la medicina ayurvédica para cuidar su hígado de manera segura y efectiva. La medicina ayurvédica es una tradición milenaria que se basa en el uso de plantas medicinales y hierbas naturales para mantener el equilibrio del cuerpo. En este caso, LIVAD se ha formulado con una cuidadosa selección de ingredientes ayurvédicos que han sido utilizados durante siglos para fortalecer y desintoxicar el hígado. Cada ingrediente se elige por sus propiedades únicas que, en conjunto, proporcionan un enfoque holístico para la salud hepática. Los ingredientes en LIVAD como Amalaki, Guduchi, Bhringraj y otros, son conocidos por sus efectos protectores y regeneradores sobre las células hepáticas.',
  contentInfo2: 'Al ser 100% natural, LIVAD ofrece una opción más segura y menos invasiva para quienes desean mejorar su salud hepática sin recurrir a productos farmacéuticos. Los efectos beneficiosos de los ingredientes naturales no solo favorecen la regeneración del hígado, sino que también ayudan a mejorar la digestión y fortalecer el sistema inmunológico, lo que favorece una salud integral. Con LIVAD, estás eligiendo un suplemento que respeta la naturaleza del cuerpo humano y ofrece resultados efectivos sin los efectos secundarios de los productos químicos artificiales.'
};

const info3 = {
  titleInfo: 'Beneficios del uso de LIVAD para el',
  strongTitle:'BIENESTAR DIGESTIVO',
  contentInfo: 'LIVAD no solo está formulado para mejorar la salud hepática, sino que también tiene un impacto positivo en el bienestar digestivo general. El hígado juega un papel fundamental en el proceso digestivo, ya que produce la bilis, un líquido esencial para la descomposición de las grasas. Cuando el hígado no está funcionando correctamente, el proceso digestivo se ve afectado, lo que puede provocar problemas como la indigestión, la acidez estomacal y los trastornos intestinales. LIVAD, al contener ingredientes como Amalaki y Guduchi, ayuda a regular la producción de bilis y mejora la digestión de las grasas, favoreciendo una digestión más eficiente.',
  contentInfo2: 'La inclusión de probióticos en LIVAD también juega un papel crucial en la salud digestiva. Los probióticos son bacterias beneficiosas que apoyan la microbiota intestinal y ayudan a mantener el equilibrio de las bacterias en el tracto digestivo. Un microbioma intestinal equilibrado es esencial para una digestión adecuada y para la absorción de nutrientes. Los probióticos presentes en LIVAD contribuyen a la reducción de la inflamación intestinal, mejoran el tránsito intestinal y pueden ayudar a prevenir problemas como el estreñimiento o la diarrea. Además, al mejorar la flora intestinal, LIVAD contribuye a un sistema digestivo más saludable y eficiente, lo que, a su vez, apoya la salud general del cuerpo.A través de sus ingredientes naturales y probióticos, LIVAD actúa de manera integral en el sistema digestivo, ayudando a prevenir trastornos digestivos comunes y mejorando la absorción de nutrientes. Al usar LIVAD, no solo estás protegiendo su hígado, sino también optimizando su sistema digestivo, lo que mejora su salud y bienestar general.',
}

const info4 = {
  titleInfo: 'Cómo LIVAD apoya la',
  strongTitle:'DESINTOXICACIÓN DEL CUERPO',
  contentInfo: 'LIVAD es mucho más que un suplemento para la salud hepática; también juega un papel crucial en el proceso de desintoxicación del cuerpo. El hígado es uno de los órganos principales en el proceso de eliminación de toxinas, ya que filtra las sustancias nocivas de la sangre y las convierte en compuestos que pueden ser eliminados de forma segura. Sin embargo, con el paso del tiempo, la exposición a toxinas ambientales, alimentos procesados, el alcohol y el estrés pueden sobrecargar el hígado, reduciendo su capacidad de desintoxicación.',
  contentInfo2: 'Además, LIVAD no solo apoya la desintoxicación del hígado, sino que también promueve la eliminación de toxinas del cuerpo en general. La combinación de hierbas ayurvédicas en este suplemento ayuda a optimizar las funciones de los riñones, el sistema digestivo y la piel, lo que mejora la capacidad del cuerpo para eliminar desechos y toxinas. De esta manera, LIVAD se convierte en un aliado integral en el proceso de limpieza y renovación del organismo.'
}

const info5 = {
  titleInfo: 'El rol de LIVAD en la regeneración celular del hígado',
  strongTitle:'REGENERACIÓN CELULAR DEL HÍGADO',
  contentInfo: 'LIVAD es un suplemento ayurvédico diseñado para apoyar la regeneración y salud del hígado. Con ingredientes clave como Amalaki, que posee potentes propiedades antioxidantes, reduce el estrés oxidativo que daña las células hepáticas, facilitando su reparación y regeneración. Además, Guduchi, una hierba conocida por sus efectos regeneradores, estimula la producción de nuevas células hepáticas saludables y ayuda en la curación de las células dañadas. Juntos, estos ingredientes promueven una función hepática óptima y contribuyen a mantener un hígado saludable, incluso frente a toxinas, infecciones y un estilo de vida poco saludable.',

  contentInfo2: 'Además, el uso continuo de LIVAD puede prevenir el daño hepático futuro, ya que ayuda a mantener el hígado en su estado más saludable posible. Al optimizar la función hepática y regenerar las células dañadas, LIVAD ofrece un enfoque natural y efectivo para restaurar la salud del hígado y asegurar que este órgano vital siga funcionando de manera óptima. De esta manera, LIVAD no solo protege el hígado, sino que también fomenta su capacidad para sanar y regenerarse.'
}

const info6 = {
  titleInfo: 'LIVAD: Un suplemento ',
  strongTitle:'100% NATURAL PARA EL HÍGADO', 
  contentInfo: 'LIVAD es un suplemento natural formulado con hierbas ayurvédicas, lo que significa que no contiene ingredientes sintéticos ni productos químicos. En lugar de usar componentes artificiales, LIVAD aprovecha el poder de la naturaleza para promover la salud hepática. Las hierbas utilizadas en este suplemento, como Amalaki, Guduchi y Bhringraj, son conocidas en la medicina ayurvédica por sus beneficios para la salud del hígado y su capacidad para restaurar y proteger este órgano vital.',
  contentInfo2: 'El uso de ingredientes 100% naturales tiene varias ventajas. Primero, estas hierbas son mucho más fáciles de absorber para el cuerpo en comparación con las sustancias sintéticas, lo que significa que LIVAD puede ser más efectivo en el apoyo a la función hepática. Además, los ingredientes naturales suelen tener menos efectos secundarios que los productos farmacéuticos, lo que hace que LIVAD sea una opción más segura y suave para aquellos que buscan mejorar su salud hepática de forma natural.'
};

const info7 = {
  titleInfo: 'La importancia de un',
  strongTitle:'HÍGADO SALUDABLE',
  contentInfo: 'El hígado es un órgano vital que desempeña funciones esenciales en el cuerpo. Procesa los nutrientes de los alimentos, produce bilis para la digestión, ayuda a desintoxicar el cuerpo, almacena energía en forma de glucógeno, regula el colesterol y produce proteínas importantes como la albúmina. Un hígado sano es crucial para mantener todo el organismo funcionando correctamente.',
  contentInfo2: 'Los hábitos de vida poco saludables, como una dieta alta en grasas saturadas, el consumo excesivo de alcohol y la exposición a toxinas, pueden afectar negativamente la función hepática. LIVAD ayuda a mantener un hígado sano mediante hierbas que favorecen la regeneración celular, desintoxican y reducen la inflamación. Al incorporar LIVAD en su rutina, puedes proteger su hígado y contribuir a su bienestar general.'
};


const info11 = {
  titleInfo: 'Cómo LIVAD ayuda en la',
  strongTitle: 'DESINTOXICACIÓN NATURAL DEL HÍGADO',
  contentInfo: 'El hígado es el principal órgano de desintoxicación del cuerpo, esencial para filtrar toxinas y eliminar desechos. Sin embargo, la exposición a contaminantes, alimentos procesados y el estrés pueden sobrecargarlo. LIVAD ayuda a respaldar la desintoxicación natural del hígado con su fórmula ayurvédica especialmente diseñada.',
  contentInfo2: 'Ingredientes como Amalaki (Amla) y Guduchi promueven la eliminación de toxinas acumuladas en el hígado, limpiando el sistema hepático. Además, Bhringraj y Chandan actúan como agentes antiinflamatorios, ayudando a reducir la carga hepática. Al usar LIVAD, apoyas la función hepática y facilitas la desintoxicación natural, permitiendo que el hígado se regenere y mejore la salud general.'
};



</script>

<style scoped></style>