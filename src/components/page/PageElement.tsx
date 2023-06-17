import { INavLink, INavLinkGroup, INavStyles, Nav, Stack, StackItem, Text } from "@fluentui/react";
import React, { PropsWithChildren } from "react";

export interface IPageProps {
    title:string;
    navigationItems?:INavLinkGroup[];
    navigationStyles?:Partial<INavStyles>;
    onNavigationItemClick?:(ev?: React.MouseEvent<HTMLElement>, item?: INavLink)=>void
}

export const Page:React.FunctionComponent<PropsWithChildren<IPageProps>> = (props:PropsWithChildren<IPageProps>) => {
    return <Stack style={{margin:"15px"}} horizontal>
        {props.navigationItems ? 
            <StackItem><Nav 
                groups={props.navigationItems} 
                styles={props.navigationStyles} 
                onLinkClick={props.onNavigationItemClick}/>
            </StackItem>
            :null}
        <StackItem grow={10}>
            <Stack tokens={{childrenGap:"5px"}}>
                <StackItem><Text variant="xLarge">{props.title}</Text></StackItem>
                <StackItem><hr></hr></StackItem>
                <StackItem>{props.children}</StackItem>
            </Stack>
        </StackItem>
    </Stack>
}