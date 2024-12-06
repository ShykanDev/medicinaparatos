<template>
    <div class="">
        <MainLayout>
            <template #main>
            <h1 class="text-5xl font-extrabold text-center text-white bg-emerald-800 md:py-3 font-poppins animate-fade">Ingredientes de JICOF</h1>
            <!-- <div class="grid grid-cols-3">
              <img class="animate-flip-up" src="../assets/img/front.png" alt="">
              <img class="animate-flip-up" src="../assets/img/syrup.png" alt="">
              <img class="animate-flip-up" src="../assets/img/left.png" alt="">
            </div> -->
            <section class="flex flex-wrap justify-between gap-5 p-4 font-poppins">
  <!-- <div class="flex-1 sm:flex-1 md:flex-1 lg:w-1/2">
    <h3 class="mb-4 text-xl font-semibold">Características del Producto</h3>
    <ul class="p-0 list-none">
      <li><strong>Cantidad de Cápsulas:</strong> 60 cápsulas por envase </li>
      <li><strong>Tamaño de la Porción:</strong> 1 cápsula/15ml</li>
      <li><strong>Modo de Uso:</strong> Tomar 1 cápsula de 1 a 2 veces al día, preferiblemente con comida o según lo indique un profesional de la salud.</li>
      <li><strong>Almacenamiento:</strong> Mantener en un lugar fresco y seco, lejos de la luz solar directa.</li>
      <li><strong>Advertencias:</strong> Consultar a un profesional de la salud si está embarazada o en período de lactancia. Mantener fuera del alcance de los niños.</li>
      <li><strong>Categoría:</strong> Suplemento dietético</li>
    </ul>
  </div> -->
  <div class="flex-1 sm:flex-1 md:flex-1 lg:w-1/2">
    <h3 class="mb-4 text-xl font-semibold">Resumen de Ingredientes</h3>
    <ul class="p-0 list-none">
  <li><span class="font-bold text-emerald-800">Kantakari 🌿</span> Ayuda a reducir la tos, limpia las vías respiratorias y alivia la congestión pulmonar.</li>
  <li><span class="font-bold text-emerald-800">Yashtimadhu 🌱</span> Alivia la tos seca, combate la inflamación y mejora la salud general de los pulmones.</li>
  <li><span class="font-bold text-emerald-800">Bibhitaki 🍃</span> Potente expectorante que ayuda a eliminar las flemas, promoviendo una respiración más fácil.</li>
  <li><span class="font-bold text-emerald-800">Vasa 🍃</span> Mejora la circulación respiratoria, combate la tos crónica y apoya la salud de las vías respiratorias.</li>
  <li><span class="font-bold text-emerald-800">Talishadi Churna 🌿</span> Reduce la tos persistente, calma la irritación de garganta y alivia la congestión respiratoria.</li>
</ul>



  </div>
            </section>
                <section class="flex flex-wrap justify-around gap-5 p-3 bg-slate-200 selection:bg-rose-700 selection:text-white">
                    <BenefictCard
                    img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsKEn8_udbkIRpNgivz2H_GPcoB_kpLYPcw&s"
                    :title="KantakariExt.title"
                    :short-resume="KantakariExt.summary"
                    :long-resume="KantakariExt.fullExplanation"
                    :list-titles="KantakariExt.UlContent.liTitles"
                    :list-content="KantakariExt.UlContent.liContent"
            />
                    <BenefictCard
                    img-src="https://i.etsystatic.com/7255623/r/il/f9e9d6/2704550040/il_fullxfull.2704550040_mei3.jpg"
                    :title="YashtimadhuExt.title"
                    :short-resume="YashtimadhuExt.summary"
                    :long-resume="YashtimadhuExt.fullExplanation"
                    :list-titles="YashtimadhuExt.UlContent.liTitles"
                    :list-content="YashtimadhuExt.UlContent.liContent"
            />
            <BenefictCard
                    img-src="https://vermiorganics.co/cdn/shop/files/204.jpg?v=1704369242"
                    :title="BibhitakiExt.title"
                    :short-resume="BibhitakiExt.summary"
                    :long-resume="BibhitakiExt.fullExplanation"
                    :list-titles="BibhitakiExt.UlContent.liTitles"
                    :list-content="BibhitakiExt.UlContent.liContent"
            />
                    <BenefictCard
                    img-src="https://i.pinimg.com/originals/6f/f7/77/6ff777d1d126b824b5edb8fdc7ba3353.jpg"
                    :title="VasaExt.title"
                    :short-resume="VasaExt.summary"
                    :long-resume="VasaExt.fullExplanation"
                    :list-titles="VasaExt.UlContent.liTitles"
                    :list-content="VasaExt.UlContent.liContent"
            />
                    <BenefictCard
                    img-src="https://www.mantra-aromatherapy.co.uk/cdn/shop/files/spikedgingerlily1_1200x1200.jpg?v=1712248247"
                    :title="TalishadiChurnaExt.title"
                    :short-resume="TalishadiChurnaExt.summary"
                    :long-resume="TalishadiChurnaExt.fullExplanation"
                    :list-titles="TalishadiChurnaExt.UlContent.liTitles"
                    :list-content="TalishadiChurnaExt.UlContent.liContent"
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

