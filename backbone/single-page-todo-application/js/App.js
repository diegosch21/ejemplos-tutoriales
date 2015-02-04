/*  NAMESPACING
    typical implementation of the revealing module pattern. 
    The api variable is the object which is returned and represents the public methods of the class. 
    The views, models and collections properties will act as holders for the classes returned by Backbone.js. 
    The content is a jQuery element pointing to the main user's interface container. 
    There are two helper methods here. The first one updates that container. The second one sets the page's title. 
    Then we defined a module called ViewsFactory. It will deliver our views and at the end, we created the router.
*/
var app = (function() {
 
    var api = {
        views: {},
        models: {},
        collections: {},
        content: null,
        router: null,
        todos: null,
        init: function() {
            this.content = $("#content");
            this.todos = new api.collections.ToDos();
            ViewsFactory.menu();    //crea vista menú
            Backbone.history.start();
            return this;
        },
        changeContent: function(el) {
            this.content.empty().append(el);
            return this;
        },
        title: function(str) {
            $("h1").text(str);
            return this;
        }
    };
    
    var ViewsFactory = {
        menu: function() {
            if(!this.menuView) {
                this.menuView = new api.views.menu({ 
                    el: $("#menu")
                });
            }
            return this.menuView;
        },
        list: function() {
            if(!this.listView) {
                this.listView = new api.views.list({
                    model: api.todos
                });
            }   
            return this.listView;
        },
        form: function() {
            if(!this.formView) {
                this.formView = new api.views.form({
                    model: api.todos
                }).on("saved", function() {         //crea vista y le registra evento "saved" (cuando el form es submited), para pasar al list cuando se guarde
                    api.router.navigate("", {trigger: true});
                })
            }
            return this.formView;
        }

    };

    var Router = Backbone.Router.extend({
        routes: {
            "archive": "archive",
            "new": "newToDo",
            "edit/:index": "editToDo",
            "delete/:index": "deleteToDo",
            "": "list"
        },
        list: function(archive) {           //metodo generico para listar los Todos (archivados o no)
            var view = ViewsFactory.list();
            api.title(archive ? "Archive:" : "Your ToDos:").changeContent(view.$el);    //si no se pasa parámetro se muestran los no archivados 
            view.setMode(archive ? "archive" : null).render();
        },
        archive: function() {
            this.list(true);            //se llama al método list para listar los archivados
        },
        newToDo: function() {
            var view = ViewsFactory.form();
            api.title("Create new ToDo:").changeContent(view.$el);
            view.render();              //se llama a render de la vista form para crear nuevo todo
        },
        editToDo: function(index) {
            var view = ViewsFactory.form();
            api.title("Edit:").changeContent(view.$el);
            view.render(index);         //se llama a render de la vista form para editar todo con ese index
        },
        deleteToDo: function(index) {
            var model = api.todos.at(parseInt(index));
            model.destroy();       //se quita el model del storage
            api.todos.remove(model);
            api.router.navigate("", {trigger: true});
        }
    });
    
    api.router = new Router();
 
    return api;
 
})();

