
<template>
  <article class="flex h-full flex-col overflow-hidden rounded-lg bg-white">
    <div class="aspect-[4/3] w-full overflow-hidden">
      <slot name="image" />
    </div>

    <div class="flex flex-1 flex-col gap-2 p-4 sm:p-5">
      <h3 class="text-lg font-bold text-farm-green sm:text-xl">
        <slot name="title" />
      </h3>

      <p class="text-sm leading-relaxed text-gray-700 sm:text-base">
        <slot name="description" />
      </p>
    </div>
  </article>
</template>