const KantakariExt = {
  title: 'Kantakari (Solanum xanthocarpum)',
  summary: 'Kantakari, es una planta tradicionalmente utilizada para aliviar problemas respiratorios, reducir la tos y ayudar a expeler flemas. Es conocida por sus propiedades antiinflamatorias y expectorantes.',
  fullExplanation: 'El extracto de Kantakari (Solanum xanthocarpum) ha sido utilizado en la medicina ayurvédica durante siglos debido a sus poderosas propiedades curativas, especialmente para las afecciones respiratorias. Esta planta es famosa por sus efectos antiinflamatorios, expectorantes y broncodilatadores, lo que la hace ideal para reducir la tos, limpiar las vías respiratorias y aliviar la congestión pulmonar. Kantakari también ayuda a mantener la salud de los pulmones, mejorando la respiración y promoviendo el bienestar respiratorio general.',
  UlContent: {
    liTitles: [
      'Reducción de la tos',
      'Expulsión de flemas',
      'Propiedades expectorantes',
      'Alivio de la congestión pulmonar',
      'Apoyo a la función respiratoria',
      'Propiedades antiinflamatorias',
      'Mejora la salud de los pulmones',
      'Descongestionante natural'
    ],
    liContent: [
      'Kantakari es efectiva para reducir la tos crónica y la tos seca, ayudando a calmar la irritación en la garganta y las vías respiratorias.',
      'Actúa como un expectorante natural, facilitando la expulsión de las flemas y ayudando a limpiar las vías respiratorias.',
      'Sus propiedades expectorantes ayudan a diluir y expulsar el moco acumulado en los pulmones, aliviando la congestión respiratoria.',
      'Alivia la congestión pulmonar, promoviendo la respiración libre y mejorando la oxigenación del cuerpo.',
      'Ayuda a fortalecer y mantener una función respiratoria saludable, protegiendo las vías respiratorias superiores e inferiores.',
      'Las propiedades antiinflamatorias de Kantakari contribuyen a reducir la inflamación en las vías respiratorias, aliviando los síntomas del resfriado y la bronquitis.',
      'Es conocida por su capacidad para proteger la salud pulmonar, ayudando a prevenir infecciones y mejorando la capacidad respiratoria.',
      'Kantakari es un descongestionante natural que reduce la inflamación y la obstrucción de las vías respiratorias, ayudando a restaurar una respiración normal.'
    ]
  }
};

const YashtimadhuExt = {
  title: 'Yashtimadhu (Glycyrrhiza glabra)',
  summary: 'Yashtimadhu, también conocida como Regaliz, es una planta con propiedades antiinflamatorias, antioxidantes y expectorantes. Se utiliza tradicionalmente para aliviar la tos, reducir la inflamación en las vías respiratorias y promover la salud pulmonar.',
  fullExplanation: 'Yashtimadhu (Glycyrrhiza glabra), o Regaliz, es una planta ampliamente conocida en la medicina tradicional por sus múltiples beneficios para la salud respiratoria. Esta planta contiene compuestos bioactivos que poseen propiedades antiinflamatorias y expectorantes, lo que la hace altamente efectiva para tratar afecciones respiratorias como la tos, la bronquitis y la acumulación de flemas. Además, Yashtimadhu ayuda a calmar la irritación en la garganta y a reducir la inflamación en las vías respiratorias, promoviendo la respiración libre y saludable. Su extracto al 20% es especialmente potente para la reducción de los síntomas respiratorios.',
  UlContent: {
    liTitles: [
      'Alivio de la tos',
      'Reducción de la inflamación',
      'Expectorante natural',
      'Protección de las vías respiratorias',
      'Mejora de la salud pulmonar',
      'Propiedades antioxidantes',
      'Calmante para la garganta irritada',
      'Prevención de infecciones respiratorias'
    ],
    liContent: [
      'Yashtimadhu ayuda a reducir la tos crónica, aliviando la irritación en la garganta y las vías respiratorias.',
      'Posee potentes propiedades antiinflamatorias que reducen la inflamación en las vías respiratorias, facilitando la respiración.',
      'Como expectorante natural, Yashtimadhu facilita la expulsión de las flemas y moco acumulado, promoviendo una respiración más clara.',
      'Protege las vías respiratorias de infecciones y otras afecciones al fortalecer el sistema inmunológico y reducir la inflamación.',
      'El uso regular de Yashtimadhu mejora la salud pulmonar, aliviando la congestión y promoviendo una mejor circulación del aire en los pulmones.',
      'Gracias a sus propiedades antioxidantes, ayuda a proteger las células de los pulmones contra el daño de los radicales libres.',
      'Actúa como un calmante para la garganta irritada, reduciendo la sensación de sequedad y dolor en la faringe.',
      'Ayuda a prevenir infecciones respiratorias recurrentes, fortaleciendo las defensas naturales del cuerpo.'
    ]
  }
};

