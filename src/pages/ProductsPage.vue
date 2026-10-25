<script setup lang="ts">
import SiteNav from '@/components/layout/SiteNav.vue'
import HeroSection from '@/components/sections/products/hero.vue'
import CropsSection from '../components/sections/products/crops.vue';
import LivestockSection from '../components/sections/products/livestock.vue';
import LinkButton from '../components/common/Link-button.vue';
import whyUs from '../components/sections/whyUs.vue';
import SiteFooter from '../components/layout/SiteFooter.vue';

import { MessagesSquare, ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <SiteNav />
  <HeroSection />
  <CropsSection />
  <LivestockSection />
  
<section
    class="flex w-full flex-col items-start justify-center gap-5 bg-white px-6 py-6 sm:px-10 md:flex-row md:items-center md:gap-6 lg:gap-8 lg:px-20"
>
    <div class="flex items-center gap-4">
        <MessagesSquare
            :size="28"
            class="shrink-0 text-farm-green"
        />

        <p class="flex flex-col gap-1 font-bold text-farm-green text-base sm:text-lg">
            Interested in any of our products?
            <span class="font-light leading-relaxed">
                Get in touch with us for current availability and orders
            </span>
        </p>
    </div>

    <LinkButton to="/contact" class="shrink-0">
        <template #default>
            Contact us
            <ArrowRight class="ml-2 inline-block" />
        </template>
    </LinkButton>
</section>

  <whyUs />
  <SiteFooter />
</template>
