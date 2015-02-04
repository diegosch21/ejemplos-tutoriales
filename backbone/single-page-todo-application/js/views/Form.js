app.views.form = Backbone.View.extend({
    index: false,
    events: {
        'click button': 'save'
    },
    initialize: function() {
        this.render();
    },
    template: _.template($("#tpl-form").html()),
    render: function(index) {
        var template;
        self = this;
        if(typeof index == 'undefined') {
            this.index = false;
            template = this.template({ title: ""});
        } else {
            this.index = parseInt(index);
            this.todoForEditing = this.model.at(this.index);
            template = this.template({ title: this.todoForEditing.get("title")});
        }
        this.$el.html(template);
        this.$el.find("textarea").focus();
        this.delegateEvents();
        return this;
    },
    save: function(e) {
        e.preventDefault(); //para evitar comportamiento del boton
        var title = this.$el.find("textarea").val();
        if(title == "") {
            alert("Empty textarea!"); return;
        }
        if(this.index !== false) {
            this.todoForEditing.set("title", title);  //seteado en render
            this.todoForEditing.save();  //guarda en localStorage
        } else {
            this.model.create({ title: title });    //guarda en localStorage
        }   
        this.trigger("saved");   //lanza evento que es capturado en viewsfactory   
    }
});