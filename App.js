import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState, useCallback, useMemo } from 'react'
import ListItems from './src/components/ListItems'

const App = () => {
    const [textColorGreen, setTextColorGreen] = useState(false)
    const [title, setTitle] = useState("App Title")
    const [price, setPrice] = useState(0)
    const array = [1,2,3,4,5,6,7,8,9,10]

    const memoizedCallback = useCallback((name) => {
        for(let i = 0; i < 10000000; i++){
        }
        setTitle(name)
    }, [])

    const multiplyPrice = () => {
        console.log("Function is called")
        for(let i = 0; i < 10; i++){
        }
        return (price*10).toFixed(2)
    }

    const memoizedPrice = useMemo(() => multiplyPrice(), [price])

    return (
        <SafeAreaView>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 20}}>
            <Text
                onPress={() => setTextColorGreen((prev) => !prev)}
                style={{ marginTop: 20, marginLeft: 20, fontSize: 20, color: textColorGreen ? "green" : 'black' }}
                >{title}</Text>
            <Text
                onPress={() => setTextColorGreen((prev) => !prev)}
                style={{ marginTop: 20, marginLeft: 10, fontSize: 20, color: textColorGreen ? "green" : 'black' }}
                >{memoizedPrice}</Text>
            </View>
            <FlatList 
                data={array}
                renderItem={({item}) => (
                    <ListItems 
                        item={item} 
                        setTitle={memoizedCallback}
                        setPrice={setPrice} />
                )}
            />
        </SafeAreaView>
    )
}

export default App