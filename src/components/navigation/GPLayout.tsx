import { Stack, StackItem } from "@fluentui/react";
import React from "react";
import { HeaderLine } from "./HeaderLine";
import { IActionableLinkProps } from "../../common";

export interface IGPLayoutProps {
    title: string;
    backgroundColor?: string;
    lineColor?: string;
    titleColor?: string;
    linkItems?: IActionableLinkProps[];
    applicationItems?: IActionableLinkProps[];

}

export const GPLayout: React.FunctionComponent<IGPLayoutProps> = (props: IGPLayoutProps) => {

    return <Stack styles={{ root: { height: "100%", minHeight: "100%", position: "fixed", top: 0, left: 0, width: "100%" } }} verticalAlign="space-between">
        <StackItem>
            <HeaderLine
                title={props.title}
                backgroundColor={props.backgroundColor}
                lineColor={props.lineColor}
                linkItems={props.linkItems}
                applicationItems={props.applicationItems}
                titleColor={props.titleColor} 
            />
        </StackItem>
        <StackItem grow={10}>MittlePart</StackItem>
        <StackItem>FooterLine</StackItem>
    </Stack>;
}