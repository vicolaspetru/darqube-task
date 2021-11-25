export function toKebabCase(text) {
    return text
        .split("")
        .map((letter, idx) => {
            return letter.toUpperCase() === letter
                ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
                : letter;
        })
        .join("");
}

export function toCamelCase(text) {
    return text.replace(/-\w/g, clearAndUpper);
}

export function toPascalCase(text) {
    return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text) {
    return text.replace(/-/, "").toUpperCase();
}
