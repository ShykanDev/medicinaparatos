<template>
    <div class="">
      <MainLayout>
        <template #main>
            <h1 class="text-5xl font-extrabold text-center text-white bg-emerald-800 md:py-2 font-poppins animate-fade">Beneficios de JICOF</h1>
          <section class="flex flex-wrap justify-around gap-5 p-2">
        <RealBenefictCard :img-src="'https://storage.googleapis.com/a1aa/image/d7d11a14-a2f8-4ef9-ae52-b0b7c7d2bce5.jpeg'" :title="benefit1.title" :description="benefit1.fullResume" :smallIntro="benefit1.smallResume" :tags="benefit1.tags" />
        <RealBenefictCard :img-src="'https://storage.googleapis.com/a1aa/image/6eaf6d8b-9b58-48be-98ea-bd73b98d5fa6.jpeg'" :title="benefit2.title" :description="benefit2.fullResume" :smallIntro="benefit2.smallResume" :tags="benefit2.tags" />
        <RealBenefictCard :img-src="'https://storage.googleapis.com/a1aa/image/077f4325-ff8a-4918-b5c3-fb6e1b5138a2.jpeg'" :title="benefit3.title" :description="benefit3.fullResume" :smallIntro="benefit3.smallResume" :tags="benefit3.tags" />
        <RealBenefictCard :img-src="'https://storage.googleapis.com/a1aa/image/5cf36fe4-2a87-4c23-a8ce-196fcc7f5693.jpeg'" :title="benefit4.title" :description="benefit4.fullResume" :smallIntro="benefit4.smallResume" :tags="benefit4.tags" />
        <RealBenefictCard :img-src="'https://storage.googleapis.com/a1aa/image/844f0155-69e5-488f-93b5-b2b3248a6e82.jpeg'" :title="benefit5.title" :description="benefit5.fullResume" :smallIntro="benefit5.smallResume" :tags="benefit5.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/3869390/pexels-photo-3869390.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit6.title" :description="benefit6.fullResume" :smallIntro="benefit6.smallResume" :tags="benefit6.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/6285304/pexels-photo-6285304.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit7.title" :description="benefit7.fullResume" :smallIntro="benefit7.smallResume" :tags="benefit7.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/4657018/pexels-photo-4657018.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit8.title" :description="benefit8.fullResume" :smallIntro="benefit8.smallResume" :tags="benefit8.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/3873193/pexels-photo-3873193.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit9.title" :description="benefit9.fullResume" :smallIntro="benefit9.smallResume" :tags="benefit9.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit10.title" :description="benefit10.fullResume" :smallIntro="benefit10.smallResume" :tags="benefit10.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/5790716/pexels-photo-5790716.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit11.title" :description="benefit11.fullResume" :smallIntro="benefit11.smallResume" :tags="benefit11.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/4153315/pexels-photo-4153315.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit12.title" :description="benefit12.fullResume" :smallIntro="benefit12.smallResume" :tags="benefit12.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/3873187/pexels-photo-3873187.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit13.title" :description="benefit13.fullResume" :smallIntro="benefit13.smallResume" :tags="benefit13.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/28913736/pexels-photo-28913736/free-photo-of-warm-vegetable-soup-with-fresh-carrots.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit14.title" :description="benefit14.fullResume" :smallIntro="benefit14.smallResume" :tags="benefit14.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit15.title" :description="benefit15.fullResume" :smallIntro="benefit15.smallResume" :tags="benefit15.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/4975673/pexels-photo-4975673.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit16.title" :description="benefit16.fullResume" :smallIntro="benefit16.smallResume" :tags="benefit16.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/5790807/pexels-photo-5790807.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit17.title" :description="benefit17.fullResume" :smallIntro="benefit17.smallResume" :tags="benefit17.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/8939951/pexels-photo-8939951.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit18.title" :description="benefit18.fullResume" :smallIntro="benefit18.smallResume" :tags="benefit18.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/3767426/pexels-photo-3767426.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit19.title" :description="benefit19.fullResume" :smallIntro="benefit19.smallResume" :tags="benefit19.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/935742/pexels-photo-935742.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit20.title" :description="benefit20.fullResume" :smallIntro="benefit20.smallResume" :tags="benefit20.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/7579829/pexels-photo-7579829.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit21.title" :description="benefit21.fullResume" :smallIntro="benefit21.smallResume" :tags="benefit21.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/6050239/pexels-photo-6050239.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit22.title" :description="benefit22.fullResume" :smallIntro="benefit22.smallResume" :tags="benefit22.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/2100027/pexels-photo-2100027.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit23.title" :description="benefit23.fullResume" :smallIntro="benefit23.smallResume" :tags="benefit23.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=600'" :title="benefit24.title" :description="benefit24.fullResume" :smallIntro="benefit24.smallResume" :tags="benefit24.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/3992945/pexels-photo-3992945.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit25.title" :description="benefit25.fullResume" :smallIntro="benefit25.smallResume" :tags="benefit25.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/3869391/pexels-photo-3869391.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit26.title" :description="benefit26.fullResume" :smallIntro="benefit26.smallResume" :tags="benefit26.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/9882204/pexels-photo-9882204.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit27.title" :description="benefit27.fullResume" :smallIntro="benefit27.smallResume" :tags="benefit27.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/3983403/pexels-photo-3983403.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit28.title" :description="benefit28.fullResume" :smallIntro="benefit28.smallResume" :tags="benefit28.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/3987152/pexels-photo-3987152.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit29.title" :description="benefit29.fullResume" :smallIntro="benefit29.smallResume" :tags="benefit29.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/722218/pexels-photo-722218.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit30.title" :description="benefit30.fullResume" :smallIntro="benefit30.smallResume" :tags="benefit30.tags" />

      </section>

        </template>
      </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import RealBenefictCard from '@/components/cards/RealBenefictCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const benefit1 = {
    title: 'Liberación de las Flemas',
    smallResume: 'Kantakari ayuda a soltar las flemas acumuladas en las vías respiratorias, facilitando su expulsión.',
    fullResume: 'La planta Kantakari es conocida por sus propiedades mucolíticas, que ayudan a disolver y eliminar las flemas atrapadas en los pulmones y las vías respiratorias, promoviendo una respiración más libre y reduciendo la tos persistente.',
    tags: ['Salud Respiratoria', 'Mucolítico', 'Despeje de Vías Respiratorias']
};

