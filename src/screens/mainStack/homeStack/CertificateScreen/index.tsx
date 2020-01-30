import debounce from 'lodash/debounce'
import React, { useContext, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import Modal from 'react-native-modal'
import { useNavigation } from 'react-navigation-hooks'

import CertificateListItem from '../../../../components/CertificateListItem'
import ModalSelector from '../../../../components/ModalSelector'
import NavHeader from '../../../../components/navHeader'
import SearchInput from '../../../../components/SearchInput'

import ArrowIcon from '../../../../assets/Icons/Training/arrow-right.png'
import { ProspectDataContext } from '../../../../contexts/ProspectDataContext'
import { UserContext } from '../../../../contexts/UserContext'
import { CertificateForMobile, useGetCertificatesForMobileQuery } from '../../../../graphql'
import { Theme } from '../../../../theme'
import { CountryModalSelector, LanguageModalSelector } from '../../../../utility/Common'

const CertificateScreen = () => {
  const [modalVisible, setModalVisible] = useState<string | null>(null)
  const [country, setCountry] = useState('USA')
  const [language, setLanguage] = useState('English')
  const userContext = useContext(UserContext)
  const { loading, data } = useGetCertificatesForMobileQuery()
  const [searchKeyword, setSearchKeyword] = React.useState('')

  const prospectDataContext = useContext(ProspectDataContext)

  const onShare = async (certificate: CertificateForMobile) => {
    try {
      const certURL = `https://incentives.tripvalet.com/view/${certificate.id}/${userContext.user!.uuid}`
      const result = await Share.share({
        title: certificate.title,
        message: `${certificate.defaultMessage}\n\n${certURL}`,
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('Shared With ', result.activityType)
        } else {
          // shared
          console.log('Shared, but not sure')
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed')
        // dismissed
      }
    } catch (error) {
      //error
      Alert.alert('Sorry, something went wrong')
    }
  }

  const handleCMClsBtnClick = (value: string) => {
    setCountry(value)
    setModalVisible(null)
  }

  const handleLMClsBtnClick = (value: string) => {
    setLanguage(value)
    setModalVisible(null)
  }

  const navigation = useNavigation()

  const handlePostClick = (certificate: CertificateForMobile) => {
    // navigation.navigate('MessageScreen')
    onShare(certificate)
  }

  const handleShareClick = (certificate: CertificateForMobile) => {
    const certificateData = {
      certificateId: certificate.id!,
      personalizedMessage: certificate.defaultMessage,
      certificateTitle: certificate.title,
      shareType: 'Email',
    }
    prospectDataContext.setProspectData(certificateData)
    // navigation.navigate('SendMsgBy')
    navigation.navigate('Message')
  }

  const handleChangeTextDebounce = debounce((s: string) => {
    setSearchKeyword(s)
  }, 1000)

  const clearText = () => {
    setSearchKeyword('')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavHeader type="normal" />
      <View style={styles.mainContainer}>
        <Text style={styles.headerTxt}>Send Certificates</Text>
        <SearchInput onChangeText={(text: string) => handleChangeTextDebounce(text)} clearText={() => clearText()} />
        <View style={styles.pickerWrapper}>
          <TouchableOpacity onPress={() => setModalVisible('country')} style={styles.countryPicker}>
            <Text style={styles.pickerTxt}>{country}</Text>
            <Image source={ArrowIcon} style={styles.arrowImg} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible('language')} style={styles.languagePicker}>
            <Text style={styles.pickerTxt}>{language}</Text>
            <Image source={ArrowIcon} style={styles.arrowImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentViewHeaderTxt}>Certificates</Text>
          <ScrollView>
            {!loading && data && (
              <View style={styles.cardViewWrapper}>
                {data.getCertificatesForMobile.map((item, index) => (
                  <CertificateListItem
                    key={index}
                    certificate={item}
                    handlePost={(cert: CertificateForMobile) => handlePostClick(cert)}
                    handleShare={(cert: CertificateForMobile) => handleShareClick(cert)}
                  />
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      </View>
      <Modal isVisible={modalVisible === 'country'} backdropColor="white" backdropOpacity={0.9}>
        <ModalSelector
          handleCloseBtnClick={(value: string) => handleCMClsBtnClick(value)}
          modalHeaderTxt="Country"
          options={CountryModalSelector}
          currentValue={country}
        />
      </Modal>
      <Modal isVisible={modalVisible === 'language'} backdropColor="white" backdropOpacity={0.9}>
        <ModalSelector
          handleCloseBtnClick={(value: string) => handleLMClsBtnClick(value)}
          modalHeaderTxt="Language"
          options={LanguageModalSelector}
          currentValue={language}
        />
      </Modal>
      <KeyboardAccessoryNavigation nextHidden={true} previousHidden={true} inSafeAreaView={true} androidAdjustResize={true} />
    </SafeAreaView>
  )
}

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
  pickerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14 * Theme.Ratio.H,
    marginBottom: 25 * Theme.Ratio.H,
  },
  countryPicker: {
    // width: 188 * Theme.Ratio.H,
    // height: 46 * Theme.Ratio.H,
    flex: 4,
    paddingHorizontal: 14 * Theme.Ratio.H,
    paddingVertical: 12 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EDF9FE',
    borderRadius: 8,
    marginRight: 20 * Theme.Ratio.H,
  },
  pickerTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
  },
  arrowImg: {
    width: 12 * Theme.Ratio.H,
    height: 7 * Theme.Ratio.H,
  },
  languagePicker: {
    // width: 133 * Theme.Ratio.H,
    // height: 46 * Theme.Ratio.H,
    flex: 3,
    paddingHorizontal: 14 * Theme.Ratio.H,
    paddingVertical: 12 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EDF9FE',
    borderRadius: 8,
  },
  contentView: {
    flex: 1,
  },
  contentViewHeaderTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 18 * Theme.Ratio.H,
    color: '#231F20',
  },
  cardViewWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    paddingTop: 14 * Theme.Ratio.H,
  },
})

export default CertificateScreen
