import React from "react";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import * as actionLogin from "../redux/actions/actionLogin";
import { useDispatch } from "react-redux/es/exports";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";

export default function TodoList() {
  const { logoutUser } = bindActionCreators(actionLogin, useDispatch());
  return (
    <header>
      <h1>Task List 2022</h1>
      <TodoHeader />
      <br />
      <hr />
      <br />
      <br />
      <TodoBody />
      <br/>
      <br/>
      <Button onClick = {()=>logoutUser()}>Log out</Button>
    </header>
  );
}