import { Stack, StackItem, Text } from "@fluentui/react";
import React from "react";
import { IActionableLinkProps } from "../../common";

export interface IHeaderLineProps {
    title:string;
    backgroundColor?:string;
    linkItems?:IActionableLinkProps[];
}

export const HeaderLine:React.FunctionComponent<IHeaderLineProps> = (props:IHeaderLineProps) => {
    const bgColor = React.useMemo(()=>props.backgroundColor? props.backgroundColor: "#06935a",[props.backgroundColor]);
    return <Stack horizontal horizontalAlign="center" styles={{root:{backgroundColor:bgColor}}}>
        <Text>{props.title}</Text>
    </Stack>
}