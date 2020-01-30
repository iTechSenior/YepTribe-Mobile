import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Animated, Easing, Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Biometrics from 'react-native-biometrics'
import DeviceInfo from 'react-native-device-info'

import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import SplashScreen from 'react-native-splash-screen'
import { useNavigation } from 'react-navigation-hooks'
import { BioMetricsMode, getBioMetrics, hasLoggedIn, login, setBioMetrics } from '../../../utility/AsyncManager'

// import FadeInView from '../../../utility/FadeView'
import ToggleView from '../../../utility/ToggleView'

import EmailIcon from '../../../assets/Icons/BottomTabIcons/Active/iconmonstr-email-1/iconmonstr-email-1.png'
import LockIcon from '../../../assets/Icons/CogWheel/ic_lock_blue_24px.png'
import FaceID from '../../../assets/Icons/FaceID.png'
import Fingerprint from '../../../assets/Icons/Fingerprint.png'
import RedImage1 from '../../../assets/Icons/Splash/Splash4/Path210.png'
import BlueImage1 from '../../../assets/Icons/Splash/Splash4/Path211.png'
import BlackImage1 from '../../../assets/Icons/Splash/Splash4/Path212.png'
import BlueImage2 from '../../../assets/Icons/Splash/Splash4/Path214.png'
import BlackImage2 from '../../../assets/Icons/Splash/Splash4/Path215.png'
import RedImage2 from '../../../assets/Icons/Splash/Splash4/Path216.png'
import BlueImage3 from '../../../assets/Icons/Splash/Splash4/Path217.png'
import Logo from '../../../assets/Icons/Splash/YEP-LOGO_Reverse.png'

import { ApolloError } from 'apollo-client'
import { ExecutionResult } from 'react-apollo'
import GraphQLError from '../../../components/GraphQLError'
import { UserContext } from '../../../contexts/UserContext'
import { LoginMutation, useLoginMutation, useLoginWithBiometricsMutation } from '../../../graphql'
import { Theme } from '../../../theme'
import { AnimationValues, SCREENS } from '../../../utility/Common'

const LogoWidth = 168 * Theme.Ratio.H
const LogoHeight = 94 * Theme.Ratio.H

const LogoSmallWidth = 114 * Theme.Ratio.H
const LogoSmallHeight = 64 * Theme.Ratio.H

function FadeInView({ children }: { children: ReactNode }) {
  const [state] = useState({
    fadeAnim: new Animated.Value(0),
  })

  useEffect(() => {
    Animated.timing(state.fadeAnim, {
      toValue: 1,
      duration: 1000,
    }).start()
  }, [])

  const { fadeAnim } = state

  return <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>
}

