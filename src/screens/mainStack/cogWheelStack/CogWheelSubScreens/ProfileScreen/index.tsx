import React, { useState, useContext } from 'react'
import { Image, SafeAreaView, StyleSheet, ScrollView, Text, TextInput, View, Alert } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import { UserContext } from '../../../../../contexts/UserContext'
import { useNavigation } from 'react-navigation-hooks'
import { useEditMeMutation } from '../../../../../graphql'

import CogWheelListItem from '../../../../../components/CogWheelListItem'

import PhoneIcon from '../../../../../assets/Icons/BottomTabIcons/Active/ic_call_24px/ic_call_24px.png'
import EmailIcon from '../../../../../assets/Icons/BottomTabIcons/Active/iconmonstr-email-1/iconmonstr-email-1.png'
import LockIcon from '../../../../../assets/Icons/CogWheel/ic_lock_blue_24px.png'
import PersonPinIcon from '../../../../../assets/Icons/CogWheel/ic_person_pin_24px.png'

import NavHeader from '../../../../../components/navHeader'
import { Theme } from '../../../../../theme'
import { CogWheelSubScreenStringData } from '../../../../../utility/Common'
import { ApolloError } from 'apollo-client'

let inputs = [
  {
    headerTxt: 'First Name',
    currentLabelTxt: 'Current First Name',
    formLabelTxt: 'Change First Name',
    valueKey: 'firstName',
  },
  {
    headerTxt: 'Last Name',
    currentLabelTxt: 'Current Last Name',
    formLabelTxt: 'Change Last Name',
    valueKey: 'lastName',
  },
  {
    headerTxt: 'Email',
    currentLabelTxt: 'Current Email',
    formLabelTxt: 'Change Email',
    valueKey: 'email',
  },
  {
    headerTxt: 'Phone Number',
    currentLabelTxt: 'Current Phone Number',
    formLabelTxt: 'Change Phone NUmber',
    valueKey: 'phone',
  },
  {
    headerTxt: 'Password',
    valueKey: 'password',
  },
]