const benefit2 = {
    title: 'Reducción de la Tos',
    smallResume: 'Yashtimadhu reduce la inflamación y alivia la irritación de las vías respiratorias, disminuyendo la tos.',
    fullResume: 'Yashtimadhu, también conocido como Glycyrrhiza glabra, es eficaz para calmar la tos crónica. Su capacidad antiinflamatoria y su acción suavizante sobre la garganta ayudan a reducir la irritación que provoca la tos, proporcionando alivio inmediato y duradero.',
    tags: ['Antitusivo', 'Calmante de Garganta', 'Anti-inflamatorio']
};

const benefit3 = {
    title: 'Mejora la Respiración',
    smallResume: 'Bibhitaki ayuda a abrir las vías respiratorias, permitiendo una respiración más clara y profunda.',
    fullResume: 'Bibhitaki es una hierba utilizada en la medicina ayurvédica que mejora la función pulmonar y promueve una respiración más libre. Ayuda a despejar las vías respiratorias superiores e inferiores, lo que facilita una mayor entrada de aire y alivia las dificultades respiratorias, especialmente durante los resfriados y alergias.',
    tags: ['Salud Pulmonar', 'Despeje de Vías Respiratorias', 'Mejora de la Capacidad Respiratoria']
};

const benefit4 = {
    title: 'Acción Anti-inflamatoria',
    smallResume: 'Vasa tiene propiedades antiinflamatorias que ayudan a reducir la inflamación en las vías respiratorias.',
    fullResume: 'Vasa es una planta que se ha utilizado durante siglos para tratar problemas respiratorios. Su potente acción antiinflamatoria reduce la inflamación en las vías respiratorias, aliviando la dificultad para respirar y mejorando la salud respiratoria en general.',
    tags: ['Anti-inflamatorio', 'Respiración Fácil', 'Salud Pulmonar']
};

