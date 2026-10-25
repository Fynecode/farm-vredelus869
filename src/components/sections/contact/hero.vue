<script setup lang="ts">
    import heroImage from '@/assets/herobg.png'

    import { Heart } from 'lucide-vue-next';
</script>

<template>
    <section
        class="relative flex items-center bg-cover bg-center"
        :style="{ backgroundImage: `url(${heroImage})` }"
    >
        <!-- Green gradient overlay -->
        <div
            class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"
        ></div>

        <!-- Hero content -->
        <div class="relative flex flex-col gap-4 z-10 w-full px-6 py-16 pt-36 sm:px-10 lg:px-20 text-white">
            <!-- <p>CONTACT US</p> -->
            
            <h1 class="relative flex flex-row gap-4 font-heading text-4xl font-medium text-white sm:text-5xl lg:text-7xl">
                We'd love to hear from you.
            </h1>
            <p class="text-lg text-gray-300 max-w-2xl">
                Whether you're a customer looking for fresh produce, a business partner, or just want to learn more about our farm, reach out. We'll get back to you as soon as possible.
            </p>
        </div>
    </section>
</template>