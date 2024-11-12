<template>
  <div>
    <MainLayout>
      <template #main>
        <section class="w-full py-8 overflow-hidden text-white text bg-rose-800">
          <!-- Título principal -->
          <div class="flex justify-center text-white ">
            <h2 class="mb-6 text-3xl font-bold lg:text-5xl">🌿 ¿Quiénes Somos? 🌿</h2>
          </div>

          <!-- Descripción introductoria -->
          <p class="px-4 mb-4 text-lg font-medium text-center font-poppins lg:text-2xl">Descubre nuestra esencia y compromiso con la salud a través de productos ayurvédicos de calidad. 🌱</p>

          <!-- Información sobre la marca -->
          <div class="px-4 brand-info">
            <h3 class="mb-4 text-2xl italic font-semibold text-white lg:text-4xl">Sobre nuestra marca 🌟</h3>
            <p class="mb-4 font-medium font-poppins lg:text-2xl">Somos una empresa mexicana enfocada en la creación, fabricación, importación y distribución de productos 100% naturales que siguen los antiguos métodos ayurvédicos de la India. Nuestros productos aseguran pureza y eficacia, brindando bienestar a quienes los usan. 🕉️</p>
          </div>

          <!-- Misión -->
          <div class="px-4 mission">
            <h3 class="mb-4 text-2xl italic font-semibold text-white lg:text-4xl">Nuestra misión 🎯</h3>
            <p class="mb-4 font-medium font-poppins lg:text-2xl">Nos dedicamos a ofrecer soluciones naturales que generen confianza y bienestar, poniendo siempre la calidad de nuestros productos al servicio de nuestros clientes. 🤝</p>
          </div>

          <!-- Visión -->
          <div class="px-4 vision">
            <h3 class="mb-4 text-2xl italic font-semibold text-white lg:text-4xl">Nuestra visión 👀</h3>
            <p class="mb-4 font-medium font-poppins lg:text-2xl">Queremos ser la opción líder en salud y bienestar, fusionando lo mejor de las tradiciones milenarias para crear productos ayurvédicos que transformen vidas. 🌍</p>
          </div>

          <!-- Calidad del producto -->
          <div class="px-4 product-quality">
            <h3 class="mb-4 text-2xl italic font-semibold text-white lg:text-4xl">Calidad garantizada ✔️</h3>
            <ul class="pl-6 font-medium list-disc font-poppins lg:text-2xl">
              <li>100% Naturales 🍃</li>
              <li>100% Vegetarianos 🥦</li>
              <li>Libre de químicos y conservantes 🚫</li>
            </ul>
          </div>

          <!-- Historia de la marca -->
          <div class="px-4 our-story">
            <h3 class="mb-4 text-2xl italic font-medium text-white lg:text-4xl">Nuestra historia 📖</h3>
            <p class="mb-4 font-medium font-poppins lg:text-2xl">Prasadam surge como una marca mexicana para ofrecer lo mejor de la medicina ayurvédica, llevando el conocimiento ancestral de la India a todo el mundo. 🌏</p>
          </div>

          <!-- Lo que ofrecemos -->
          <div class="px-4 what-we-offer">
            <h3 class="mb-4 text-2xl italic font-medium text-white lg:text-4xl">¿Qué ofrecemos? 🛍️</h3>
            <p class="mb-4 font-medium font-poppins lg:text-2xl">Contamos con una variada gama de productos ayurvédicos de calidad, respaldados por certificaciones que avalan su pureza y autenticidad. 🌿</p>
          </div>

          <!-- Contacto -->
          <div class="px-4 contact">
            <h3 class="mb-4 text-2xl italic font-medium text-white lg:text-4xl">Contacto rápido 📞</h3>
            <p class="mb-4 font-medium font-poppins lg:text-2xl">Si tienes dudas, contáctanos a través de nuestras redes sociales, mensaje directo o llamando a nuestros números de contacto. ¡Estamos para ayudarte! 💬</p>
          </div>

          <!-- Compras seguras -->
          <div class="px-4 secure-purchase">
            <h3 class="mb-4 text-2xl italic font-medium text-white lg:text-4xl">Compras seguras 💳</h3>
            <p class="mb-4 font-medium font-poppins lg:text-2xl">Si deseas adquirir nuestros productos, no dudes en contactarnos. Te ofrecemos las mejores opciones para que compres con confianza. 🛒</p>
          </div>

          <!-- Productos exportados -->
          <div class="px-4 exported-products">
            <h3 class="mb-4 text-2xl italic font-medium text-white lg:text-4xl">Productos exportados ✈️</h3>
            <p class="mb-4 font-medium font-poppins lg:text-2xl">Todo nuestro catálogo proviene de la región que dio origen al Ayurveda, garantizando la autenticidad en cada producto. 🌱</p>
          </div>

          <!-- Medicinas auxiliares -->
          <div class="px-4 auxiliary-medicines">
            <h3 class="mb-4 text-2xl italic font-medium text-white lg:text-4xl">Medicinas auxiliares 💊</h3>
            <p class="mb-4 font-medium font-poppins lg:text-2xl">Ofrecemos productos en forma de tabletas para aliviar malestares, facilitando el acceso a la medicina ayurvédica de manera cómoda. 💚</p>
          </div>

          <!-- Variedad de productos -->
          <div class="px-4 product-variety">
            <h3 class="mb-4 text-2xl italic font-medium text-white lg:text-4xl">Variedad de productos 🌈</h3>
            <p class="mb-4 font-medium font-poppins lg:text-2xl">Disponemos de una extensa gama de productos, cada uno con beneficios específicos para el bienestar integral. 🌟</p>
          </div>

          <!-- Estadísticas -->
          <div class="flex flex-wrap justify-center gap-10 px-4 my-3 stats">
            <div class="flex-1 text-center">
              <strong class="lg:text-2xl">+50</strong>
              <p class="text-2xl font-medium font-poppins">Años de experiencia 🕰️</p>
            </div>
            <div class="flex-1 text-center">
              <strong class="lg:text-2xl">+1000</strong>
              <p class="text-2xl font-medium font-poppins">Artículos vendidos 📦</p>
            </div>
            <div class="flex-1 text-center">
              <strong class="lg:text-2xl">100%</strong>
              <p class="text-2xl font-medium font-poppins">Productos Naturales y Vegetarianos 🌿</p>
            </div>
            <div class="flex-1 text-center">
              <strong class="lg:text-2xl">100%</strong>
              <p class="text-2xl font-medium font-poppins">Calidad Ayurvédica 🔅</p>
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