const benefit5 = {
    title: 'Alivio de Alergias Respiratorias',
    smallResume: 'Talishadi Cgurma ayuda a aliviar las reacciones alérgicas que afectan las vías respiratorias.',
    fullResume: 'Talishadi Cgurma es una mezcla de hierbas que actúa como un antihistamínico natural. Ayuda a reducir las reacciones alérgicas, como la congestión nasal y la dificultad para respirar, proporcionando un alivio rápido y eficaz sin los efectos secundarios de los medicamentos tradicionales.',
    tags: ['Alivio de Alergias', 'Antihistamínico', 'Descongestionante']
};

const benefit6 = {
    title: 'Fortalece el Sistema Respiratorio',
    smallResume: 'Kantakari refuerza las defensas naturales del sistema respiratorio, ayudando a prevenir infecciones.',
    fullResume: 'Kantakari no solo alivia los síntomas de la tos y las flemas, sino que también fortalece las defensas del sistema respiratorio. Sus propiedades antibacterianas y antivirales ayudan a prevenir infecciones respiratorias, mejorando la salud pulmonar a largo plazo.',
    tags: ['Inmunidad Respiratoria', 'Prevención de Infecciones', 'Refuerzo de Defensas']
};

const benefit7 = {
    title: 'Promueve la Desinflamación de las Vías Respiratorias',
    smallResume: 'Yashtimadhu reduce la inflamación de las vías respiratorias, favoreciendo la respiración sin obstrucciones.',
    fullResume: 'La raíz de Yashtimadhu tiene poderosas propiedades antiinflamatorias que ayudan a reducir la hinchazón y la irritación de las vías respiratorias, lo que permite respirar con mayor facilidad. Es especialmente útil en casos de asma, bronquitis o resfriados.',
    tags: ['Anti-inflamatorio', 'Respiración Abierta', 'Mejora de la Función Pulmonar']
};

const benefit8 = {
    title: 'Alivio de la Congestión Nasal',
    smallResume: 'Bibhitaki actúa como un descongestionante natural, aliviando la congestión nasal y las vías respiratorias bloqueadas.',
    fullResume: 'Bibhitaki es conocido por su capacidad para despejar las vías respiratorias y reducir la congestión nasal. Sus propiedades descongestionantes ayudan a aliviar los síntomas de la sinusitis, los resfriados y las alergias, facilitando una respiración más libre y cómoda.',
    tags: ['Descongestionante', 'Alivio de Alergias', 'Respiración Sin Obstáculos']
};

const benefit9 = {
    title: 'Equilibra el Sistema Respiratorio',
    smallResume: 'Vasa ayuda a equilibrar el sistema respiratorio, promoviendo una función pulmonar óptima.',
    fullResume: 'Vasa tiene un efecto equilibrante en el sistema respiratorio, mejorando la función pulmonar y ayudando a mantener las vías respiratorias limpias y saludables. Su acción calmante sobre las vías respiratorias superiores e inferiores asegura una respiración más tranquila y profunda.',
    tags: ['Equilibrio Respiratorio', 'Salud Pulmonar', 'Respiración Tranquila']
};

