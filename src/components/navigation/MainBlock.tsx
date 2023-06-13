import React, { PropsWithChildren } from "react";
import { IApplicationLinkProp } from "../../common";
import { IconButton, Stack, StackItem, mergeStyles, useTheme } from "@fluentui/react";

export interface IMainBlockProps {
    applicationLinks?: IApplicationLinkProp[];
    selectedApplicationId?: string;
}
const iconClass = mergeStyles({
    height: 50,
    width: 50,
});
export const MainBlock: React.FunctionComponent<PropsWithChildren<IMainBlockProps>> = (props: PropsWithChildren<IMainBlockProps>) => {
    const theme = useTheme();
    return <Stack horizontal verticalFill>
        <StackItem>
            <Stack verticalFill style={{ backgroundColor: theme.palette.themeLighter, width: "50px", marginTop: "2px" }}>
                {props.applicationLinks ? props.applicationLinks.map(al =>
                    <IconButton
                        key={al.id}
                        iconProps={{ iconName: al.iconName }}
                        className={iconClass}
                        styles={{ icon: { fontSize: 30 } }}
                        onClick={() => al.onClick(al.id)}
                        checked={al.id == props.selectedApplicationId}
                    />) : null}
            </Stack>
        </StackItem>
        <StackItem>{props.children}</StackItem>
    </Stack>

}