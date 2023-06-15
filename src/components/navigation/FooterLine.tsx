import React from "react";
import { IActionableLinkProp } from "../../common";
import { Stack, StackItem, useTheme, Text, Link } from "@fluentui/react";

export interface IFooterLineProps {
    footerBackgroundColor?: string;
    footerTextColor?: string;
    version: string;
    applicationInformations?: IActionableLinkProp[];
}

export const FooterLine: React.FunctionComponent<IFooterLineProps> = (props: IFooterLineProps) => {
    const theme = useTheme();
    const bgColor = React.useMemo(() => props.footerBackgroundColor ? props.footerBackgroundColor : theme.palette.themeDarkAlt, [props.footerBackgroundColor]);
    const footerTextColor = React.useMemo(() => props.footerTextColor ? props.footerTextColor : theme.semanticColors.primaryButtonText, [props.footerTextColor]);
    return <Stack style={{ backgroundColor: bgColor, paddingLeft: "5px", paddingRight: "5px" }} horizontal>
        <StackItem><Text variant="tiny" style={{ color: footerTextColor }}>{props.version}</Text></StackItem>
        <StackItem grow={10}>&nbsp;</StackItem>
        <StackItem>{props.applicationInformations ?
            <Stack horizontal>
                {props.applicationInformations.map((ai, index) =>
                    <StackItem key={ai.id}>
                        {index > 0 ? <Text variant="tiny" style={{ color: footerTextColor }}>&nbsp;|&nbsp;</Text> : null}
                        <Link style={{ color: footerTextColor, fontSize: theme.fonts.tiny.fontSize }} onClick={() => ai.onClick(ai.id)}>{ai.title}</Link>
                    </StackItem>)}
            </Stack> : null}
        </StackItem>
    </Stack>
}