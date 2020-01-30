import React from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

import SerachIcon from '../../assets/Icons/3WayCalls/Search/Search.png'
import CloseIcon from '../../assets/Icons/Training/Icon-Close.png'

import { Theme } from '../../theme'

interface IProps {
  onChangeText: (text: string) => void
  clearText: () => void
  handleTabBar?: (visible: boolean) => void
}

const SearchInput = (props: IProps) => {
  const [txtInputFocus, setTxtInputFocus] = React.useState(false)

  const clearText = () => {
    props.clearText()
    setValue('')
  }

  const [value, setValue] = React.useState('')

  const onChange = (s: string) => {
    setValue(s)
    props.onChangeText(s)
  }

  return (
    <View style={[styles.searchInputWrapper, { borderColor: txtInputFocus ? '#1EABE6' : 'transparent' }]}>
      <Image source={SerachIcon} style={styles.searchImg} />
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        onFocus={() => {
          setTxtInputFocus(true)
          if (props.handleTabBar) {
            props.handleTabBar(false)
          }
        }}
        onBlur={() => {
          setTxtInputFocus(false)
          if (props.handleTabBar) {
            props.handleTabBar(true)
          }
        }}
        onChangeText={(s: string) => onChange(s)}
        value={value}
      />
      {value !== '' && (
        <TouchableOpacity onPress={() => clearText()} style={styles.clearBtn}>
          <Image source={CloseIcon} style={{ width: 10 * Theme.Ratio.H, height: 10 * Theme.Ratio.H }} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  searchInputWrapper: {
    width: '100%',
    height: 54 * Theme.Ratio.H,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14 * Theme.Ratio.H,
    borderRadius: 8,
    backgroundColor: '#EDF9FE',
    borderWidth: 2,
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
  clearBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25 * Theme.Ratio.H,
    height: 25 * Theme.Ratio.H,
    backgroundColor: 'white',
    borderRadius: 50,
  },
})
