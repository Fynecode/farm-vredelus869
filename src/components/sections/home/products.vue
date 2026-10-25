
<script setup lang="ts">
import SectionHeader from '@/components/common/Section-header.vue'
import ProductCard from '@/components/common/Product-card.vue'
import SectionLayout from '@/components/layout/SectionLayout.vue'
import LinkButton from '@/components/common/Link-button.vue'

import cabbageImage from '@/assets/IMG-20261016-WA0001.jpg'
import cabbage from '@/assets/cabbage.jpg'
import spinach from '@/assets/Spinach.jpg'
import potatoes from '@/assets/potatoes.jpg'
import tomatoes from '@/assets/tomatoes.jpg'
import onion from '@/assets/onion.jpg'
import peppers from '@/assets/green_peppers.jpg'
import watermelon from '@/assets/watermelon.jpg'

import { Sprout, Beef, ArrowRight } from 'lucide-vue-next'
import { ref } from 'vue'

const selectedCategory = ref<'crops' | 'livestock'>('crops')

const crops = [
    { title: 'Cabbage', description: 'Fresh, high-quality cabbage grown with care.', image: cabbage },
    { title: 'Spinach', description: 'Nutritious and fresh from our field.', image: spinach },
    { title: 'Onions', description: 'Strong and reliable harvests.', image: onion },
    { title: 'Potatoes', description: 'Good quality potatoes for everyday use.', image: potatoes },
    { title: 'Tomatoes', description: 'Fresh and full of flavour.', image: tomatoes },
    { title: 'Green Peppers', description: 'Crisp and full of taste.', image: peppers },
    { title: 'Watermelon', description: 'Sweet, refreshing, and locally grown.', image: watermelon },
]

const livestock = [
    { title: 'Cattle', description: 'Healthy cattle raised on our farm.', image: cabbageImage },
    { title: 'Goats', description: 'Goats raised as part of our livestock farming.', image: cabbageImage },
    { title: 'Chickens', description: 'Chickens raised on our farm.', image: cabbageImage },
]
</script>

<template>
    <SectionLayout class="flex flex-col gap-6">
        <!-- Section heading and category switcher -->
        <div class="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div class="flex min-w-0 flex-col gap-3 text-farm-green">
                <SectionHeader>
                    <template #title>OUR PRODUCTS</template>
                    <template #subtitle>Quality crops and healthy livestock</template>
                </SectionHeader>

                <p class="max-w-2xl text-base leading-relaxed sm:text-lg">
                    We grow a variety of fresh vegetables and raise livestock,
                    providing nutritious produce for our local community.
                </p>
            </div>

            <div class="flex shrink-0">
                <div
                    class="inline-flex max-w-full rounded-full border border-farm-green/30 p-1 text-sm"
                    role="group"
                    aria-label="Choose product category"
                >
                    <button
                        type="button"
                        class="inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 font-medium transition-colors sm:px-4"
                        :class="selectedCategory === 'crops'
                            ? 'bg-farm-green text-white'
                            : 'text-farm-green hover:bg-farm-green/10'"
                        :aria-pressed="selectedCategory === 'crops'"
                        @click="selectedCategory = 'crops'"
                    >
                        <Sprout class="size-4" />
                        Crops
                    </button>

                    <button
                        type="button"
                        class="inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 font-medium transition-colors sm:px-4"
                        :class="selectedCategory === 'livestock'
                            ? 'bg-farm-green text-white'
                            : 'text-farm-green hover:bg-farm-green/10'"
                        :aria-pressed="selectedCategory === 'livestock'"
                        @click="selectedCategory = 'livestock'"
                    >
                        <Beef class="size-4" />
                        Livestock
                    </button>
                </div>
            </div>
        </div>

        <!-- Product cards -->
        <div
            class="mt-4 grid grid-cols-1 gap-5 text-farm-green sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
            <ProductCard
                v-for="item in selectedCategory === 'crops' ? crops : livestock"
                :key="item.title"
                class="min-w-0 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
                <template #image>
                    <img
                        :src="item.image"
                        :alt="item.title"
                        loading="lazy"
                        class="aspect-[4/3] w-full rounded-t-lg object-cover object-center"
                    />
                </template>

                <template #title>{{ item.title }}</template>
                <template #description>{{ item.description }}</template>
            </ProductCard>
        </div>

        <!-- All products link -->
        <div class="mt-4 flex">
            <LinkButton to="/products">
                All Products
                <ArrowRight class="ml-2 inline-block size-4" />
            </LinkButton>
        </div>
    </SectionLayout>
</template>