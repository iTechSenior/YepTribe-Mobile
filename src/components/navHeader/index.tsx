import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

import CheckIcon from '../../assets/Icons/CogWheel/check.png'
import BackIcon from '../../assets/Icons/Prospects/arrow-left-anticon.png'
import EditIcon from '../../assets/Icons/Prospects/ic_edit_24px.png'

import { Theme } from '../../theme'

interface IProps {
  type: string
  handleCheck?: () => void
  handleEdit?: () => void
}

const navHeader = (props: IProps) => {
  const navigation = useNavigation()

  const onheaderBtnClick = () => {
    if (props.type === 'withEdit') {
      navigation.navigate('Events')
    } else {
      navigation.goBack()
    }
  }

  const handleEditBtnClick = () => {
    if (props.handleEdit) {
      props.handleEdit()
    }
  }

  const onCheckBtnClick = () => {
    if (props.handleCheck) {
      props.handleCheck()
    }
  }

  let template = null

  switch (props.type) {
    case 'normal':
      template = (
        <View style={styles.navHeader}>
          <TouchableOpacity onPress={() => onheaderBtnClick()} style={styles.headerBtn}>
            <Image source={BackIcon} style={styles.backImg} />
          </TouchableOpacity>
        </View>
      )
      break
    case 'withCheck':
      template = (
        <View style={styles.navHeader}>
          <TouchableOpacity onPress={() => onheaderBtnClick()} style={styles.headerBtn}>
            <Image source={BackIcon} style={styles.backImg} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onCheckBtnClick()} style={styles.headerBtn}>
            {/* <Image source={CheckIcon} style={{ width: 18.56 * Theme.Ratio.H, height: 11.95 * Theme.Ratio.H }} /> */}
            <Text style={styles.nextBtnTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      )
      break
    case 'withEdit':
      template = (
        <View style={styles.navHeader}>
          <TouchableOpacity onPress={() => onheaderBtnClick()} style={styles.headerBtn}>
            <Image source={BackIcon} style={styles.backImg} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEditBtnClick()} style={styles.headerBtn}>
            <Image source={EditIcon} style={{ width: 18 * Theme.Ratio.H, height: 18 * Theme.Ratio.H }} />
          </TouchableOpacity>
        </View>
      )
      break
  }

  return template
}

export default navHeader

const styles = StyleSheet.create({
  navHeader: {
    height: 28 * Theme.Ratio.H,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10 * Theme.Ratio.H,
    marginBottom: 16 * Theme.Ratio.H,
    paddingLeft: 16 * Theme.Ratio.H,
    paddingRight: 20 * Theme.Ratio.H,
  },
  headerBtn: {
    // width: 28 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 9,
  },
  backImg: {
    width: 17.59 * Theme.Ratio.H,
    height: 14.95 * Theme.Ratio.H,
  },
  checkImg: {
    width: 18.56 * Theme.Ratio.H,
    height: 11.95 * Theme.Ratio.H,
  },
  nextBtnTxt: {
    fontSize: 18 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    color: '#25AAE1',
  },
})
