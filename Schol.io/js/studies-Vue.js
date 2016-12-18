/**
 * Created by kfrei on 17/12/16.
 */

Vue.component('task-list', {

    template: '<ul><task v-for="task in tasks">{{task.task}}</task></ul>',

    data(){
        return {
            tasks: [
                { task: "Go to the store", completed: true },
                { task: "Finish the screencast", completed: true },
                { task: "Make donation", completed: false },
                { task: "Clear inbox", completed: false },
                { task: "Make dinner", completed: false },
                { task: "Clean room", completed: false }
            ]
        }
    }

});


Vue.component('task', {
    template: '<li><slot></slot></li>'
});


Vue.component('message',{
    props:['title', 'body'],
    template:'<article class="message"><div class="message-header">{{title}} </div><div class="message-body">{{body}}</div></article>',


});



new Vue ({
    el: '#vue-elem'
});