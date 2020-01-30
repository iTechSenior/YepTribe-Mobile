import React from 'react'
import AppContainer from './appNavigator'
import { uriPrefix } from '../utility/Common'
import navigationService from '../utility/navigation-service'

export default () => {
  return (
    <AppContainer
      uriPrefix={uriPrefix}
      ref={navigatorRef => {
        navigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
  )
}