const BibhitakiExt = {
  title: 'Bibhitaki (Terminalia bellirica)',
  summary: 'Bibhitaki es una planta medicinal conocida por sus propiedades depurativas, antioxidantes y antiinflamatorias. Se utiliza tradicionalmente en la medicina ayurvédica para tratar afecciones respiratorias, aliviar la tos y reducir las flemas en las vías respiratorias.',
  fullExplanation: 'Bibhitaki (Terminalia bellirica) es una planta clave en la medicina ayurvédica, apreciada por sus efectos beneficiosos sobre la salud respiratoria. Esta planta contiene compuestos activos que actúan como expectorantes, ayudando a limpiar las vías respiratorias de flemas y moco. Además, tiene propiedades antiinflamatorias que reducen la irritación en las vías respiratorias, lo que ayuda a aliviar la tos y mejora la respiración. Se ha utilizado durante siglos para tratar afecciones respiratorias crónicas, bronquitis y asma, aliviando los síntomas y promoviendo la salud pulmonar.',
  UlContent: {
    liTitles: [
      'Expectorante natural',
      'Reducción de la tos',
      'Propiedades antiinflamatorias',
      'Desintoxicación de las vías respiratorias',
      'Mejora la salud pulmonar',
      'Fortalece el sistema inmunológico',
      'Propiedades antioxidantes',
      'Prevención de infecciones respiratorias'
    ],
    liContent: [
      'Bibhitaki es un potente expectorante natural, facilitando la eliminación de flemas y moco acumulado en los pulmones.',
      'Alivia la tos al reducir la irritación en la garganta y las vías respiratorias, proporcionando un respiro rápido.',
      'Sus propiedades antiinflamatorias ayudan a calmar la inflamación de las vías respiratorias, mejorando la circulación del aire en los pulmones.',
      'Actúa como un purificador de las vías respiratorias, ayudando a eliminar toxinas y residuos del sistema respiratorio.',
      'El uso de Bibhitaki mejora la salud pulmonar al reducir la congestión y aliviar los síntomas de la bronquitis y otras afecciones respiratorias.',
      'Fortalece el sistema inmunológico, ayudando al cuerpo a combatir infecciones respiratorias y mejorar la capacidad de defensa natural.',
      'Gracias a sus propiedades antioxidantes, Bibhitaki protege las células pulmonares del daño causado por los radicales libres.',
      'Ayuda a prevenir infecciones respiratorias recurrentes, protegiendo las vías respiratorias de patógenos externos.'
    ]
  }
};

