<script setup lang="ts">
const router = useRouter()
const {t} = useI18n()
</script>

<template>
    <main class="dark:text-gray-200 px-4 py-10 text-center text-teal-700">
        <div>
            <p class="text-4xl">
                <carbon-warning class="inline-block" />
            </p>
        </div>
        404 not found
        <div>
            <button
                class="btn m-3 mt-8 text-sm"
                @click="router.back()"
            >
                {{ t('button.back') }}
            </button>
        </div>
    </main>
</template>
