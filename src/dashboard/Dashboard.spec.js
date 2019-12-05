import React from "react";
import * as rtl from 'react-testing-library';
import Dashboard from './Dashboard.js';


/*

### Gate

- defaults to `unlocked` and `open`
- cannot be closed or opened if it is locked

### Dashboard

- shows the controls and display

*/

test("<Dashboard /> snapshot", () => {
    const wrapper = rtl.render(<Dashboard />)
    expect(wrapper.asFragment()).toMatchSnapshot()
})

test("defaults to unlocked and open", () => {
    const wrapper = rtl.render(<Dashboard />)

    expect(wrapper.getByText(/unlocked/i));
    expect(wrapper.getByText(/open/i))
})

