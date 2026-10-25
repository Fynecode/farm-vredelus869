
<template>
    <header class="w-full">
        <div class="flex w-full flex-col gap-2">
            <h2
                class="w-fit text-sm font-bold uppercase tracking-widest text-farm-green-bright sm:text-base"
            >
                <slot name="title" />
            </h2>

            <p
                class="max-w-3xl font-heading text-3xl leading-tight text-farm-green sm:text-4xl lg:text-5xl"
            >
                <slot name="subtitle" />
            </p>

            <div class="mt-2">
                <slot />
            </div>
        </div>
    </header>
</template>