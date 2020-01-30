import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
const RatioH = height / 812
const RatioW = width / 375

const defaultTheme = {
  padding: {
    pad0: 5 * RatioH,
    pad1: 10 * RatioH,
    pad15: 15 * RatioH,
    pad2: 20 * RatioH,
    pad25: 25 * RatioH,
    pad3: 30 * RatioH,
    pad4: 40 * RatioH,
    pad5: 50 * RatioH,
    pad6: 60 * RatioH,
    pad65: 65 * RatioH,
    pad7: 70 * RatioH,
    pad8: 80 * RatioH,
  },
  colors: {
    White: '#FFFFFF',
    Black: '#000000',
  },
  fontSize: {
    h1: 32 * RatioH,
    h2: 28 * RatioH,
    h3: 24 * RatioH,
    h4: 22 * RatioH,
    p1: 18 * RatioH,
    p2: 16 * RatioH,
    p3: 14 * RatioH,
    p4: 12 * RatioH,
    p5: 10 * RatioH,
  },
  Ratio: {
    H: RatioH,
    W: RatioW,
  },
  Fonts: {
    PoppinsBold: 'Poppins-Bold',
    PoppinsSemiBold: 'Poppins-SemiBold',
    PoppinsRegular: 'Poppins-Regular',
    PoppinsMedium: 'Poppins-Medium',
  },
  Resolution: {
    H: height,
    W: width,
  },
}

export default defaultTheme
