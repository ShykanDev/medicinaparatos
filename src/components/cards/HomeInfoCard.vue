<template>
    <div class="flex flex-col items-center justify-center w-full text-slate-800 font-poppins md:flex-row md:items-start">
      <!-- image -->
      <img 
        class="w-full mb-6 rounded-lg md:w-1/2 md:mb-0 md:mr-6"
        :src="imgUrl" 
        alt="Imagen principal"
      />
      <!-- content -->
      <div class="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2">
        <div class="relative">
          <h3 class="z-10 my-4 text-3xl font-medium text-rose-700">{{ title }}</h3>
          <!-- <img 
            :class="{ 'right-0': !showImgLeft, 'left-0': showImgLeft }" 
            class="absolute w-16 -top-5" 
            src="../../assets/img/liverHome.png" 
            alt="Decorativo"
          />
          <img 
            :class="{ 'right-0': showImgLeft, 'left-0': !showImgLeft }" 
            class="absolute w-11 -top-16" 
            src="../../assets/img/luvacFront.png" 
            alt="Decorativo"
          /> -->
        </div>
        <div class="relative">
          <p class="mb-3">{{ description1 }}</p>
          <p>{{ description2 }}</p>
        </div>
      </div>
    </div>
  </template>
  
  

<script lang="ts" setup>
const props = defineProps({
    imgUrl:{
        String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_WE4hUxUFNJ_WC_5NwTBjUxSr1xMF7batA&s'
    },
    title:{
        String, 
        default: 'Livac'
    },
    description1: {
        String,
        default: 'essenzaa LIFESCIENCE PROYURVEDA es un concepto único y PATENTADO, que combina lo mejor de dos mundos: PROBIÓTICOS Y AYURVEDA (Hierbas). Juntos, ofrecen múltiples ventajas y mejoran el bienestar general. CIDNI es un suplemento formulado especialmente con la sabiduría ancestral del Ayurveda (hierbas) y enriquecido con tecnología moderna, el cual puede ayudar a neutralizar el ácido estomacal, manejar los síntomas de reflujo gastroesofágico (ERGE) y prevenir la regurgitación.'
    },
    description2: {
        String, 
        default: ''
    },
    showImgLeft: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>

</style>s