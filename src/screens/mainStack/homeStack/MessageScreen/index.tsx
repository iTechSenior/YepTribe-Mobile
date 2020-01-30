import React, { useContext, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import { useNavigation } from 'react-navigation-hooks'

import NavHeader from '../../../../components/navHeader'

import TxtMsgIcon from '../../../../assets/Icons/Prospects/ic_chat_24px.png'

import { ProspectDataContext } from '../../../../contexts/ProspectDataContext'
import { Theme } from '../../../../theme'

const MessageScreen = () => {
  const prospectDataContext = useContext(ProspectDataContext)

  const defaultMessage = prospectDataContext.data!.personalizedMessage!.replace(/<p>|<\/p>/g, '')

  const [msgText, setMsgText] = useState(defaultMessage)

  const navigation = useNavigation()

  const handleCheckBtnClick = () => {
    prospectDataContext.setProspectData({ personalizedMessage: msgText })
    navigation.navigate('SendMsgNav')
  }

  const handleChangeText = (text: string) => {
    setMsgText(text)
  }

  const renderHeader = () => {
    const header = msgText !== '' ? <NavHeader type="withCheck" handleCheck={() => handleCheckBtnClick()} /> : <NavHeader type="normal" />
    return header
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderHeader()}
      <View style={styles.mainContainer}>
        <Text style={styles.headerTxt}>Your Message</Text>
        <View style={styles.txtMsgViewWrapper}>
          <View style={styles.txtMsgViewHeader}>
            <Image source={TxtMsgIcon} style={{ width: 20 * Theme.Ratio.H, height: 20 * Theme.Ratio.H }} />
            <Text style={styles.txtMsgViewHeaderTxt}>Text Message</Text>
          </View>

          <TextInput
            multiline={true}
            style={styles.txtMsgInput}
            placeholder="Please input your message here."
            numberOfLines={6}
            onChangeText={(text: string) => handleChangeText(text)}
            value={msgText}
          />
          {/* These need to be text inputs to allow user to enter their personalized message. */}
          {/* </TextInput> */}
        </View>
        {/* <View style={styles.mailViewWrapper}>
          <View style={styles.txtMsgViewHeader}>
            <Image source={EmailIcon} style={{ width: 20 * Theme.Ratio.H, height: 16.5 * Theme.Ratio.H }} />
            <Text style={styles.txtMsgViewHeaderTxt}>Email</Text>
          </View>
          <TextInput multiline={true} style={styles.txtMsgInput}>
            These need to be text inputs to allow user to enter their personalized message.
          </TextInput>
        </View> */}
      </View>
      <KeyboardAccessoryNavigation nextHidden={true} previousHidden={true} inSafeAreaView={true} androidAdjustResize={true} />
    </SafeAreaView>
  )
}

export default MessageScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
    marginBottom: 15 * Theme.Ratio.H,
  },
  txtMsgViewWrapper: {
    // height: 216 * Theme.Ratio.H,
    height: 250 * Theme.Ratio.H,
    paddingVertical: 16 * Theme.Ratio.H,
    paddingHorizontal: 15 * Theme.Ratio.H,
    backgroundColor: '#EDF9FE',
    borderRadius: 7,
    marginBottom: 20 * Theme.Ratio.H,
  },
  txtMsgViewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11 * Theme.Ratio.H,
  },
  txtMsgViewHeaderTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 15 * Theme.Ratio.H,
    color: '#15AEED',
    opacity: 0.6,
    marginLeft: 13 * Theme.Ratio.H,
  },
  txtMsgInput: {
    flex: 1,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 15 * Theme.Ratio.H,
    color: '#231F20',
  },
  mailViewWrapper: {
    flex: 1,
    paddingVertical: 16 * Theme.Ratio.H,
    paddingHorizontal: 15 * Theme.Ratio.H,
    backgroundColor: '#EDF9FE',
    borderRadius: 7,
  },
})
