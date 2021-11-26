export function toKebabCase(text: string) {
  return text
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter;
    })
    .join("");
}

export function toCamelCase(text: string) {
  return text.replace(/-\w/g, clearAndUpper);
}

export function toPascalCase(text: string) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text: string) {
  return text.replace(/-/, "").toUpperCase();
}
