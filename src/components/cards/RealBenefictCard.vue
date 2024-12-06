<template>
   <div class="overflow-hidden bg-white rounded-lg shadow-xl max-w-72 ">
    <!-- Card image section -->
    <div class="relative">
        <img class="object-cover w-full h-56" :src="imgSrc" alt="" />
        <div class="absolute p-2 bg-white rounded-lg text-emerald-800 bottom-4 left-4">
            <h2 class="text-xl font-semibold">{{ title }}</h2>
        </div>
    </div>

    <!-- Card body -->
    <div class="px-6 py-5">
        <!-- Small intro -->
        <p class="mb-3 text-sm text-gray-600">{{ smallIntro }}</p>

        <!-- Long description -->
        <p class="text-base text-gray-700">{{ description }}</p>
    </div>

    <!-- Tag section -->
    <div class="flex flex-wrap px-6 pb-6">
        <span v-for="(tag, index) in tags" :key="index" class="inline-block px-4 py-1 m-1 text-xs font-medium text-white transition rounded-md bg-emerald-800 hover:bg-teal-200">
            {{ tag }}
        </span>
    </div>
</div>


    </template>

    <script lang="ts" setup>
    const props = defineProps({
            title:String,
            smallIntro: String,
            description: String,
            tags:Array,
            imgSrc: String
    })
    </script>

    <style scoped>

    </style>
