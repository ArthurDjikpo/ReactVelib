import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../screens/HomeScreen'

test('Home snapShot', ()=> {
    const snap = renderer.create(
        <HomeScreen />
    );
    let tree = snap.toJSON();
    expect(tree).toMatchSnapshot();
})