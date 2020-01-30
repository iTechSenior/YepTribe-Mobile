import * as React from 'react'

interface ProspectDataType {
  id?: string
  certificateId: string
  certificateTitle: string
  deliveryEndpoint: string
  firstName: string
  lastName: string
  personalizedMessage: string
  shareType: string
  phoneNumber: string
}

export interface IProspectData {
  data: Partial<ProspectDataType> | null
  setProspectData: (data: Partial<ProspectDataType>) => void
}

export const prospectData: IProspectData = {
  data: null,
  setProspectData: (data: Partial<ProspectDataType>): void => {
    prospectData.data = { ...prospectData.data, ...data }
  },
}

export const ProspectDataContext = React.createContext(prospectData)
export const ProspectDataContextProvider = ProspectDataContext.Provider
export const ProspectDataContextConsumer = ProspectDataContext.Consumer
