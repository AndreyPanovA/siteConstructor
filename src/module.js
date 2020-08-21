export const model = [
    {
        type: "title", value: "Test title", options: {
            styles: "text-align: center; background: darkred",
            tag: "h1"
        }
    },
    {
        type: "text", value: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, harum neque! Asperiores
        corrupti eveniet amet, eum architecto eius perferendis aliquam.`, options: {
            styles: "text-align: center; background: #333; color: gold;"
        }
    },
    {
        type: "textColumns", value: ["1 text", "2 text", "3 text", "4 text"], options: {
            styles: "padding:1rem;"
        }
    },
]