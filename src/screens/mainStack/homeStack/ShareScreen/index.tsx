import debounce from 'lodash/debounce'
import React, { useState, useContext } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import { useNavigation } from 'react-navigation-hooks'
// import Modal from 'react-native-modal'

import ShareListItem from '../../../../components/ShareListItem'
// import ModalSelector from '../../../../components/ModalSelector'
import NavHeader from '../../../../components/navHeader'
import SearchInput from '../../../../components/SearchInput'

import CallMissedIcon from '../../../../assets/Icons/Training/ic_call_missed_24px.png'

import { useGetAllContentByBrandQuery, ShareableContent } from '../../../../graphql'
import { ShareDataContext, ContextDataType } from '../../../../contexts/ShareDataContext'
import { Theme } from '../../../../theme'
// import { CountryModalSelector, LanguageModalSelector } from '../../../../utility/Common'

const ShareScreen = () => {
  // const [modalVisible, setModalVisible] = useState<string | null>(null)
  // const [country, setCountry] = useState('USA')
  // const [language, setLanguage] = useState('English')
  const [searchKeyword, setSearchKeyword] = useState('')
  const navigation = useNavigation()
  const shareDataContext = useContext(ShareDataContext)

  const { loading, data } = useGetAllContentByBrandQuery({
    fetchPolicy: 'network-only',
    variables: { skip: 0, pageSize: 999, searchText: searchKeyword, brand: 'YEP' },
  })
  if (!loading && data) {
    console.log('Share data', data.getAllContentByBrand)
  }

  // const handleCloseBtnClick = (value: string, modalType: string) => {
  //   if (modalType === 'Country') {
  //     setCountry(value)
  //   } else {
  //     setLanguage(value)
  //   }
  //   setModalVisible(null)
  // }

  // const handleCountryModalCloseBtnClick = (value: string) => {
  //   setCountry(value)
  //   setModalVisible(null)
  // }

  // const handleLanguageModalCloseBtnClick = (value: string) => {
  //   setLanguage(value)
  //   setModalVisible(null)
  // }

  // tslint:disable-next-line: no-empty
  const handlePost = (categoryIndex: number, shareIndex: number) => {
    const shareData = !loading && data && data.getAllContentByBrand[categoryIndex].shareableContent[shareIndex]

    shareDataContext.setShareData({ text: shareData!.text!, contentId: shareData!.id! })
    navigation.navigate('MessageForShare')
  }
  // tslint:disable-next-line: no-empty
  // const handleShare = (share: Partial<ShareableContent>) => {}

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
        <View style={styles.contentHeaderView}>
          <Text style={styles.headerTxt}>Share</Text>
          <SearchInput onChangeText={(text: string) => handleChangeTextDebounce(text)} clearText={() => clearText()} />
        </View>
        {/* <View style={styles.pickerWrapper}>
          <TouchableOpacity onPress={() => setModalVisible('country')} style={styles.countryPicker}>
            <Text style={styles.pickerTxt}>{country}</Text>
            <Image source={ArrowIcon} style={styles.arrowImg} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible('language')} style={styles.languagePicker}>
            <Text style={styles.pickerTxt}>{language}</Text>
            <Image source={ArrowIcon} style={styles.arrowImg} />
          </TouchableOpacity>
        </View> */}
        <View style={styles.contentView}>
          <ScrollView>
            <Text style={styles.contentViewHeaderTxt}>Initial Contact</Text>
            {!loading &&
              data &&
              data.getAllContentByBrand.length > 0 &&
              data.getAllContentByBrand.map((item, index) => (
                <View key={index}>
                  <View style={styles.subHeaderWrapper}>
                    <Image
                      source={CallMissedIcon}
                      style={{
                        width: 20.09 * Theme.Ratio.H,
                        height: 20.09 * Theme.Ratio.H,
                      }}
                    />
                    <Text style={styles.subHeaderTxt}>{item.category}</Text>
                  </View>
                  <View style={styles.cardViewWrapper}>
                    {item.shareableContent.map(({ thumbnailUrl, title }, id) => (
                      <ShareListItem
                        key={id}
                        categoryIndex={index}
                        shareIndex={id}
                        thumbnailUrl={thumbnailUrl}
                        title={title}
                        handlePost={(categoryIndex: number, shareIndex: number) => handlePost(categoryIndex, shareIndex)}
                      />
                    ))}
                  </View>
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
      {/* <Modal isVisible={modalVisible === 'country'} backdropColor="white" backdropOpacity={0.9}>
        <ModalSelector
          handleCloseBtnClick={(value: string) => handleCountryModalCloseBtnClick(value)}
          modalHeaderTxt="Country"
          options={CountryModalSelector}
          currentValue={country}
        />
      </Modal>
      <Modal isVisible={modalVisible === 'language'} backdropColor="white" backdropOpacity={0.9}>
        <ModalSelector
          handleCloseBtnClick={(value: string) => handleLanguageModalCloseBtnClick(value)}
          modalHeaderTxt="Language"
          options={LanguageModalSelector}
          currentValue={language}
        />
      </Modal> */}

      <KeyboardAccessoryNavigation nextHidden={true} previousHidden={true} inSafeAreaView={true} androidAdjustResize={true} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentHeaderView: {
    paddingHorizontal: 20 * Theme.Ratio.H,
    marginBottom: 25 * Theme.Ratio.H,
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
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  countryPicker: {
    width: 188 * Theme.Ratio.H,
    height: 46 * Theme.Ratio.H,
    paddingHorizontal: 14 * Theme.Ratio.H,
    paddingVertical: 12 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EDF9FE',
    borderRadius: 8,
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
    width: 133 * Theme.Ratio.H,
    height: 46 * Theme.Ratio.H,
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
  subHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14 * Theme.Ratio.H,
    paddingLeft: 14.96 * Theme.Ratio.H,
  },
  subHeaderTxt: {
    marginLeft: 8 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
  },
  contentViewHeaderTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 18 * Theme.Ratio.H,
    color: '#231F20',
    marginBottom: 10 * Theme.Ratio.H,
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  cardViewWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
})

export default ShareScreen
