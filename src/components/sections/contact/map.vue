
<script setup lang="ts">
import SectionLayout from '../../layout/SectionLayout.vue'
import SectionHeader from '../../common/Section-header.vue'
import { MapPinIcon } from '@heroicons/vue/24/solid'
</script>

<template>
    <SectionLayout
        class="grid grid-cols-1 items-center gap-8 text-farm-green md:grid-cols-2 md:gap-10 lg:gap-16"
    >
        <!-- Location information -->
        <div class="min-w-0">
            <SectionHeader>
                <template #title>
                    Our location
                </template>

                <template #subtitle>
                    Find us on the map
                </template>

                <template #default>
                    <p class="max-w-xl leading-relaxed text-gray-600">
                        Farm Vredelus869 is located in the Tsumeb district
                        of the Oshikoto region, Namibia.
                    </p>

                    <a
                        href="https://maps.app.goo.gl/s3dGa2Fye9PcGynS8"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-farm-green px-4 py-3 text-sm font-medium text-farm-green transition-colors hover:bg-farm-green hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-farm-green sm:mt-8 sm:text-base"
                    >
                        <MapPinIcon class="size-5 shrink-0" />
                        Get Directions
                    </a>
                </template>
            </SectionHeader>
        </div>

        <!-- Embedded Google Map -->
        <div class="w-full min-w-0 overflow-hidden rounded-lg">
            <iframe
                title="Map showing the location of Farm Vredelus 869"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.1817687594944!2d17.57859227470118!3d-18.879015706442843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bf273d9a8e1f2bd%3A0x7094fe379bde66b3!2sFARM%20VREDELUS%20869!5e0!3m2!1sen!2sna!4v1792662154100!5m2!1sen!2sna"
                class="block aspect-[4/3] w-full border-0 sm:aspect-[16/9] md:aspect-[4/3]"
                loading="lazy"
                allowfullscreen
                referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    </SectionLayout>
</template>
