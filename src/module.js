const text = `
Крутые видео и уроки по JavaScript тут. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
`


export const model = [
    {
        type: "title", value: 'Конструктор сайтов на чистом JavaScript!', options: {
            styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;',
            tag: "h1"
        }
    },
    {
        type: "textColumns", value: ['Приложение на чистом JavaScript, без использования библиотек',
            'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
            'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'], options: {
                styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
            }
    },
    {
        type: "text", value: [text], options: {
            styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
        }
    },
]