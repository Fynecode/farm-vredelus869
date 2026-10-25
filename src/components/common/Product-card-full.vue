<template> 
    <div class="bg-white rounded-lg flex flex-col">
        <div class="mb-4">
            <slot name="image"></slot>
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