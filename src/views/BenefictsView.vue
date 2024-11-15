<template>
    <div class="">
      <MainLayout>
        <template #main>  
            <h1 class="text-3xl font-extrabold text-center text-white bg-rose-800 md:py-7 font-poppins animate-fade">Conozca los BENEFICIOS que le ofrece LIVAD</h1>
          <section class="flex flex-wrap justify-around gap-5 p-2">
        <RealBenefictCard :img-src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbs818c90AV4cjN59SP2q0geWfH_QYGRzWVA&s'" :title="benefit1.title" :description="benefit1.fullResume" :smallIntro="benefit1.smallResume" :tags="benefit1.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&w=500'" :title="benefit2.title" :description="benefit2.fullResume" :smallIntro="benefit2.smallResume" :tags="benefit2.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/321598/pexels-photo-321598.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit3.title" :description="benefit3.fullResume" :smallIntro="benefit3.smallResume" :tags="benefit3.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/8184251/pexels-photo-8184251.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit4.title" :description="benefit4.fullResume" :smallIntro="benefit4.smallResume" :tags="benefit4.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/7298905/pexels-photo-7298905.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit5.title" :description="benefit5.fullResume" :smallIntro="benefit5.smallResume" :tags="benefit5.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1715111965712-8674dbe6c088?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3JnYW5vc3xlbnwwfHwwfHx8MA%3D%3D'" :title="benefit6.title" :description="benefit6.fullResume" :smallIntro="benefit6.smallResume" :tags="benefit6.tags" />
        <RealBenefictCard :img-src="'https://plus.unsplash.com/premium_photo-1723008051623-6180656c4cd2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3Jhc2ElMjBoaWdhZG98ZW58MHx8MHx8fDA%3D'" :title="benefit7.title" :description="benefit7.fullResume" :smallIntro="benefit7.smallResume" :tags="benefit7.tags" />
        <RealBenefictCard :img-src="'https://plus.unsplash.com/premium_photo-1722698897908-e219423531a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXN0aW5vc3xlbnwwfHwwfHx8MA%3D%3D'" :title="benefit8.title" :description="benefit8.fullResume" :smallIntro="benefit8.smallResume" :tags="benefit8.tags" />
        <RealBenefictCard :img-src="'https://plus.unsplash.com/premium_photo-1723108858066-66b1bd834675?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2lzdGVtYSUyMGRpZ2VzdGl2b3xlbnwwfHwwfHx8MA%3D%3D'" :title="benefit9.title" :description="benefit9.fullResume" :smallIntro="benefit9.smallResume" :tags="benefit9.tags" />
        <RealBenefictCard :img-src="'https://plus.unsplash.com/premium_photo-1673214880615-c22716401a78?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VsdWxhcyUyMGN1ZXJwb3xlbnwwfHwwfHx8MA%3D%3D'" :title="benefit10.title" :description="benefit10.fullResume" :smallIntro="benefit10.smallResume" :tags="benefit10.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1715529134972-221f23a6c701?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhpZ2Fkb3xlbnwwfHwwfHx8MA%3D%3D'" :title="benefit11.title" :description="benefit11.fullResume" :smallIntro="benefit11.smallResume" :tags="benefit11.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1638272467190-4ff6f773315c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsdWxhcyUyMGN1ZXJwb3xlbnwwfHwwfHx8MA%3D%3D'" :title="benefit12.title" :description="benefit12.fullResume" :smallIntro="benefit12.smallResume" :tags="benefit12.tags" />
        <RealBenefictCard :img-src="'https://plus.unsplash.com/premium_photo-1681426643645-77d6b5130b50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VsdWxhcyUyMGh1bWFuYXN8ZW58MHx8MHx8fDA%3D'" :title="benefit13.title" :description="benefit13.fullResume" :smallIntro="benefit13.smallResume" :tags="benefit13.tags" />
        <RealBenefictCard :img-src="'https://plus.unsplash.com/premium_photo-1716834533312-fff5dc5df040?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2x1Y29zYXxlbnwwfHwwfHx8MA%3D%3D'" :title="benefit14.title" :description="benefit14.fullResume" :smallIntro="benefit14.smallResume" :tags="benefit14.tags" />  
        <RealBenefictCard :img-src="'https://plus.unsplash.com/premium_photo-1722534816015-0f6d47d9669a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1ldGFib2xpc218ZW58MHx8MHx8fDA%3D'" :title="benefit15.title" :description="benefit15.fullResume" :smallIntro="benefit15.smallResume" :tags="benefit15.tags" />
        <RealBenefictCard :img-src="'https://plus.unsplash.com/premium_photo-1661609084535-ba11d24cfa75?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmF0aWdhfGVufDB8fDB8fHww'" :title="benefit16.title" :description="benefit16.fullResume" :smallIntro="benefit16.smallResume" :tags="benefit16.tags" />
        <RealBenefictCard :img-src="'https://plus.unsplash.com/premium_photo-1722707492894-2839a324624e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvcmF6b258ZW58MHx8MHx8fDA%3D'" :title="benefit17.title" :description="benefit17.fullResume" :smallIntro="benefit17.smallResume" :tags="benefit17.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1567607673554-2048def2c6b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lzdGVtYSUyMG5lcnZpb3NvJTJCfGVufDB8fDB8fHwy'" :title="benefit18.title" :description="benefit18.fullResume" :smallIntro="benefit18.smallResume" :tags="benefit18.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVsbW9uZXN8ZW58MHx8MHx8fDI%3D'" :title="benefit19.title" :description="benefit19.fullResume" :smallIntro="benefit19.smallResume" :tags="benefit19.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1650897492524-bbc1adb72626?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmklQzMlQjFvbmVzfGVufDB8fDB8fHwy'" :title="benefit20.title" :description="benefit20.fullResume" :smallIntro="benefit20.smallResume" :tags="benefit20.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1542884841-9f546e727bca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZXN0ZXJvbHxlbnwwfHwwfHx8Mg%3D%3D'" :title="benefit21.title" :description="benefit21.fullResume" :smallIntro="benefit21.smallResume" :tags="benefit21.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1553690300-93871c6a6654?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVzdHJlc3xlbnwwfHwwfHx8Mg%3D%3D'" :title="benefit22.title" :description="benefit22.fullResume" :smallIntro="benefit22.smallResume" :tags="benefit22.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1649073586373-b6d49022d567?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGVzdG9tYWdvfGVufDB8fDB8fHwy'" :title="benefit23.title" :description="benefit23.fullResume" :smallIntro="benefit23.smallResume" :tags="benefit23.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1486218119243-13883505764c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvcnJlcnxlbnwwfHwwfHx8Mg%3D%3D'" :title="benefit24.title" :description="benefit24.fullResume" :smallIntro="benefit24.smallResume" :tags="benefit24.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1542833807-ad5af0977050?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNyZW1hJTIwcGllbHxlbnwwfHwwfHx8Mg%3D%3D'" :title="benefit25.title" :description="benefit25.fullResume" :smallIntro="benefit25.smallResume" :tags="benefit25.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1715529134910-97ade70b80e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlcGF0aWNvfGVufDB8fDB8fHwy'" :title="benefit26.title" :description="benefit26.fullResume" :smallIntro="benefit26.smallResume" :tags="benefit26.tags" />
        <RealBenefictCard :img-src="'https://images.ecestaticos.com/smAPmIcsi8wJDFDheVoDz-f79IM=/0x0:2272x1278/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F044%2F29f%2F1c3%2F04429f1c37368172ec696dd4683f239b.jpg'" :title="benefit27.title" :description="benefit27.fullResume" :smallIntro="benefit27.smallResume" :tags="benefit27.tags" />
        <RealBenefictCard :img-src="'https://images.unsplash.com/photo-1524157908232-f591d969233b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhYmVsbG98ZW58MHx8MHx8fDI%3D'" :title="benefit28.title" :description="benefit28.fullResume" :smallIntro="benefit28.smallResume" :tags="benefit28.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit29.title" :description="benefit29.fullResume" :smallIntro="benefit29.smallResume" :tags="benefit29.tags" />
        <RealBenefictCard :img-src="'https://images.pexels.com/photos/69198/pexels-photo-69198.jpeg?auto=compress&cs=tinysrgb&w=400'" :title="benefit30.title" :description="benefit30.fullResume" :smallIntro="benefit30.smallResume" :tags="benefit30.tags" />

      </section>

        </template>
      </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import RealBenefictCard from '@/components/cards/RealBenefictCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';


