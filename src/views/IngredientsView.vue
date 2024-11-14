<template>
    <div class="">
        <MainLayout>
            <template #main>
            <h1 class="text-3xl font-extrabold text-center text-white bg-orange-700 md:py-7 font-poppins animate-fade">Conozca los ingredientes naturales de LIVAD</h1>
            <div class="grid grid-cols-3">
              <img class="animate-flip-up" src="../assets/img/front.png" alt="">
              <img class="animate-flip-up" src="../assets/img/syrup.png" alt="">
              <img class="animate-flip-up" src="../assets/img/left.png" alt="">
            </div>
            <section class="flex flex-wrap justify-between gap-5 p-4 font-poppins">
  <div class="flex-1 sm:flex-1 md:flex-1 lg:w-1/2">
    <h3 class="mb-4 text-xl font-semibold">Características del Producto</h3>
    <ul class="p-0 list-none">
      <li><strong>Cantidad de Cápsulas:</strong> 60 cápsulas por envase / Botella 200ml</li>
      <li><strong>Tamaño de la Porción:</strong> 1 cápsula/15ml</li>
      <li><strong>Modo de Uso:</strong> Tomar 1 cápsula de 1 a 2 veces al día, preferiblemente con comida o según lo indique un profesional de la salud.</li>
      <li><strong>Almacenamiento:</strong> Mantener en un lugar fresco y seco, lejos de la luz solar directa.</li>
      <li><strong>Advertencias:</strong> Consultar a un profesional de la salud si está embarazada o en período de lactancia. Mantener fuera del alcance de los niños.</li>
      <li><strong>Categoría:</strong> Suplemento dietético</li>
    </ul>
  </div>
  <div class="flex-1 sm:flex-1 md:flex-1 lg:w-1/2">
    <h3 class="mb-4 text-xl font-semibold">Resumen de Ingredientes</h3>
    <ul class="p-0 list-none">
  <li><span class="font-bold">Amalaki 🌿</span> Rico en antioxidantes, protege el hígado contra el daño oxidativo y mejora su desintoxicación.</li>
  <li><span class="font-bold">Guduchi 🌱</span> Apoya la regeneración del hígado y mejora la eliminación de toxinas.</li>
  <li><span class="font-bold">Bhringraj 🍃</span> Promueve la salud hepática y ayuda a reducir el estrés oxidativo en el hígado.</li>
  <li><span class="font-bold">Chandan 🌳</span> Contribuye al equilibrio del sistema hepático y reduce la inflamación.</li>
  <li><span class="font-bold">Karpur Kachari 🌾</span> Mejora la función hepática y actúa como un tónico digestivo.</li>
  <li><span class="font-bold">Katuki 🌱</span> Considerado un potente hepatoprotector, apoya la regeneración y desintoxicación del hígado.</li>
  <li><span class="font-bold">Vasa 🍃</span> Ayuda a proteger las células del hígado y favorece su función natural.</li>
  <li><span class="font-bold">Yasthimadhu 🌿</span> Protege al hígado de daños y mejora su capacidad de recuperación.</li>
  <li><span class="font-bold">Probiótico 🦠</span> Fortalece el intestino, ayudando indirectamente a mejorar la función hepática.</li>
