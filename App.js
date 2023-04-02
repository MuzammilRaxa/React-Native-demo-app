import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, text) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TodoForm addTodo={addTodo} setTodos={setTodos} />
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'paleturquoise',
  },
  content: {
    flex: 1,
    padding: 10,
  },
});

export default App;
