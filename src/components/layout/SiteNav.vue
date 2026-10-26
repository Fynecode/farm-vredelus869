<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X, Mail } from 'lucide-vue-next'
import { vAutoAnimate } from '@formkit/auto-animate/vue'

import logo from '@/assets/logo.png'

const isMenuOpen = ref(false)

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
]

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed w-full top-0 left-0 z-50 border-b border-farm-green/10 bg-farm-paper">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-8 lg:px-12"
      aria-label="Main navigation"
    >
      <!-- Brand -->
      <RouterLink
        to="/"
        class="flex shrink-0 items-center gap-3"
        aria-label="Farm Vredelus home"
        @click="closeMenu"
      >
        <div class="flex flex-row items-center gap-4">
          <img :src="logo" class="size-16 rounded-full"/>
        </div>
      </RouterLink>

      <!-- Desktop navigation -->
      
      <!-- Desktop navigation -->
      <div
        v-auto-animate
        class="hidden items-center gap-8 md:flex"
      >
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="relative py-3 font-body text-sm font-semibold
                text-farm-charcoal/75 transition-colors duration-200
                hover:text-farm-green
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-farm-green"
          active-class="!text-farm-green-dark"
          exact-active-class="!text-farm-green-dark"
        >
          {{ item.label }}

          <span
            v-if="$route.path === item.to"
            class="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full
                  bg-farm-green-dark"
          />
        </RouterLink>

        <RouterLink
          to="/contact"
          class="flex flex-row items-center gap-2 rounded-md
                bg-farm-green px-5 py-3 font-body text-sm
                font-semibold text-white transition-colors duration-200
                hover:bg-farm-green-dark"
        >
          Contact us
          <Mail :size="16" />
        </RouterLink>
      </div>


      <!-- Mobile menu toggle -->
      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md p-2 text-farm-green transition-colors hover:bg-farm-green/10 md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <X v-if="isMenuOpen" :size="24" />
        <Menu v-else :size="24" />
      </button>
    </nav>

    <!-- Mobile navigation -->
    <div
      v-if="isMenuOpen"
      id="mobile-navigation"
      v-auto-animate
      class="border-t border-farm-green/10 bg-farm-paper px-5 py-4 md:hidden"
    >
      <div class="mx-auto flex max-w-7xl flex-col gap-1">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="rounded-md px-4 py-3 font-body text-sm font-semibold
                text-farm-charcoal
                transition-all duration-200 ease-in-out
                hover:bg-farm-green/10 hover:text-farm-green
                focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-farm-green"
          active-class="!bg-farm-green-dark/20"
          exact-active-class="!bg-farm-green-dark/20"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>

        <RouterLink
          to="/contact"
          @click="closeMenu"
          class="flex flex-row items-center gap-2 rounded-md bg-farm-green px-5 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-farm-green/90"
        >
          Contact us
        </RouterLink>
      </div>
    </div>
  </header>
</template>
