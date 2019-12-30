Vue.component('footer-todo-item', {
    props: ['todo'],
    template: '<li><a :href="todo.url">{{ todo.text }}</a></li>'
})

var footerData = {
    footerList: [
        { id: 0, text: 'GitHub', url: 'https://github.com/alt1f923' },
        { id: 1, text: 'Twitter', url: 'https://twitter.com/le_epic_weasel' },
        { id: 2, text: 'Дункан#5963', url: 'https://discordapp.com/' }
    ]
}

var footer = new Vue({
    el: 'footer',
    data: footerData
})

