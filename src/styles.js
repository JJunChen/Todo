import React, { Component } from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
