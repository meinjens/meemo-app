// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
import { Container } from "./styled";
// #endregion Local Imports

// #region Interface Imports
import { ITopBar } from "./TopBar";
// #endregion Interface Imports

export const TopBar: React.FunctionComponent<
    ITopBar.IProps
> = (props: ITopBar.IProps) => {

    return (
        <Container>
            TopBar Page
        </Container>
    );
};

