import { Link, Stack, StackItem, Text } from "@fluentui/react";
import React from "react";
import { IActionableLinkProps } from "../../common";

export interface IHeaderLineProps {
    title: string;
    backgroundColor?: string;
    lineColor?: string;
    titleColor?: string;
    linkItems?: IActionableLinkProps[];
    applicationItems?: IActionableLinkProps[];
}

export const HeaderLine: React.FunctionComponent<IHeaderLineProps> = (props: IHeaderLineProps) => {
    const bgColor = React.useMemo(() => props.backgroundColor ? props.backgroundColor : "#06935a", [props.backgroundColor]);
    const lineColor = React.useMemo(() => props.lineColor ? props.lineColor : "#014f30", [props.lineColor]);
    const titleColor = React.useMemo(() => props.titleColor ? props.titleColor : "#101010", [props.titleColor]);
    return <Stack horizontal
        verticalAlign="center"
        style={{ gap: "5px" }}
        styles={{
            root: {
                backgroundColor: bgColor,
                borderBottomColor: lineColor,
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                boxShadow: "0px 2px 0px grey;",
                height: "32px",
                paddingLeft: "5px"
            }
        }}>
        <Text variant="xLarge" color={titleColor}>{props.title}</Text>
        {props.linkItems ? props.linkItems.map(item => <Link key={item.id} onClick={() => item.onClick(item.id)}>{item.title}</Link>) : null}
    </Stack>
}