const benefit1 = {
    title: 'Reducción de niveles de colesterol',
    smallResume: 'El Amalaki ayuda a regular los niveles de colesterol y promueve una mejor salud cardiovascular.',
    fullResume: 'El Amalaki es conocido por sus propiedades antioxidantes y antiinflamatorias, que ayudan a reducir los niveles de colesterol y a mantener un hígado saludable.',
    tags: ['Salud cardiovascular', 'Antioxidante', 'Reducción de colesterol']
};

const benefit2 = {
    title: 'Desintoxicación del hígado',
    smallResume: 'Guduchi actúa como un depurador del cuerpo, eliminando toxinas que afectan al hígado.',
    fullResume: 'Guduchi es un adaptógeno que facilita la eliminación de toxinas acumuladas en el hígado, promoviendo una desintoxicación profunda y mejorando la función hepática.',
    tags: ['Desintoxicación', 'Salud hepática', 'Eliminación de toxinas']
};

const benefit3 = {
    title: 'Mejora de la digestión',
    smallResume: 'Bhringraj mejora la digestión y la absorción de nutrientes, lo que beneficia al hígado.',
    fullResume: 'Bhringraj se utiliza en la medicina ayurvédica para fortalecer el sistema digestivo, lo que ayuda a prevenir la congestión hepática y mejora el metabolismo.',
    tags: ['Digestión', 'Absorción de nutrientes', 'Salud hepática']
};

