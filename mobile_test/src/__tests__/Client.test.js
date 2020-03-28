'use strict';
import React from 'react';
import Client from '../Client.js';
import ee from "../Emitter.js";
import { create, act } from "react-test-renderer";

var client = {
        id: "1_Vel",
        surname: "Иванов",
        name: "Иван",
        patronymic: "Иванович",
        balance: "200",
        tatus: "active",
        edit: false,
        company: "Velcom"
};

var edit = false;
var action = "";

ee.on("edit", (client, bool) => {edit = bool});
ee.on("delete", () => {action = "delete"});
ee.on("save", () => {action = "save"});


test("Client works correctly", () => {
    let component;

    act(() => {
        component = create(
          <Client {...client}></Client>
        );
    });

    var instance = component.root; 

    const button_edit = instance.find((node) => {return node.children[0] === "Редактировать"});
    const button_del = instance.find((node) => {return node.children[0] === "Удалить"});    

    act(() => {button_edit.props.onClick()});
    expect(edit).toBe(true);

    act(() => {button_del.props.onClick()});
    expect(action).toBe("delete");

    client.edit = true;

    act(() => {
        component = create(
          <Client {...client}></Client>
        );
    });

    instance = component.root; 

    const button_save = instance.find((node) => {return node.children[0] === "Сохранить"});
    const button_cancel = instance.find((node) => {return node.children[0] === "Отмена"});

    act(() => {button_save.props.onClick()});
    expect(action).toBe("save");

    act(() => {button_cancel.props.onClick()});
    expect(edit).toBe(false);


});