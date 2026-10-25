
<script setup lang="ts">
import heroImage from '@/assets/herobg.png'
import LinkButton from '@/components/common/Link-button.vue'
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
    <section
        class="relative flex min-h-[75vh] items-center bg-cover bg-center sm:min-h-[80vh] lg:min-h-[80vh]"
        :style="{ backgroundImage: `url(${heroImage})` }"
    >
        <!-- Gradient overlay -->
        <div
            class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20 sm:to-transparent"
        ></div>

        <!-- Hero content -->
        <div
            class="relative z-10 flex w-full flex-col gap-4 px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-20"
        >
            <!-- Eyebrow labels -->
            <div class="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium tracking-wide sm:gap-x-4 sm:text-sm">
                <p>QUALITY PRODUCE</p>
                <span class="size-1.5 shrink-0 rounded-full bg-white"></span>
                <p>SUSTAINABLE FARMING</p>
                <span class="size-1.5 shrink-0 rounded-full bg-white"></span>
                <p>LOCAL MARKETS</p>
            </div>

            <h1
                class="max-w-2xl font-heading text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-7xl"
            >
                Farm Vredelus<span class="text-harvest-orange">869</span>
            </h1>

            <h2
                class="max-w-2xl font-heading text-lg font-semibold leading-snug text-white sm:text-xl lg:text-2xl"
            >
                Fresh produce and healthy livestock grown with purpose.
            </h2>

            <p class="max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
                We are a dedicated agricultural farm based in the Oshikoto
                region, producing quality crops and livestock for the local market.
            </p>

            <!-- Calls to action -->
            <div class="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4">
                <LinkButton to="/products">
                    <template #default>
                        Our Products
                        <ArrowRight class="ml-2 inline-block size-4" />
                    </template>
                </LinkButton>

                <RouterLink
                    to="/about"
                    class="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 font-medium text-white transition hover:border-white/70 hover:bg-white/10"
                >
                    About the farm
                    <ArrowRight class="ml-2 inline-block size-4" />
                </RouterLink>
            </div>
        </div>
    </section>
</template>