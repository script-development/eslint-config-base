import type {Ref} from 'vue'
import type {ToastMessage, ToastVariant} from '~/types'

import {createApp, defineComponent, h, ref} from 'vue'

import ToastComponent from '~/components/layout/Toast.vue'

const toastMessages: Ref<ToastMessage[]> = ref([])

/**
 * The default duration for a toast message.
 */
const defaultToastMessageDuration = 5000

/**
 * Hide the toast message after a timeout and delete it from toastMessages
 */
const hideToastMessage = (message: ToastMessage) => {
    if (message.timeoutId) clearTimeout(message.timeoutId)

    // TODO :: because this is called from render the ref becomes itself
    // and it's being called from the render function and outside the render function
    if (message.show.value) message.show.value = false
    // @ts-expect-error, see TODO above
    else if (message.show) message.show = false

    message.timeoutId = setTimeout(() => {
        const index = toastMessages.value.findIndex(t => t.message === message.message)
        toastMessages.value.splice(index, 1)
    }, 300)
}

/**
 * Hide the toast message after the given duration
 */
const hideToastMessageAfterDelay = (message: ToastMessage) => {
    if (message.timeoutId) clearTimeout(message.timeoutId)
    message.timeoutId = setTimeout(() => hideToastMessage(message), message.duration)
}

const eventApp = defineComponent({
    render() {
        const toasts = toastMessages.value.map(message => h(ToastComponent, {
            message: message.message,
            show: message.show,
            variant: message.variant,
            onHide: () => hideToastMessage(message),
            key: message.message,
        }))

        return [
            h(
                'div',
                {
                    class: 'toast-container fixed top-0 right-0 p-2 w-full sm:max-w-sm lg:max-w-1xl',
                    style: 'z-index:9999;',
                },
                toasts,
            ),
        ]
    },
})

const eventContainer = document.createElement('div')
document.body.appendChild(eventContainer)
createApp(eventApp).mount(eventContainer)

/**
 * Create a toast message
 */
export const createToastMessage = (
    message: string,
    variant: ToastVariant = 'success',
    duration = defaultToastMessageDuration,
) => {
    const toastMessage = {message, variant, duration, show: ref(true)}
    hideToastMessageAfterDelay(toastMessage)
    toastMessages.value.push(toastMessage)
}
