import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import Axios from 'axios';
import SinglePostComponent from '../components/singlePost';
import { BASE_URL } from '../shared/baseUrl';
import { IBlog } from '../shared/blog';
import Icon from 'react-native-vector-icons/AntDesign'

const HomeScreen = ({ navigation }: any) => {
    const [blogPosts, setBlogPosts] = useState<IBlog[]>([]);
    useEffect(() => {
        try {
            Axios.get(BASE_URL)
                .then((response) => {
                    if (response.data.length > 0) {
                        setBlogPosts(response.data)
                        console.log('blogpost = ', blogPosts);
                    }
                })
                .catch((error) => console.error(error))
        } catch (e) {
            throw (e);
        }
    }, []);
    return (
        <View>
            {/* <Button title='add' onPress={() => navigation.navigate('Test')} /> */}
            <Icon
                name='pluscircleo'
                onPress={() => navigation.navigate('Test')}
                style={styles.addIcon}
            ></Icon>
            <FlatList
                data={blogPosts}
                horizontal
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <SinglePostComponent posts={item} />
                    )
                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        borderColor: '#ccc',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    },
    addIcon: {
        fontSize: 50
    }
})
export default HomeScreen;
