import { Callout, DefaultButton, FontWeights, IconButton, Text, mergeStyleSets, useTheme } from "@fluentui/react";
import { useBoolean, useId } from '@fluentui/react-hooks';
import React from "react";

export interface IErrorIndicatorProps {
    size?: number;
    iconName?: string;
    errorTitle: string;
    errorText: string;
}
export const ErrorIndicator: React.FunctionComponent<IErrorIndicatorProps> = (props: IErrorIndicatorProps) => {
    const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
    const buttonId = useId('callout-button');
    const labelId = useId('callout-label');
    const size = React.useMemo(() => props.size ? props.size : 12, [props.size]);
    const iconName = React.useMemo(() => props.iconName ? props.iconName : "StatusErrorFull", [props.iconName]);

    const theme = useTheme();
    const styles = mergeStyleSets({
        callout: {
            width: 320,
            padding: '20px 24px',
            background: theme.semanticColors.bodyBackground,
        },
        title: {
            marginBottom: 12,
            fontWeight: FontWeights.semilight,
        },
        actions: {
            marginTop: 20,
        },
        icon: {
            width: size,
            heigth: size
        }
    });


    return (
        <>
            <IconButton
                id={buttonId}
                onClick={toggleIsCalloutVisible}
                onMouseOver={toggleIsCalloutVisible}
                iconProps={{ iconName: iconName }}
                styles={{ icon: { fontSize: size } }}
                className={styles.icon}
            />
            {isCalloutVisible && (
                <Callout
                    coverTarget
                    ariaLabelledBy={labelId}
                    role="dialog"
                    className={styles.callout}
                    onDismiss={toggleIsCalloutVisible}
                    target={`#${buttonId}`}
                    isBeakVisible={false}
                    setInitialFocus
                >
                    <Text block variant="xLarge" className={styles.title} id={labelId}>
                        {props.errorTitle}
                    </Text>
                    <Text block variant="medium">{props.errorText}</Text>
                    <div className={styles.actions}>
                        <DefaultButton onClick={toggleIsCalloutVisible} text="Click to dismiss" />
                    </div>
                </Callout>
            )}
        </>
    );
};