</ul>


  </div>
            </section>
                <section class="flex flex-wrap justify-around gap-5 p-3 bg-slate-200 selection:bg-rose-700 selection:text-white">
                    <BenefictCard 
                    img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsKEn8_udbkIRpNgivz2H_GPcoB_kpLYPcw&s"
                    :title="AmalakiExt.title"
                    :short-resume="AmalakiExt.summary"
                    :long-resume="AmalakiExt.fullExplanation"
                    :list-titles="AmalakiExt.UlContent.liTitles"
                    :list-content="AmalakiExt.UlContent.liContent"
            />
                    <BenefictCard 
                    img-src="https://i.etsystatic.com/7255623/r/il/f9e9d6/2704550040/il_fullxfull.2704550040_mei3.jpg"
                    :title="GuduchiExt.title"
                    :short-resume="GuduchiExt.summary"
                    :long-resume="GuduchiExt.fullExplanation"
                    :list-titles="GuduchiExt.UlContent.liTitles"
                    :list-content="GuduchiExt.UlContent.liContent"
            />
            <BenefictCard 
                    img-src="https://vermiorganics.co/cdn/shop/files/204.jpg?v=1704369242"
                    :title="BhringrajExt.title"
                    :short-resume="BhringrajExt.summary"
                    :long-resume="BhringrajExt.fullExplanation"    
                    :list-titles="BhringrajExt.UlContent.liTitles"
                    :list-content="BhringrajExt.UlContent.liContent"
            />
                    <BenefictCard   
                    img-src="https://i.pinimg.com/originals/6f/f7/77/6ff777d1d126b824b5edb8fdc7ba3353.jpg"
                    :title="ChandanExt.title"
                    :short-resume="ChandanExt.summary"
                    :long-resume="ChandanExt.fullExplanation"    
                    :list-titles="ChandanExt.UlContent.liTitles"
                    :list-content="ChandanExt.UlContent.liContent"
            />
                    <BenefictCard   
                    img-src="https://www.mantra-aromatherapy.co.uk/cdn/shop/files/spikedgingerlily1_1200x1200.jpg?v=1712248247"
                    :title="KarpurKachariExt.title"
                    :short-resume="KarpurKachariExt.summary"
                    :long-resume="KarpurKachariExt.fullExplanation"    
                    :list-titles="KarpurKachariExt.UlContent.liTitles"
                    :list-content="KarpurKachariExt.UlContent.liContent"
            />
                    <BenefictCard   
                    img-src="https://m.media-amazon.com/images/I/81mv5N-vGmL.jpg"
                    :title="KatukiExt.title"
                    :short-resume="KatukiExt.summary"
                    :long-resume="KatukiExt.fullExplanation"    
                    :list-titles="KatukiExt.UlContent.liTitles"
                    :list-content="KatukiExt.UlContent.liContent"
            />
                    
                    <BenefictCard   
                    img-src="https://i.etsystatic.com/38789073/r/il/cd47be/4515927560/il_fullxfull.4515927560_y14p.jpg"
                    :title="VasaExt.title"
                    :short-resume="VasaExt.summary"
                    :long-resume="VasaExt.fullExplanation"    
                    :list-titles="VasaExt.UlContent.liTitles"
                    :list-content="VasaExt.UlContent.liContent"
            />
                    <BenefictCard   
                    img-src="https://ayumd.com/wp-content/uploads/2017/02/Yashtimadhu-Copy.jpg"
                    :title="YasthimadhuExt.title"
                    :short-resume="YasthimadhuExt.summary"
                    :long-resume="YasthimadhuExt.fullExplanation"    
                    :list-titles="YasthimadhuExt.UlContent.liTitles"
                    :list-content="YasthimadhuExt.UlContent.liContent"
            />
                    <BenefictCard   
                    img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDN7MbrJrQqQS9EuDRq8HgZsZh1hAQpkTWIA&s"
                    :title="ProbioticsExt.title"
                    :short-resume="ProbioticsExt.summary"
                    :long-resume="ProbioticsExt.fullExplanation"    
                    :list-titles="ProbioticsExt.UlContent.liTitles"
                    :list-content="ProbioticsExt.UlContent.liContent"
            />
                    <!-- Summary Card -->
                     <div>
                         <article class="w-full p-3 bg-white font-poppins rounded-xl text-slate-800 min-h-96">
                             <h2 class="mb-3 text-3xl font-medium text-center text-rose-800 font-poppins">En resúmen</h2>
                             <p>
                                <strong class="text-white bg-rose-800">
                                    LIVAD</strong>
                                es un suplemento ayurvédico 100% natural diseñado para apoyar y promover la salud del hígado. Su fórmula única combina la sabiduría de la medicina tradicional con ingredientes modernos y efectivos, como probióticos y extractos herbales cuidadosamente seleccionados. LIVAD actúa como un aliado confiable en el bienestar hepático, ayudando a desintoxicar el hígado, reducir el estrés oxidativo y mejorar la digestión. Ideal para quienes buscan una opción natural para cuidar uno de los órganos más importantes del cuerpo.</p>
                             <img class="mx-auto mt-3 rounded-lg pointer-events-none select-none" src="https://images.pexels.com/photos/531062/pexels-photo-531062.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
                            </article>
                     </div>
                </section>
            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import BenefictCard from '@/components/cards/BenefictCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const AmalakiExt = 
  {
    title: 'Amalaki Ext (Emblica officinalis)',
    summary: 'Amalaki, también conocido como grosella india, es una fruta rica en antioxidantes y vitamina C, conocida por sus propiedades para fortalecer el sistema inmunológico, apoyar la salud digestiva y proteger el hígado.',
    fullExplanation: 'El extracto de Amalaki (Emblica officinalis) es utilizado tradicionalmente en la medicina ayurvédica por sus propiedades nutritivas y revitalizantes. Es conocido por su alta concentración de vitamina C y antioxidantes, lo que lo hace útil para combatir los radicales libres y reducir el estrés oxidativo en el organismo. Además, Amalaki es valorado en la salud hepática por su capacidad para proteger el hígado de las toxinas y apoyar el equilibrio de enzimas hepáticas. También ayuda a mejorar la digestión, regular el metabolismo y fortalecer el sistema inmunológico.',
    UlContent: {
      liTitles: [
        'Propiedades antioxidantes',
        'Apoyo al sistema inmunológico',
        'Mejora la digestión',
        'Protección hepática',
        'Propiedades antiinflamatorias',
        'Equilibrio de enzimas hepáticas',
        'Reducción de estrés oxidativo',
        'Regulación del metabolismo'
      ],
      liContent: [
        'Amalaki es una rica fuente de antioxidantes, especialmente vitamina C, que ayuda a combatir el daño de los radicales libres en el cuerpo.',
        'Estimula el sistema inmunológico y ayuda a prevenir infecciones recurrentes, fortaleciendo la resistencia general del cuerpo.',
        'Promueve la digestión saludable al mejorar el flujo de bilis y estimular la función digestiva, aliviando el estreñimiento y la acidez.',
        'Amalaki ayuda a proteger el hígado, promoviendo su función saludable y ayudando a eliminar toxinas del cuerpo.',
        'Tiene propiedades antiinflamatorias que pueden aliviar molestias digestivas y contribuir a la salud general del tracto gastrointestinal.',
        'Ayuda a equilibrar las enzimas hepáticas, apoyando las funciones metabólicas y detoxificantes del hígado.',
        'Reduce el estrés oxidativo en el hígado, protegiendo las células hepáticas del daño.',
        'Contribuye a regular el metabolismo, apoyando tanto el equilibrio de peso como el control de energía en el organismo.'
      ]
    }
  };
  const GuduchiExt = 
  {
    title: 'Guduchi Ext (Tinospora cordifolia)',
    summary: 'Guduchi, también conocida como "Amrita" en sánscrito, es una planta reconocida en la medicina ayurvédica por sus propiedades inmunomoduladoras, desintoxicantes y por su capacidad para promover la salud hepática y digestiva.',
    fullExplanation: 'El extracto de Guduchi (Tinospora cordifolia) es valorado en Ayurveda por sus propiedades rejuvenecedoras y adaptógenas. Es conocido por fortalecer el sistema inmunológico, actuar como un tónico hepático y mejorar la resistencia del cuerpo contra el estrés. Guduchi ayuda a desintoxicar el hígado y a mantener el equilibrio de las enzimas hepáticas. Además, promueve la digestión y es beneficioso para la salud gastrointestinal, ayudando a aliviar problemas como el reflujo y la acidez. Su uso también se extiende a reducir la inflamación, lo que beneficia tanto al hígado como al sistema digestivo.',
    UlContent: {
      liTitles: [
        'Refuerzo del sistema inmunológico',
        'Propiedades adaptógenas',
        'Desintoxicación del hígado',
        'Apoyo a la digestión',
        'Equilibrio de enzimas hepáticas',
        'Propiedades antiinflamatorias',
        'Protección contra el estrés oxidativo',
        'Regulación del metabolismo'
      ],
      liContent: [
        'Guduchi fortalece el sistema inmunológico, ayudando al cuerpo a combatir infecciones y aumentar la resistencia.',
        'Como adaptógeno, Guduchi ayuda al cuerpo a adaptarse al estrés físico y mental, mejorando el bienestar general.',
        'Facilita la desintoxicación del hígado, ayudando a eliminar toxinas acumuladas y promoviendo una función hepática saludable.',
        'Mejora la digestión y alivia problemas digestivos como el reflujo ácido y la indigestión, promoviendo un sistema digestivo saludable.',
        'Contribuye a equilibrar las enzimas hepáticas, ayudando en las funciones de desintoxicación y metabolismo en el hígado.',
        'Tiene propiedades antiinflamatorias que reducen la inflamación en el sistema digestivo y hepático, mejorando el bienestar general.',
        'Ayuda a proteger las células del hígado del daño causado por el estrés oxidativo, promoviendo la regeneración celular.',
        'Favorece la regulación del metabolismo, contribuyendo al equilibrio energético y apoyando la salud general del cuerpo.'
      ]
    }
  };
  const BhringrajExt = {
    title: 'Bhringraj Ext (Eclipta alba)',
    summary: 'Bhringraj es una planta tradicional en Ayurveda conocida por sus propiedades rejuvenecedoras y su capacidad para apoyar la salud hepática, mejorar la digestión y promover el bienestar general.',
    fullExplanation: 'El extracto de Bhringraj (Eclipta alba) es utilizado en la medicina ayurvédica para fortalecer el hígado y mejorar la función hepática. También ayuda a desintoxicar el organismo y a equilibrar los niveles de enzimas hepáticas. Además, Bhringraj es un tónico digestivo que promueve una digestión saludable y alivia problemas como el reflujo y la acidez. Sus propiedades antiinflamatorias y antioxidantes también contribuyen al bienestar hepático y digestivo, ayudando al cuerpo a combatir el estrés oxidativo y la inflamación.',
    UlContent: {
      liTitles: [
        'Propiedades rejuvenecedoras para el hígado',
        'Tónico digestivo',
        'Equilibrio de enzimas hepáticas',
        'Desintoxicación del organismo',
        'Propiedades antiinflamatorias',
        'Antioxidante natural',
        'Apoyo al sistema inmunológico',
        'Reducción del estrés oxidativo'
      ],
      liContent: [
        'Bhringraj es conocido por sus efectos rejuvenecedores en el hígado, promoviendo una función hepática saludable y protegiendo las células del hígado.',
        'Actúa como un tónico digestivo, mejorando el flujo de bilis y promoviendo una digestión eficiente.',
        'Ayuda a equilibrar las enzimas hepáticas, apoyando las funciones de detoxificación y metabolismo del hígado.',
        'Contribuye a la desintoxicación del organismo, facilitando la eliminación de toxinas del cuerpo.',
        'Tiene propiedades antiinflamatorias que ayudan a reducir la inflamación en el hígado y el sistema digestivo.',
        'Es una fuente de antioxidantes naturales que protegen el hígado y el sistema digestivo contra el daño causado por los radicales libres.',
        'Fortalece el sistema inmunológico, ayudando a mejorar la resistencia del cuerpo ante infecciones y enfermedades.',
        'Ayuda a reducir el estrés oxidativo en el cuerpo, protegiendo las células hepáticas y digestivas del daño y promoviendo su regeneración.'
      ]
    }
  };
  const ChandanExt =
  {
    title: 'Chandan Ext (Santalum album)',
    summary: 'Chandan, también conocido como sándalo, es una planta con propiedades calmantes y antiinflamatorias, reconocida en Ayurveda por sus beneficios para la salud hepática y digestiva, así como por sus efectos relajantes.',
    fullExplanation: 'El extracto de Chandan (Santalum album), o sándalo, es valorado en la medicina ayurvédica principalmente por sus propiedades refrescantes, antiinflamatorias y antioxidantes. Conocido por su capacidad para aliviar problemas digestivos e inflamación en el hígado, Chandan es utilizado como un apoyo para reducir la acidez y promover la salud general del sistema digestivo. También es un calmante natural que ayuda a reducir el estrés, lo que indirectamente beneficia la salud hepática al reducir el estrés oxidativo y la inflamación. Es adecuado para quienes buscan un alivio de la irritación gástrica y desean apoyar la función hepática y digestiva en general.',
    UlContent: {
      liTitles: [
        'Propiedades antiinflamatorias',
        'Calmante para el sistema digestivo',
        'Reducción de acidez',
        'Apoyo al sistema hepático',
        'Propiedades antioxidantes',
        'Alivio del estrés y la tensión',
        'Efecto refrescante',
        'Desintoxicación del organismo'
      ],
      liContent: [
        'Chandan es reconocido por sus propiedades antiinflamatorias que ayudan a reducir la inflamación en el hígado y el sistema digestivo.',
        'Actúa como un calmante natural para el sistema digestivo, ayudando a aliviar la irritación y malestar estomacal.',
        'Contribuye a reducir la acidez estomacal, promoviendo una digestión más equilibrada y libre de molestias.',
        'Apoya la función hepática y ayuda en el mantenimiento de un hígado saludable.',
        'Es una fuente de antioxidantes que protegen las células del hígado y el sistema digestivo de los efectos dañinos de los radicales libres.',
        'Ayuda a aliviar el estrés y la tensión, lo que beneficia indirectamente la salud hepática y digestiva al reducir el estrés oxidativo.',
        'Tiene un efecto refrescante que ayuda a calmar y equilibrar el sistema digestivo.',
        'Contribuye a la desintoxicación del organismo, promoviendo la eliminación de toxinas a través del hígado y los riñones.'
      ]
    }
  };
  const KarpurKachariExt = 
  {
    title: 'Karpur Kachari Ext (Hedychium spicatum)',
    summary: 'Karpur Kachari, también conocido como jengibre salvaje o "kesar", es una planta que se utiliza en Ayurveda por sus propiedades antiinflamatorias y desintoxicantes, y su capacidad para apoyar la salud digestiva y hepática.',
    fullExplanation: 'El extracto de Karpur Kachari (Hedychium spicatum) es una planta medicinal ampliamente utilizada en Ayurveda debido a sus efectos terapéuticos sobre la digestión y la desintoxicación del cuerpo. Esta planta tiene propiedades antiinflamatorias que ayudan a reducir la inflamación en el hígado y en el sistema digestivo. Además, contribuye al alivio de problemas digestivos como la indigestión, el reflujo y la acidez, mejorando la salud general del sistema gastrointestinal. Karpur Kachari también favorece la limpieza del hígado y ayuda en la eliminación de toxinas del cuerpo, lo que apoya la función hepática y mejora la vitalidad general.',
    UlContent: {
      liTitles: [
        'Propiedades antiinflamatorias',
        'Apoyo a la digestión',
        'Desintoxicación del hígado',
        'Reducción de la acidez estomacal',
        'Mejora del metabolismo',
        'Alivio del estrés gástrico',
        'Propiedades antioxidantes',
        'Estimulación de la circulación'
      ],
      liContent: [
        'Karpur Kachari tiene potentes propiedades antiinflamatorias que ayudan a reducir la inflamación tanto en el hígado como en el tracto digestivo.',
        'Promueve una digestión saludable y ayuda a aliviar problemas gástricos como la indigestión y el reflujo ácido.',
        'Favorece la desintoxicación del hígado, facilitando la eliminación de toxinas acumuladas y promoviendo su función saludable.',
        'Contribuye a reducir la acidez estomacal, proporcionando alivio en casos de reflujo y malestar digestivo.',
        'Mejora el metabolismo y apoya el proceso de digestión, ayudando a que los alimentos se procesen de manera más eficiente.',
        'Ofrece alivio del estrés gástrico, ayudando a calmar el sistema digestivo y promoviendo el bienestar general.',
        'Es un antioxidante natural que protege las células hepáticas y del sistema digestivo contra el daño de los radicales libres.',
        'Estimula la circulación sanguínea, lo que favorece la distribución de nutrientes y oxígeno en todo el cuerpo.'
      ]
    }
  };
