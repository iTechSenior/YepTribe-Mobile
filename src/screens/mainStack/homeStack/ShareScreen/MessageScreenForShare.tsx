import React, { useContext, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import { useNavigation } from 'react-navigation-hooks'

import NavHeader from '../../../../components/navHeader'

import TxtMsgIcon from '../../../../assets/Icons/Prospects/ic_chat_24px.png'

import { ShareDataContext } from '../../../../contexts/ShareDataContext'
import { UserContext } from '../../../../contexts/UserContext'
import { Theme } from '../../../../theme'

const MessageScreenForShare = () => {
  const shareDataContext = useContext(ShareDataContext)
  const userContext = useContext(UserContext)
  
  const defaultMessage = shareDataContext.data!.text!.replace(/<p>|<\/p>/g, '').replace('@SENDER_NAME', `${userContext.user?.firstName} ${userContext.user?.lastName}`).replace("@SENDER_CONTACTINFO", `${userContext.user?.email}`)
  const [msgText, setMsgText] = useState(defaultMessage)
  const navigation = useNavigation()

  const handleCheckBtnClick = () => {
    shareDataContext.setShareData({ text: msgText })
    navigation.navigate('ProspectNavForShare')
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
        </View>
      </View>
      <KeyboardAccessoryNavigation nextHidden={true} previousHidden={true} inSafeAreaView={true} androidAdjustResize={true} />
    </SafeAreaView>
  )
}

export default MessageScreenForShare

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
    flex:1,
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
