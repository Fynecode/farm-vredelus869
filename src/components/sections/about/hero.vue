
<script setup lang="ts">
import heroImage from '@/assets/herobg.png'
</script>

<template>
    <section
        class="relative flex min-h-[75vh] items-center bg-cover bg-center sm:min-h-[80vh]"
        :style="{ backgroundImage: `url(${heroImage})` }"
    >
        <!-- Dark overlay for text readability -->
        <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/15"
        ></div>

        <!-- Hero content -->
        <div
            class="relative z-10 flex w-full flex-col gap-5 px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-20"
        >
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-farm-green-bright sm:text-base">
                About the farm
            </p>

            <h1
                class="max-w-3xl font-heading text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-7xl"
            >
                Our story, our people,
                <span class="text-harvest-orange">our land.</span>
            </h1>

            <p class="max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
                Farm Vredelus 869 is a family-run agricultural business based in the
                Oshikoto region. We are committed to producing quality crops and
                raising healthy livestock, while caring for our land and supporting
                our local community.
            </p>
        </div>
    </section>
</template>