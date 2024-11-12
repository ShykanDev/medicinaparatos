<template>
    <div class="max-w-sm overflow-hidden rounded-lg shadow-lg">
        <img class="w-full rounded-t-lg" :src="imgSrc" alt="" />
        <div class="px-6 py-4">
            <!-- title -->
            <h2 class="text-xl font-bold text-gray-800">{{ title  }}</h2>
            <!-- small resume -->
            <p class="text-base text-gray-700">
               {{ smallIntro }}
            </p>
                <!-- long resume -->
            <h3>{{ description  }}</h3>
        </div>
        <div class="flex items-center justify-center px-6 pt-4 pb-2 space-x-3">
            <!-- tags -->
            <span v-for="(tag,index) in tags" :key="index" class="inline-block px-3 py-1 m-1 text-xs font-semibold text-teal-800 bg-teal-200 rounded-full">{{ tag }}</span>
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