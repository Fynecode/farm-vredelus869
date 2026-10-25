<script setup lang="ts">
    import { RouterLink } from 'vue-router'

    interface Props {
        to: string
    }

    const props = defineProps<Props>()
</script>

<template>
    <RouterLink
        :to="to"
        class="rounded-full bg-farm-green text-center px-6 py-3 font-medium text-white transition hover:bg-green-900"
    >
        <slot />
    </RouterLink>
</template>