const benefit10 = {
    title: 'Desintoxica las Vías Respiratorias',
    smallResume: 'Talishadi Cgurma ayuda a eliminar las toxinas acumuladas en las vías respiratorias, favoreciendo una respiración limpia.',
    fullResume: 'La combinación de hierbas en Talishadi Cgurma actúa como un desintoxicante natural para las vías respiratorias. Al eliminar las toxinas acumuladas, especialmente en los pulmones, promueve una respiración más limpia y despejada, mejorando la salud respiratoria general.',
    tags: ['Desintoxicación Respiratoria', 'Limpieza de Pulmones', 'Respiración Saludable']
};
const benefit11 = {
    title: 'Alivio Natural de la Tos',
    smallResume: 'JICOF calma la tos irritante, ayudando a reducir la frecuencia y la intensidad de la tos.',
    fullResume: 'Gracias a sus ingredientes naturales como el Kantakari y el Yashtimadhu, JICOF es un remedio efectivo para calmar la tos. Sus propiedades calmantes y suavizantes ayudan a reducir la irritación en la garganta, aliviando la tos persistente y proporcionando una sensación de alivio instantáneo.',
    tags: ['Alivio de Tos', 'Cuidado de Garganta', 'Remedio Natural']
};

const benefit12 = {
    title: 'Mejora la Expulsión de las Flemas',
    smallResume: 'JICOF facilita la expulsión de flemas, limpiando las vías respiratorias y mejorando la respiración.',
    fullResume: 'Con la ayuda de sus poderosos ingredientes como Bibhitaki y Talishadi Cgurma, JICOF actúa como un expectorante natural, promoviendo la expulsión de flemas y mucosidad. Esto permite una respiración más libre y cómoda, aliviando la congestión y la sensación de opresión en el pecho.',
    tags: ['Expectorante', 'Limpieza Respiratoria', 'Alivio de Congestión']
};

const benefit13 = {
    title: 'Previene Irritaciones en las Vías Respiratorias',
    smallResume: 'Vasa y otros ingredientes en JICOF protegen las vías respiratorias de posibles irritaciones y daños.',
    fullResume: 'El Vasa tiene un efecto protector sobre las vías respiratorias, ayudando a prevenir la irritación causada por factores ambientales como la contaminación, el humo o los cambios de temperatura. Con su uso, JICOF mantiene las vías respiratorias suaves y protegidas contra agresores externos.',
    tags: ['Protección Respiratoria', 'Prevención de Irritación', 'Cuidado Pulmonar']
};

const benefit14 = {
    title: 'Refuerza el Sistema Inmunológico',
    smallResume: 'Los ingredientes naturales de JICOF refuerzan las defensas naturales del cuerpo contra infecciones respiratorias.',
    fullResume: 'Los antioxidantes presentes en las hierbas de JICOF, como el Amla y el Bibhitaki, ayudan a fortalecer el sistema inmunológico. Esto no solo mejora la capacidad del cuerpo para combatir infecciones respiratorias, sino que también mejora la salud general del sistema inmunitario, haciendo que el cuerpo sea más resistente a los resfriados y otros trastornos respiratorios.',
    tags: ['Refuerzo Inmunológico', 'Prevención de Enfermedades', 'Antioxidante']
};

const benefit15 = {
    title: 'Promueve una Respiración Más Profunda',
    smallResume: 'JICOF ayuda a expandir las vías respiratorias, permitiendo una respiración más profunda y eficiente.',
    fullResume: 'Los ingredientes activos de JICOF, como el Kantakari y el Yashtimadhu, tienen un efecto positivo en la dilatación de las vías respiratorias. Esto mejora la respiración profunda, permitiendo una mejor oxigenación del cuerpo y reduciendo la sensación de falta de aliento.',
    tags: ['Mejora de Respiración', 'Oxigenación', 'Respiración Profunda']
};
const benefit16 = {
    title: 'Reduce la Inflamación en la Garganta',
    smallResume: 'JICOF ayuda a reducir la inflamación en la garganta, proporcionando un alivio rápido.',
    fullResume: 'Gracias a la acción antiinflamatoria de ingredientes como el Yashtimadhu y el Bibhitaki, JICOF alivia la inflamación de la garganta, lo que es útil para combatir la irritación y el dolor asociados con resfriados, infecciones o exposición al frío.',
    tags: ['Alivio de Inflamación', 'Cuidado de Garganta', 'Remedio Natural']
};

