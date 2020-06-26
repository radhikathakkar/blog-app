import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Picker, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Axios from 'axios';
import { IBlog, initialState } from '../shared/blog';
import { BASE_URL } from '../shared/baseUrl';

const categoryList = [
    'Technology',
    'Art',
    'Fashion'
];


const AddBlogScreen = () => {
    const [formState, setFormState] = useState(initialState);
    const [image, setImage] = useState(String);
    // const [blogPosts, setBlogPosts] = useState<IBlog[]>([]);
    // const [category, setCategory] = useState(String);
    // let imgUrl;
    const setInput = (key: string, value: string) => {
        setFormState({ ...formState, [key]: value })
    }

    const addArtist = async () => {
        try {
            const blog = { ...formState };
            // console.log('blog = ', blog);
            await Axios.post(BASE_URL, blog)
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        setInput('', '');
                    }
                })
                .catch(err => console.log(err));
        } catch (e) {
            throw (e);
        }
    }

    const openImage = async () => {
        const permission = await ImagePicker.requestCameraRollPermissionsAsync();
        if (permission.granted === false) {
            return;
        }
        const picker = await ImagePicker.launchImageLibraryAsync();
        if (picker.cancelled === true) {
            return;
        }
        setInput('image', picker.uri);
        setImage(picker.uri);
    }
    return (
        <ScrollView>
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter Name'
                    onChangeText={(e) => setInput('name', e)}
                />
                <Picker
                    // selectedValue={category}
                    style={styles.textInput}
                    onValueChange={(itemValue, itemIndex) => setInput('category', itemValue)}
                >
                    {
                        categoryList.map(val =>
                            <Picker.Item label={val} value={val} />
                        )
                    }
                </Picker>
                <Image
                    source={{ uri: image }}
                    style={styles.imgUpload}
                />
                <TouchableOpacity
                    style={styles.imgUploadBtn}
                    onPress={openImage}
                >
                    <Text>Upload Image</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={7}
                    placeholder='Enter Description'
                    onChangeText={(e) => setInput('description', e)}
                />
                <Button title='Add Data' onPress={() => addArtist()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    imgUploadBtn: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    imgUpload: {
        height: 200,
        width: 200
    }
})
export default AddBlogScreen;
