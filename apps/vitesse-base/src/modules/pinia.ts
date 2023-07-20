import type {AppModule} from '~/types'

import {createPinia} from 'pinia'

// Setup Pinia
// https://pinia.esm.dev/
export const install: AppModule = ({app}) => {
    const pinia = createPinia()
    app.use(pinia)
}
