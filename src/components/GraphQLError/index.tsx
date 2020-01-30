import { ApolloError } from 'apollo-client'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ErrorIcon from '../../assets/Icons/ErrorIcon/ErrorIcon.png'
import { Theme } from '../../theme'

interface IGraphQLErrorProps {
  message?: string
  className?: string
  error: ApolloError | undefined
}

const GraphQLError = (props: IGraphQLErrorProps) => {
  const { message, className, error } = props
  const parsedMessage = message
    ? message.replace('GraphQL error: ', '')
    : error
    ? error.message.replace('GraphQL error: ', '')
    : ''

  return (
    <View style={styles.errorWrapper}>
      <Image source={ErrorIcon} style={styles.errorIcon} />
      <Text style={styles.errorMessage}>{parsedMessage}</Text>
    </View>
  )
}

export default GraphQLError

const styles = StyleSheet.create({
  errorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 21 * Theme.Ratio.H,
    marginRight: 21 * Theme.Ratio.H,
  },
  errorMessage: {
    flex: 1,
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    color: '#ED1C24',
    fontSize: 14 * Theme.Ratio.H,
    opacity: 0.6,
    marginBottom: 16 * Theme.Ratio.H,
  },
  errorIconWrapper: {
    flex: 1,
    marginRight: 4 * Theme.Ratio.H,
  },
  errorIcon: {
    maxWidth: 25 * Theme.Ratio.H,
    marginRight: 5 * Theme.Ratio.H,
  },
})