const SetWebSiteScreen = () => {
  const firstNameInputRef = React.useRef()
  const secondNameInputRef = React.useRef()
  const emailInputRef = React.useRef()
  const phoneInputRef = React.useRef()
  const pwdInputRef = React.useRef()

  const refs = [firstNameInputRef, secondNameInputRef, emailInputRef, phoneInputRef, pwdInputRef]

  React.useEffect(() => {
    inputs = inputs.map((input, index) => ({
      ref: refs[index],
      ...input,
    }))
  })

  const navigation = useNavigation()

  const userContext = useContext(UserContext)
  console.log('UserContext', userContext)
  const { id, username, firstName, lastName, email, phone } = userContext.user!
  const [inputValues, setInputValues] = useState({
    firstName,
    lastName,
    email,
    phone,
    password: '',
  })

  const [editMeMutation] = useEditMeMutation()

  const [activeInputIndex, setActiveInputIndex] = useState(-1)
  const [nextFocusDisabled, setNextFocusDisabled] = useState(false)
  const [previousFocusDisabled, setPreviousFocusDisabled] = useState(false)

  const handleFocus = (index: number) => {
    setNextFocusDisabled(index === inputs.length - 1)
    setPreviousFocusDisabled(index === 0)
    setActiveInputIndex(index)
  }
  const handleFocusNext = () => {
    if (nextFocusDisabled) {
      return
    }
    inputs[activeInputIndex + 1].ref.current.focus()
    console.log('activeInputIndewx', activeInputIndex)
  }
  const handleFocusPrevious = () => {
    if (previousFocusDisabled) {
      return
    }
    inputs[activeInputIndex - 1].ref.current.focus()
  }

  const handleDone = () => {
    setActiveInputIndex(-1)
  }

  const renderInputIcon = (s: string) => {
    let inputIcon = null
    switch (s) {
      case 'First Name':
        inputIcon = <Image source={PersonPinIcon} style={{ width: 18 * Theme.Ratio.H, height: 21 * Theme.Ratio.H }} />
        break
      case 'Last Name':
        inputIcon = <Image source={PersonPinIcon} style={{ width: 18 * Theme.Ratio.H, height: 21 * Theme.Ratio.H }} />
        break

      case 'Email':
        inputIcon = (
          <Image
            source={EmailIcon}
            style={{
              width: 20.66 * Theme.Ratio.H,
              height: 15.49 * Theme.Ratio.H,
            }}
          />
        )
        break
      case 'Phone Number':
        inputIcon = (
          <Image
            source={PhoneIcon}
            style={{
              width: 16.26 * Theme.Ratio.H,
              height: 16.26 * Theme.Ratio.H,
            }}
          />
        )
        break
      case 'Password':
        inputIcon = <Image source={LockIcon} style={{ width: 16 * Theme.Ratio.H, height: 21 * Theme.Ratio.H }} />
        break
    }
    return inputIcon
  }

  const renderCurrentInfo = (s: string) => {
    let currentInfo = null
    switch (s) {
      case 'First Name':
        currentInfo = userContext.user!.firstName
        break
      case 'Second Name':
        currentInfo = userContext.user!.lastName
        break
      case 'Email':
        currentInfo = userContext.user!.email
        break
      case 'Phone Number':
        currentInfo = userContext.user!.phone
        break
    }
    return currentInfo
  }

  const handleCheckBtnClick = async () => {
    if (Object.keys(inputValues).find(item => item === 'password') !== undefined) {
      // @ts-ignore
      if (inputValues['password'] !== '') {
        const editMeMutationResponse = await editMeMutation({
          variables: {
            id,
            username,
            //@ts-ignore
            firstName: inputValues['firstName'],
            //@ts-ignore
            lastName: inputValues['lastName'],
            //@ts-ignore
            email: inputValues['email'],
            //@ts-ignore
            phone: inputValues['phone'],
            password: inputValues['password'],
          },
        }).catch((err: ApolloError) => {
          const alertMsg = err.message ? err.message.replace('GraphQL error: ', '') : ''
          Alert.alert(alertMsg)
        })
        if (editMeMutationResponse) {
          userContext.setUser(editMeMutationResponse.data!.editMe)
          navigation.goBack()
        }
      } else {
        Alert.alert('Password is required')
      }
    } else {
      Alert.alert('Password is required')
    }
  }

  const renderHeader = () => {
    // if (Object.keys(inputValues)) {
    //   for (const key in inputValues) {
    //     // @ts-ignore
    //     if (inputValues[key]) return <NavHeader type="withCheck" handleCheck={() => handleCheckBtnClick()} />
    //   }
    // }
    // return <NavHeader type="normal" />
    if (inputValues['password'] !== '') return <NavHeader type="withCheck" handleCheck={() => handleCheckBtnClick()} />
    return <NavHeader type="normal" />
  }

  const handleChangeText = (text: string, valueKey: string) => {
    setInputValues({ ...inputValues, [valueKey]: text })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderHeader()}
      <View style={styles.mainContainer}>
        <Text style={styles.labelHeaderTxt}>Profile</Text>
        <ScrollView>
          <View style={styles.formView}>
            {inputs.map(({ headerTxt, currentLabelTxt, formLabelTxt, ref, valueKey }, index) => (
              <View key={index}>
                <Text style={styles.headerTxt}>{headerTxt}</Text>
                {index !== inputs.length - 1 && (
                  <>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.labelTxt}>{currentLabelTxt}</Text>
                      <Text style={styles.valueTxt}>{renderCurrentInfo(headerTxt)}</Text>
                    </View>
                    <Text style={styles.contentViewLabelTxt}>{formLabelTxt}</Text>
                  </>
                )}
                <View style={[styles.inputWrapper, { borderColor: activeInputIndex === index ? '#1EABE6' : 'transparent' }]}>
                  <View style={styles.iconWrapper}>{renderInputIcon(headerTxt)}</View>
                  <TextInput
                    ref={ref}
                    style={styles.inputTxt}
                    secureTextEntry={index === inputs.length - 1 ? true : false}
                    placeholder={headerTxt}
                    onFocus={() => handleFocus(index)}
                    onChangeText={(text: string) => handleChangeText(text, valueKey)}
                    // @ts-ignore
                    value={inputValues[valueKey]}
                  />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <KeyboardAccessoryNavigation
        nextDisabled={nextFocusDisabled}
        previousDisabled={previousFocusDisabled}
        onNext={() => handleFocusNext()}
        onPrevious={() => handleFocusPrevious()}
        onDone={() => handleDone()}
        inSafeAreaView={true}
        androidAdjustResize={true}
        avoidKeyboard={true}
      />
    </SafeAreaView>
  )
}

export default SetWebSiteScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 18 * Theme.Ratio.H,
    color: '#231F20',
    paddingLeft: 20 * Theme.Ratio.H,
    marginBottom: 10 * Theme.Ratio.H,
  },
  bodyContainer: {
    flex: 1,
  },
  infoWrapper: {
    justifyContent: 'center',
  },
  labelHeaderTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
    marginBottom: 10 * Theme.Ratio.H,
    paddingLeft: 20 * Theme.Ratio.H,
  },
  labelTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
    opacity: 0.6,
    marginBottom: 10 * Theme.Ratio.H,
    paddingLeft: 21 * Theme.Ratio.H,
  },
  valueTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#212529',
    paddingLeft: 21 * Theme.Ratio.H,
  },
  contentViewLabelTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
    opacity: 0.6,
    marginBottom: 10 * Theme.Ratio.H,
    paddingLeft: 21 * Theme.Ratio.H,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF9FE',
    borderRadius: 6,
    borderWidth: 2,
    height: 54 * Theme.Ratio.H,
    marginBottom: 20 * Theme.Ratio.H,
    marginHorizontal: 20 * Theme.Ratio.H,
  },
  iconWrapper: {
    width: 52 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4.65,
    elevation: 9,
  },
  inputTxt: {
    flex: 1,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    height: 54 * Theme.Ratio.H,
  },
  formView: {
    // flex: 1,
  },
})
