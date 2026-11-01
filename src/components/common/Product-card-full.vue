<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

const props = defineProps<{
    images: string[]
    imageAlt: string
}>()

const activeImageIndex = ref(0)
let autoplayInterval: ReturnType<typeof setInterval> | undefined

function startAutoplay() {
    if (
        props.images.length < 2 ||
        autoplayInterval !== undefined ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
        return
    }

    autoplayInterval = setInterval(() => {
        activeImageIndex.value = (activeImageIndex.value + 1) % props.images.length
    }, 2200)
}

function stopAutoplay() {
    if (autoplayInterval !== undefined) {
        clearInterval(autoplayInterval)
        autoplayInterval = undefined
    }
}

onBeforeUnmount(stopAutoplay)
</script>

<template>
    <div class="flex flex-col rounded-lg bg-white">
        <div
            class="relative mb-4 aspect-[4/3] overflow-hidden rounded-t-lg bg-gray-100"
            @mouseenter="startAutoplay"
            @mouseleave="stopAutoplay"
        >
            <Transition name="product-image" mode="out-in">
                <img
                    v-if="images.length"
                    :key="activeImageIndex"
                    :src="images[activeImageIndex]"
                    :alt="imageAlt"
                    loading="lazy"
                    class="absolute inset-0 size-full object-cover"
                />
            </Transition>

            <div
                v-if="images.length > 1"
                role="group"
                :aria-label="`${imageAlt} image selection`"
                class="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-black/40 px-2 py-1"
            >
                <button
                    v-for="(_, index) in images"
                    :key="index"
                    type="button"
                    :aria-label="`Show image ${index + 1} of ${images.length}`"
                    :aria-current="activeImageIndex === index ? 'true' : undefined"
                    class="flex size-6 items-center justify-center"
                    @click="activeImageIndex = index"
                >
                    <span
                        class="h-2 rounded-full transition-all"
                        :class="activeImageIndex === index ? 'w-5 bg-white' : 'w-2 bg-white/70'"
                    ></span>
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-4 px-4 py-2">
            <div class="flex flex-col gap-2">
                <h3 class="text-lg font-bold">
                    <slot name="title"></slot>
                </h3>
                <p class="text-gray-500 text-xs">
                    <slot name="variety"></slot>
                </p>
                <p class="text-gray-700 text-sm">
                    <slot name="description"></slot>
                </p>
            </div>
            
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.product-image-enter-active,
.product-image-leave-active {
    transition: opacity 180ms ease;
}

.product-image-enter-from,
.product-image-leave-to {
    opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
    .product-image-enter-active,
    .product-image-leave-active {
        transition: none;
    }
}
</style>