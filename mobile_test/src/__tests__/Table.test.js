'use strict';
import React from 'react';
import Table from '../Table.js';
import ee from "../Emitter.js";
import { create, act } from "react-test-renderer";

var clients = [
    {
      id: "1_Vel",
      surname: "Иванов",
      name: "Иван",
      patronymic: "Иванович",
      balance: "200",
      tatus: "active",
      edit: false,
      company: "Velcom"
  }
];

var action = "";
ee.on("add_client", () => {action = "add_client"});

test("Table works correctly", () => {
    let component;

    act(() => {
        component = create(
          <Table clients = {clients}></Table>
        );
    });

    const instance = component.root; 
    const button_add_client = instance.find((node) => {return node.children[0] === "Добавить клиента"});

    act(() => {button_add_client.props.onClick()});
    expect(action).toBe("add_client");

});