<template>
<div class="w-full bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row md:w-[40%]">
  <!-- Imagen -->
  <div class="w-full sm:w-1/3">
    <img
      :src="imgSrc"
      alt="Noticia"
      class="object-cover w-full h-full sm:h-auto"
    />
  </div>
  <!-- Contenido -->
  <div class="flex flex-col justify-between p-5 sm:w-2/3">
    <!-- Título -->
    <h3 class="mb-2 text-lg font-bold text-gray-800">
      {{ title }}
    </h3>
    <!-- Descripción -->
    <p class="mb-4 text-sm text-gray-600 line-clamp-3">
      {{ description }}
    </p>
    <!-- Enlace -->
    <a
      :href="hrefLink"
      target="_blank"
      rel="noopener noreferrer"
      class="self-start px-3 py-2 text-sm font-semibold text-white rounded-lg bg-emerald-600 hover:bg-emerald-700"
    >
      Leer más &rarr;
    </a>
  </div>
</div>


</template>

<script lang="ts" setup>

const props = defineProps({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    hrefLink:{
        type: String,
        default: 'https://www.infobae.com/mexico/2024/09/07/fraude-y-usurpacion-de-identidad-hombre-enfrenta-deuda-millonaria-ante-el-sat-por-culpa-de-su-exnovia/',
    },
    imgSrc:{
        type: String,
        default: 'https://www.infobae.com/resizer/v2/M77N36ROIZCPJJMGCXTNJKNIKA.jpg?auth=5db829d0410e14ff5b2292a0f29da161bbaa7328a51f5b218cc194538ddf9401&smart=true&width=992&height=558&quality=85',
    }

})
</script>

<style scoped></style>
