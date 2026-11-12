<script setup lang="ts">
import { ref } from 'vue'
import SectionLayout from '../../layout/SectionLayout.vue'
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
} from '@heroicons/vue/24/solid'
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'

const CONTACT_API_URL = 'https://stansia-email-api.onrender.com/api/email'
const FARM_EMAIL = 'farmvredelus869.contact@gmail.com'

type ContactFormData = {
    from: string
    to: string
    subject: string
    body: string
}

const formStatus = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

async function sendContactForm(data: ContactFormData) {
    if (!CONTACT_API_URL) {
        throw new Error('Contact API URL is not configured.')
    }

    const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': 'stansia-production-key-123' },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        throw new Error(`Contact request failed with status ${response.status}.`)
    }
}

async function handleSubmit(event: SubmitEvent) {
    const form = event.currentTarget as HTMLFormElement
    const formData = new FormData(form)

    formStatus.value = 'sending'

    const name = String(formData.get('name') ?? '')
    const phone = String(formData.get('phone') ?? '')
    const email = String(formData.get('email') ?? '')
    const subject = String(formData.get('subject') ?? '')
    const message = String(formData.get('message') ?? '')

    try {
        await sendContactForm({
    from: 'website@farmvredelus869.com',
    to: FARM_EMAIL,
    subject,
    body: `
    Name: ${name}
    Sender email: ${email}
    Phone: ${phone}
    Message: ${message}
        `.trim(),
    })

        form.reset()
        formStatus.value = 'success'
    } catch (error) {
        console.error('Contact form submission failed:', error)
        formStatus.value = 'error'
    }
}
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
                        +264 81 378 3172 (crop manager)
                    </span>
                </span>
            </a>
            <a
                href="tel:+264812831357"
                class="group flex min-w-0 items-center gap-4 rounded-lg"
            >
                <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-farm-green/10 transition-colors group-hover:bg-farm-green/15 sm:size-14">
                    <PhoneIcon class="size-5 sm:size-6" />
                </span>

                <span class="flex min-w-0 flex-col gap-1">
                    <span class="font-heading text-lg sm:text-xl">Phone</span>
                    <span class="break-words text-sm text-gray-600 sm:text-base">
                        +264 81 283 1357 (sales)
                    </span>
                </span>
            </a>
            <a
                href="tel:+264811240646"
                class="group flex min-w-0 items-center gap-4 rounded-lg"
            >
                <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-farm-green/10 transition-colors group-hover:bg-farm-green/15 sm:size-14">
                    <PhoneIcon class="size-5 sm:size-6" />
                </span>

                <span class="flex min-w-0 flex-col gap-1">
                    <span class="font-heading text-lg sm:text-xl">Phone</span>
                    <span class="break-words text-sm text-gray-600 sm:text-base">
                        +264 81 124 0646 (Mrs Linnea Shaetonhodi (Proprietor))
                    </span>
                </span>
            </a>
            <a
                href="tel:+264811245586"
                class="group flex min-w-0 items-center gap-4 rounded-lg"
            >
                <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-farm-green/10 transition-colors group-hover:bg-farm-green/15 sm:size-14">
                    <PhoneIcon class="size-5 sm:size-6" />
                </span>

                <span class="flex min-w-0 flex-col gap-1">
                    <span class="font-heading text-lg sm:text-xl">Phone</span>
                    <span class="break-words text-sm text-gray-600 sm:text-base">
                        +264 81 124 5586 (John M Shaetonhodi (Proprietor))
                    </span>
                </span>
            </a>

            <a
                href="mailto:farmvredelus869.contact@gmail.com"
                class="group flex min-w-0 items-center gap-4 rounded-lg"
            >
                <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-farm-green/10 transition-colors group-hover:bg-farm-green/15 sm:size-14">
                    <EnvelopeIcon class="size-5 sm:size-6" />
                </span>

                <span class="flex min-w-0 flex-col gap-1">
                    <span class="font-heading text-lg sm:text-xl">Email</span>
                    <span class="break-all text-sm text-gray-600 sm:text-base">
                        farmvredelus869.contact@gmail.com
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

            <div class=" border-b border-dashed border-gray-300"></div>

            <!-- Decorative tagline -->
            <div class=" flex flex-wrap items-center justify-center gap-4 py-2 sm:mt-6 sm:gap-6 md:mt-auto lg:pt-10">

                <p class="flex -rotate-6 flex-col font-cursive text-3xl italic text-farm-green sm:text-4xl">
                    Quality produce.
                    <span>Local roots</span>
                </p>
            </div>
        </div>

        <!-- Contact form -->
        <div class="min-w-0">
            <form
                @submit.prevent="handleSubmit"
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
                    <label for="email" class="block text-sm font-medium text-farm-green-dark">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        autocomplete="email"
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

                <Transition name="form-feedback" mode="out-in">
                    <p
                        v-if="formStatus !== 'idle'"
                        :key="formStatus"
                        role="status"
                        aria-live="polite"
                        class="rounded-lg px-4 py-3 text-sm font-medium"
                        :class="{
                            'bg-farm-green/10 text-farm-green-dark': formStatus === 'success',
                            'bg-red-100 text-red-800': formStatus === 'error',
                            'bg-white/70 text-gray-700': formStatus === 'sending',
                        }"
                    >
                        {{
                            formStatus === 'success'
                                ? 'Thanks for your message. We will be in touch soon.'
                                : formStatus === 'error'
                                  ? 'We could not send your message. Please try again later.'
                                  : 'Sending your message...'
                        }}
                    </p>
                </Transition>

                <button
                    type="submit"
                    :disabled="formStatus === 'sending'"
                    class="flex w-full items-center justify-center gap-3 rounded-full bg-farm-green-dark px-6 py-3 font-semibold text-white transition-colors hover:bg-farm-green focus:outline-none focus:ring-2 focus:ring-farm-green focus:ring-offset-2"
                >
                    {{ formStatus === 'sending' ? 'Sending...' : 'Send message' }}
                    <PaperAirplaneIcon class="size-5" />
                </button>
            </form>
        </div>
    </SectionLayout>
</template>

<style scoped>
.form-feedback-enter-active,
.form-feedback-leave-active {
    transition: opacity 180ms ease, transform 180ms ease;
}

.form-feedback-enter-from,
.form-feedback-leave-to {
    opacity: 0;
    transform: translateY(6px);
}

@media (prefers-reduced-motion: reduce) {
    .form-feedback-enter-active,
    .form-feedback-leave-active {
        transition: none;
    }
}
</style>
