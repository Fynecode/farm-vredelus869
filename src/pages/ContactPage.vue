<script setup lang="ts">
    import { usePageMetadata } from '@/composables/usePageMetadata';
    import HeroSection from '../components/sections/contact/hero.vue';
    import SiteNav from '../components/layout/SiteNav.vue';
    import ContactSection from '../components/sections/contact/contact.vue';
    import MapSection from '../components/sections/contact/map.vue';
    import SiteFooter from '../components/layout/SiteFooter.vue';

    usePageMetadata(
        'Contact Farm Vredelus 869 | Tsumeb, Oshikoto',
        'Contact Farm Vredelus 869 in the Tsumeb district of Oshikoto, Namibia, for produce enquiries, livestock availability, directions, and farm information.',
    );
</script>

<template>
    <SiteNav />
    <HeroSection />
    <ContactSection />
    <MapSection />
    <SiteFooter />
</template>