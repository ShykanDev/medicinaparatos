<template>
<div class="">
  <div class="min-h-64 min-w-36 max-w-96 bg-white p-[2px] rounded-lg shadow-sm">
    <img class="w-full bg-cover rounded-t-lg pointer-events-none select-none" :src="imgSrc" alt="" />
    <article class="p-3">
        <!-- title -->
      <h2 class="text-2xl font-medium text-center text-rose-800">{{ title }}</h2>
      <!-- short description -->
      <h3 class="mt-2">{{ shortResume  }}</h3>

      <!-- long description -->
      <h4 class="mt-2">{{ longResume }}</h4>

      <!-- list -->
      <ul class="mt-5">
        <li v-for="(item, index) in listTitles" :key="index">
            <span class="font-bold text-rose-800">{{ item }}:</span> {{ listContent[index] }}
        </li>
      </ul>
    </article>
  </div>
</div>


</template>
<script lang="ts" setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    shortResume:{
        type: String,
        required: true
    },
    longResume:{
        type: String,
        required: true
    },
    listTitles: {
        type: Array,
        required: true
    },
    listContent:{
        type: Array,
        required: true
    },
    imgSrc: {
        type: String,
        default:'https://i.guim.co.uk/img/media/d0105731685e5b2b3daecf2fa00c9affaba832f1/0_0_2560_1536/master/2560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=813bbc6e03dae66c2d041b98615ea63c'
        // required: true
    }
})
</script>

<style scoped>

</style>