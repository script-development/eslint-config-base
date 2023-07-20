import type {AppModule} from '~/types'

export const install: AppModule = ({router}) => {
    router.isReady().then(async() => {
        const {registerSW} = await import('virtual:pwa-register')
        registerSW({immediate: true})
    })
}
