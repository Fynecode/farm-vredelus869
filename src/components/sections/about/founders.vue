
<script setup lang="ts">
import SectionLayout from '../../layout/SectionLayout.vue'
import SectionHeader from '../../common/Section-header.vue'

import founderImage from '@/assets/founder.jpg'
</script>

<template>
    <SectionLayout
        class="grid grid-cols-1 items-center gap-8 text-farm-green md:grid-cols-2 md:gap-10 lg:gap-16"
    >
        <!-- Founders' story -->
        <div class="flex min-w-0 flex-col gap-6 sm:gap-8">
            <SectionHeader>
                <template #title>
                    Meet the founders
                </template>

                <template #subtitle>
                    John and Linea Shaetonhodi
                </template>

                <template #default>
                    <div class="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs tracking-widest text-farm-green sm:text-sm">
                        <p>ENTREPRENEURS</p>
                        <span class="size-1 shrink-0 rounded-full bg-farm-green"></span>
                        <p>FARMERS</p>
                        <span class="size-1 shrink-0 rounded-full bg-farm-green"></span>
                        <p>VISIONARIES</p>
                    </div>
                </template>
            </SectionHeader>

            <div class="flex flex-col gap-4 text-base leading-relaxed text-gray-700 sm:gap-6">
                <p>
                    John and Linea Shaetonhodi are the driving force behind
                    Farm Vredelus 869. With a shared passion for agriculture
                    and a deep commitment to the land, they have built a farm
                    focused on quality, responsible farming, and long-term growth.
                </p>

                <p>
                    John brings hands-on farming experience and a strong
                    understanding of the land, while Linea contributes business
                    insights and a focus on people, customers, and community development.
                </p>

                <blockquote
                    class="rounded-l border-l-4 border-farm-green bg-farm-green/5 px-4 py-3 text-sm italic sm:w-5/6 sm:text-base"
                >
                    “We believe in good food, healthy land and a stronger future
                    for our community.”
                </blockquote>
            </div>
        </div>

        <!-- Founders' photograph -->
        <div class="w-full overflow-hidden rounded-lg">
            <img
                :src="founderImage"
                alt="John and Linea Shaetonhodi, founders of Farm Vredelus 869"
                class="aspect-[4/3] w-full rounded-lg object-cover object-center transition-transform duration-600 ease-out hover:scale-105 motion-reduce:transition-none sm:aspect-[5/4] md:aspect-[4/5] lg:aspect-[5/4]"
                loading="lazy"
            />
        </div>
    </SectionLayout>
</template>
