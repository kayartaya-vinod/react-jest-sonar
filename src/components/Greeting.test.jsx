import React from 'react';
import Greeting from './Greeting';
import renderer from 'react-test-renderer';

test('Testing Greeting Component', ()=>{
    const comp = renderer.create(<Greeting message="Hello, world!"/>);
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
})