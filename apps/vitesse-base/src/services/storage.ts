import type {Ref} from 'vue'

import {ref} from 'vue'

type Store = Record<string, unknown>

// For big data that exceeds browser local-storage limitations.
const store: Ref<Store> = ref({})

/**
 * Set the given value in the storage under the given key
 * If the value is not of type String, it will be converted to String
 */
export const setItemInStorage = (key: string, value: unknown): void => {
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value)
    try {
        localStorage.setItem(key, stringValue)
    }
    catch (e) {
        if (e instanceof DOMException) store.value[key] = value
    }
}

interface GetFromStorage {
  <T>(key: string, parse: boolean): T | undefined
  <T>(key: string, parse: boolean, defaultValue: T): T
}

/**
 * Get the value from the storage under the given key.
 * Returns null if value is not found or if keepALive is false
 */
export const getItemFromStorage: GetFromStorage = <T = unknown>(
    key: string,
    parse: boolean,
    defaultValue?: T,
): T | undefined => {
    const value = localStorage.getItem(key) ?? store.value[key]

    if (!value) return defaultValue

    if (typeof value === 'string' && parse)
        return JSON.parse(value)

    return value as T
}

/** Empty the storage */
export const clearStorage = (): void => {
    localStorage.clear()
}
