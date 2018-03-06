/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      todos: [1, 2, 3],
      newTodo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    fetch("http://192.168.1.78:3000/todos")
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }

  handleChange(text) {
    this.setState({
      newTodo: text
    });
  }

  handlePress() {
    fetch("http://192.168.1.78:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.newTodo
      })
    })
      .then(res => res.json())
      .then(todo => {
        console.log(todo)
        const todos = [todo, ...this.state.todos];
        this.setState({ todos, newTodo: "" });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange}
          />
          <TouchableOpacity style={styles.button} onPress={this.handlePress}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo) => {
            return (
              <View style={styles.todo} key={todo.id}>
                <Text style={styles.todoText}>{todo.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  form: {
    flexDirection: "row"
  },
  input: {
    flex: 0.7,
    fontSize: 24
  },
  button: {
    flex: 0.3,
    height: 50,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  todos: {
    marginTop: 30
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey"
  },
  todoText: {
    fontSize: 24
  }
});
