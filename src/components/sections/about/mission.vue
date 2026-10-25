
<script setup lang="ts">
import SectionLayout from '@/components/layout/SectionLayout.vue'
import SectionHeader from '../../common/Section-header.vue'

import rImage from '@/assets/founders.jpg'
import { Leaf, Sprout, Users } from 'lucide-vue-next'

const commitments = [
    {
        icon: Sprout,
        text: 'Quality produce and livestock',
    },
    {
        icon: Users,
        text: 'Local jobs and community support',
    },
    {
        icon: Leaf,
        text: 'A sustainable future',
    },
]
</script>

<template>
    <SectionLayout
        class="flex flex-col gap-8 text-farm-green md:flex-row md:gap-10 lg:gap-16"
    >
        <!-- Supporting photograph -->
        <div class="w-full shrink-0 md:w-2/5 lg:w-[30%]">
            <img
                :src="rImage"
                alt="Farm Vredelus 869"
                class="aspect-[4/3] w-full rounded-lg object-cover object-center"
                loading="lazy"
            />
        </div>

        <!-- Mission statement and commitments -->
        <div class="min-w-0 flex-1">
            <SectionHeader>
                <template #title>
                    Our mission
                </template>

                <template #subtitle>
                    Growing a better tomorrow
                </template>

                <template #default>
                    <p class="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
                        Our mission is to produce quality crops and healthy
                        livestock in a sustainable and profitable way, while
                        creating value for our customers, our community, and
                        our country.
                    </p>
                </template>
            </SectionHeader>

            <!-- Commitments -->
            <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
                <div
                    v-for="(commitment, index) in commitments"
                    :key="commitment.text"
                    class="flex items-center gap-3 py-3 lg:px-4 lg:first:pl-0"
                    :class="index > 0 ? 'sm:border-l sm:border-gray-300 sm:pl-4 lg:border-l' : ''"
                >
                    <component
                        :is="commitment.icon"
                        aria-hidden="true"
                        class="size-8 shrink-0 text-farm-green sm:size-9"
                        :stroke-width="1.7"
                    />

                    <p class="text-sm leading-relaxed text-gray-600 sm:text-base">
                        {{ commitment.text }}
                    </p>
                </div>
            </div>
        </div>
    </SectionLayout>
</template>
