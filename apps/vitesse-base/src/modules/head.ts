import type {AppModule} from '~/types'

import {createHead} from '@vueuse/head'

// vueuse/head https://github.com/vueuse/head
export const install: AppModule = ({app}) => {
    const head = createHead()
    app.use(head)
}
