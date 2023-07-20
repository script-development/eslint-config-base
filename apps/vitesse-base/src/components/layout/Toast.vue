<template>
    <div
        flex="~" align="items-center" mb="4" text="white" shadow="~"
        class="max-w-full md:max-w-lg px-6 py-4 rounded-lg"
        :class="[variants[variant], show ? 'show' : 'hide']"
        style="z-index: 9999"
    >
        <div class="p-2 rounded-b">
            {{ message }}
        </div>

        <button ml="auto" mx="-1.5" my="-1.5" border="rounded-lg" ring="focus:2 focus:gray-300" p="1.5" display="inline-flex" h="8" w="8" text="gray-500 hover:black" transition="colors duration-300" @click="$emit('hide')">
            <span class="sr-only">Close</span>

            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import type {PropType} from 'vue'
import type {ToastVariant} from '~/types/'

defineProps({
    message: {type: String, required: false},
    show: {type: Boolean, required: false},
    variant: {
        type: String as PropType<ToastVariant>,
        required: false,
        default: 'success',
    },
})

defineEmits(['hide'])

const variants: Record<string, string> = {
    primary: 'bg-amber-400',
    secondary: 'bg-gray-400',
    success: 'bg-green-400',
    info: 'bg-blue-400',
    danger: 'bg-red-400',
}
</script>

<style lang="scss" scoped>
.hide {
    opacity: 0;
    @apply transition-all duration-300;
}

* {
    z-index: 99999;
}
</style>
