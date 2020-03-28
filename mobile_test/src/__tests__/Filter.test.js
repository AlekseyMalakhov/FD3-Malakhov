'use strict';
import React from 'react';
import Filter from '../Filter.js';
import ee from "../Emitter.js";
import { create, act } from "react-test-renderer";

var view = "view_all";

ee.on("view_all", () => {view = "view_all"});
ee.on("view_active", () => {view = "view_active"}); 
ee.on("view_blocked", () => {view = "view_blocked"});


test("Filter works correctly", () => {
    let component;

    act(() => {
        component = create(
          <Filter view = {view}></Filter>
        );
    });

    const instance = component.root; 

    const button_all = instance.find((node) => {return node.children[0] === "Все"});
    const button_active = instance.find((node) => {return node.children[0] === "Активные"});
    const button_blocked = instance.find((node) => {return node.children[0] === "Заблокированные"});

    act(button_active.props.onClick);
    expect(view).toBe("view_active");

    act(button_blocked.props.onClick);
    expect(view).toBe("view_blocked");

    act(button_all.props.onClick);
    expect(view).toBe("view_all");
});