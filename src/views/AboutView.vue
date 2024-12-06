<template>
  <div>
    <MainLayout>
      <template #main>
  <section class="w-full py-8 overflow-hidden bg-white text-emerald-700">
    <!-- Título principal -->
    <div class="flex justify-center text-emerald-700">
      <h2 class="mb-6 text-3xl font-bold text-center lg:text-5xl">
        🌿 ¿Quiénes Somos? 🌿
      </h2>
    </div>

    <!-- Descripción introductoria -->
    <p class="px-4 mb-4 text-lg font-medium text-center font-poppins lg:text-2xl">
      Nos apasiona llevar bienestar a las personas a través de productos naturales y auténticos, basados en el Ayurveda. 🌱
    </p>

    <!-- Información sobre la marca -->
    <div class="px-4 brand-info">
      <h3 class="mb-4 text-2xl italic font-semibold text-center lg:text-4xl">
        <i class="fas fa-leaf"></i> Sobre nuestra marca
      </h3>
      <p class="mb-4 font-medium font-poppins lg:text-2xl">
        Somos una empresa orgullosamente mexicana que combina tradición y modernidad para ofrecer productos ayurvédicos de la más alta calidad, elaborados con métodos ancestrales y sin químicos añadidos.
      </p>
    </div>

    <!-- Misión -->
    <div class="px-4 mission">
      <h3 class="mb-4 text-2xl italic font-semibold text-center lg:text-4xl">
        <i class="fas fa-bullseye"></i> Nuestra misión
      </h3>
      <p class="mb-4 font-medium font-poppins lg:text-2xl">
        Ayudar a nuestros clientes a encontrar el equilibrio físico y mental mediante soluciones naturales que inspiran confianza.
      </p>
    </div>

    <!-- Visión -->
    <div class="px-4 vision">
      <h3 class="mb-4 text-2xl italic font-semibold text-center lg:text-4xl">
        <i class="fas fa-eye"></i> Nuestra visión
      </h3>
      <p class="mb-4 font-medium font-poppins lg:text-2xl">
        Ser reconocidos como la principal referencia en productos de salud natural, honrando la tradición ayurvédica mientras transformamos vidas a nivel global.
      </p>
    </div>

    <!-- Calidad del producto -->
    <div class="px-4 product-quality">
      <h3 class="mb-4 text-2xl italic font-semibold text-center lg:text-4xl">
        <i class="fas fa-check-circle"></i> Calidad garantizada
      </h3>
      <ul class="pl-6 font-medium list-disc font-poppins lg:text-2xl">
        <li><i class="fas fa-seedling"></i> Ingredientes 100% naturales</li>
        <li><i class="fas fa-carrot"></i> Aptos para vegetarianos</li>
        <li><i class="fas fa-ban"></i> Sin químicos ni conservadores</li>
      </ul>
    </div>

    <!-- Historia de la marca -->
    <div class="px-4 our-story">
      <h3 class="mb-4 text-2xl italic font-medium text-center lg:text-4xl">
        <i class="fas fa-book"></i> Nuestra historia
      </h3>
      <p class="mb-4 font-medium font-poppins lg:text-2xl">
        Nacimos para compartir los beneficios del Ayurveda con el mundo, trayendo el conocimiento milenario de la India a México y más allá.
      </p>
    </div>

    <!-- Lo que ofrecemos -->
    <div class="px-4 what-we-offer">
      <h3 class="mb-4 text-2xl italic font-medium text-center lg:text-4xl">
        <i class="fas fa-shopping-bag"></i> Lo que ofrecemos
      </h3>
      <p class="mb-4 font-medium font-poppins lg:text-2xl">
        Una amplia gama de productos certificados que destacan por su pureza y beneficios para el bienestar integral.
      </p>
    </div>

    <!-- Estadísticas -->
    <div class="flex flex-wrap justify-center gap-10 px-4 my-3 stats">
      <div class="flex-1 text-center">
        <strong class="lg:text-2xl">+50</strong>
        <p class="text-2xl font-medium font-poppins"><i class="fas fa-clock"></i> Años de experiencia</p>
      </div>
      <div class="flex-1 text-center">
        <strong class="lg:text-2xl">+1000</strong>
        <p class="text-2xl font-medium font-poppins"><i class="fas fa-box"></i> Artículos vendidos</p>
      </div>
      <div class="flex-1 text-center">
        <strong class="lg:text-2xl">100%</strong>
        <p class="text-2xl font-medium font-poppins"><i class="fas fa-leaf"></i> Naturales y vegetarianos</p>
      </div>
      <div class="flex-1 text-center">
        <strong class="lg:text-2xl">100%</strong>
        <p class="text-2xl font-medium font-poppins"><i class="fas fa-star"></i> Calidad Ayurvédica</p>
      </div>
    </div>
  </section>
</template>


    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<style scoped>
</style>
