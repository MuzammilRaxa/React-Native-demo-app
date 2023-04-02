import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './TodoItem.js';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    const renderItem = ({ item }) => (
        <TodoItem todo={item} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,

    },
    list: {
        width: '100%',
        gap: 5,
        paddingHorizontal: 15,
    },
});

export default TodoList;
