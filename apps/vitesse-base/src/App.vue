<script setup lang="ts">
import {createToastMessage} from '~/services/toast'

useHead({
    meta: [
        {name: 'description', content: 'Vitesse Base'},
    ],
})

onMounted(() => {
    setTimeout(() => {
        createToastMessage('Whats this? primary', 'primary')
        createToastMessage('Whats this? secondary', 'secondary')
        createToastMessage('Whats this? success', 'success')
        createToastMessage('Whats this? info', 'info')
        createToastMessage('Whats this? danger', 'danger')
    }, 5000,
    )
})
</script>

<template>
    <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
            <component :is="Component" />
        </Transition>
    </router-view>
</template>

<style lang="scss">

</style>
