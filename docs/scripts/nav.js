Vue.component('nav-todo-item', {
    props: ['todo'],
    template: '<a :href="todo.url">{{ todo.text }}</a>'
})

var navData = {
    navList: [
        { id: 0, text: 'Report typos', url: "https://github.com/alt1f923/tutor" },
        { id: 1, text: 'Home', url: "https://tutor.xn--80ahslc6a.com/"}
    ]
}

var nav = new Vue({
    el: 'body > header > nav',
    data: navData
})