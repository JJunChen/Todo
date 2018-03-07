import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { TodoForm } from "./TodoForm";
import { styles } from "./styles";
import { CREATE_TODO } from "./reducers";


export default class _App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }
  
  handleChange(text) {
    this.setState({
      newTodo: text
    });
  }
  
  handlePress() {
    this.props.createTodo(this.state.newTodo);
    this.setState({newTodo: ''});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TodoForm
        value={this.state.newTodo}
        handleChange={this.handleChange}
        handlePress={this.handlePress}
        />
      <View style={styles.todos}>
      {this.props.todos.map(todo => {
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

const mapActionsToProps = dispatch => ({
  createTodo(todo) {
    dispatch({ type: CREATE_TODO, payload: todo });
  }
});

const mapStateToProps = (state) => ({
  todos: state.todos
})

export const App = connect(mapStateToProps, mapActionsToProps)(_App);
