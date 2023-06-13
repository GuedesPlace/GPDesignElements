import { ActionButton, Link, Stack, getTheme, useTheme } from "@fluentui/react";
import React from "react";
import { IActionableLinkProps } from "../../common";

export interface IHeaderLinksProps {
    linkItems?: IActionableLinkProps[];
}

export const HeaderLinks: React.FunctionComponent<IHeaderLinksProps> = (props: IHeaderLinksProps) => {
    const theme = useTheme();
    return props.linkItems ? <Stack horizontal verticalAlign="center" tokens={{ childrenGap: "5px" }}>{props.linkItems.map(item => <Link style={{ color: theme.semanticColors.primaryButtonText }} key={item.id} onClick={() => item.onClick(item.id)}>{item.title}</Link>)}</Stack> : null;
}