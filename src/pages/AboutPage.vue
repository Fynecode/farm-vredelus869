<script setup lang="ts">
    import SiteNav from '../components/layout/SiteNav.vue';
    import HeroSection from '../components/sections/about/hero.vue';
    import FoundersSection from '../components/sections/about/founders.vue';
    import ValuesSection from '../components/sections/about/values.vue';
    import MissionSection from '../components/sections/about/mission.vue';
    import ContactCtaSection from '../components/sections/about/contactCta.vue';
    import SiteFooter from '../components/layout/SiteFooter.vue';
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