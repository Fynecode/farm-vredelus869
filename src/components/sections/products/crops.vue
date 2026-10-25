<script setup lang="ts">
    import SectionHeader from '../../common/Section-header.vue';
    import SectionLayout from '../../layout/SectionLayout.vue';
    import productCard from '../../common/Product-card-full.vue'

    import cabbage from '@/assets/cabbage.jpg'
    import spinach from '@/assets/Spinach.jpg'
    import potatoes from '@/assets/potatoes.jpg'
    import tomatoes from '@/assets/tomatoes.jpg'
    import onion from '@/assets/onion.jpg'
    import peppers from '@/assets/green_peppers.jpg'
    import watermelon from '@/assets/watermelon.jpg'

    import { ArrowRight } from 'lucide-vue-next';
    import { RouterLink } from 'vue-router';

    const crops = [
        {
            title: 'Cabbage',
            variety: 'Star 3301 & Megastar f1',
            description: 'Fresh, high-quality cabbage grown with care.',
            image: cabbage,
        },
        {
            title: 'Spinach',
            variety: 'Swish chard',
            description: 'Nutritious and fresh from our field.',
            image: spinach,
        },
        {
            title: 'Onions',
            variety: 'SG8378',
            description: 'Strong and reliable harvests.',
            image: onion,
        },
        {
            title: 'Potatoes',
            variety: 'Mondial',
            description: 'Good quality potatoes for everyday use.',
            image: potatoes,
        },
        {
            title: 'Tomatoes',
            variety: 'Zara',
            description: 'Fresh and full of flavour.',
            image: tomatoes,
        },
        {
            title: 'Green Peppers',
            variety: 'Double up f1',
            description: 'Crisp and full of taste.',
            image: peppers,
        },
        {
            title: 'Watermelon',
            variety: 'Crimson sweet',
            description: 'Sweet, refreshing, and locally grown.',
            image: watermelon,
        },
    ]
</script>

<template>
    <SectionLayout>
        <SectionHeader>
            <template #title>
                Our crops
            </template>
            <template #subtitle>
               Fresh crops from our fields
            </template>
            <p class="text-farm-green">High quality, locally grown produce cultivated with care and dedication</p>
        </SectionHeader>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <productCard v-for="item in crops" class="hover:scale-105 transition-transform duration-300 cursor-pointer">
                <template #image>
                    <img :src="item.image" class="w-full max-h-44 object-cover object-center rounded-t-lg"/>
                </template>
                <template #title>{{ item.title }}</template>
                <template #variety>{{ item.variety }}</template>
                <template #description>{{ item.description }}</template>
                <RouterLink to="/contact" class="flex flex-row items-center gap-2 text-sm text-green-600 hover:text-green-800/40 transition">Enquire about availability <ArrowRight class="size-4"/> </RouterLink>
            </productCard>
        </div>
    </SectionLayout>
    
</template>