const LogIn = () => {
  const [logoHeight, setLogoHeight] = useState(new Animated.Value(94 * Theme.Ratio.H))
  const [logoWidth, setLogoWidth] = useState(new Animated.Value(168 * Theme.Ratio.H))

  const [email, setEmail] = useState('troy@troyzarger.com')
  const [password, setPassword] = useState('1234567')
  const [error, setError] = useState<ApolloError | null>(null)

  const [firstTxtInputFocus, setFirstTxtInputFocus] = useState(false)
  const [secondTxtInputFocus, setSecondTxtInputFocus] = useState(false)

  const [nextFocusDisabled, setNextFocusDisabled] = useState(false)
  const [previousFocusDisabled, setPreviousFocusDisabled] = useState(false)

  const [newUser, setNewUser] = useState(false)
  const [loginWithBiometrics, setLoginWithBiometrics] = useState(false)
  const [biometricsProcessing, setBiometricsProcessing] = useState(false)
  const [supportedBiometrics, setSupportedBiometrics] = useState<string | null>(null)
  const [isBiometricsAvailable, setIsBiometricsAvailable] = useState<boolean | null>(null)

  const uselogin = useLoginMutation()
  const [loginMutation] = useLoginMutation()
  const [loginWithBiometricsMutation] = useLoginWithBiometricsMutation()
  const userContext = useContext(UserContext)

  const navigation = useNavigation()

  const checkForBiometrics = async () => {
    try {
      setNewUser((await hasLoggedIn()) ? false : true)
      getBioMetrics().then(async isBioMetricEnabled => {
        if (isBioMetricEnabled === BioMetricsMode.ENABLED && (await hasLoggedIn())) {
          setLoginWithBiometrics(true)
        }
      })
    } catch (error) {
      // console.log(error)
    }
  }

  const processBioMetrics = async () => {
    const authenticated = await Biometrics.simplePrompt(`Confirm ${supportedBiometrics}`)

    if (authenticated) {
      setBiometricsProcessing(true)
      const response = await loginWithBiometricsMutation({
        variables: { uuid: await DeviceInfo.getUniqueId() },
      }).catch(err => {
        setError(err)
      })
      if (response) {
        await login(response!.data!.loginWithBiometrics.token)
        userContext.setUser(response!.data!.loginWithBiometrics.user)
        navigation.navigate('Home')
      }
    } else {
      // tslint:disable-next-line: no-console
      console.log('fingerprint failed or prompt was cancelled')
      setBiometricsProcessing(false)
    }
  }

  useEffect(() => {
    SplashScreen.hide()
  })

  useEffect(() => {
    Animated.timing(logoHeight, {
      toValue: LogoSmallHeight,
      duration: 1000,
      easing: Easing.in(Easing.ease),
    }).start()
    Animated.timing(logoWidth, {
      toValue: LogoSmallWidth,
      duration: 1000,
      easing: Easing.in(Easing.ease),
    }).start()
  }, [])

  useEffect(() => {
    Biometrics.isSensorAvailable().then(biometryType => {
      if (biometryType === Biometrics.TouchID) {
        setIsBiometricsAvailable(Fingerprint)
        setSupportedBiometrics('Fingerprint')
      } else if (biometryType === Biometrics.FaceID) {
        setIsBiometricsAvailable(FaceID)
        setSupportedBiometrics('Face ID')
      } else {
        setIsBiometricsAvailable(null)
      }
    })
    checkForBiometrics()
  }, [])

  useEffect(() => {
    const biometricLogin = async () => {
      if (loginWithBiometrics && (await hasLoggedIn()) ? true : false) {
        processBioMetrics()
      }
    }
    biometricLogin()
  }, [loginWithBiometrics])

  const firstTxtInputRef = React.useRef<TextInput | null>(null)
  const secondTxtInputRef = React.useRef<TextInput | null>(null)

  const handleNextAccessoryClick = () => {
    secondTxtInputRef.current!.focus()
  }

  const handlePreviousAccessoryClick = () => {
    firstTxtInputRef.current!.focus()
  }

  const handleLogIn = async () => {
    setError(null)

    if (!email || !password) {
      return
    }

    const loginResponse: void | ExecutionResult<LoginMutation> = await loginMutation({
      variables: { email, password, uuid: await DeviceInfo.getUniqueId() },
    }).catch((err: ApolloError) => {
      setError(err)
    })

    if (loginResponse) {
      await login(loginResponse.data!.login.token)
      userContext.setUser(loginResponse.data!.login.user)
      navigation.navigate('Home')
    }
  }

  return (
    <View style={styles.mainContainer}>
      <ToggleView toValue={AnimationValues.BlackImage2ToValue}>
        <Image source={BlackImage2} style={styles.blackImage2} resizeMode="stretch" />
      </ToggleView>
      <ToggleView toValue={AnimationValues.BlueImage2ToValue}>
        <View style={styles.blueImage2Wrapper}>
          <Image source={BlueImage2} style={styles.blueImage2} resizeMode="stretch" />
        </View>
      </ToggleView>

      <View style={styles.blueImage3Wrapper}>
        <Image source={BlueImage3} style={styles.blueImage3} resizeMode="stretch" />
      </View>
      <ToggleView toValue={AnimationValues.BlackImage1ToValue}>
        <View style={styles.blackImage1Wrapper}>
          <Image source={BlackImage1} style={styles.blackImage1} resizeMode="stretch" />
        </View>
      </ToggleView>
      <ToggleView toValue={AnimationValues.BlueImage1ToValue}>
        <View style={styles.blueImage1Wrapper}>
          <Image source={BlueImage1} style={styles.blueImage1} resizeMode="stretch" />
        </View>
      </ToggleView>
      <ToggleView toValue={AnimationValues.RedImage1ToValue}>
        <View style={styles.redImage1Wrapper}>
          <Image source={RedImage1} style={styles.redImage1} resizeMode="stretch" />
        </View>
      </ToggleView>
      <ToggleView toValue={AnimationValues.RedImage2ToValue}>
        <View style={styles.redImage2Wrapper}>
          <Image source={RedImage2} style={styles.redImage2} resizeMode="stretch" />
        </View>
      </ToggleView>
      <ToggleView toValue={AnimationValues.logoToValue}>
        <Animated.Image source={Logo} style={[styles.logo, { width: logoWidth, height: logoHeight }]} />
      </ToggleView>
      <View style={{ flex: 1 }}>
        <ToggleView toValue={AnimationValues.whiteWrapperToValue}>
          <FadeInView>
            <View style={styles.whiteBoard} />
          </FadeInView>
        </ToggleView>
        <View style={styles.formWrapper}>
          <FadeInView>
            <Text style={styles.formLabel}>Login</Text>
            {error ? <GraphQLError error={error} /> : <Text style={styles.formWelcomeTxt}>Welcome back, Please login.</Text>}

            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor: error ? '#ED1C24' : firstTxtInputFocus ? '#1EABE6' : 'transparent',
                },
              ]}
            >
              <View style={styles.inputIconWrapper}>
                <Image source={EmailIcon} style={styles.emailImg} />
              </View>
              <TextInput
                testID="email"
                ref={firstTxtInputRef}
                style={styles.emailInput}
                defaultValue={email}
                placeholder="Email"
                onFocus={() => {
                  setFirstTxtInputFocus(true)
                  setPreviousFocusDisabled(true)
                  setNextFocusDisabled(false)
                }}
                onBlur={() => {
                  setFirstTxtInputFocus(false)
                }}
                onChangeText={text => {
                  setEmail(text)
                }}
              />
            </View>
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor: error ? '#ED1C24' : secondTxtInputFocus ? '#1EABE6' : 'transparent',
                },
              ]}
            >
              <View style={styles.inputIconWrapper}>
                <Image source={LockIcon} style={styles.lockImg} />
              </View>
              <TextInput
                testID="password"
                ref={secondTxtInputRef}
                style={styles.pwdInput}
                placeholder="Password"
                defaultValue={password}
                secureTextEntry={true}
                onFocus={() => {
                  setSecondTxtInputFocus(true)
                  setNextFocusDisabled(true)
                  setPreviousFocusDisabled(false)
                }}
                onBlur={() => {
                  setSecondTxtInputFocus(false)
                }}
                onChangeText={text => {
                  setPassword(text)
                }}
              />
            </View>
            <View style={styles.faceIdWrapper}>
              <Text style={styles.faceIdTxt}>Use Face ID</Text>
              <Switch
                value={loginWithBiometrics}
                trackColor={{ true: '#0C72AD', false: 'lightgray' }}
                onValueChange={async () => {
                  setLoginWithBiometrics(!loginWithBiometrics)
                  setBioMetrics(loginWithBiometrics)
                }}
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogIn} testID="login">
              <Text style={styles.loginBtnTxt}>Login</Text>
            </TouchableOpacity>
            {!newUser && (
              <TouchableOpacity style={styles.faceIdBtn}>
                <Image source={FaceID} style={styles.faceIdImg} />
              </TouchableOpacity>
            )}
          </FadeInView>
        </View>
      </View>
      <KeyboardAccessoryNavigation
        nextDisabled={nextFocusDisabled}
        previousDisabled={previousFocusDisabled}
        onNext={() => handleNextAccessoryClick()}
        onPrevious={() => handlePreviousAccessoryClick()}
        androidAdjustResize={true}
      />
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  blackImage2: {
    position: 'absolute',
    top: 180 * Theme.Ratio.H,
    left: -3,
    width: '101%',
    height: 596 * Theme.Ratio.H,
  },
  blueImage2Wrapper: {
    position: 'absolute',
    top: 434.85 * Theme.Ratio.H,
    // top: -150,
    right: 0,
    // width: '101%',
    width: 378.16 * Theme.Ratio.H,
    height: 428.46 * Theme.Ratio.H,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.17,
    shadowRadius: 30,
  },
  blueImage2: {
    width: '100%',
    // width: 378.16 * Theme.Ratio.H,
    height: 428.46 * Theme.Ratio.H,
  },
  blueImage3Wrapper: {
    position: 'absolute',
    top: 595.02 * Theme.Ratio.H,
    left: 45.81 * Theme.Ratio.H,
    width: '100%',
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.17,
    shadowRadius: 30,
  },
  blueImage3: {
    // width: '100%',
    width: 329.36 * Theme.Ratio.H,
    height: 219.59 * Theme.Ratio.H,
  },
  blackImage1Wrapper: {
    position: 'absolute',
    top: 145.8 * Theme.Ratio.H,
    // top: -285,
    left: 0,
    width: '101%',
    backgroundColor: 'transparent',
    // width: 379.19 * Theme.Ratio.H,
    height: 496.66 * Theme.Ratio.H,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.17,
    shadowRadius: 30,
  },
  blackImage1: {
    // width: '100%',
    width: 379.19 * Theme.Ratio.H,
    height: 496.66 * Theme.Ratio.H,
  },
  blueImage1Wrapper: {
    position: 'absolute',
    top: 82 * Theme.Ratio.H,
    // top: -250,
    left: 0,
    width: '101%',
    backgroundColor: 'transparent',
    // width: 378.16 * Theme.Ratio.H,
    height: 428.46 * Theme.Ratio.H,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.17,
    shadowRadius: 30,
  },
  blueImage1: {
    width: '100%',
    // width: 378.16 * Theme.Ratio.H,
    height: 428.46 * Theme.Ratio.H,
  },
  redImage1Wrapper: {
    position: 'absolute',
    top: 0,
    // top: -250,
    left: 0,
    width: '101%',
    backgroundColor: 'transparent',
    // width: 378.16 * Theme.Ratio.H,
    height: 428.46 * Theme.Ratio.H,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.17,
    shadowRadius: 30,
  },
  redImage1: {
    width: '100%',
    // width: 378.16 * Theme.Ratio.H,
    height: 428.46 * Theme.Ratio.H,
  },
  redImage2Wrapper: {
    position: 'absolute',
    top: 0,
    // top: -200,
    left: 0,
    width: '100%',
    backgroundColor: 'transparent',
    // width: 374.07 * Theme.Ratio.H,
    height: 322.47 * Theme.Ratio.H,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.17,
    shadowRadius: 30,
  },
  redImage2: {
    width: '100%',
    // width: 374.07 * Theme.Ratio.H,
    height: 350.47 * Theme.Ratio.H,
  },
  logo: {
    position: 'absolute',
    top: Theme.Resolution.H / 2 - (94 * Theme.Ratio.H) / 2,
    width: '100%',
    // width: 168 * Theme.Ratio.H,
    height: 94 * Theme.Ratio.H,
    alignSelf: 'center',
  },
  whiteBoard: {
    position: 'absolute',
    top: 600 * Theme.Ratio.H,
    bottom: 0,
    left: 0,
    height: 680 * Theme.Ratio.H,
    width: '100%',
    borderRadius: 18,
    backgroundColor: 'white',
    paddingTop: 30 * Theme.Ratio.H,
    paddingRight: 20 * Theme.Ratio.H,
  },
  formWrapper: {
    position: 'absolute',
    top: 190 * Theme.Ratio.H,
    left: 0,
    width: '100%',
    paddingRight: 20 * Theme.Ratio.H,
  },
  formLabel: {
    fontFamily: Theme.Fonts.PoppinsBold,
    fontSize: 28 * Theme.Ratio.H,
    color: '#231F20',
    marginLeft: 20 * Theme.Ratio.H,
    marginBottom: 10 * Theme.Ratio.H,
  },
  formWelcomeTxt: {
    fontFamily: Theme.Fonts.PoppinsRegular,
    fontSize: 14 * Theme.Ratio.H,
    color: '#231F20',
    opacity: 0.6,
    width: 207 * Theme.Ratio.H,
    marginLeft: 21 * Theme.Ratio.H,
    marginBottom: 16 * Theme.Ratio.H,
  },
  inputWrapper: {
    height: 54 * Theme.Ratio.H,
    flexDirection: 'row',
    marginLeft: 19.5 * Theme.Ratio.H,
    backgroundColor: '#EDF9FE',
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 14 * Theme.Ratio.H,
    borderWidth: 2,
  },
  inputIconWrapper: {
    width: 52 * Theme.Ratio.H,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#25AAE1',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4.65,
    elevation: 9,
  },
  emailImg: {
    width: 20.66 * Theme.Ratio.H,
    height: 15.49 * Theme.Ratio.H,
  },
  emailInput: {
    flex: 1,
    height: 54 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
  },
  lockImg: {
    width: 16 * Theme.Ratio.H,
    height: 21 * Theme.Ratio.H,
  },
  pwdInput: {
    flex: 1,
    height: 54 * Theme.Ratio.H,
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
  },
  faceIdWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 15 * Theme.Ratio.H,
  },
  faceIdTxt: {
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    color: '#231F20',
    opacity: 0.6,
    marginRight: 9 * Theme.Ratio.H,
  },
  loginButton: {
    height: 54 * Theme.Ratio.H,
    backgroundColor: '#25AAE1',
    marginLeft: 20 * Theme.Ratio.H,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnTxt: {
    fontFamily: Theme.Fonts.PoppinsMedium,
    fontSize: 16 * Theme.Ratio.H,
    color: '#FFFFFF',
  },
  faceIdBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 54 * Theme.Ratio.H,
    height: 54 * Theme.Ratio.H,
    backgroundColor: '#25AAE1',
    marginTop: 50 * Theme.Ratio.H,
    marginLeft: 20 * Theme.Ratio.H,
    alignSelf: 'center',
    borderRadius: 6,
  },
  faceIdImg: {
    width: 32 * Theme.Ratio.H,
    height: 32 * Theme.Ratio.H,
  },
})
