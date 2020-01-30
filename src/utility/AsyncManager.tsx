import AsyncStorage from '@react-native-community/async-storage'

const AUTH_TOKEN = 'AUTH_TOKEN'

export enum BioMetricsMode {
  ENABLED = 'ENABLED',
  NOT_ENABLED = 'NOT_ENABLED',
}

let token: string | null | undefined

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token)
  }
  return AsyncStorage.getItem(AUTH_TOKEN)
}

export const login = (newToken: string) => {
  token = newToken
  AsyncStorage.setItem('@HasLoggedIn', 'Logged In')
  return AsyncStorage.setItem(AUTH_TOKEN, newToken)
}

export const logout = () => {
  token = undefined
  return AsyncStorage.removeItem(AUTH_TOKEN)
}

export const getBioMetrics = () => {
  return AsyncStorage.getItem('@BioMetricsEnabled')
}

export const hasLoggedIn = async () => {
  return AsyncStorage.getItem('@HasLoggedIn')
}

export const setBioMetrics = (biometries: boolean) => {
  return AsyncStorage.setItem('@BioMetricsEnabled', !biometries ? BioMetricsMode.ENABLED : BioMetricsMode.NOT_ENABLED)
}
