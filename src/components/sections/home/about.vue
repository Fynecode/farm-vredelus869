
<script setup lang="ts">
import cabbageImage from '@/assets/IMG-20261016-WA0001.jpg'

import SectionHeader from '@/components/common/Section-header.vue'
import LinkButton from '@/components/common/Link-button.vue'
import TrustCard from '@/components/common/Trust-indicator-card1.vue'
import SectionLayout from '@/components/layout/SectionLayout.vue'

import { ArrowRight, Sprout, Handshake, Leaf, MapPin } from 'lucide-vue-next'
</script>

<template>
    <SectionLayout class="grid grid-cols-1 gap-8 text-farm-green
        md:grid-cols-2 md:gap-10
        lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
        xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(220px,0.8fr)]"
    >

        <!-- Farm image -->
        <div class="min-w-0">
            <img
                :src="cabbageImage"
                alt="Cabbage growing in the fields at Farm Vredelus 869"
                class="aspect-[4/3] w-full rounded-lg object-cover sm:aspect-[5/4] lg:aspect-[9/10]"
                loading="lazy"
            />
        </div>

        <!-- About introduction -->
        <div class="flex min-w-0 flex-col items-start gap-4">
            <SectionHeader>
                <template #title>About Farm Vredelus 869</template>
                <template #subtitle>Our Land. Our People. Our Commitment</template>
            </SectionHeader>

            <p class="text-base leading-relaxed text-gray-700 sm:text-lg">
                Farm Vredelus 869 is a family-run agricultural business in the
                Oshikoto region. We are committed to producing quality crops
                and raising healthy livestock while caring for our land and
                supporting our local community.
            </p>

            <LinkButton to="/about" class="w-fit">
                <template #default>
                    Our Story
                    <ArrowRight class="ml-2 inline-block size-4" />
                </template>
            </LinkButton>
        </div>

        <!-- Trust indicators -->
        <div class="grid min-w-0 grid-cols-1 gap-4 border-t border-farm-green/30 pt-6
         sm:grid-cols-2
         md:col-span-2
         xl:col-span-1 xl:grid-cols-1 xl:border-l xl:border-t-0 xl:py-2 xl:pl-6">
            <TrustCard>
                <template #icon>
                    <Sprout class="size-6" />
                </template>
                <template #title>Our Produce</template>
                <template #description>Healthy crops, grown with care.</template>
            </TrustCard>

            <TrustCard>
                <template #icon>
                    <Handshake class="size-6" />
                </template>
                <template #title>Our People</template>
                <template #description>A skilled and dedicated team.</template>
            </TrustCard>

            <TrustCard>
                <template #icon>
                    <Leaf class="size-6" />
                </template>
                <template #title>Our Partners</template>
                <template #description>Building value together.</template>
            </TrustCard>

            <TrustCard>
                <template #icon>
                    <MapPin class="size-6" />
                </template>
                <template #title>Our Values</template>
                <template #description>Integrity, reliability, progress.</template>
            </TrustCard>
        </div>

    </SectionLayout>
</template>
