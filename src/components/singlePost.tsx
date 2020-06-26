import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

interface MyProps {
    posts: any;
}

const SinglePostComponent = ({ posts }: any) => {
    return (
        <ScrollView>
            <View style={styles.post}>
                <Text style={styles.resultTitle}> {posts.name} </Text>
                <Text> {posts.category} </Text>
                <Image
                    source={{ uri: posts.image }}
                    style={styles.resultImage}
                />
                <Text style={styles.resultTitle} > {posts.artist} </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    post: {
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        margin: 20,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center'
    },
    resultImage: {
        width: 250,
        height: 200,
        borderRadius: 5,
        marginRight: 15,
    },
    resultTitle: {
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default SinglePostComponent;
