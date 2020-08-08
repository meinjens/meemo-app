// #region Global Imports
import * as React from "react";
import { mount } from "enzyme";
// #endregion Global Imports

// #region Local Imports
import { TopBar } from "@Components";
// #endregion Local Imports

describe("TopBar", () => {
    it("should match snapshot", () => {
        const wrapper = mount(<TopBar />);
        expect(wrapper).toMatchSnapshot();
    });
});
