<template>
  <div class="flex flex-col items-center justify-center w-full text-slate-800 font-poppins md:flex-row md:items-start selection:bg-orange-600">
    <!-- image -->
    <img
      class="w-full mb-6 rounded-lg md:w-1/2 md:mb-0 md:mr-6"
      :src="imgUrl"
      alt="Imagen principal"
    />
    <!-- content -->
    <div class="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2">
      <div class="relative">
        <h3 class="z-10 my-4 text-3xl font-medium text-rose-700">
          {{ title }}
          <span class="font-bold underline text-rose-800">{{ strongTitle }}</span>
        </h3>
      </div>
      <div class="relative">
        <!-- Usa v-html para procesar HTML dinámico -->
        <p class="mb-3" v-html="highlightHigado(description1)"></p>
        <p v-html="highlightHigado(description2)"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
  }
});

/**
 * Función para resaltar "hígado" en las descripciones.
 * Envuelve la palabra "hígado" en un <strong>.
 */
const highlightHigado = (text: string) => {
  return text.replace(/hígado/gi, '<strong class="text-rose-800">HÍGADO</strong>');
};
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí */
</style>
