import React from 'react';
import Filter from '../Filter.js';
import renderer from 'react-test-renderer';

test("some shit happens", () => {
    const component = renderer.create(
        <Filter view = "view_all"></Filter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});