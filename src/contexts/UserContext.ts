import * as React from 'react'
import { User } from '../graphql'

export interface IUserInitialState {
  user: Partial<User> | null
  setUser: (user: Partial<User>) => void
}

export const userInitialState: IUserInitialState = {
  user: null,
  setUser: (user: Partial<User>): void => {
    userInitialState.user = user
  },
}

export const UserContext = React.createContext(userInitialState)
export const UserContextProvider = UserContext.Provider
export const UserContextConsumer = UserContext.Consumer
