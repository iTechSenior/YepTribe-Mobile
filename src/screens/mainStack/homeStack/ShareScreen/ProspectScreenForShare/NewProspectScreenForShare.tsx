import React, { useEffect, useRef, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'

import PhoneIcon from '../../../../../assets/Icons/BottomTabIcons/Active/ic_call_24px/ic_call_24px.png'
import EmailIcon from '../../../../../assets/Icons/BottomTabIcons/Active/iconmonstr-email-1/iconmonstr-email-1.png'
import PersonPinIcon from '../../../../../assets/Icons/CogWheel/ic_person_pin_24px.png'

import { Theme } from '../../../../../theme'

let inputs = [
  {
    label: 'First Name',
    placeholder: 'Emma',
    image: PersonPinIcon,
    width: 18 * Theme.Ratio.H,
    height: 21 * Theme.Ratio.H,
    field: 'firstName',
  },
  {
    label: 'Last Name',
    placeholder: 'Steiner',
    image: PersonPinIcon,
    width: 18 * Theme.Ratio.H,
    height: 21 * Theme.Ratio.H,
    field: 'lastName',
  },
  {
    label: 'Phone',
    placeholder: '345 00 00 000',
    image: PhoneIcon,
    width: 19.5 * Theme.Ratio.H,
    height: 19.5 * Theme.Ratio.H,
    field: 'phoneNumber',
  },
  {
    label: 'Email',
    placeholder: 'sarahs@gmail.com',
    image: EmailIcon,
    width: 22 * Theme.Ratio.H,
    height: 16.5 * Theme.Ratio.H,
    field: 'email',
  },
]

interface PState {
  fullName: string
  phoneNumber: string
  email: string
}

const NewProspectScreen = (props: any) => {
  const firstNameInputRef = useRef()
  const lastNameInputRef = useRef()
  const phoneInputRef = useRef()
  const emailInputRef = useRef()

  const refs = [firstNameInputRef, lastNameInputRef, phoneInputRef, emailInputRef]

  const [state, setState] = useState<PState>({
    fullName: '',
    phoneNumber: '',
    email: '',
  })

  useEffect(() => {
    inputs = inputs.map((input, index) => ({
      ref: refs[index],
      ...input,
    }))
  })

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

  const setStateValue = (text: string, field: string) => {
    setState({ ...state, [field]: text })
  }

  const handleChangeText = (text: string, field: string) => {
    if (field === 'firstName') {
      const newProspectInfo = {
        firstName: text,
      }
      props.screenProps.setField(newProspectInfo)
    } else if (field === 'lastName') {
      const newProspectInfo = {
        lastName: text,
      }
      props.screenProps.setField(newProspectInfo)
    } else if (field === 'phoneNumber') {
      const newProspectInfo = {
        phoneNumber: text,
      }
      props.screenProps.setField(newProspectInfo)
    } else if (field === 'email') {
      const newProspectInfo = {
        email: text,
      }
      props.screenProps.setField(newProspectInfo)
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerTxt}>New Prospect Manual Entry</Text>
      <ScrollView>
        <View style={styles.formView}>
          {inputs.map((item, index) => (
            <View
              key={index}
              style={[
                styles.inputWrapper,
                {
                  borderColor: activeInputIndex === index ? '#1EABE6' : 'transparent',
                },
              ]}
            >
              <View style={styles.logoWrapper}>
                <Image source={item.image} style={{ width: item.width, height: item.height }} />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputLabelTxt}>{item.label}</Text>
                <TextInput
                  ref={item.ref}
                  style={styles.txtInput}
                  placeholder={item.placeholder}
                  onFocus={() => handleFocus(index)}
                  // value={state[item.field]}
                  onChangeText={(text: string) => handleChangeText(text, item.field)}
                />
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.importContactBtn}>
            <Text style={styles.btnTxt}>Import from Device Contacts</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    </View>
  )
}

export default NewProspectScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
    marginBottom: 14 * Theme.Ratio.H,
    marginLeft: 20 * Theme.Ratio.H,
  },
  formView: {
    flex: 1,
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  inputWrapper: {
    height: 54 * Theme.Ratio.H,
    backgroundColor: '#EDF9FE',
    flexDirection: 'row',
    borderRadius: 7,
    marginBottom: 20 * Theme.Ratio.H,
    borderWidth: 2,
  },
  logoWrapper: {
    width: 48 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    flex: 1,
    justifyContent: 'center',
  },
  inputLabelTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 13 * Theme.Ratio.H,
    color: '#15AEED',
  },
  txtInput: {
    height: 23 * Theme.Ratio.H,
    lineHeight: 23 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
    padding: 0,
  },
  importContactBtn: {
    height: 54 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25AAE1',
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderRadius: 7,
  },
  btnTxt: {
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    color: '#FFFFFF',
  },
})
