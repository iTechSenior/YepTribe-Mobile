import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Theme } from '../../theme'

import GradientBorderComponent from '../../components/GradientBorderComponent'

import CloseIcon from '../../assets/Icons/Training/Icon-Close.png'

interface IProps {
  handleCloseBtnClick: (value: string) => void
  currentValue: string
  modalHeaderTxt: string
  options: string[]
}

const ModalSelector = (props: IProps) => {
  const [selValue, setSelValue] = React.useState(props.currentValue)

  const handleClsBtnClick = () => {
    props.handleCloseBtnClick(selValue)
  }

  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalMainContainer}>
        <Text style={styles.modalHeaderTxt}>{props.modalHeaderTxt}</Text>
        {props.options.map((item, index) => {
          if (index < props.options.length - 1) {
            return (
              <View key={index} style={{ height: 46 * Theme.Ratio.H }}>
                <GradientBorderComponent>
                  <TouchableOpacity
                    onPress={() => {
                      setSelValue(item)
                    }}
                    style={styles.modalMenuItem}
                  >
                    <Text style={styles.modalMenuItemTxt}>{item}</Text>
                    {selValue === item ? (
                      <View style={styles.modalItemSelectActiveWrapper}>
                        <View style={styles.modalItemSelectActiveView} />
                      </View>
                    ) : (
                      <View style={styles.modalItemSelectDeactiveView} />
                    )}
                  </TouchableOpacity>
                </GradientBorderComponent>
              </View>
            )
          } else {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelValue(item)
                }}
                style={styles.modalMenuItem}
              >
                <Text style={styles.modalMenuItemTxt}>{item}</Text>
                {selValue === item ? (
                  <View style={styles.modalItemSelectActiveWrapper}>
                    <View style={styles.modalItemSelectActiveView} />
                  </View>
                ) : (
                  <View style={styles.modalItemSelectDeactiveView} />
                )}
              </TouchableOpacity>
            )
          }
        })}
      </View>
      <TouchableOpacity onPress={() => handleClsBtnClick()} style={styles.closeBtn}>
        <Image source={CloseIcon} style={{ width: 14.5 * Theme.Ratio.H, height: 14.5 * Theme.Ratio.H }} />
      </TouchableOpacity>
    </View>
  )
}

export default ModalSelector

const styles = StyleSheet.create({
  modalWrapper: {
    // height: 320 * Theme.Ratio.H,
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10 * Theme.Ratio.H,
    backgroundColor: 'transparent',
  },
  modalMainContainer: {
    // height: 245 * Theme.Ratio.H,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 20 * Theme.Ratio.H,
    paddingVertical: 30 * Theme.Ratio.H,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  modalHeaderTxt: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 24 * Theme.Ratio.H,
    color: '#231F20',
    marginBottom: 14 * Theme.Ratio.H,
  },
  modalMenuItem: {
    height: 46 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalMenuItemTxt: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
  },
  modalItemSelectActiveWrapper: {
    width: 20 * Theme.Ratio.H,
    height: 20 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#25AAE1',
    borderWidth: 2,
    borderRadius: 50,
  },
  modalItemSelectActiveView: {
    width: 12 * Theme.Ratio.H,
    height: 12 * Theme.Ratio.H,
    borderRadius: 50,
    backgroundColor: '#25AAE1',
  },
  modalItemSelectDeactiveView: {
    width: 20 * Theme.Ratio.H,
    height: 20 * Theme.Ratio.H,
    borderColor: '#B4B4B4',
    borderWidth: 2,
    borderRadius: 50,
  },
  closeBtn: {
    width: 42 * Theme.Ratio.H,
    height: 42 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'white',
    marginTop: 32 * Theme.Ratio.H,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
})
