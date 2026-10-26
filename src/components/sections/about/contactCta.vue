
<script setup lang="ts">
import heroImage from '@/assets/leaves.jpg'
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
    <section
        class="relative flex items-center overflow-hidden border-b border-white bg-cover bg-center"
        :style="{ backgroundImage: `url(${heroImage})` }"
    >
        <!-- Green overlay -->
        <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-r from-farm-green-dark via-farm-green-dark/90 via-80% to-farm-green-dark/60"
        ></div>

        <!-- Call-to-action content -->
        <div
            class="relative z-10 flex w-full flex-col gap-6 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:gap-8 lg:px-20"
        >
            <div class="flex min-w-0 flex-1 items-start gap-4 sm:items-center sm:gap-5">

                <header class="flex min-w-0 flex-col gap-2">
                    <p class="text-xs font-semibold tracking-[0.2em] text-farm-green-bright sm:text-sm">
                        Get in touch
                    </p>

                    <h2 class="font-heading text-3xl leading-tight sm:text-4xl lg:text-5xl">
                        Let's work together
                    </h2>

                    <p class="max-w-2xl text-sm leading-relaxed text-gray-200 sm:text-base">
                        Have a question, want to place an order or learn more
                        about our products? We'd love to hear from you.
                    </p>
                </header>
            </div>

            <RouterLink
                to="/contact"
                class="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-white px-5 py-3 font-medium text-white transition-colors hover:bg-white hover:text-farm-green focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6"
            >
                Contact us
                <ArrowRight aria-hidden="true" class="ml-2 size-4" />
            </RouterLink>
        </div>
    </section>
</template>