const benefit17 = {
    title: 'Alivio del Asma y Dificultades Respiratorias',
    smallResume: 'JICOF ofrece alivio a personas con asma o dificultades respiratorias al relajar los músculos de las vías respiratorias.',
    fullResume: 'Los ingredientes naturales de JICOF como el Kantakari tienen propiedades broncodilatadoras que ayudan a abrir las vías respiratorias, facilitando la respiración. Esto es especialmente beneficioso para personas que padecen asma o tienen dificultades respiratorias crónicas.',
    tags: ['Alivio Asma', 'Respiración', 'Broncodilatador']
};

const benefit18 = {
    title: 'Desintoxica las Vías Respiratorias',
    smallResume: 'JICOF ayuda a eliminar toxinas y contaminantes acumulados en las vías respiratorias.',
    fullResume: 'Con el uso continuo de JICOF, los ingredientes como el Talishadi Cgurma promueven la limpieza de las vías respiratorias al eliminar toxinas, alérgenos y contaminantes del aire que pueden contribuir a enfermedades respiratorias, ayudando a mantener el sistema respiratorio en óptimas condiciones.',
    tags: ['Desintoxicación Respiratoria', 'Limpieza', 'Cuidado de Pulmones']
};

const benefit19 = {
    title: 'Reducción de la Congestión Nasal',
    smallResume: 'JICOF ayuda a reducir la congestión nasal, permitiendo una respiración más libre.',
    fullResume: 'El Talishadi Cgurma y otros ingredientes de JICOF actúan sobre la mucosidad acumulada en las vías nasales, ayudando a reducir la congestión y facilitando la respiración. Esto es útil especialmente para personas con resfriados o sinusitis.',
    tags: ['Alivio Congestión', 'Cuidado Nasal', 'Respiración Libre']
};

const benefit20 = {
    title: 'Promueve el Descanso Nocturno',
    smallResume: 'El uso de JICOF antes de dormir ayuda a calmar la tos y mejora la calidad del sueño.',
    fullResume: 'Al calmar la tos y reducir la irritación de la garganta, JICOF facilita el descanso nocturno. Con su efecto relajante sobre las vías respiratorias, permite un sueño más profundo y reparador, lo que es crucial para la recuperación del cuerpo.',
    tags: ['Sueño Reparador', 'Cuidado Nocturno', 'Alivio de Tos']
};

const benefit21 = {
    title: 'Fortalece los Pulmones',
    smallResume: 'JICOF refuerza la salud pulmonar, promoviendo una mejor capacidad pulmonar y oxigenación.',
    fullResume: 'Los ingredientes activos en JICOF, como el Bibhitaki y el Vasa, ayudan a fortalecer los pulmones y mejorar la circulación de aire. Esto no solo contribuye a una mejor función pulmonar, sino que también facilita la respiración y la oxigenación del cuerpo.',
    tags: ['Salud Pulmonar', 'Fortalecimiento', 'Oxigenación']
};

const benefit22 = {
    title: 'Reduce los Síntomas de la Bronquitis',
    smallResume: 'JICOF alivia la bronquitis y sus síntomas, como la tos persistente y la dificultad para respirar.',
    fullResume: 'El Yashtimadhu y el Bibhitaki son conocidos por sus propiedades antiinflamatorias y expectorantes, ayudando a reducir la inflamación de los bronquios y facilitando la expulsión de mucosidad. Esto proporciona alivio a quienes sufren de bronquitis aguda o crónica.',
    tags: ['Bronquitis', 'Alivio Respiratorio', 'Anti-inflamatorio']
};

const benefit23 = {
    title: 'Mejora la Salud General de las Vías Respiratorias',
    smallResume: 'JICOF mejora la salud global del sistema respiratorio, manteniendo las vías respiratorias libres de obstrucciones.',
    fullResume: 'Los ingredientes de JICOF, como el Kantakari y el Vasa, trabajan en conjunto para mantener las vías respiratorias despejadas y saludables. Esto no solo alivia los síntomas actuales, sino que también actúa como un preventivo para enfermedades respiratorias.',
    tags: ['Salud Respiratoria', 'Prevención', 'Mantenimiento']
};

