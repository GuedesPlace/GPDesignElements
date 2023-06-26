import { IconButton, mergeStyles, useTheme } from "@fluentui/react";
import React from "react";
import { mapFileListToArray } from "../../utils";

export interface IDropZone {
    onClick: () => void;
    onDropFiles: (files: File[]) => void
    noIcon?: boolean;
    iconName?: string;
    width?: number;
    height?: number;
}
const iconClass = mergeStyles({
    height: 50,
    width: 50,
});

export const DropZone: React.FunctionComponent<IDropZone> = (props: IDropZone) => {
    const theme = useTheme();
    const dropZoneRef = React.useRef<null | HTMLDivElement>(null);
    const [isDropActive, setDropActive] = React.useState(false);
    const width = React.useMemo(() => props.width ? props.width : 100, [props.width]);
    const height = React.useMemo(() => props.height ? props.height : 100, [props.height]);
    const iconName = React.useMemo(() => props.iconName ? props.iconName : "CloudUpload", [props.iconName]);
    const borderColor = React.useMemo(() => isDropActive ? theme.semanticColors.primaryButtonBackground : theme.semanticColors.buttonBorder, [isDropActive]);
    const zoneStile = React.useMemo(() =>
    ({
        borderColor: borderColor,
        borderStyle: "dashed",
        borderWidth: "2px",
        borderRadius: "15px",
        width: width + "px",
        height: height + "px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }), [width, height, borderColor]);


    const handleDragIn = React.useCallback(
        (event: any) => {
            event.preventDefault();
            event.stopPropagation();
            if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
                setDropActive(true);
            }
        },
        []
    )

    // Create handler for dragleave event:
    const handleDragOut = React.useCallback(
        (event: any) => {
            event.preventDefault();
            event.stopPropagation();
            setDropActive(false);
        },
        []
    )

    // Create handler for dragover event:
    const handleDrag = React.useCallback(
        (event: any) => {
            event.preventDefault();
            event.stopPropagation();
            if (!isDropActive) {
                setDropActive(true);
            }
        },
        [isDropActive]
    )

    // Create handler for drop event:
    const handleDrop = React.useCallback(
        (event: any) => {
            event.preventDefault()
            event.stopPropagation()

            setDropActive(false)

            if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
                const files = mapFileListToArray(event.dataTransfer.files)

                props.onDropFiles(files)
                event.dataTransfer.clearData()
            }
        },
        [props.onDropFiles]
    )

    React.useEffect(() => {
        const tempZoneRef = dropZoneRef?.current
        if (tempZoneRef) {
            tempZoneRef.addEventListener('dragenter', handleDragIn)
            tempZoneRef.addEventListener('dragleave', handleDragOut)
            tempZoneRef.addEventListener('dragover', handleDrag)
            tempZoneRef.addEventListener('drop', handleDrop)
        }

        // Remove listeners from dropzone on unmount:
        return () => {
            tempZoneRef?.removeEventListener('dragenter', handleDragIn)
            tempZoneRef?.removeEventListener('dragleave', handleDragOut)
            tempZoneRef?.removeEventListener('dragover', handleDrag)
            tempZoneRef?.removeEventListener('drop', handleDrop)
        }
    }, [])

    return <div style={zoneStile} ref={dropZoneRef}>
        {props.noIcon ? null :
            <IconButton
                iconProps={{ iconName: iconName }}
                styles={{ icon: { fontSize: 30 } }}
                className={iconClass} onClick={props.onClick} />}
    </div>
}