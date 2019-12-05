import React from 'react';
import * as rtl from 'react-testing-library';
import Controls from './Controls.js';
import Dashboard from '../dashboard/Dashboard';
import 'jest-dom/extend-expect';

/*

### Controls Component

- provide buttons to toggle the `closed` and `locked` states.
- buttons' text changes to reflect the state the door will be in if clicked
- the closed toggle button is disabled if the gate is locked
- the locked toggle button is disabled if the gate is open

*/

test("If clicked close gate changes open to closed", () => {
    const wrapper = rtl.render(<Dashboard />)

    const closeButton = wrapper.getByText("Close Gate");

    rtl.act(() => {
        rtl.fireEvent.click(closeButton);
    });

    expect(wrapper.getByText(/closed/i));
})

test("If clicked close gate changes open to closed", () => {
    const wrapper = rtl.render(<Dashboard />)

    const lockButton = wrapper.getByText("Lock Gate");

    rtl.act(() => {
        rtl.fireEvent.click(lockButton);
    });

    expect(wrapper.getByText("Locked"));
    expect(wrapper.getByText("Closed"));
})

test("closed toggle button is disabled if the gate is locked", () => {
    const wrapper = rtl.render(<Controls locked={true} />)

    expect(wrapper.getByText("Open Gate")).toBeDisabled();
})

test("locked toggle button is disabled if the gate is open", () => {
    const wrapper = rtl.render(<Controls closed={false} />)

    expect(wrapper.getByText("Lock Gate")).toBeDisabled();
})
