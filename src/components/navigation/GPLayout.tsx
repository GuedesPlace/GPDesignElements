import { Stack, StackItem, Theme, ThemeProvider, createTheme, initializeIcons } from "@fluentui/react";
import React from "react";
import { HeaderLine } from "./HeaderLine";
import { IActionableLinkProp, IApplicationLinkProp, IUserInformation, UserInformationEventType } from "../../common";
import { MainBlock } from "./MainBlock";

export interface IGPLayoutProps {
    title: string;
    backgroundColor?: string;
    lineColor?: string;
    titleColor?: string;
    linkItems?: IActionableLinkProp[];
    applicationItems?: IApplicationLinkProp[];
    userInformation?: IUserInformation;
    theme?: Theme;
    onUserInformationEvent: (userInformationEventType: UserInformationEventType) => void;
    selectedApplicationId?: string;
}
initializeIcons();
const gpTheme = createTheme({
    palette: {
        themePrimary: '#0d8200',
        themeLighterAlt: '#f1faf0',
        themeLighter: '#c9ebc5',
        themeLight: '#9fda98',
        themeTertiary: '#53b448',
        themeSecondary: '#1e9111',
        themeDarkAlt: '#0c7500',
        themeDark: '#0a6300',
        themeDarker: '#074900',
        neutralLighterAlt: '#faf9f8',
        neutralLighter: '#f3f2f1',
        neutralLight: '#edebe9',
        neutralQuaternaryAlt: '#e1dfdd',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c6c4',
        neutralTertiary: '#a19f9d',
        neutralSecondary: '#605e5c',
        neutralSecondaryAlt: '#8a8886',
        neutralPrimaryAlt: '#3b3a39',
        neutralPrimary: '#323130',
        neutralDark: '#201f1e',
        black: '#000000',
        white: '#ffffff',
    }
});

export const GPLayout: React.FunctionComponent<IGPLayoutProps> = (props: IGPLayoutProps) => {
    return <ThemeProvider theme={props.theme ? props.theme : gpTheme}>
        <Stack styles={{ root: { height: "100%", minHeight: "100%", position: "fixed", top: 0, left: 0, width: "100%" } }} verticalAlign="space-between">
            <StackItem>
                <HeaderLine
                    title={props.title}
                    backgroundColor={props.backgroundColor}
                    lineColor={props.lineColor}
                    linkItems={props.linkItems}
                    applicationItems={props.applicationItems}
                    titleColor={props.titleColor}
                    userInformation={props.userInformation}
                    onUserInformationEvent={props.onUserInformationEvent}

                />
            </StackItem>
            <StackItem grow={10}>
                <MainBlock
                    applicationLinks={props.applicationItems}
                    selectedApplicationId={props.selectedApplicationId} />
            </StackItem>
            <StackItem>FooterLine</StackItem>
        </Stack>
    </ThemeProvider>;
}