const VasaExt = {
  title: 'Vasa (Adhatoda vasica)',
  summary: 'Vasa, también conocida como Adhatoda vasica, es una planta medicinal tradicionalmente utilizada en la medicina ayurvédica para tratar afecciones respiratorias como la tos, las flemas y el asma. Es conocida por sus propiedades expectorantes y antiinflamatorias que ayudan a limpiar las vías respiratorias.',
  fullExplanation: 'Vasa (Adhatoda vasica) es una planta originaria de la India, reconocida por su capacidad para tratar afecciones respiratorias. Su extracto contiene compuestos activos que actúan como un potente expectorante, ayudando a eliminar las flemas y el moco acumulado en los pulmones y las vías respiratorias. Además, tiene propiedades antiinflamatorias que reducen la irritación en la garganta y las vías respiratorias, aliviando la tos. Su uso tradicional en el tratamiento de la bronquitis, el asma y otras afecciones respiratorias lo convierte en un aliado natural para mejorar la salud pulmonar.',
  UlContent: {
    liTitles: [
      'Expectorante natural',
      'Alivio de la tos',
      'Reducción de la congestión nasal',
      'Propiedades antiinflamatorias',
      'Mejora la salud respiratoria',
      'Alivio en bronquitis y asma',
      'Refuerza el sistema inmunológico',
      'Prevención de infecciones respiratorias'
    ],
    liContent: [
      'Vasa actúa como un expectorante natural, ayudando a eliminar las flemas y el moco de las vías respiratorias de manera eficaz.',
      'Proporciona un alivio inmediato a la tos, reduciendo la irritación en la garganta y facilitando la respiración.',
      'La planta contribuye a reducir la congestión nasal, permitiendo un flujo de aire más libre en las vías respiratorias.',
      'Sus propiedades antiinflamatorias disminuyen la inflamación en las vías respiratorias, mejorando la respiración y aliviando los síntomas de la tos.',
      'Vasa promueve una mejor salud respiratoria, ayudando a mantener los pulmones limpios y libres de toxinas.',
      'Se utiliza comúnmente en el tratamiento de bronquitis y asma, aliviando la inflamación y las dificultades respiratorias.',
      'Refuerza el sistema inmunológico, ayudando a prevenir infecciones respiratorias y mejorando la defensa del organismo.',
      'Su uso regular puede prevenir infecciones respiratorias recurrentes, manteniendo las vías respiratorias protegidas.'
    ]
  }
};


  const TalishadiChurnaExt = {
  title: 'Talishadi Churna',
  summary: 'Talishadi Churna es una mezcla ayurvédica de hierbas naturales que se utiliza tradicionalmente para aliviar problemas respiratorios, como la tos, la congestión y la acumulación de flemas. Esta combinación de hierbas actúa como un expectorante, ayudando a limpiar las vías respiratorias y mejorar la salud pulmonar.',
  fullExplanation: 'Talishadi Churna es un preparado herbal compuesto por una combinación de ingredientes naturales, entre ellos Talishadi (también conocida como Talispatra), que ha sido utilizado en la medicina ayurvédica para tratar diversas afecciones respiratorias. El polvo actúa como un potente expectorante y antiinflamatorio, aliviando la tos y reduciendo la acumulación de flemas en los pulmones. Además, mejora la circulación en las vías respiratorias, ayudando a abrir las vías nasales y mejorar la respiración. Es especialmente eficaz en el tratamiento de afecciones como el resfriado, la bronquitis, el asma y otras enfermedades respiratorias crónicas.',
  UlContent: {
    liTitles: [
      'Expectorante natural',
      'Alivio de la tos y la congestión',
      'Mejora la salud pulmonar',
      'Propiedades antiinflamatorias',
      'Alivio de la bronquitis y el asma',
      'Refuerza el sistema respiratorio',
      'Disminuye la producción excesiva de flemas',
      'Protege contra infecciones respiratorias'
    ],
    liContent: [
      'Talishadi Churna actúa como un excelente expectorante, ayudando a eliminar las flemas y el moco acumulado en las vías respiratorias.',
      'Proporciona un alivio eficaz para la tos y la congestión, reduciendo la irritación en la garganta y facilitando la respiración.',
      'Ayuda a limpiar los pulmones y mejora la circulación en las vías respiratorias, promoviendo una respiración más libre y fácil.',
      'Las propiedades antiinflamatorias de Talishadi Churna reducen la inflamación en las vías respiratorias, aliviando la tos y la irritación.',
      'Es útil en el tratamiento de afecciones respiratorias como la bronquitis y el asma, aliviando la inflamación y la obstrucción de las vías respiratorias.',
      'Este polvo herbal ayuda a fortalecer el sistema respiratorio, mejorando la función pulmonar y reduciendo la susceptibilidad a infecciones.',
      'Talishadi Churna ayuda a regular la producción de flemas, evitando la acumulación excesiva de moco que puede causar congestión y dificultad para respirar.',
      'Su uso regular ayuda a prevenir infecciones respiratorias, fortaleciendo las defensas del cuerpo contra resfriados y otras afecciones pulmonares.'
    ]
  }
};

</script>

<style scoped>

</style>