const KatukiExt =   {
    title: 'Katuki Ext (Picrorhiza kurroa)',
    summary: 'Katuki es una planta medicinal tradicionalmente utilizada en Ayurveda por sus potentes efectos hepatoprotectores, desintoxicantes y digestivos, que ayudan a mantener la salud del hígado y mejorar la función digestiva.',
    fullExplanation: 'El extracto de Katuki (Picrorhiza kurroa) es conocido por sus propiedades excepcionales en el tratamiento de afecciones hepáticas. Esta planta es famosa por sus efectos protectores sobre el hígado, ayudando a mejorar su función al promover la desintoxicación del organismo. Katuki también tiene efectos antiinflamatorios, lo que ayuda a reducir la inflamación hepática y digestiva. Es especialmente eficaz en la promoción de una digestión saludable, aliviando problemas como la indigestión, el estreñimiento y la acidez. Además, Katuki es utilizado para limpiar el hígado de toxinas acumuladas, lo que mejora la salud general y el bienestar del cuerpo.',
    UlContent: {
      liTitles: [
        'Propiedades hepatoprotectoras',
        'Desintoxicación del hígado',
        'Mejora de la digestión',
        'Alivio de la acidez estomacal',
        'Reducción de la inflamación',
        'Apoyo al metabolismo',
        'Mejora de la salud digestiva',
        'Fortalecimiento del sistema inmune'
      ],
      liContent: [
        'Katuki tiene potentes propiedades hepatoprotectoras que ayudan a proteger el hígado de daños causados por toxinas y sustancias nocivas.',
        'Ayuda a desintoxicar el hígado, promoviendo la eliminación de toxinas y mejorando su capacidad de desintoxicación.',
        'Contribuye a la mejora de la digestión, aliviando problemas como la indigestión y la sensación de pesadez.',
        'Proporciona alivio en casos de acidez estomacal y reflujo gástrico, ayudando a equilibrar los niveles de ácido en el estómago.',
        'Sus propiedades antiinflamatorias ayudan a reducir la inflamación tanto en el hígado como en el sistema digestivo, promoviendo la salud general.',
        'Fortalece el metabolismo y favorece el procesamiento de los alimentos, lo que facilita la digestión y la absorción de nutrientes.',
        'Mejora la salud digestiva en general, ayudando a mantener un tracto digestivo saludable y libre de problemas.',
        'Fortalece el sistema inmunológico, ayudando al cuerpo a defenderse de infecciones y enfermedades.'
      ]
    }
  };
  const VasaExt = 
  {
    title: 'Vasa Ext (Adhatoda vasica)',
    summary: 'Vasa, también conocido como Adhatoda vasica, es una planta medicinal utilizada en Ayurveda por sus propiedades que ayudan a mejorar la salud respiratoria y, en algunos casos, contribuye a la salud del hígado y del sistema digestivo.',
    fullExplanation: 'El extracto de Vasa (Adhatoda vasica) es altamente apreciado en la medicina tradicional por sus propiedades antiinflamatorias y antimicrobianas. Es conocido principalmente por su uso en el tratamiento de afecciones respiratorias como el asma, la bronquitis y otras enfermedades pulmonares. Sin embargo, Vasa también ofrece beneficios para la salud digestiva y hepática. Ayuda a desintoxicar el cuerpo, favoreciendo la eliminación de toxinas a través del hígado. Además, tiene propiedades antiinflamatorias que benefician tanto al hígado como al sistema digestivo, ayudando a mantener una función hepática saludable.',
    UlContent: {
      liTitles: [
        'Propiedades antiinflamatorias',
        'Apoyo a la salud respiratoria',
        'Desintoxicación del hígado',
        'Mejora la función digestiva',
        'Propiedades antimicrobianas',
        'Ayuda en la eliminación de toxinas',
        'Protección del sistema respiratorio',
        'Regulación de la circulación sanguínea'
      ],
      liContent: [
        'Vasa tiene potentes propiedades antiinflamatorias que ayudan a reducir la inflamación tanto en el hígado como en el sistema respiratorio.',
        'Es especialmente útil en el tratamiento de afecciones respiratorias, mejorando la función pulmonar y aliviando síntomas de asma y bronquitis.',
        'Contribuye a la desintoxicación del hígado, apoyando la eliminación de toxinas acumuladas en el cuerpo.',
        'Favorece la función digestiva, aliviando problemas como la indigestión y ayudando a mantener un sistema digestivo saludable.',
        'Ofrece propiedades antimicrobianas que ayudan a proteger el cuerpo contra infecciones bacterianas y virales.',
        'Favorece la eliminación de toxinas del cuerpo, promoviendo una salud óptima del hígado y del tracto digestivo.',
        'Protege el sistema respiratorio, ayudando a mantener las vías respiratorias despejadas y libres de obstrucciones.',
        'Mejora la circulación sanguínea, lo que favorece una distribución adecuada de nutrientes y oxígeno a través del cuerpo.'
      ]
    }
  };

  const YasthimadhuExt = 
  {
    title: 'Yasthimadhu Ext (Glycyrrhiza glabra)',
    summary: 'Yasthimadhu, también conocido como regaliz, es una planta con propiedades antiinflamatorias, antioxidantes y desintoxicantes. En Ayurveda, se utiliza para equilibrar los humores del cuerpo y para promover la salud digestiva y hepática.',
    fullExplanation: 'El extracto de Yasthimadhu (Glycyrrhiza glabra), más conocido como regaliz, es una de las hierbas más importantes en la medicina ayurvédica. Es reconocido por sus efectos antiinflamatorios y antioxidantes, lo que lo convierte en un excelente aliado en la protección del hígado y la promoción de la salud digestiva. Yasthimadhu ayuda a reducir la inflamación en el hígado y el tracto digestivo, contribuyendo a un sistema digestivo más saludable. Además, tiene propiedades adaptogénicas, lo que significa que puede ayudar al cuerpo a adaptarse al estrés y mejorar el bienestar general. Esta hierba también promueve la desintoxicación del hígado, ayudando a eliminar toxinas del cuerpo y a equilibrar los niveles de ácido en el estómago.',
    UlContent: {
      liTitles: [
        'Propiedades antiinflamatorias',
        'Desintoxicación del hígado',
        'Promoción de la salud digestiva',
        'Propiedades antioxidantes',
        'Reducción del estrés',
        'Equilibrio de los niveles de azúcar en sangre',
        'Mejora del bienestar general',
        'Protección contra infecciones'
      ],
      liContent: [
        'Yasthimadhu tiene potentes propiedades antiinflamatorias que ayudan a reducir la inflamación en el hígado y en el tracto digestivo.',
        'Contribuye a la desintoxicación del hígado, favoreciendo la eliminación de toxinas y la mejora de la función hepática.',
        'Favorece la salud digestiva al aliviar problemas como la acidez estomacal, la indigestión y el reflujo ácido.',
        'Es rico en antioxidantes, lo que ayuda a proteger las células del daño causado por los radicales libres, promoviendo la salud general.',
        'Actúa como un adaptógeno, ayudando al cuerpo a manejar el estrés y mejorar la respuesta general del organismo.',
        'Puede ayudar a equilibrar los niveles de azúcar en la sangre, lo que es útil para quienes tienen problemas con el control de la glucosa.',
        'Mejora el bienestar general, promoviendo una sensación de calma y balance en el cuerpo y la mente.',
        'Protege contra infecciones debido a sus propiedades antimicrobianas y antivirales.'
      ]
    }
  };
  const ProbioticsExt = 
  {
    title: 'Probiotics (Lactobacillus sporogenes)',
    summary: 'Lactobacillus sporogenes es un probiótico conocido por sus beneficios para la salud digestiva. Ayuda a equilibrar la flora intestinal, mejora la absorción de nutrientes y apoya la salud general del sistema digestivo.',
    fullExplanation: 'Lactobacillus sporogenes es una cepa probiótica que juega un papel clave en la salud intestinal y digestiva. Al ser un probiótico de acción rápida, ayuda a restaurar el equilibrio de bacterias buenas en el intestino, lo cual es fundamental para una digestión saludable y eficiente. Este microorganismo mejora la absorción de nutrientes esenciales y la producción de vitaminas dentro del tracto intestinal. Además, puede ayudar a reducir los síntomas de trastornos digestivos como el síndrome del intestino irritable (SII), el estreñimiento y la diarrea. El uso de Lactobacillus sporogenes también promueve una mejor función inmunológica al fortalecer la barrera intestinal y ayudar al cuerpo a defenderse contra patógenos dañinos. En el contexto del cuidado del hígado, los probióticos pueden jugar un papel indirecto al mejorar la digestión y ayudar a reducir la carga de toxinas en el cuerpo.',
    UlContent: {
      liTitles: [
        'Equilibrio de la flora intestinal',
        'Mejora la absorción de nutrientes',
        'Apoyo al sistema digestivo',
        'Reducción de trastornos digestivos',
        'Fortalecimiento del sistema inmunológico',
        'Apoyo en la desintoxicación del cuerpo',
        'Mejora de la digestión',
        'Protección contra patógenos'
      ],
      liContent: [
        'Lactobacillus sporogenes ayuda a mantener un equilibrio saludable de bacterias intestinales, lo que es esencial para una digestión eficiente.',
        'Mejora la absorción de nutrientes como vitaminas y minerales, lo que contribuye a una mejor nutrición general.',
        'Apoya la salud digestiva al aliviar síntomas como la indigestión, el estreñimiento y la diarrea.',
        'Contribuye a la reducción de trastornos digestivos como el síndrome del intestino irritable (SII), favoreciendo un intestino saludable.',
        'Fortalece el sistema inmunológico al promover una barrera intestinal fuerte y resistente a infecciones.',
        'Ayuda a la desintoxicación del cuerpo al mejorar la digestión y reducir la carga de toxinas en el tracto digestivo.',
        'Mejora la digestión general, facilitando el proceso digestivo y mejorando la metabolización de los alimentos.',
        'Protege el cuerpo de patógenos y microorganismos dañinos que puedan afectar la salud intestinal y general.'
      ]
    }
  };

</script>

<style scoped>

</style>