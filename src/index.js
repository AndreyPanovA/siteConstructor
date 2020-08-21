import { model } from "./module"
import { templates } from "./templates"
import "./styles/main.less"
const site = document.querySelector("#site");

model.forEach((block) => {
    // let html;
    const generate = templates[block.type]
    console.log(generate)
    if (generate) {
        const html = generate(block)
        site.insertAdjacentHTML("beforeend", html)
    }

    // if (block.type === "title") {
    //     html = title(block)
    // }
    // else if (block.type === "text") {
    //     html = textBlock(block)
    // } else if (block.type === "textColumns") {
    //     html = textColumns(block)
    // }
    // site.insertAdjacentHTML("beforeend", html)
})
