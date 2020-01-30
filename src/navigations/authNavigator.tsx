import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/authStack/Login'

const AuthNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)

export default AuthNavigator
