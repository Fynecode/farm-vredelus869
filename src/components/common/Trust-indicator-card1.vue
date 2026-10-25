<template>
    <div class="flex flex-row p-4 size-full rounded-lg gap-2">
      <div class="mb-4">
        <slot name="icon" />
      </div>
      <div class="flex flex-col">
        <h3 class="font-semibold">
            <slot name="title" />
        </h3>
        <p class="text-sm text-gray-600">
            <slot name="description" />
        </p>
      </div>
    </div>
</template>