const benefit4 = {
    title: 'Alivio de la inflamación hepática',
    smallResume: 'Chandan tiene propiedades antiinflamatorias que ayudan a reducir la inflamación en el hígado.',
    fullResume: 'Chandan es conocido por sus efectos calmantes y antiinflamatorios, ayudando a reducir la inflamación hepática y apoyando la regeneración celular del hígado.',
    tags: ['Anti-inflamatorio', 'Regeneración celular', 'Salud hepática']
};

const benefit5 = {
    title: 'Prevención de daño hepático',
    smallResume: 'Karpur Kachari protege el hígado contra el daño de toxinas y contaminantes.',
    fullResume: 'Este ingrediente tiene propiedades protectoras que evitan el daño hepático al neutralizar los radicales libres y proteger las células del hígado.',
    tags: ['Protección hepática', 'Antioxidante', 'Salud hepática']
};

const benefit6 = {
    title: 'Mejora de la función biliar',
    smallResume: 'Katuki estimula la producción de bilis, lo que mejora la digestión de las grasas.',
    fullResume: 'Katuki se usa para mejorar la función de la vesícula biliar, promoviendo la excreción adecuada de bilis y favoreciendo la digestión de las grasas.',
    tags: ['Función biliar', 'Digestión de grasas', 'Salud digestiva']
};

const benefit7 = {
    title: 'Reducción de la acumulación de grasa en el hígado',
    smallResume: 'Vasa ayuda a reducir la acumulación de grasa en el hígado, promoviendo un hígado más saludable.',
    fullResume: 'El Vasa tiene propiedades que ayudan a reducir la acumulación de grasa en el hígado, lo que es fundamental para evitar enfermedades hepáticas como la esteatosis hepática.',
    tags: ['Reducción de grasa', 'Salud hepática', 'Desintoxicación']
};

const benefit8 = {
    title: 'Control de la inflamación intestinal',
    smallResume: 'Yasthimadhu apoya la salud intestinal, lo que indirectamente beneficia al hígado.',
    fullResume: 'Yasthimadhu ayuda a reducir la inflamación intestinal, mejorando la absorción de nutrientes y aliviando la carga sobre el hígado.',
    tags: ['Salud intestinal', 'Antiinflamatorio', 'Beneficio hepático']
};

const benefit9 = {
    title: 'Equilibrio del sistema digestivo',
    smallResume: 'El probiótico Lactobacillus sporogenes apoya la salud digestiva y hepática.',
    fullResume: 'Los probióticos como Lactobacillus sporogenes promueven una flora intestinal saludable, lo que mejora la digestión y reduce la toxicidad que afecta al hígado.',
    tags: ['Probióticos', 'Salud digestiva', 'Desintoxicación']
};

const benefit10 = {
    title: 'Alivio del estrés oxidativo',
    smallResume: 'Amalaki combate el estrés oxidativo que puede dañar el hígado.',
    fullResume: 'Amalaki es un potente antioxidante que ayuda a combatir el estrés oxidativo, protegiendo las células del hígado y previniendo daños a largo plazo.',
    tags: ['Antioxidante', 'Protección hepática', 'Estrés oxidativo']
};

const benefit11 = {
    title: 'Apoyo a la regeneración hepática',
    smallResume: 'Guduchi facilita la regeneración celular del hígado.',
    fullResume: 'Guduchi favorece la regeneración celular del hígado, ayudando a reparar las células hepáticas dañadas y promoviendo una función hepática óptima.',
    tags: ['Regeneración hepática', 'Desintoxicación', 'Salud hepática']
};

