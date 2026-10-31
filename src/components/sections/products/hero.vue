<script setup lang="ts">
    import heroImage from '@/assets/herobg.png'
</script>

<template>
    <section
        class="relative flex w-full py-10 items-center bg-cover bg-center"
        :style="{ backgroundImage: `url(${heroImage})` }"
    >
        <!-- Green gradient overlay -->
        <div
            class="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent"
        ></div>

        <!-- Hero content -->
        <div class="relative flex flex-col gap-4 z-10 w-full px-6 py-16 sm:px-10 lg:px-20 text-white">
            <p class="uppercase font-semibold tracking-widest">OUR PRODUCTS</p>
            
            <h1 class="flex flex-col max-w-2xl font-heading text-4xl font-medium text-white sm:text-5xl lg:text-7xl">
                <span>Quality <span class="text-green-600">crops,</span></span> <span>and healthy <span class="text-harvest-orange">livestock</span></span> 
            </h1>
            <p class="text-lg text-gray-300 max-w-2xl">
                We grow a variety of vegetables and raise livestock, providing nutritious produce for our local community.
            </p>
        </div>
    </section>
</template>