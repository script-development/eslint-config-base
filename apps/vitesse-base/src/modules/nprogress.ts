import type {AppModule} from '~/types'

import NProgress from 'nprogress'

export const install: AppModule = ({router}) => {
    router.beforeEach(() => { NProgress.start() })
    router.afterEach(() => { NProgress.done() })
}
