app.views.list = Backbone.View.extend({
    mode: null,
    events: {
        'click a[data-up]': 'priorityUp',
        'click a[data-down]': 'priorityDown',
        'click a[data-archive]': 'archive',
        'click input[data-status]': 'changeStatus'
    },
    initialize: function() {
        var handler = _.bind(this.render, this);    //handler: método render en donde this apunta a la vista
        this.model.on('change', handler);
        this.model.on('add', handler);
        this.model.on('remove', handler);
    },
    template: _.template($("#tpl-list-item").html()),   //compila template
    render: function() {    
        var html = '<ul class="list">', 
        self = this;
        this.model.each(function(todo, index) {
            if(self.mode === "archive" ? todo.get("archived") === true : todo.get("archived") === false) {
                html += self.template({  //evalua template compilado
                    title: todo.get("title"),
                    index: index,
                    archiveLink: self.mode === "archive" ? "unarchive" : "archive",
                    done: todo.get("done") ? "yes" : "no",
                    doneChecked: todo.get("done")  ? 'checked=="checked"' : ""
                });
            }
        });
        html += '</ul>';
        this.$el.html(html);
        this.delegateEvents();  //this is necessary, because we are detaching and attaching the view from the DOM. 
                                //Yes, we are not replacing the main element, but the events' handlers are removed. 
                                //That's why we have to tell Backbone.js to attach them again.
        return this;
    },
    priorityUp: function(e) {   //changes the ordering of the ToDos.
        var index = parseInt(e.target.parentNode.parentNode.getAttribute("data-index"));
        this.model.up(index);  
    },
    priorityDown: function(e) { //changes the ordering of the ToDos.
        var index = parseInt(e.target.parentNode.parentNode.getAttribute("data-index"));
        this.model.down(index);
    },
    archive: function(e) {  // moves the item to the archive area
        var index = parseInt(e.target.parentNode.parentNode.getAttribute("data-index"));
        this.model.archive(this.mode !== "archive", index); 
    },
    changeStatus: function(e) { //marks the ToDo as done.
        var index = parseInt(e.target.parentNode.parentNode.getAttribute("data-index"));
        this.model.changeStatus(e.target.checked, index);   
    },
    setMode: function(mode) {   //If its value is mode="archive" then only the archived ToDos will be shown.
        this.mode = mode;
        return this;
    }
});