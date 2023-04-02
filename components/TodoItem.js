import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ deleteTodo, todo, updateTodo }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.text);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        updateTodo(todo.id, text);
        setEditing(false);
    };

    const handleCancel = () => {
        setText(todo.text);
        setEditing(false);
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    }
    return (
        <View style={styles.container}>
            {editing ? (
                <>
                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={setText}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSave}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleCancel}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <View style={styles.todo}>
                        <Text style={styles.text}>{todo.text}</Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.button} onPress={handleEdit}>
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleEdit}>
                                <Text style={styles.buttonText} onPress={handleDelete}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            )}
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        borderBottomWidth: 2,
        borderColor: 'royalblue'
    },
    text: {
        flex: 1.5,
        fontSize: 18,
        // textAlignVertical: 'bottom'
    },
    button: {
        borderWidth: 1.3,
        borderColor: 'royalblue',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
        backgroundColor: 'lightblue'
    },
    buttons: {
        flex: 1.1,
        flexDirection: 'row',
        gap: 4
    },
    buttonText: {
        fontWeight: 'bold',
    },
});

export default TodoItem;
