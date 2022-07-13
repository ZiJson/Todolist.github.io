
var app = new Vue({
    el: '#app',
    data: {
        todo : "",
        list : [],
        
    },
    methods: {
        add : function(todo){
            this.list.push({content:todo, done: false});
            this.todo = "";
        },
        remove : function(todo){
            this.list.splice(this.list.indexOf(todo),1)
        },
        removeall : function(){
            this.list = "";
        },
        checkall : function(){
                for(let i=0;i<this.list.length;i++){
                    this.list[i].done = true;
                }
        },
        uncheckall : function(){
            for(let i=0;i<this.list.length;i++){
                this.list[i].done = false;
            }
    },
    }

});