const benefit24 = {
    title: 'Alivia la Irritación Causada por el Aire Seco',
    smallResume: 'JICOF ayuda a reducir la irritación de las vías respiratorias causada por el aire seco o los cambios climáticos.',
    fullResume: 'El aire seco o la exposición a ambientes fríos y secos puede causar sequedad e irritación en la garganta. JICOF actúa como un hidratante natural para las vías respiratorias, aliviando estas molestias y proporcionando una sensación de frescura.',
    tags: ['Hidratación Respiratoria', 'Cuidado de la Garganta', 'Alivio de Sequedad']
};

const benefit25 = {
    title: 'Propiedades Antibacterianas y Antivirales',
    smallResume: 'JICOF tiene propiedades antibacterianas y antivirales, ayudando a prevenir infecciones respiratorias.',
    fullResume: 'Los ingredientes como el Amla y el Yashtimadhu poseen propiedades que ayudan a combatir bacterias y virus que pueden afectar las vías respiratorias. Esto contribuye a la prevención de infecciones respiratorias y al fortalecimiento de las defensas naturales del cuerpo.',
    tags: ['Propiedades Antivirales', 'Propiedades Antibacterianas', 'Prevención de Infecciones']
};

const benefit26 = {
    title: 'Alivio de la Tos Seca',
    smallResume: 'JICOF ayuda a calmar la tos seca, reduciendo la irritación en la garganta.',
    fullResume: 'Gracias a sus ingredientes como el Yashtimadhu y el Kantakari, JICOF alivia eficazmente la tos seca al suavizar la garganta y reducir la inflamación, lo que proporciona un alivio inmediato y duradero.',
    tags: ['Alivio de Tos', 'Tos Seca', 'Cuidado de la Garganta']
};

const benefit27 = {
    title: 'Mejora la Expectoración',
    smallResume: 'JICOF facilita la expulsión de flemas, ayudando a limpiar las vías respiratorias.',
    fullResume: 'Con su acción expectorante, JICOF mejora la capacidad del cuerpo para eliminar las flemas y la mucosidad acumulada en las vías respiratorias, ayudando a respirar con mayor facilidad y reduciendo la presión en los pulmones.',
    tags: ['Expectorante', 'Limpieza Respiratoria', 'Reducción de Flemas']
};

const benefit28 = {
    title: 'Fortalece el Sistema Inmunológico',
    smallResume: 'JICOF potencia las defensas naturales del cuerpo, ayudando a prevenir enfermedades respiratorias.',
    fullResume: 'El Amla, conocido por su alta concentración de vitamina C, junto con otros ingredientes en JICOF, refuerzan el sistema inmunológico, ayudando al cuerpo a combatir infecciones y mantener la salud respiratoria en general.',
    tags: ['Refuerzo Inmunológico', 'Prevención de Enfermedades', 'Vitamina C']
};

const benefit29 = {
    title: 'Alivio de la Congestión Pulmonar',
    smallResume: 'JICOF ayuda a reducir la congestión en los pulmones, mejorando la respiración.',
    fullResume: 'Con ingredientes como el Vasa y el Bibhitaki, JICOF ayuda a desinflamar las vías respiratorias y los pulmones, facilitando una mejor oxigenación y reduciendo la sensación de pesadez o dificultad para respirar debido a la congestión.',
    tags: ['Descongestión Pulmonar', 'Oxigenación', 'Cuidado Pulmonar']
};

const benefit30 = {
    title: 'Reduce la Irritación por Contaminación Ambiental',
    smallResume: 'JICOF protege las vías respiratorias de la irritación causada por la contaminación del aire.',
    fullResume: 'Los compuestos antioxidantes y antiinflamatorios presentes en JICOF ayudan a proteger las vías respiratorias de los efectos negativos de la contaminación y los alérgenos del aire, reduciendo la irritación y la inflamación causadas por estos factores externos.',
    tags: ['Protección Respiratoria', 'Contaminación', 'Antioxidante']
};

</script>

<style scoped>

</style>
