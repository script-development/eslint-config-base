/* eslint-disable @typescript-eslint/no-explicit-any */
import type {AxiosError, AxiosRequestConfig, Method} from 'axios'

import axios from 'axios'
import {ref} from 'vue'

import {getEnv} from './env'

import {useMainStore} from '~/stores/main'

const BASE_URL = getEnv('VITE_API_URL')
export const requesting = ref(false)

// eslint-disable-next-line complexity
const doRequest = async(config: AxiosRequestConfig) => {
    const mainStore = useMainStore()
    mainStore.$reset()

    try {
        const {data} = await axios.request(config)

        return data
    }
    catch (e) {
    // @ts-expect-error Cant define in catch
        const error: AxiosError = e

        // eslint-disable-next-line no-console
        if (error.response?.status === 500) console.log(error.response?.data.message)
        if (error.response && error.response.data.errors) mainStore.errors = error.response.data.errors

        throw error
    }
    finally {
        requesting.value = false
    }
}

// eslint-disable-next-line complexity
const createRequestConfig = async(method: Method, uri: string, body?: any): Promise<AxiosRequestConfig> => {
    const url = new URL(`${BASE_URL}/${uri}`)

    const headers: Record<string, string> = {
        'Access-Control-Allow-Origin': '*',
    }

    let data

    if (method !== 'GET') {
        const bodyisFormData = body instanceof FormData
        const bodyIsJson = body instanceof Object

        if (bodyisFormData) 
            data = body
    
        else if (bodyIsJson) {
            data = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }
        else 
            data = body
    
    }

    return {
        url: url.href,
        method,
        headers,
        data,
    }
}

const apiCall = async(method: Method, uri: string, body?: any) => {
    const requestConfig = await createRequestConfig(method, uri, body)

    if (!requestConfig.url)
        return

    const data = await doRequest(requestConfig)

    return data
}

export const getFromApi = (uri: string) => apiCall('GET', uri)

export const postToApi = (uri: string, data: object) => apiCall('POST', uri, data)

export const putToApi = (uri: string, data: object) => apiCall('PUT', uri, data)
