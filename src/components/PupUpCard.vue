<template>
    <section class="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <article class="w-3/4 p-4 bg-white rounded-lg shadow-lg h-[80%] relative animate-jump-in font-poppins">
        <i @click="popUpStore.closePopUp" class="absolute text-4xl text-red-600 cursor-pointer fas fa-times right-4 top-4 animate-jump"></i>
        <div class="flex flex-col h-full justify-evenly">
          <h2 class="text-4xl font-bold text-center text-emerald-600">{{ popUpStore.getTitle }} </h2>
          <h3>{{ popUpStore.getInfo1 }}</h3>
          <h3>{{ popUpStore.getInfo2 }}</h3>
          <h3>{{ popUpStore.getInfo3 }}</h3>
        </div>
      </article>
    </section>
</template>

<script lang="ts" setup>
import { usePopUpStore } from '@/stores/usePopUp';
const popUpStore = usePopUpStore();


</script>

<style scoped>

</style>
