import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, {memo} from 'react'

const ListItems = ({item, setTitle, setPrice}) => {
    console.log(item)
    return (
        <TouchableOpacity onPress={() => setPrice(item)}  style={{ marginLeft: 20, marginTop: 20, padding: 10, borderWidth: 1, alignSelf: 'flex-start', borderRadius: 10  }}>
            <Text onPress={ () => setTitle(item)}>{item}</Text>
        </TouchableOpacity>
    )
}

export default memo(ListItems)