const benefit12 = {
    title: 'Mejora de la circulación sanguínea',
    smallResume: 'Bhringraj mejora la circulación, lo que beneficia al hígado.',
    fullResume: 'Bhringraj es conocido por mejorar la circulación sanguínea, lo que favorece el suministro adecuado de oxígeno y nutrientes al hígado.',
    tags: ['Circulación sanguínea', 'Oxigenación', 'Salud hepática']
};

const benefit13 = {
    title: 'Desintoxicación a nivel celular',
    smallResume: 'Karpur Kachari apoya la desintoxicación a nivel celular.',
    fullResume: 'Karpur Kachari ayuda a limpiar el hígado a nivel celular, eliminando toxinas y promoviendo la regeneración celular.',
    tags: ['Desintoxicación celular', 'Antioxidante', 'Regeneración hepática']
};

const benefit14 = {
    title: 'Regulación de los niveles de azúcar en sangre',
    smallResume: 'Vasa ayuda a regular los niveles de azúcar, reduciendo la carga sobre el hígado.',
    fullResume: 'Vasa contribuye a mantener los niveles de azúcar en sangre dentro de los rangos saludables, lo que ayuda a prevenir enfermedades hepáticas relacionadas con la diabetes.',
    tags: ['Regulación de azúcar', 'Salud hepática', 'Prevención de diabetes']
};

const benefit15 = {
    title: 'Mejora del metabolismo de las grasas',
    smallResume: 'Yasthimadhu ayuda en el metabolismo de las grasas, protegiendo al hígado.',
    fullResume: 'Yasthimadhu facilita el metabolismo de las grasas y mejora la digestión, lo que reduce la acumulación de grasa en el hígado y apoya su función.',
    tags: ['Metabolismo de grasas', 'Salud hepática', 'Digestión']
};

const benefit16 = {
    title: 'Reducción de la fatiga',
    smallResume: 'El Amalaki combate la fatiga crónica al mejorar la absorción de nutrientes.',
    fullResume: 'El Amalaki ayuda a reducir los efectos de la fatiga crónica al promover la absorción adecuada de nutrientes, lo que aumenta los niveles de energía y mejora el bienestar general.',
    tags: ['Energía', 'Reducción de fatiga', 'Bienestar general']
};

const benefit17 = {
    title: 'Mejora de la salud del corazón',
    smallResume: 'Guduchi apoya la salud del corazón al mejorar la circulación sanguínea.',
    fullResume: 'Guduchi tiene propiedades que ayudan a mejorar la circulación sanguínea y, por lo tanto, favorece la salud cardiovascular al reducir la presión arterial y mejorar el flujo sanguíneo.',
    tags: ['Salud del corazón', 'Circulación sanguínea', 'Presión arterial']
};

const benefit18 = {
    title: 'Fortalecimiento del sistema inmunológico',
    smallResume: 'Bhringraj fortalece el sistema inmunológico, protegiendo el cuerpo de infecciones.',
    fullResume: 'Bhringraj tiene propiedades inmunoestimulantes que ayudan a fortalecer el sistema inmunológico, protegiendo al cuerpo contra infecciones y enfermedades.',
    tags: ['Sistema inmunológico', 'Protección contra infecciones', 'Salud general']
};

const benefit19 = {
    title: 'Alivio de problemas respiratorios',
    smallResume: 'Chandan actúa como un expectorante, ayudando a aliviar problemas respiratorios.',
    fullResume: 'Chandan es conocido por sus propiedades expectorantes y antiinflamatorias, que ayudan a aliviar la congestión y los problemas respiratorios, mejorando la función pulmonar.',
    tags: ['Problemas respiratorios', 'Expectorante', 'Salud pulmonar']
};

const benefit20 = {
    title: 'Mejora de la función renal',
    smallResume: 'Karpur Kachari apoya la salud renal al facilitar la eliminación de toxinas.',
    fullResume: 'Karpur Kachari ayuda a mejorar la función renal, favoreciendo la eliminación de toxinas del cuerpo y reduciendo la carga en los riñones.',
    tags: ['Función renal', 'Eliminación de toxinas', 'Salud renal']
};

