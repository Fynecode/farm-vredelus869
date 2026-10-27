
<script setup lang="ts">
import SectionHeader from '../../common/Section-header.vue'
import SectionLayout from '../../layout/SectionLayout.vue'
import ProductCard from '../../common/Product-card-full.vue'

import { ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

import cattle from '@/assets/cows2.jpg'
import goats from '@/assets/goats2.jpg'
import chicken from '@/assets/chickens.jpg'

const livestock = [
    {
        title: 'Cattle',
        description:
            'Discover our cattle and enquire about current availability.',
        image: cattle,
    },
    {
        title: 'Goats',
        description:
            'Learn more about our goats and ask about availability.',
        image: goats,
    },
    {
        title: 'Chicken',
        description:
            'Contact us to learn about our poultry and current availability.',
        image: chicken,
    },
]
</script>

<template>
    <SectionLayout class="flex flex-col gap-8 bg-white text-farm-green lg:gap-10">
        <SectionHeader>
            <template #title>
                Our livestock
            </template>

            <template #subtitle>
                Raised with care
            </template>

            <template #default>
                <p class="max-w-xl leading-relaxed text-gray-600">
                    Livestock is part of our farming operation. Get in touch
                    to learn more about our animals and enquire about current
                    availability.
                </p>
            </template>
        </SectionHeader>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
                v-for="animal in livestock"
                :key="animal.title"
                class="transition-transform duration-300 hover:-translate-y-1"
            >
                <template #image>
                    <img
                        :src="animal.image"
                        :alt="animal.title"
                        class="aspect-[4/3] w-full rounded-t-lg object-cover object-center"
                        loading="lazy"
                    />
                </template>

                <template #title>
                    {{ animal.title }}
                </template>

                <template #description>
                    {{ animal.description }}
                </template>

                <RouterLink
                    to="/contact"
                    class="inline-flex w-fit items-center gap-2 text-sm font-medium text-farm-green transition-colors hover:text-green-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-farm-green"
                >
                    Enquire about availability
                    <ArrowRight
                        aria-hidden="true"
                        class="size-4 shrink-0"
                    />
                </RouterLink>
            </ProductCard>
        </div>
    </SectionLayout>
</template>
