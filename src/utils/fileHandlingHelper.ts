export const mapFileListToArray = (files: FileList) => {
    const array: File[] = [];
    for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        if (file && file != null) {
            array.push(file);
        }
    }
    return array
}