import { Stack, StackItem } from "@fluentui/react";
import React from "react";
import { HeaderLine } from "./HeaderLine";

export interface IGPLayoutProps {
    title:string;
}

export const GPLayout:React.FunctionComponent<IGPLayoutProps> = (props:IGPLayoutProps) =>{

    return <Stack styles={{root:{height:"100%",minHeight:"100%", position:"fixed", top:0,left:0, width:"100%"}}} verticalAlign="space-between">
        <StackItem>
           <HeaderLine title={props.title}></HeaderLine>
        </StackItem>
        <StackItem grow={10}>MittlePart</StackItem>
        <StackItem>FooterLine</StackItem>
    </Stack>;
}