import { row, col } from "./utils"
function title({ value, options: { tag, styles } }) {
    return row(col(`<${tag}>${value}</${tag}>`), styles)
}
function text({ value, options: { tag, styles } }) {
    return row(col(`<p>${value}</p>`), styles)
}
function textColumns({ value, options: { tag, styles } }) {
    const html = value.map((item) => col(item))
    return row(`${html.join("")}`, styles)
}
export const templates = { title, text, textColumns }