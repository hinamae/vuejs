var app= new Vue({
    el: '#app',
    data: {
        todos:[
        { text: 'Learn Javascript'},
        { text: 'Learn Vue'},
        { text: 'Build something awsome'}
        ]
   
    }
});

app.todos.push({ text: 'new item'});