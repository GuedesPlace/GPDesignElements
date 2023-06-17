import { ActionButton, Link, Stack, StackItem, Text, getTheme, useTheme } from "@fluentui/react";
import React from "react";
import { IActionableLinkProp, IUserInformation, UserInformationEventType } from "../../common";
import { HeaderLinks } from "./HeaderLinks";
import { UserInformationHeaderBlock } from "./UserInformationHeaderBlock";

export interface IHeaderLineProps {
    title: string;
    backgroundColor?: string;
    lineColor?: string;
    titleColor?: string;
    linkItems?: IActionableLinkProp[];
    applicationItems?: IActionableLinkProp[];
    userInformation?:IUserInformation;
    onUserInformationEvent: (userInformationEventType:UserInformationEventType) => void;

}


export const HeaderLine: React.FunctionComponent<IHeaderLineProps> = (props: IHeaderLineProps) => {
    const theme = useTheme();
    const bgColor = React.useMemo(() => props.backgroundColor ? props.backgroundColor : theme.palette.themeDark, [props.backgroundColor]);
    const lineColor = React.useMemo(() => props.lineColor ? props.lineColor : theme.palette.themeDarker, [props.lineColor]);
    const titleColor = React.useMemo(() => props.titleColor ? props.titleColor : theme.palette.white, [props.titleColor]);
    return <Stack horizontal
        verticalAlign="center"
        style={{ gap: "20px", width:"100%"}}
        styles={{
            root: {
                backgroundColor: bgColor,
                borderBottomColor: lineColor,
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                boxShadow: "0px 2px 0px grey;",
                height: "38px",
                paddingLeft: "5px",
                paddingBottom:"2px"
            }
        }}>
        <StackItem align="end"><Text variant="xLarge" style={{color:titleColor}}>{props.title}</Text></StackItem>
        <StackItem align="end"><HeaderLinks linkItems={props.linkItems}></HeaderLinks></StackItem>
        <StackItem grow={10}>&nbsp;</StackItem>
        <StackItem align="end"><UserInformationHeaderBlock 
            onLogin={()=>props.onUserInformationEvent(UserInformationEventType.LOGIN)} 
            onLogout={()=>props.onUserInformationEvent(UserInformationEventType.LOGOUT)}
            onProfiles={()=>props.onUserInformationEvent(UserInformationEventType.PROFILE)}
            onSettings={()=>props.onUserInformationEvent(UserInformationEventType.SETTINGS)}
            userInformation={props.userInformation}
            />
        </StackItem>
    </Stack>
}