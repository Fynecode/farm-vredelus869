
<script setup lang="ts">
import SectionLayout from '../../layout/SectionLayout.vue'
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
} from '@heroicons/vue/24/solid'
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'
import { Sprout } from 'lucide-vue-next'
</script>

<template>
    <SectionLayout
        class="grid grid-cols-1 gap-10 text-farm-green md:grid-cols-2 md:gap-8 lg:gap-14"
    >
        <!-- Contact details -->
        <div class="flex min-w-0 flex-col gap-6 py-2 sm:py-4">
            <h3 class="font-heading text-3xl text-farm-green sm:text-4xl lg:text-5xl">
                Contact details
            </h3>

            <a
                href="tel:+264813783172"
                class="group flex min-w-0 items-center gap-4 rounded-lg"
            >
                <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-farm-green/10 transition-colors group-hover:bg-farm-green/15 sm:size-14">
                    <PhoneIcon class="size-5 sm:size-6" />
                </span>

                <span class="flex min-w-0 flex-col gap-1">
                    <span class="font-heading text-lg sm:text-xl">Phone</span>
                    <span class="break-words text-sm text-gray-600 sm:text-base">
                        +264 81 111 1111
                    </span>
                </span>
            </a>

            <a
                href="mailto:info@farmvredelus869.com"
                class="group flex min-w-0 items-center gap-4 rounded-lg"
            >
                <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-farm-green/10 transition-colors group-hover:bg-farm-green/15 sm:size-14">
                    <EnvelopeIcon class="size-5 sm:size-6" />
                </span>

                <span class="flex min-w-0 flex-col gap-1">
                    <span class="font-heading text-lg sm:text-xl">Email</span>
                    <span class="break-all text-sm text-gray-600 sm:text-base">
                        info@farmvredelus869.com
                    </span>
                </span>
            </a>

            <a
                href="https://maps.app.goo.gl/s3dGa2Fye9PcGynS8"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex min-w-0 items-center gap-4 rounded-lg"
            >
                <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-farm-green/10 transition-colors group-hover:bg-farm-green/15 sm:size-14">
                    <MapPinIcon class="size-5 sm:size-6" />
                </span>

                <span class="flex min-w-0 flex-col gap-1">
                    <span class="font-heading text-lg sm:text-xl">Location</span>
                    <span class="text-sm text-gray-600 sm:text-base">
                        Oshikoto, Namibia
                    </span>
                </span>
            </a>

            <div class="mt-2 border-b border-dashed border-gray-300"></div>

            <!-- Decorative tagline -->
            <div class="mt-4 flex flex-wrap items-center justify-center gap-4 py-2 sm:mt-6 sm:gap-6 md:mt-auto lg:pt-10">
                <Sprout
                    aria-hidden="true"
                    class="size-12 shrink-0 sm:size-16"
                />

                <p class="flex -rotate-6 flex-col font-cursive text-3xl italic text-farm-green sm:text-4xl">
                    Quality produce.
                    <span>Local roots</span>
                </p>
            </div>
        </div>

        <!-- Contact form -->
        <div class="min-w-0">
            <form
                action="#"
                class="space-y-5 rounded-xl bg-farm-green-bright/10 p-5 sm:p-8 lg:p-10"
            >
                <h2 class="font-heading text-3xl text-farm-green sm:text-4xl lg:text-5xl">
                    Send us a message
                </h2>

                <div class="space-y-2">
                    <label for="name" class="block text-sm font-medium text-farm-green-dark">
                        Full name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        autocomplete="name"
                        required
                        class="w-full rounded-lg border border-farm-green/30 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-farm-green focus:outline-none focus:ring-2 focus:ring-farm-green/20"
                    />
                </div>

                <div class="space-y-2">
                    <label for="phone" class="block text-sm font-medium text-farm-green-dark">
                        Phone number
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        autocomplete="tel"
                        required
                        class="w-full rounded-lg border border-farm-green/30 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-farm-green focus:outline-none focus:ring-2 focus:ring-farm-green/20"
                    />
                </div>

                <div class="space-y-2">
                    <label for="subject" class="block text-sm font-medium text-farm-green-dark">
                        Subject
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        required
                        class="w-full rounded-lg border border-farm-green/30 bg-white px-4 py-3 text-gray-900 focus:border-farm-green focus:outline-none focus:ring-2 focus:ring-farm-green/20"
                    >
                        <option value="" disabled selected>Select a subject</option>
                        <option value="product-enquiry">Product enquiry</option>
                        <option value="availability">Product availability</option>
                        <option value="general-enquiry">General enquiry</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div class="space-y-2">
                    <label for="message" class="block text-sm font-medium text-farm-green-dark">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="How can we help you?"
                        required
                        class="w-full resize-y rounded-lg border border-farm-green/30 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-farm-green focus:outline-none focus:ring-2 focus:ring-farm-green/20"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    class="flex w-full items-center justify-center gap-3 rounded-full bg-farm-green-dark px-6 py-3 font-semibold text-white transition-colors hover:bg-farm-green focus:outline-none focus:ring-2 focus:ring-farm-green focus:ring-offset-2"
                >
                    Send message
                    <PaperAirplaneIcon class="size-5" />
                </button>
            </form>
        </div>
    </SectionLayout>
</template>
