import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const TodoForm = ({ addTodo, setTodos }) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (!text) return;
        addTodo(text);
        setText('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Todo</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Todo..."
                    value={text}
                    onChangeText={setText}
                    style={styles.input}
                />
                <Button onPress={handleSubmit} title={'Add'} />
                <Button onPress={() => setTodos([])} title={'Delete All'} />
            </View>
        </View>
    );


};

const styles = StyleSheet.create({
    // container: {
    //     maxWidth: 300,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginVertical: 20,
    //     backgroundColor: '#d1d1d1',
    //     borderWidth: 1,
    //     borderColor: '#a1a1a1',
    //     borderRadius: 5,
    // },
    // input: {
    //     flex: 1,
    //     paddingHorizontal: 10,
    //     paddingVertical: 5,
    // },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'paleturquoise',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    inputContainer: {
        flexDirection: 'column',
        // backgroundColor: 'lightgray',
        width: '100%',
        gap: 5,
        paddingHorizontal: 10,
    },
    input: {
        borderWidth: 3,
        borderColor: 'royalblue',
        borderRadius: 7,
        padding: 10,
    },
    list: {
        marginVertical: 10,
        gap: 15,
        borderRadius: 15,
    },
    todo: {
        color: 'red',
        fontSize: 18,
        marginTop: 5,
    },
});

export default TodoForm;
