
<script setup lang="ts">
import sprout from '@/assets/sprout.png'
import logo from '@/assets/logo.png'

import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
} from '@heroicons/vue/24/solid'

import { Facebook, Instagram } from 'lucide-vue-next'
</script>

<template>
    <footer class="relative w-full overflow-hidden bg-farm-green px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-20">
        <div class="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

            <!-- Farm branding -->
            <div class="flex min-w-0 flex-col gap-4">
                <div class="flex items-center gap-3">
                    <img
                        :src="logo"
                        alt="Farm Vredelus 869 logo"
                        class="bg-white size-20 shrink-0 rounded-full object-cover sm:size-24"
                    />

                    <h3 class="flex min-w-0 flex-col font-heading text-2xl leading-tight sm:text-3xl">
                        <span class="text-lg sm:text-xl">Farm</span>
                        <span>Vredelus869</span>
                    </h3>
                </div>

                <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-extralight text-gray-300 sm:text-sm md:text-xs">
                    <p>GROWING FOOD</p>
                    <span class="size-1 shrink-0 rounded-full bg-white"></span>
                    <p>BUILDING TOMORROW</p>
                </div>
            </div>

            <!-- Contact details -->
            <div class="flex min-w-0 flex-col gap-5 sm:border-l sm:border-white/30 sm:pl-6 lg:pl-5">
                <h4 class="font-heading text-xl">Get in touch</h4>

                <div class="flex items-start gap-3">
                    <MapPinIcon class="mt-0.5 size-5 shrink-0" />
                    <a
                        href="https://maps.app.goo.gl/s3dGa2Fye9PcGynS8"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="break-words text-sm text-gray-200 transition hover:text-white"
                    >
                        Oshikoto Region, Namibia
                    </a>
                </div>

                <div class="flex items-start gap-3">
                    <PhoneIcon class="mt-0.5 size-5 shrink-0" />
                    <a
                        href="tel:+264813783172"
                        class="break-words text-sm text-gray-200 transition hover:text-white"
                    >
                        +264 81 378 3172
                        <span class="block text-xs text-gray-300">Crop manager</span>
                    </a>
                </div>

                <div class="flex items-start gap-3">
                    <EnvelopeIcon class="mt-0.5 size-5 shrink-0" />
                    <a
                        href="mailto:info@farmvredelus869.com"
                        class="break-all text-sm text-gray-200 transition hover:text-white"
                    >
                        info@farmvredelus869.com
                    </a>
                </div>
            </div>

            <!-- Navigation -->
            <nav class="flex flex-col gap-4 sm:border-l sm:border-white/30 sm:pl-6 lg:pl-5">
                <h4 class="font-heading text-xl">Explore</h4>

                <RouterLink to="/" class="w-fit text-sm text-gray-200 transition hover:text-white">
                    Home
                </RouterLink>
                <RouterLink to="/products" class="w-fit text-sm text-gray-200 transition hover:text-white">
                    Products
                </RouterLink>
                <RouterLink to="/about" class="w-fit text-sm text-gray-200 transition hover:text-white">
                    About us
                </RouterLink>
                <RouterLink to="/contact" class="w-fit text-sm text-gray-200 transition hover:text-white">
                    Contact
                </RouterLink>
            </nav>

            <!-- Social media -->
            <div class="flex flex-col gap-4 sm:border-l sm:border-white/30 sm:pl-6 lg:pl-5">
                <h4 class="font-heading text-xl">Follow our journey</h4>

                <div class="flex items-center gap-3">
                    <!-- Replace # with the farm's real social profile URLs -->
                    <a
                        href="#"
                        aria-label="Facebook"
                        class="rounded-full border border-white/30 p-3 transition hover:bg-white/10"
                    >
                        <Facebook class="size-5" />
                    </a>

                    <a
                        href="#"
                        aria-label="Instagram"
                        class="rounded-full border border-white/30 p-3 transition hover:bg-white/10"
                    >
                        <Instagram class="size-5" />
                    </a>
                </div>
            </div>
        </div>

        <!-- Decorative sprout -->
        <img
            :src="sprout"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute bottom-0 -right-14 hidden w-32 opacity-20 sm:block lg:w-94"
        />

        <!-- Copyright -->
        <div class="relative z-10 mt-10 border-t border-white/20 pt-5 text-xs text-gray-300 sm:mt-12">
            <p>&copy; {{ new Date().getFullYear() }} Farm Vredelus 869. All rights reserved.</p>
        </div>
    </footer>
</template>
