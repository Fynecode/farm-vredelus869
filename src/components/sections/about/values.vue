
<script setup lang="ts">
import { Leaf, Sprout, Users, ShieldCheck } from 'lucide-vue-next'
import SectionLayout from '@/components/layout/SectionLayout.vue'
import SectionHeader from '../../common/Section-header.vue'

const cards = [
    {
        icon: Sprout,
        title: 'Quality',
        description: 'We are committed to providing safe, healthy and reliable food.',
    },
    {
        icon: Users,
        title: 'People',
        description: 'Our team, our community, and our customers matter.',
    },
    {
        icon: ShieldCheck,
        title: 'Integrity',
        description: 'We do what is right, even when it is not the easiest option.',
    },
    {
        icon: Leaf,
        title: 'Sustainability',
        description: 'We farm with respect for the land, our resources and future generations.',
    },
]
</script>

<template>
    <SectionLayout
        class="flex flex-col gap-8 bg-farm-green/5 text-farm-green lg:flex-row lg:items-center lg:gap-12"
    >
        <!-- Section introduction -->
        <div class="min-w-0 lg:w-1/3">
            <SectionHeader>
                <template #title>
                    Our values
                </template>

                <template #subtitle>
                    What guides us
                </template>

                <template #default>
                    <p class="text-base leading-relaxed text-gray-600">
                        Our values shape the way we farm, work with others and
                        serve our customers. They guide our decisions today
                        and our goals for tomorrow.
                    </p>
                </template>
            </SectionHeader>
        </div>

        <!-- Values grid -->
        <div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:flex-1 lg:grid-cols-4 lg:gap-y-0">
            <article
                v-for="(card, index) in cards"
                :key="card.title"
                class="flex flex-col gap-3 border-farm-green/20 px-4 text-farm-green sm:px-5 lg:px-4"
                :class="[
                    index > 0 ? 'sm:border-l' : '',
                    index > 1 ? 'lg:border-l' : '',
                ]"
            >
                <component
                    :is="card.icon"
                    aria-hidden="true"
                    class="size-7 shrink-0 text-farm-green-bright sm:size-8"
                    :stroke-width="1.7"
                />

                <h3 class="text-lg font-semibold">
                    {{ card.title }}
                </h3>

                <p class="text-sm leading-relaxed text-gray-600">
                    {{ card.description }}
                </p>
            </article>
        </div>
    </SectionLayout>
</template>
