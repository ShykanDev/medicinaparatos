<template>
<div class="flex flex-col w-full bg-white border rounded-lg shadow-md border-emerald-400 md:flex-row md:h-auto">
  <!-- Imagen -->
  <div class="relative w-full md:w-1/2">
    <img
      class="object-cover w-full h-48 rounded-t-lg md:h-full md:rounded-none md:rounded-l-lg"
      :src="imgUrl"
      alt="Imagen principal"
    />
  </div>
  <!-- Contenido -->
  <div class="flex flex-col justify-between w-full p-6 md:w-1/2">
    <!-- Título -->
    <h3 class="text-2xl font-bold text-gray-800 md:text-3xl">
      {{ title }}
      <span class="block text-emerald-600">{{ strongTitle }}</span>
    </h3>
    <!-- Descripción -->
    <div class="mt-4 space-y-3 text-lg text-gray-600 font-poppins">
      <p v-html="highlightHigado(description1)"></p>
      <p v-html="highlightHigado(description2)"></p>
    </div>
    <!-- Botón opcional -->
    <button
    @click="popUpStore.setPopUp(exTitle, exInfo1, exInfo2, exInfo3)"
      class="px-4 py-2 mt-6 font-medium text-white rounded-md bg-emerald-600 hover:bg-emerald-700"
    >
     Leer más  <i class="ml-2 text-xl text-white fas fa-book-open"></i>
    </button>
  </div>
</div>

</template>

<script lang="ts" setup>
import { usePopUpStore } from '@/stores/usePopUp';

const props = defineProps({
  imgUrl: {
    type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_WE4hUxUFNJ_WC_5NwTBjUxSr1xMF7batA&s'
  },
  title: {
    type: String,
    default: 'Livac'
  },
  strongTitle: {
    type: String,
    default: ''
  },
  description1: {
    type: String,
    default:
      'El hígado es el principal órgano de desintoxicación del cuerpo, esencial para filtrar toxinas y eliminar desechos. Sin embargo, la exposición a contaminantes, alimentos procesados y el estrés pueden sobrecargarlo.'
  },
  description2: {
    type: String,
    default:
      'LIVAD ayuda a respaldar la desintoxicación natural del hígado con su fórmula ayurvédica especialmente diseñada.'
  },
  showImgLeft: {
    type: Boolean,
    default: false
  },
  exTitle:{
    type: String,
    default: 'Titulo'
  },
  exInfo1: {
    type: String,
    default: ''
  },
  exInfo2: {
    type: String,
    default: ''
  },
  exInfo3: {
    type: String,
    default: ''
  }
});


const highlightHigado = (text: string) => {
  return text.replace(/hígado/gi, '<strong class="text-emerald-800">HÍGADO</strong>')
  .replace(/respiratorias/gi, '<strong class="text-emerald-800">RESPIRATORIAS</strong>')
  .replace(/fortalece/gi, '<strong class="text-emerald-800">FORTALECE</strong>')
  .replace(/combatir/gi, '<strong class="text-emerald-800">COMBATIR</strong>')
  .replace(/tos/gi, '<strong class="text-emerald-800">TOS</strong>')
  .replace(/infecciones/gi, '<strong class="text-emerald-800">INFECCIONES</strong>')
  .replace(/equilibrio/gi, '<strong class="text-emerald-800">EQUILIBRIO</strong>')
  .replace(/respiratorio/gi, '<strong class="text-emerald-800">RESPIRATORIO</strong>')
  .replace(/moco/gi, '<strong class="text-emerald-800">MOCO</strong>')
  .replace(/pulmones/gi, '<strong class="text-emerald-800"></PULMONESstrong>')
  .replace(/respiración/gi, '<strong class="text-emerald-800">RESPIRACIÓN</strong>')
  .replace(/oxígeno/gi, '<strong class="text-emerald-800">OXÍGENO</strong>')



};


const popUpStore = usePopUpStore();



</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí */
</style>
