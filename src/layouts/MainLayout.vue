<template>
    <div class="">
      <header class="fixed left-0 right-0 z-50 flex items-center justify-center w-full text-xl bg-emerald-600 md:flex-col min-h-20">
  <div class="flex items-center justify-center gap-3 font-medium text-white font-poppins lg:text-xl">
    <RouterLink :class="{'underline animate-fade': route.name === 'home'}" :to="{ name: 'home' }">
      <i class="mr-2 fas fa-home"></i> Inicio
    </RouterLink>
    <RouterLink :class="{'underline animate-fade': route.name === 'beneficts'}" :to="{ name: 'beneficts' }">
      <i class="mr-2 fas fa-heart"></i> Beneficios
    </RouterLink>
    <RouterLink :class="{'underline animate-fade': route.name === 'ingredients'}" :to="{ name: 'ingredients' }">
      <i class="mr-2 fas fa-apple-alt"></i> Ingredientes
    </RouterLink>
    <RouterLink :class="{'underline animate-fade': route.name === 'faqs'}" :to="{ name: 'faqs' }">
      <i class="mr-2 fas fa-question-circle"></i> Preguntas
    </RouterLink>
    <RouterLink :class="{'underline animate-fade': route.name === 'about'}" :to="{ name: 'about' }">
      <i class="mr-2 fas fa-users"></i> Nosotros
    </RouterLink>
    <a href="https://www.prasadam.mx/" target="_blank">
      <i class="mr-2 fas fa-external-link-alt"></i> Prasadam
    </a>
  </div>
  <img class="absolute bottom-0 w-9 left-3 lg:w-10 md:bottom-1" src="https://i.ibb.co/9hFYP79/ssl002.png" alt="">
  <img class="absolute bottom-0 w-9 right-3 lg:w-10 md:bottom-1" src="../assets/img/logo.png" alt="">
  <div class="flex justify-center w-full bg-white rounded-sm">
    <div class="hidden gap-2 mt-4 lg:flex">
      <div class="flex items-center">
        <i class="mr-2 text-black fas fa-map-marker-alt"></i>
        <a
          class="text-sm font-medium text-center text-emerald-700 hover:text-orange-200 lg:text-xl font-poppins"
          href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México,+CDMX/@19.4322888,-99.1760704,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1f8b32758939b:0xf34fbd07bc47d6dd!8m2!3d19.4322888!4d-99.1760704!16s%2Fg%2F11c4n3lm2g?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank">
          Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
        </a>
      </div>
      <div class="flex items-center">
        <i class="mr-2 text-emerald-700 fas fa-phone-alt"></i>
        <a
          href="tel:+525563950178"
          class="text-base font-bold text-emerald-700 font-poppins hover:text-orange-700">
          +52 55 6395 0178
        </a>
        <a
          href="tel:+525563950179"
          class="ml-4 text-base font-bold text-emerald-700 font-poppins hover:text-orange-700">
          +52 55 6395 0179
        </a>
      </div>
      <div class="flex items-center">
        <i class="mr-2 text-emerald-700 fas fa-whatsapp"></i>
        <a
          href="https://wa.me/525562516687"
          class="text-base font-bold transition-colors text-emerald-700 font-poppins hover:text-emerald-300"
          target="_blank"
          rel="noopener noreferrer">
          +52 5562516687
        </a>
      </div>
    </div>
  </div>
  <div class="absolute left-0 font-bold bg-white shadow-md rounded-br-md -bottom-7 text-emerald-700">
 <span>medicina</span>
 <span class="text-orange-500">para</span>
 <span>tos</span>
 <span class="text-orange-500">.com</span>
</div>

</header>


        <main class="pt-20">
          <PupUpCard v-show="popUpStore.showPopUp" />
            <slot name="main"></slot>
        </main>
        <footer class="py-6 mt-6 bg-white border-t-4 text-emerald-700 border-emerald-900">
    <div class="container px-6 mx-auto">
        <!-- Título -->
        <h2 class="mb-8 text-3xl font-bold text-center">Contacto</h2>

        <!-- Logo -->
        <div class="flex justify-center mb-8">
            <img class="w-16" src="../assets/img/ssl.png" alt="SSL Logo">
        </div>

        <!-- Información de contacto -->
        <div class="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col items-center">
                <v-icon name="md-locationon" class="mb-3 text-4xl text-emerald-700" scale="1.5" />
                <a href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México,+CDMX" class="text-lg font-medium text-center hover:text-emerald-500">
                    Gutenberg #128, Anzures, Miguel Hidalgo, 11590 Ciudad de México
                </a>
            </div>

            <div class="flex flex-col items-center">
                <v-icon name="bi-telephone-fill" class="mb-3 text-4xl text-emerald-700" scale="1.5" />
                <a href="tel:+525563950178" class="text-lg font-medium hover:text-emerald-500">+52 55 6395 0178</a>
            </div>

            <div class="flex flex-col items-center">
                <v-icon name="bi-telephone-fill" class="mb-3 text-4xl text-emerald-700" scale="1.5" />
                <a href="tel:+525563950179" class="text-lg font-medium hover:text-emerald-500">+52 55 6395 0179</a>
            </div>
        </div>

        <!-- Mapa -->
        <div class="mb-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5395970522604!2d-99.1760704!3d19.4322888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b32758939b%3A0xf34fbd07bc47d6dd!2sGutenberg%20128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1730328617197!5m2!1sen!2smx" allowfullscreen="false" loading="lazy" width="100%" height="300px" style="border: none;" class="rounded-lg shadow-md"></iframe>
        </div>

        <!-- WhatsApp y Email -->
        <div class="flex flex-col justify-center gap-12 mb-8 sm:flex-row">
            <div class="flex items-center mb-4 sm:mb-0">
                <v-icon name="md-email" class="text-3xl text-emerald-700" scale="1.5" />
                <a href="mailto:informes@prasadam.mx" class="ml-2 text-lg font-medium hover:text-emerald-500">informes@prasadam.mx</a>
            </div>
            <div class="flex items-center">
                <v-icon name="co-whatsapp" class="text-3xl text-emerald-700" scale="1.8" />
                <a href="https://wa.me/525562516687" class="ml-2 text-lg font-medium hover:text-emerald-500" target="_blank" rel="noopener noreferrer">+52 5562516687</a>
            </div>
        </div>

        <!-- Derechos de autor -->
        <div class="pt-6 mt-6 border-t border-emerald-700">
            <p class="text-lg font-medium text-center">© {{ new Date().getFullYear() }} Todos los derechos reservados</p>
            <p class="mt-2 text-sm text-center">Design by <strong>PACA</strong></p>
        </div>
    </div>
</footer>





    </div>
</template>

<script lang="ts" setup>
import PupUpCard from '@/components/PupUpCard.vue';
import { usePopUpStore } from '@/stores/usePopUp';
import { useRoute } from 'vue-router';


const popUpStore = usePopUpStore();
const route = useRoute();
</script>

<style scoped>

</style>
