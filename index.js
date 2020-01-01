Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app= new Vue({
    el: '#app',
    data: {
        groceryList: [
            { id: 0, text: 'vegetables'},
            { id: 1, text: 'cheese'},
            { id: 2, text: 'whatever else humans are supposed to eat'}
        ]
    }
})