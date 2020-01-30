import { Theme } from '../theme'

export enum SCREENS {
  Home = 'Home',
  CallWay = 'CallWay',
  Training = 'Training',
  Contact = 'Contact',
  CogWheel = 'CogWheel',
  Prospects = 'Prospects',
  Certificates = 'Certificates',
  Share = 'Share',
  Alerts = 'Alerts',
  Events = 'Events',
}

// export const CogWheelOptions = ['Profile', 'Change Password', 'Web Site', 'Location', 'Notification', 'Use Face ID']
export const CogWheelOptions = ['Profile', 'Change Password', 'Use Face ID']

export const CogWheelSubScreenStringData = [
  {
    headerTxt: 'First Name',
    currentLabelTxt: 'Current First Name',
    formLabelTxt: 'Change First Name',
    value: 'firstName',
  },
  {
    headerTxt: 'Second Name',
    currentLabelTxt: 'Current Second Name',
    formLabelTxt: 'Change Last Name',
    value: 'secondName',
  },
  {
    headerTxt: 'Email',
    currentLabelTxt: 'Current Email',
    formLabelTxt: 'Change Email',
    value: 'email',
  },
  {
    headerTxt: 'Phone Number',
    currentLabelTxt: 'Current Phone Number',
    formLabelTxt: 'Change Phone NUmber',
    value: 'phone',
  },
  {
    headerTxt: 'Password',
    value: 'password',
  },
]

export enum AnimationValues {
  whiteWrapperToValue = -442 * Theme.Ratio.H,
  logoToValue = -280 * Theme.Ratio.H,
  RedImage2ToValue = -200 * Theme.Ratio.H,
  RedImage1ToValue = -250 * Theme.Ratio.H,
  BlueImage1ToValue = -325 * Theme.Ratio.H,
  BlackImage1ToValue = -420 * Theme.Ratio.H,
  BlueImage2ToValue = -600 * Theme.Ratio.H,
  BlackImage2ToValue = -425 * Theme.Ratio.H,
}

export const CountryModalSelector = ['USA', 'Canada', 'Australia']
export const LanguageModalSelector = ['English', 'French', 'Spanish']
export const FilterModalSelector = ['All', 'Warm', 'Hot', 'Follow-Up Later', 'Team Member', 'Customer', 'New']

export const uriPrefix = 'yeptribe://'
