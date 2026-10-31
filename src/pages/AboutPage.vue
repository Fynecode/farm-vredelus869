<script setup lang="ts">
    import { usePageMetadata } from '@/composables/usePageMetadata';
    import SiteNav from '../components/layout/SiteNav.vue';
    import HeroSection from '../components/sections/about/hero.vue';
    import FoundersSection from '../components/sections/about/founders.vue';
    import ValuesSection from '../components/sections/about/values.vue';
    import MissionSection from '../components/sections/about/mission.vue';
    import ContactCtaSection from '../components/sections/about/contactCta.vue';
    import SiteFooter from '../components/layout/SiteFooter.vue';

    usePageMetadata(
        'About Farm Vredelus 869 | Our Story & Mission',
        'Learn about Farm Vredelus 869, a family-run farm in Oshikoto, Namibia, focused on quality crops, healthy livestock, sustainable farming, and community.',
    );
</script>

<template>
    <SiteNav />
    <HeroSection />
    <FoundersSection />
    <ValuesSection />
    <MissionSection />
    <ContactCtaSection />
    <SiteFooter />
</template>