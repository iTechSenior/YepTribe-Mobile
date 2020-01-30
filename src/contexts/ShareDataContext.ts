import * as React from 'react'

export interface ContextDataType {
  id?: string
  contentId: string
  deliveryEndpoint: string
  firstName: string
  lastName: string
  text: string
  title: string
}

export interface IShareData {
  data: Partial<ContextDataType> | null
  setShareData: (data: Partial<ContextDataType>) => void
}

export const shareData: IShareData = {
  data: null,
  setShareData: (data: Partial<ContextDataType>): void => {
    shareData.data = { ...shareData.data, ...data }
  },
}

export const ShareDataContext = React.createContext(shareData)
export const ShareDataContextProvider = ShareDataContext.Provider
export const ShareDataContextConsumer = ShareDataContext.Consumer
