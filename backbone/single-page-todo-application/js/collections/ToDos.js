app.collections.ToDos = Backbone.Collection.extend({
    initialize: function(){
        this.fetch();
        if(this.length==0) {
            this.add({ title: "Learn JavaScript basics" }).save();
            this.add({ title: "Go to backbonejs.org" }).save();
            this.add({ title: "Develop a Backbone application" }).save();
        }
    },
    model: app.models.ToDo,
    localStorage: new Backbone.LocalStorage("singlepage-todo-backbone"),
    up: function(index) {   //change the order of the ToDos
        if(index > 0) {
            var tmp = this.models[index-1];
            this.models[index-1] = this.models[index];
            this.models[index] = tmp;
            this.trigger("change");
        }
    },
    down: function(index) { //change the order of the ToDos
        if(index < this.models.length-1) {
            var tmp = this.models[index+1];
            this.models[index+1] = this.models[index];
            this.models[index] = tmp;
            this.trigger("change");
        }
    },
    archive: function(archived, index) {
        this.models[index].set("archived", archived).save();    //actualiza en storage
    },
    changeStatus: function(done, index) {
        this.models[index].set("done", done).save();    //actualiza en storage
    }
});