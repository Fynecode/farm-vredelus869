<script setup lang="ts">
import { UsersIcon, ShieldCheckIcon, StarIcon, ArrowPathIcon } from '@heroicons/vue/24/solid'
import SectionLayout from '../layout/SectionLayout.vue'

const cards = [
    {
        icon: StarIcon,
        title: 'Quality Produce',
        description: 'Fresh, healthy, and well cared for',
    },
    {
        icon: UsersIcon,
        title: 'Local Focus',
        description: 'Supporting our community and local markets',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Responsible Farming',
        description: 'For a healthier tomorrow',
    },
    {
        icon: ArrowPathIcon,
        title: 'Sustainable Practices',
        description: 'Respecting the land and resources',
    },
]
</script>

<template>
    <SectionLayout
        class="flex flex-col gap-8 bg-farm-green-bright/10 text-farm-green lg:flex-row lg:items-center lg:gap-10"
    >
        <!-- Section heading -->
        <div class="flex flex-col gap-2 lg:w-1/3 lg:shrink-0">
            <p class="text-sm font-semibold tracking-widest">
                WHY CHOOSE US
            </p>

            <h3 class="max-w-lg font-heading text-3xl leading-tight sm:text-4xl">
                Good food starts with good farming
            </h3>
        </div>

        <!-- Trust indicators -->
        <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:flex-1 lg:grid-cols-4">
            <div
                v-for="card in cards"
                :key="card.title"
                class="flex min-w-0 flex-col gap-3 border-farm-green/20 sm:px-5 lg:border-l lg:px-4 xl:px-5"
            >
                <component :is="card.icon" class="size-7 shrink-0 sm:size-8" />

                <p class="text-base font-semibold leading-snug sm:text-lg">
                    {{ card.title }}
                </p>

                <p class="text-sm font-light leading-relaxed text-gray-600 sm:text-base">
                    {{ card.description }}
                </p>
            </div>
        </div>
    </SectionLayout>
</template>