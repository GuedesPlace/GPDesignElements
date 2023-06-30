import React from "react";
import { IUserInformation } from "../../common";
import { DirectionalHint, IconButton, PrimaryButton, Stack, StackItem, Text, useTheme } from "@fluentui/react";
import { useConst } from '@fluentui/react-hooks';


export interface IUserInformationHeaderBlockProps {
    userInformation?: IUserInformation;
    onLogin: () => void;
    onLogout: () => void;
    onSettings: () => void;
    onProfiles: () => void;
}

export const UserInformationHeaderBlock: React.FunctionComponent<IUserInformationHeaderBlockProps> = (props: IUserInformationHeaderBlockProps) => {
    const theme = useTheme();
    const menuProps = useConst(()=>({
        shouldFocusOnMount: true,
        directionalHint: DirectionalHint.bottomRightEdge,
        directionalHintFixed: true,
        items: [
            { key: 'myPofile', text: 'Profile', iconProps: { iconName: "UserOptional"}, onClick:()=>props.onProfiles() },
            { key: 'settings', text: 'Settings', iconProps: { iconName: "Settings"}, onClick:()=>props.onSettings() },
            { key: 'logoff', text: 'Logout', iconProps: { iconName: "Leave"}, onClick:()=>props.onLogout() },
        ],
        calloutProps: {
            calloutMaxHeight: 300,
        },
    }));
    return props.userInformation ?
        <Stack horizontal>
            <Stack verticalAlign="end" horizontalAlign="end" grow>
                <StackItem align="end"><Text style={{ color: theme.semanticColors.primaryButtonText }} variant="small" nowrap block>{props.userInformation.commonName} ({props.userInformation.eMail})</Text></StackItem>
                <StackItem align="start"><Text style={{ color: theme.semanticColors.primaryButtonText }} variant="tiny" nowrap block>Org: {props.userInformation.oganisationName}</Text></StackItem>
            </Stack>
            <StackItem align="end">
                <IconButton style={{ color: theme.semanticColors.primaryButtonText }} menuProps={menuProps}></IconButton>
            </StackItem>
        </Stack> :
        <PrimaryButton onClick={props.onLogin}>Login</PrimaryButton>
}
