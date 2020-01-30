import React, { useEffect, useRef, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import { useUpdatePasswordMutation } from '../../../../../graphql'
import { useNavigation } from 'react-navigation-hooks'

import NavHeader from '../../../../../components/navHeader'
import { Theme } from '../../../../../theme'

import LockIcon from '../../../../../assets/Icons/CogWheel/ic_lock_blue_24px.png'
import { ApolloError } from 'apollo-client'

let inputs = [
  {
    keyboardType: 'password',
    placeholder: 'Current Password',
    valueKey: 'currentPwd',
  },
  {
    keyboardType: 'password',
    placeholder: 'New Password',
    valueKey: 'newPwd',
  },
  {
    keyboardType: 'password',
    placeholder: 'New Password, Again',
    valueKey: 'confirmNewPwd',
  },
]

const ChangePasswordScreen = () => {
  const currentPwdInputRef = useRef()
  const newPwdInputRef = useRef()
  const confirmPwdInputRef = useRef()

  const refs = [currentPwdInputRef, newPwdInputRef, confirmPwdInputRef]

  useEffect(() => {
    inputs = inputs.map((input, index) => ({
      ref: refs[index],
      ...input,
    }))
  })

  const [updatePasswordMutattion] = useUpdatePasswordMutation()

  const navigation = useNavigation()

  const [activeInputIndex, setActiveInputIndex] = useState(-1)
  const [nextFocusDisabled, setNextFocusDisabled] = useState(false)
  const [previousFocusDisabled, setPreviousFocusDisabled] = useState(false)

  const [inputValues, setInputValues] = useState({
    currentPwd: '',
    newPwd: '',
    confirmNewPwd: '',
  })

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

  const handleCheckBtnClick = async () => {
    if (inputValues['newPwd'] === inputValues['confirmNewPwd']) {
      const UpdatePasswordResponse = await updatePasswordMutattion({
        variables: {
          data: {
            currentPassword: inputValues['currentPwd'],
            newPassword: inputValues['newPwd'],
          },
        },
      }).catch((err: ApolloError) => {
        const alertMsg = err.message ? err.message.replace('GraphQL error: ', '') : ''
        Alert.alert(alertMsg)
      })

      if (UpdatePasswordResponse) {
        navigation.goBack()
      }
    } else {
      Alert.alert("New Password confirm doesn't match.")
    }
  }

  const handleChangeText = (s: string, valueKey: string) => {
    setInputValues({ ...inputValues, [valueKey]: s })
  }

  const renderHeader = () => {
    if (inputValues['currentPwd'] && inputValues['newPwd'] && inputValues['confirmNewPwd'])
      return <NavHeader type="withCheck" handleCheck={() => handleCheckBtnClick()} />
    return <NavHeader type="normal" />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderHeader()}
      <View style={styles.mainContainer}>
        <Text style={styles.headerTxt}>Change Password</Text>
        <View style={styles.formView}>
          {inputs.map(({ placeholder, ref, valueKey }, index) => (
            <View
              key={index}
              style={[
                styles.txtInputWrapper,
                {
                  borderColor: activeInputIndex === index ? '#1EABE6' : 'transparent',
                },
              ]}
            >
              <View style={styles.iconWrapper}>
                <Image source={LockIcon} style={styles.lockImg} />
              </View>
              <TextInput
                ref={ref}
                style={styles.txtInput}
                secureTextEntry={true}
                placeholder={placeholder}
                onFocus={() => handleFocus(index)}
                onChangeText={(text: string) => handleChangeText(text, valueKey)}
              />
            </View>
          ))}
        </View>
      </View>
      <KeyboardAccessoryNavigation
        nextDisabled={nextFocusDisabled}
        previousDisabled={previousFocusDisabled}
        onNext={() => handleFocusNext()}
        onPrevious={() => handleFocusPrevious()}
        onDone={() => handleDone()}
        inSafeAreaView={true}
        androidAdjustResize={true}
      />
    </SafeAreaView>
  )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
    marginLeft: 20 * Theme.Ratio.H,
  },
  formView: {
    flex: 1,
    paddingLeft: 21.5 * Theme.Ratio.H,
    paddingRight: 20 * Theme.Ratio.H,
    paddingTop: 24 * Theme.Ratio.H,
  },
  txtInputWrapper: {
    height: 54 * Theme.Ratio.H,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF9FE',
    borderRadius: 6,
    borderWidth: 2,
    marginBottom: 20 * Theme.Ratio.H,
  },
  iconWrapper: {
    width: 50 * Theme.Ratio.H,
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
  txtInput: {
    flex: 1,
    height: 54 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
  },
  lockImg: {
    width: 16 * Theme.Ratio.H,
    height: 21 * Theme.Ratio.H,
  },
})
