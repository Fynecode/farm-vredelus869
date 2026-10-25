<script setup lang="ts">
import SiteNav from '@/components/layout/SiteNav.vue'
import HeroSection from '@/components/sections/home/hero.vue'
import ProductsSection from '@/components/sections/home/products.vue'
import AboutSection from '@/components/sections/home/about.vue'
import whyUs from '@/components/sections/whyUs.vue';
import SiteFooter from '@/components/layout/SiteFooter.vue' 
</script>

<template>
  <SiteNav />
  <HeroSection />
  <ProductsSection />
  <AboutSection />
  <whyUs />
  <SiteFooter />
</template>