const benefit21 = {
    title: 'Control del colesterol LDL',
    smallResume: 'Katuki ayuda a reducir el colesterol LDL, conocido como "colesterol malo".',
    fullResume: 'Katuki es un ingrediente ayurvédico que ayuda a regular los niveles de colesterol LDL, contribuyendo a un perfil lipídico saludable y protegiendo la salud cardiovascular.',
    tags: ['Colesterol LDL', 'Salud cardiovascular', 'Regulación de lípidos']
};

const benefit22 = {
    title: 'Reducción del estrés',
    smallResume: 'Vasa actúa como un adaptógeno, reduciendo los efectos del estrés sobre el cuerpo.',
    fullResume: 'Vasa es un adaptógeno que ayuda al cuerpo a adaptarse al estrés y reduce sus efectos negativos, promoviendo un estado de calma y equilibrio mental.',
    tags: ['Estrés', 'Adaptógeno', 'Equilibrio mental']
};

const benefit23 = {
    title: 'Apoyo a la salud digestiva',
    smallResume: 'Yasthimadhu facilita la digestión y mejora la absorción de nutrientes.',
    fullResume: 'Yasthimadhu apoya la salud digestiva al aliviar la acidez estomacal, mejorar la digestión y promover la absorción adecuada de nutrientes esenciales.',
    tags: ['Salud digestiva', 'Digestión', 'Absorción de nutrientes']
};

const benefit24 = {
    title: 'Aumento de la resistencia física',
    smallResume: 'El probiótico Lactobacillus sporogenes mejora la salud intestinal, aumentando la resistencia física.',
    fullResume: 'Los probióticos como Lactobacillus sporogenes ayudan a equilibrar la flora intestinal, lo que mejora la digestión y aumenta la energía y resistencia física.',
    tags: ['Resistencia física', 'Probióticos', 'Salud intestinal']
};

const benefit25 = {
    title: 'Mejora de la salud de la piel',
    smallResume: 'Amalaki tiene propiedades antioxidantes que promueven una piel saludable.',
    fullResume: 'El Amalaki, rico en vitamina C y antioxidantes, ayuda a mantener la piel saludable y a prevenir el envejecimiento prematuro, protegiéndola de los daños causados por los radicales libres.',
    tags: ['Salud de la piel', 'Antioxidante', 'Antienvejecimiento']
};

const benefit26 = {
    title: 'Desintoxicación hepática',
    smallResume: 'Guduchi apoya la desintoxicación del hígado al eliminar toxinas acumuladas.',
    fullResume: 'Guduchi tiene propiedades depurativas que ayudan a eliminar las toxinas del hígado, promoviendo su función adecuada y mejorando la salud general.',
    tags: ['Desintoxicación hepática', 'Eliminación de toxinas', 'Salud hepática']
};

const benefit27 = {
    title: 'Alivio de la acidez estomacal',
    smallResume: 'Bhringraj ayuda a reducir la acidez estomacal y a calmar el sistema digestivo.',
    fullResume: 'Bhringraj se utiliza para aliviar la acidez estomacal y otros trastornos digestivos, promoviendo una digestión más saludable y un sistema digestivo equilibrado.',
    tags: ['Acidez estomacal', 'Digestión', 'Equilibrio digestivo']
};

const benefit28 = {
    title: 'Fortalecimiento del cabello',
    smallResume: 'Chandan promueve el crecimiento saludable del cabello y combate la caída.',
    fullResume: 'El Chandan es conocido por sus propiedades que fortalecen el cabello, promoviendo su crecimiento saludable y reduciendo la caída prematura.',
    tags: ['Cuidado capilar', 'Crecimiento del cabello', 'Fortalecimiento capilar']
};

const benefit29 = {
    title: 'Mejora de la circulación sanguínea',
    smallResume: 'Karpur Kachari mejora la circulación sanguínea, apoyando la salud cardiovascular.',
    fullResume: 'Karpur Kachari ayuda a mejorar la circulación sanguínea, lo que beneficia la salud cardiovascular y promueve una mejor oxigenación de los tejidos corporales.',
    tags: ['Circulación sanguínea', 'Salud cardiovascular', 'Oxigenación']
};

const benefit30 = {
    title: 'Reducción de la retención de líquidos',
    smallResume: 'Katuki ayuda a reducir la retención de líquidos, promoviendo un equilibrio en el cuerpo.',
    fullResume: 'Katuki actúa como un diurético natural que ayuda a reducir la retención de líquidos, promoviendo el equilibrio hídrico en el cuerpo y reduciendo la hinchazón.',
    tags: ['Retención de líquidos', 'Equilibrio hídrico', 'Salud general']
};

</script>

<style scoped>

</style>