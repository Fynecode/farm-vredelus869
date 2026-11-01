<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from '../../common/Section-header.vue'
import SectionLayout from '../../layout/SectionLayout.vue'
import ProductCard from '../../common/Product-card-full.vue'

const truck = 'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793534417/dpffzkicqcv9p5e8sp5q.jpg'

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const crops = [
  [
    {
      title: 'Cabbage',
      variety: 'Star 3301 & Megastar f1',
      description: 'Fresh, high-quality cabbage grown with care.',
      images: 
      [
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793530050/xk1tmkhyefjdr2cxcjz4.jpg', 
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793530038/x3g6dosj65d5il7m1vus.jpg',
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793529937/gtkuqpm2zijojpllypuu.jpg'
      ],
    },
    {
      title: 'Spinach',
      variety: 'Swish chard',
      description: 'Nutritious and fresh from our field.',
      images: 
      [
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793531834/wbkc4q28r6w4efo9xb9e.jpg',
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793531833/ezoudvo38c1zllvhc0bb.jpg'
      ],
    },
    {
      title: 'Onions',
      variety: 'SG8378',
      description: 'Strong and reliable harvests.',
      images: 
      [
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793534117/qcf2ak7rz67tlnhrwoav.jpg',
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793534006/z3fdisnnnfmqvntwqsbd.png'
      ],
    },
    {
      title: 'Potatoes',
      variety: 'Mondial',
      description: 'Good quality potatoes for everyday use.',
      images: 
      [
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793532090/k5afo8c83uunfkoftgtc.jpg'
      ],
    },
  ],
  [
    {
      title: 'Tomatoes',
      variety: 'Zara',
      description: 'Fresh and full of flavour.',
      images: 
      [
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793532592/cihat5exaveug6vtrvax.jpg', 
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793532616/ruppx4w6d43ff7enlqai.jpg'
      ],
    },
    {
      title: 'Green Peppers',
      variety: 'Double up f1',
      description: 'Crisp and full of taste.',
      images: 
      [
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793532386/enucckatzcytkowiagr1.jpg',
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793532330/nc8nfaln0tneldqviptt.jpg'
      ],
    },
    {
      title: 'Watermelon',                                                                                         
      variety: 'Crimson sweet',
      description: 'Sweet, refreshing, and locally grown.',
      images: 
      [
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793532832/xgdups8rzlgnfxmizo9t.jpg', 
        'https://res.cloudinary.com/dwrzunbwv/image/upload/v1793532850/vrr4m4onswfehmz4imfk.jpg'
      ],
    },
  ],
]

const pageNum = ref(0)
const direction = ref<'next' | 'prev'>('next')

const changePage = (page: number) => {
  direction.value = page > pageNum.value ? 'next' : 'prev'
  pageNum.value = page
}

const nextPage = () => {
  changePage((pageNum.value + 1) % crops.length)
}

const prevPage = () => {
  changePage((pageNum.value - 1 + crops.length) % crops.length)
}
</script>

<template>
  <SectionLayout>
    <section class="space-y-8 sm:space-y-10">
      <!-- Section introduction -->
      <div class="grid grid-cols-1 items-center lg:items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
        <SectionHeader>
          <template #title>Our crops</template>
          <template #subtitle>Fresh crops from our fields</template>

          <p class="text-sm leading-relaxed text-farm-green sm:text-base">
            We focus on high-quality crops through careful planning,
            proper soil management, and effective water use. Our crops
            are planted and managed throughout the growing season to
            ensure healthy growth, optimal yield, and consistent quality.
          </p>
        </SectionHeader>

        <img
          :src="truck"
          alt="Cabbage growing at Farm Vredelus"
          class="h-52 w-full rounded-lg object-cover sm:h-64 lg:h-72"
        />
      </div>

      
    <!-- Carousel heading -->
    <div class="mt-10 mb-5">
    <h3 class="text-xl font-heading font-bold text-farm-green sm:text-2xl">
        Our crops
    </h3>
    </div>

    <!-- Continuous horizontal carousel -->
    <div class="overflow-hidden">
    <div
        class="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
        :style="{ transform: `translateX(-${pageNum * 100}%)` }"
    >
        <div
        v-for="(page, index) in crops"
        :key="index"
        class="w-full shrink-0"
        >
        <div
            class="grid gap-5"
            :class="
                page.length === 3
                ? 'grid-cols-1 sm:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            "
        >
            <ProductCard
            v-for="item in page"
            :key="item.title"
            :images="item.images"
            :image-alt="item.title"
            class="h-full transition-transform duration-300 hover:-translate-y-1"
            >
            <template #title>{{ item.title }}</template>
            <template #variety>{{ item.variety }}</template>
            <template #description>{{ item.description }}</template>

            <template #default>
                <RouterLink
                to="/contact"
                class="mt-auto inline-flex items-center gap-2 text-sm text-green-700 transition hover:text-green-900"
                >
                Enquire about availability
                <ArrowRight class="size-4 shrink-0" />
                </RouterLink>
            </template>
            </ProductCard>
        </div>
        </div>
    </div>
    </div>

    <!-- Carousel controls -->
    <div class="mt-6 flex flex-wrap items-center justify-between gap-4">
    <div class="flex items-center gap-3">
        <button
        type="button"
        aria-label="Previous crops"
        @click="prevPage"
        class="flex size-10 items-center justify-center rounded-full border border-farm-green/40 text-farm-green transition hover:bg-farm-green hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-farm-green"
        >
        <ChevronLeft class="size-5" />
        </button>

        <button
        type="button"
        aria-label="Next crops"
        @click="nextPage"
        class="flex size-10 items-center justify-center rounded-full border border-farm-green/40 text-farm-green transition hover:bg-farm-green hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-farm-green"
        >
        <ChevronRight class="size-5" />
        </button>
    </div>

    <div class="flex items-center gap-2" aria-label="Carousel pages">
        <button
        v-for="(_, index) in crops"
        :key="index"
        type="button"
        :aria-label="`Go to crop page ${index + 1}`"
        :aria-current="pageNum === index ? 'true' : undefined"
        @click="changePage(index)"
        class="h-2.5 rounded-full transition-all duration-300"
        :class="
            pageNum === index
            ? 'w-7 bg-farm-green'
            : 'w-2.5 bg-farm-green/20 hover:bg-farm-green/50'
        "
        />
    </div>

    <span class="text-sm text-farm-green/70">
        {{ pageNum + 1 }} / {{ crops.length }}
    </span>
    </div>

    </section>
  </SectionLayout>
</template>

<style scoped>
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition:
    opacity 250ms ease,
    transform 250ms ease;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(35px);
}

.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-35px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-35px);
}

.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(35px);
}

@media (prefers-reduced-motion: reduce) {
  .slide-next-enter-active,
  .slide-next-leave-active,
  .slide-prev-enter-active,
  .slide-prev-leave-active {
    transition-duration: 0.01ms;
  }
}
</style>