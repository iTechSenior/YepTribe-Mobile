import React from 'react'
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { YepClipsPlaylistsGroupedByCategory, Playlist } from '../../graphql'
import { Theme } from '../../theme'

interface IProps {
  categoryData: YepClipsPlaylistsGroupedByCategory
  thumbnailClick: (id: string | null | undefined) => void
}

const CategoryListView = (props: IProps) => {
  const handleThumbnailClick = (id: string | null | undefined) => {
    props.thumbnailClick(id)
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.categoryText}>{props.categoryData.category}</Text>
      <FlatList
        data={props.categoryData.playlists}
        horizontal={true}
        renderItem={({ item }: { item: Playlist }) => (
          <TouchableOpacity onPress={() => handleThumbnailClick(item.id)}>
            <Image source={{ uri: `${item.thumbnailUrl}` }} style={styles.thumbImage} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}
export default CategoryListView

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 25 * Theme.Ratio.H,
  },
  categoryText: {
    fontFamily: Theme.Fonts.PoppinsSemiBold,
    fontSize: 18 * Theme.Ratio.H,
    color: 'white',
  },
  thumbImage: {
    width: 280 * Theme.Ratio.H,
    height: 170 * Theme.Ratio.H,
    marginRight: 20 * Theme.Ratio.H,
  },
})
