import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import Modal from 'react-native-modal'
import { useNavigation } from 'react-navigation-hooks'

import ModalSelector from '../../../../components/ModalSelector'
import SearchInput from '../../../../components/SearchInput'
import TrainingListItem from '../../../../components/TrainingListItem'

import SerachIcon from '../../../../assets/Icons/3WayCalls/Search/Search.png'
import ArrowIcon from '../../../../assets/Icons/Training/arrow-right.png'
import CallMissedIcon from '../../../../assets/Icons/Training/ic_call_missed_24px.png'

import CardDownloadButtonImage from '../../../../assets/Icons/Training/IconDownload.png'
import CardPlayButtonImage from '../../../../assets/Icons/Training/Polygon1.png'
import CardBackgroundImage1 from '../../../../assets/Icons/Training/Rectangle267.png'
import CardBackgroundImage2 from '../../../../assets/Icons/Training/Rectangle268.png'
import CardBackgroundImage3 from '../../../../assets/Icons/Training/Rectangle270.png'
import CardBackgroundImage4 from '../../../../assets/Icons/Training/Rectangle272.png'
import CardBackgroundImage5 from '../../../../assets/Icons/Training/Rectangle275.png'
import CardBackgroundImage6 from '../../../../assets/Icons/Training/Rectangle276.png'

import { Theme } from '../../../../theme'
import { CountryModalSelector, LanguageModalSelector } from '../../../../utility/Common'

const TrainingScreen = () => {
  const [inputFocus, setInputFocus] = useState(false)
  const [modalVisible, setModalVisible] = useState<string | null>(null)
  const [country, setCountry] = useState('USA')
  const [language, setLanguage] = useState('English')
  const [searchKeyword, setSearchKeyword] = React.useState('')

  const navigation = useNavigation()
  const handleTabBar = (visible: boolean) => {
    navigation.setParams({ tabBarVisible: visible })
  }

  const handleCountryModalCloseBtnClick = (value: string) => {
    setCountry(value)
    setModalVisible(null)
  }

  const handleLanguageModalCloseBtnClick = (value: string) => {
    setLanguage(value)
    setModalVisible(null)
  }

  const onChangeText = (text: string) => {
    setSearchKeyword(text)
  }

  const clearText = () => {
    setSearchKeyword('')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View style={{ paddingHorizontal: 20 * Theme.Ratio.H }}>
          <Text style={styles.headerTxt}> Training </Text>
        </View>
        <View style={styles.searchInputWrapper}>
          <SearchInput
            onChangeText={(text: string) => onChangeText(text)}
            value={searchKeyword}
            clearText={() => clearText()}
            handleTabBar={(visible: boolean) => handleTabBar(visible)}
          />
        </View>

        <View style={styles.pickerWrapper}>
          <TouchableOpacity onPress={() => setModalVisible('country')} style={styles.countryPicker}>
            <Text style={styles.countryPickerTxt}>{country}</Text>
            <Image source={ArrowIcon} style={styles.arrowImg} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible('language')} style={styles.languagePicker}>
            <Text style={styles.countryPickerTxt}>{language}</Text>
            <Image source={ArrowIcon} style={styles.arrowImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.listHeaderTxt}>Training</Text>
        <View style={styles.contentWrapper}>
          <View style={styles.subHeaderWrapper}>
            <Image
              source={CallMissedIcon}
              style={{
                width: 20.09 * Theme.Ratio.H,
                height: 20.09 * Theme.Ratio.H,
              }}
            />
            <Text style={styles.subHeaderTxt}>Getting Started</Text>
          </View>
          <ScrollView>
            <View style={styles.cardViewWrapper}>
              <TrainingListItem
                cardBackgroundImage={CardBackgroundImage1}
                info="44:30"
                cardButtonImage={CardPlayButtonImage}
                cardText="TripValet incentives overview"
              />
              <TrainingListItem
                cardBackgroundImage={CardBackgroundImage2}
                info="17:22"
                cardButtonImage={CardPlayButtonImage}
                cardText="Complimentary Golf-N-Stay"
              />
              <TrainingListItem
                cardBackgroundImage={CardBackgroundImage3}
                info="PDF"
                cardButtonImage={CardDownloadButtonImage}
                cardText="3 days, 2 Nights Hotel"
              />
              <TrainingListItem
                cardBackgroundImage={CardBackgroundImage4}
                info="PDF"
                cardButtonImage={CardDownloadButtonImage}
                cardText="7 night Resort Condo"
              />
              <TrainingListItem
                cardBackgroundImage={CardBackgroundImage5}
                info="44:30"
                cardButtonImage={CardPlayButtonImage}
                cardText="TripValet incentives overview"
              />
              <TrainingListItem
                cardBackgroundImage={CardBackgroundImage6}
                info="17:22"
                cardButtonImage={CardPlayButtonImage}
                cardText="TripValet incentives overview"
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <Modal isVisible={modalVisible === 'country'} backdropColor="white" backdropOpacity={0.9}>
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
      </Modal>

      <KeyboardAccessoryNavigation nextHidden={true} previousHidden={true} inSafeAreaView={true} androidAdjustResize={true} />
    </SafeAreaView>
  )
}

export default TrainingScreen
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10 * Theme.Ratio.H,
  },
  headerTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
  },
  searchInputWrapper: {
    paddingHorizontal: 20 * Theme.Ratio.H,
    paddingTop: 15 * Theme.Ratio.H,
  },
  searchImg: {
    width: 24 * Theme.Ratio.H,
    height: 24 * Theme.Ratio.H,
    marginRight: 10 * Theme.Ratio.H,
  },
  searchInput: {
    flex: 1,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
  },
  pickerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14 * Theme.Ratio.H,
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
  countryPickerTxt: {
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
  listHeaderTxt: {
    marginTop: 25 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 18 * Theme.Ratio.H,
    color: '#231F20',
    marginBottom: 10 * Theme.Ratio.H,
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
  contentWrapper: {
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
  cardViewWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    paddingHorizontal: 20 * Theme.Ratio.H,
  },
})
