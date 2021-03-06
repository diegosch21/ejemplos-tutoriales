# AngularJS #

**Framework MVW Javascript** *HTML enhanced for web apps!*

- [Sitio oficial](https://angularjs.org/)
- [Guía](https://docs.angularjs.org/guide)
- [API](http://docs.angularjs.org/api)
- [Aplicaciones hechas con Angular](https://builtwith.angularjs.org/)
- [Angular v2.0 (alpha)](https://angular.io/)

>  - Superheroic JavaScript MVW Framework
>  - A complete client-side solution
>  - Angular es lo que HTML hubiera sido, si hubiera sido diseñado para construir aplicaciones web
> 	- Declarative templates with data-binding, MVW, MVVM, MVC, dependency injection and great testability story all implemented with pure client-side JavaScript!
>  - Código sin manipulación de DOM (gracias al data-binding, directivas, etc), fácil de testear y aislar los controllers. Código más sencillo

## TABLE OF CONTENTS ##
- [Definiciones,conceptos](#definiciones-conceptos)
- [Conceptual overview - componentes - estructura](#conceptual-overview-componentes-estructura)
- [Links útiles, características, info](#links-%C3%BAtiles-caracter%C3%ADsticas-info)
- [Seeds, boilerplates](#seeds-boilerplates)
- [Flujo de ejecución](#flujo-de-ejecucion)
- [Críticas, contras de angular](#cr%C3%8Dticas-contras-de-angular)
- [Tips & tricks](#tips--tricks)
- [Elementos, funciones, funcionamiento](#elementos-funciones-funcionamiento)
- [Debugging](#debugging)
- [Testing](#testing)

#### VER  Investigacion/AngularJS/
- ***Advanced tips & tricks using AngularJS.pdf***
- *AngularJS Basics with Example.pdf*
- ***The Art of AngularJS.pdf***
- *Single Page Application (SPA) using AngularJS.ppt*
- *Introduction to AngularJS.ppt*

###Instalación - uso:
- CDN: `https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.js`
- Bower: `bower install angular#1.3.11`
- npm: `npm install angular@1.3.11`
- Extras - Modulos:	`https://code.angularjs.org/1.3.11/`

###EJEMPLOS Y TUTORIALES
- [AngularJS - ejemplos-tutoriales.md](/AngularJS-ejemplos-tutoriales.md)
- Fundamentales:
	-  [ejemplos/angular/angular-phonecat](https://code.angularjs.org/1.3.11/docs/tutorial)
	-  [ejemplos/angular/movieStub](http://thejackalofjavascript.com/angularjs-hands-on-tutorial/)
	- **[Reference application for AngularJS](https://github.com/angular-app/angular-app/)**	<=== VER gruntfile, folder structure, modules, seguridad, CRUD


************************************************************************
##  DEFINICIONES, CONCEPTOS ##


###[Del sitio oficial](https://angularjs.org/)

#####Why AngularJS?
  HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications.
  AngularJS lets you extend HTML vocabulary for your application.
  The resulting environment is extraordinarily expressive, readable, and quick to develop.

#####Alternatives
  Other frameworks deal with HTML’s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM.
  Neither of these address the root problem that HTML was not designed for dynamic views.

#####Extensibility
  AngularJS is a toolset for building the framework most suited to your application development.
  It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs.

#### Add some control ####

* [Data Binding](https://docs.angularjs.org/guide/databinding)

    Data-binding is an automatic way of updating the view whenever the model changes, as well as updating the model whenever the view changes.
    This is awesome because it eliminates DOM manipulation from the list of things you have to worry about
    > "El data binding es una solución elegante para una de las tareas más complejas de construir cualquier aplicación web rica: mantener varios valores sincronizados entre el modelo y el DOM"

* **Controller**

    Controllers are the behavior behind the DOM elements.
    AngularJS lets you express the behavior in a clean readable form without the usual boilerplate of updating the DOM, registering callbacks or watching model changes

* **Plain JavaScript**

    Unlike other frameworks, there is no need to inherit from proprietary types in order to wrap the model in accessors methods.
    Angular models are plain old JavaScript objects. This makes your code easy to test, maintain, reuse, and again free from boilerplate.

#### Wire up a Backend ####

* **Deep Linking**

    A deep link reflects where the user is in the app, this is useful so users can bookmark and email links to locations within apps.
    Round trip apps get this automatically, but AJAX apps by their nature do not. AngularJS combines the benefits of deep link with desktop app-like behavior.

* **Form Validation**

    Client-side form validation is an important part of great user experience. AngularJS lets you declare the validation rules of the form without having to write JavaScript code. Write less code, go have beer sooner.

* **Server Communication**

    AngularJS provides built-in services on top of XHR as well as various other backends using third party libraries. Promises further simplify your code by handling asynchronous return of data.


#### Create Components ####

* **Directives**

    Directives is a unique and powerful feature available only in Angular.
    Directives let you invent new HTML syntax, specific to your application.

* **Reusable Components**

    We use directives to create reusable components. A component allows you to hide complex DOM structure, CSS, and behavior. This lets you focus either on what the application does or how the application looks separately.

* **Localization**

    An important part of serious apps is localization. Angular's locale aware filters and stemming directives give you building blocks to make your application available in all locales.

#### Embed and Inject ####
* **Embeddable**

    AngularJS works great with other technologies. Add as much or as little of AngularJS to an existing page as you like. Many other frameworks require full commitment.
    Because AngularJS has no global state multiple apps can run on a single page without the use of iframes.

* **Injectable**

    The dependency injection in AngularJS allows you to declaratively describe how your application is wired. This means that your application needs no main() method which is usually an unmaintainable mess.
    Dependency injection is also a core to AngularJS. This means that any component which does not fit your needs can easily be replaced.

* **Testable**

    AngularJS was designed from ground up to be testable. It encourages behavior-view separation, comes pre-bundled with mocks, and takes full advantage of dependency injection.
    It also comes with end-to-end scenario runner which eliminates test flakiness by understanding the inner workings of AngularJS.

### [Del repo...](https://github.com/angular/angular.js) ###

  > "AngularJS lets you write client-side web applications as if you had a smarter browser.
  > It lets you use good old HTML (or HAML, Jade and friends!) as your template language and lets you extend HTML’s syntax to express your application’s components clearly and succinctly.
  > It automatically synchronizes data from your UI (view) with your JavaScript objects (model) through 2-way data binding.
  > To help you structure your application better and make it easy to test, AngularJS teaches the browser how to do dependency injection and inversion of control.
  >
  > Oh yeah and it helps with server-side communication, taming async callbacks with promises and deferreds.
  > It also makes client-side navigation and deeplinking with hashbang urls or HTML5 pushState a piece of cake.
  > The best of all: it makes development fun!"

### [De wikipedia...](http://en.wikipedia.org/wiki/AngularJS) ###

  > "AngularJS, commonly referred to as Angular, is an open-source web application framework maintained by Google and a community of individual developers and corporations to address many of the challenges encountered in developing single-page applications.
  > Its goal is to simplify both development and testing of such applications by providing a framework for client-side model–view–controller (MVC) architecture, along with components commonly used in rich internet applications.
  >
  > The library works by first reading the HTML page, which has embedded into it additional custom tag attributes.
  > Those attributes are interpreted as directives telling Angular to bind input or output parts of the page to a model that is represented by standard JavaScript variables.
  > The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources.	"

  >* **Two-way data binding**
  >
  >     AngularJS' two-way data binding is its most notable feature, and it reduces the amount of code written by relieving the server backend of templating responsibilities.
  >     Instead, templates are rendered in plain HTML according to data contained in a scope defined in the model.
  >     The $scope service in Angular detects changes to the model section and modifies HTML expressions in the view via a controller.
  >     Likewise, any alterations to the view are reflected in the model. This circumvents the need to actively manipulate the DOM and encourages bootstrapping and rapid prototyping of web applications.
  >     AngularJS detects changes in models by comparing the current values with values stored earlier in a process of dirty-checking, unlike Ember.js and Backbone.js which trigger listeners when the model values are changed.
  >
  >* **Comparisons to Backbone.js**
  >
  >     - **Data-binding**
  >     The most prominent feature that separates the two libraries is in the way models and views are synchronized.
  >     Whereas AngularJS supports two way data-binding, Backbone.js relies heavily on boilerplate code to harmonize its models and views.
  >     - **REST**
  >     Backbone.js communicates well with RESTful backends. A very simple use of REST APIs is also available with AngularJS using the $resource service.
  >     AngularJS also provides a $http service which is more flexible, connecting to remote servers either through a browser's XMLHttpRequest object or via JSONP.
  >     - **Templating**
  >     AngularJS templating uses a combination of customizable HTML tags and expressions. Backbone.js ships with underscore.js's utility function template() and also integrates with different templating engines such as Mustache.

### DE LA GUÍA OFICIAL ###
#### [¿Qué es Angular?](https://docs.angularjs.org/guide/introduction) ####
  **AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.**

  Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write.
  And it all happens within the browser, making it an ideal partner with any server technology.

  Angular attempts to minimize the impedance mismatch between document centric HTML and what an application needs by creating new HTML constructs. Angular teaches the browser new syntax through a construct we call directives.

#### A complete client-side solution ####
  Angular is not a single piece in the overall puzzle of building the client-side of a web application. It handles all of the DOM and AJAX glue code you once wrote by hand and puts it in a well-defined structure.

  This makes Angular opinionated about how a CRUD application should be built. But while it is opinionated, it also tries to make sure that its opinion is just a starting point you can easily change.

  Angular comes with the following out-of-the-box:

  - Everything you need to build a CRUD app in a cohesive set: data-binding, basic templating directives, form validation, routing, deep-linking, reusable components, dependency injection.
  - Testability story: unit-testing, end-to-end testing, mocks, test harnesses.
  - Seed application with directory layout and test scripts as a starting point.

### Para qué tipo de aplicaciones no es conveniente Angular: ###
  Angular fue construido pensando en aplicaciones CRUD (que representan la mayoría de las web app).
  Angular simplifies application development by presenting a higher level of abstraction to the developer. Like any abstraction, it comes at a cost of flexibility.

  Games and GUI editors are examples of applications with intensive and tricky DOM manipulation. These kinds of apps are different from CRUD apps, and as a result are probably not a good fit for Angular.
  In these cases it may be better to use a library with a lower level of abstraction, such as jQuery.

  > Angular simplifica el desarrollo de aplicaciones proporcionando un alto nivel de abstracción al desarrollador. Como cualquier abstracción, tiene un coste en cuanto a flexibilidad.
  > En otras palabras no todas las aplicaciones encajan bien con Angular. Angular se creó con las aplicaciones CRUD en mente. Afortunadamente, las aplicaciones CRUD representan la gran mayoría.
  >
  >   Pero para entender para qué es bueno Angular, también hay que entender cuando una aplicación no encaja bien con Angular.
  >   Los juegos y los editores de GUI (Interfaz gráfica de Usuario) son ejemplos de aplicaciones con un uso intensivo, o incluso arriesgado, de manipulación del DOM.
  >   Estos tipos de aplicaciones son diferentes a las aplicaciones CRUD, y como resultado probablemente Angular no sea la mejor opción. En esos casos puede ser mejor utilizar una librería de más bajo nivel de abstracción como jQuery"

### [Las ideas de Angular](https://docs.angularjs.org/guide/introduction#the-zen-of-angular) ###
  - declarative code is better than imperative when it comes to building UIs and wiring software components together, while imperative code is excellent for expressing business logic
  - decouple DOM manipulation from app logic (ayuda para testing)
  - regard app testing as equal in importance to app writing. Testing difficulty is dramatically affected by the way the code is structured.
  - decouple the client side of an app from the server side. This allows development work to progress in parallel, and allows for reuse of both sides
  - very helpful indeed if the framework guides developers through the entire journey of building an app: from designing the UI, through writing the business logic, to testing.
  - make common tasks trivial and difficult tasks possible.
  - Angular libera al desarrollador de las siguientes tareas engorrosas:
  	* Registering callbacks:
  		Removing common boilerplate code such as callbacks is a good thing. It vastly reduces the amount of JavaScript coding you have to do, and it makes it easier to see what your application does.
  	* Manipulating HTML DOM programmatically:
  		By declaratively describing how the UI should change as your application state changes, you are freed from low-level DOM manipulation tasks. Most applications written with Angular never have to programmatically manipulate the DOM, although you can if you want to.
  	* Marshaling data to and from the UI:
  		The flow of marshaling data from the server to an internal object to an HTML form, allowing users to modify the form, validating the form, displaying validation errors, returning to an internal model, and then back to the server, creates a lot of boilerplate code.
  		Angular eliminates almost all of this boilerplate, leaving code that describes the overall flow of the application rather than all of the implementation details.
  	* Writing tons of initialization code just to get started:
  		With Angular you can bootstrap your app easily using services, which are auto-injected into your application in a Guice-like dependency-injection style

### [En castellano](https://github.com/jacarma/ngpro/wiki/Tutorial-de-Angular.js) ###

#### Filosofía de Angular ####

* **HTML mejorado**

    HTML funciona bien cuando se utiliza para describir documentos estáticos, pero se queda corto cuando se utiliza para describir una aplicación web rica, simplemente no se ha diseñado para soportar eso.
    La mayoría de los frameworks de JavaScript abordan esta limitación o bien abstrayendo el código HTML o bien exigen una gran dosis de manipulación artesanal del DOM con código JavaScript.
    AngularJS tiene un enfoque diferente. En vez de ocultar HTML, abraza sus puntos fuertes y los extiende para que sean adecuados para la descripción de las vistas dinámicas.
    El resultado es un flujo de trabajo que debe resultar familiar para cualquier desarrollador web con un estilo de programación JavaScript que es sorprendentemente breve, claro y enfocado.

* **Simple pero escalable**

    Otra característica distintiva de AngularJS es que es muy accesible para los recién llegados, sin embargo, ofrece características poderosas y sofisticadas para los desarrolladores con necesidades más complejas.
    Otros frameworks bien se centran en la simplicidad sin ofrecer mucha ayuda en la creación de aplicaciones complejas u ofrecen características avanzadas, pero requieren mucho código repetitivo incluso para las aplicaciones más simples.

### De [http://tutorials.jenkov.com/angularjs/index.html](http://tutorials.jenkov.com/angularjs/index.html) ###

#### MVC: Paradigma declarativo ####
  *(HTML: views) / paradigma imperativo (javascript: models & controllers)*

  The views are specified using HTML + AngularJS's own template language. The models and controllers are specified via JavaScript objects and JavaScript functions.
  Thus, the views are specified declaratively, as HTML normally is, and the models and controllers are specified imperatively, as JavaScript normally is.

************************************************************************
## CONCEPTUAL OVERVIEW, COMPONENTES, ESTRUCTURA ##

* [Guía: Conceptual Overview](https://docs.angularjs.org/guide/concepts)
* *VER Investigacion/AngularJS/Concepts-estructura.png*
* [Parte de workshop MEAN](http://mean-workshop.herokuapp.com/resources/day4/presentation/#/)
* [Tutorial y conceptos castellano](https://github.com/jacarma/ngpro/wiki/Tutorial-de-Angular.js)
* [Links conceptos generales](https://github.com/jmcunningham/AngularJS-Learning/blob/master/ES-ES.md)

### [TEMPLATES](https://docs.angularjs.org/guide/templates) ###
  HTML with additional markup (Angular-specific elements and attributes).
  Angular combines the template with information from the model and controller to render the dynamic view that a user sees in the browser.

**Kinds of new markup...**

### [DIRECTIVES](https://docs.angularjs.org/guide/directive) ###
  - https://github.com/angular/angular.js/wiki/Understanding-Directives
  -  *Extend HTML with custom attributes and elements*
  -  **At a high level, directives are markers on a DOM element (such as an attribute, element name, or CSS class)**
  -  that tell AngularJS’s HTML compiler ($compile) to attach a specified behavior to that DOM element or even transform the DOM element and its children.
  - Ejemplos: ng-app, ng-model, ng-controller, ng-repeat, ...
  - Agregan: Comportamiento, Data binding scope, reemplazan o extienden el elemento HTML
  - Execution flow:
  	1. Detect the directive (por ej ng-model)
  	2. Call the $compile method on the directive
  	3. Bind directive with $scope
  	4. Render the generated DOM
  - **Custom directives to access the DOM**: In Angular, the only place where an application should access the DOM is within directives.
    If you need to access the DOM directly you should write a custom directive for this

  - Propiedades de las directivas
    + restrict: usage, Attribute/Element,etc.
      This goes back to usage, how do we restrict the element's usage? If you're using a project that needs legacy IE support, you'll probably need attribute/class declarations.
      Restricting as 'A' means you restrict it as an Attribute. 'E' for Element, 'C' for Class and 'M' for Comment. These have a default as 'EA'. Yes, you can restrict to multiple use cases.
    + replace: replaces declarative node.
      This replaces the markup in the DOM that defines the directive, used in the example, you'll notice how initial DOM is replaced with the Directive's template.
    + transclude: inject existing DOM (text) inside
      Put simply, using transclude allows for existing DOM content to be copied into the directive. You'll see the words 'Click me' have 'moved' into the Directive once rendered.
    + template: A template (as above) allows you to declare markup to be injected. It's a good idea to use this for tiny pieces of HTML only.
      Injected templates are all compiled through Angular, which means you can declare the handlebar template tags in them too for binding.
    + templateUrl: Similar to a template, but kept in it's own file or `<script>` tag.
      You can do this to specify a template URL, which you'll want to use for manageable chunks of HTML that require being kept in their own file, just specify the path and filename, preferably kept inside their own templates directory.
    + link: Events, custom manipulation

### {{ expression | filter }}    (interpolation directive) ###
Angular uses HTML markups as templates. Dynamic values are represented with `{{ variable }}`.
When the compiler encounters this markup, it will replace it with the evaluated value of the markup
#### [EXPRESSIONS](https://docs.angularjs.org/guide/expression) ####
  - access variables and functions from the scope
#### [FILTER](https://docs.angularjs.org/guide/filter) ####
  - formats the value of an expression for display to the user
  - https://docs.angularjs.org/api/ng/filter/filter
  - Filters will take the raw data from model and performs action on it like converting the data to uppercase or lowercase or actually “filter” the data
  - Se puede usar para filtrar y ordenar un arreglo. Ejemplo de uso en una directiva:
	   `<li ng-repeat="phone in phones | filter:query | orderBy:orderProp">`

#### [FORMS](https://docs.angularjs.org/guide/forms) ####
  - Controls (input, select, textarea) are ways for a user to enter data. A Form is a collection of controls for the purpose of grouping related controls together.
  - El form es una directiva!
  - Each form directive creates an instance of FormController: https://docs.angularjs.org/api/ng/type/form.FormController
  - VER más abajo > FORMS  para su funcionamiento (validacion)


### [COMPILER](https://docs.angularjs.org/guide/compiler) ###
  - parses the template and instantiates directives and expressions

### VIEW ###
  - what the user sees (the rendered DOM)
  - is a projection of the model through the HTML template
  - "Las vistas juegan dos papeles importantes. En primer lugar, son responsables de la presentación de los datos de los modelos al usuario de forma útil y visual.
  - En segundo lugar, intercepta las interacciones típicas con el usuario incluyendo clics, selecciones en listas desplegables, etc. y las traducen en acciones específicas de la aplicación.
  - Las vistas en AngularJS se definen de forma declarativa utilizando HTML y CSS."

### MODEL ###
  - the data shown to the user in the view and with which the user interacts
  - values that are stored in variables on the scope
  - "Los modelos son objetos JavaScript que representan los datos a los que la aplicación puede acceder. Los modelos se utilizan para representar el estado actual de la aplicación."

### [SCOPE](https://docs.angularjs.org/guide/scope) ###
  -	**https://github.com/angular/angular.js/wiki/Understanding-Scopes**
  - context where the model is stored so that controllers, directives and expressions can access it
  - scope is an object that refers to the application model. It is an execution context for expressions
  - exposes model to templates -> In HTML, values inside {{ variable }} get resolved at runtime from $scope
  - A scope can be seen as the glue which allows the template, model and controller to work together.
  - Angular uses scopes, along with the information contained in the template, data model, and controller, to keep models and views separate, but in sync

    > $scope es un objeto especial que se pasa al controller por el propio framework AngularJS. Su función es servir como un puente entre el controlador y la vista, por lo tanto es uno de los tipos más importantes de objetos que utilizaremos en AngularJS.
    > Las propiedades que se agregan al $scope serán accesibles directamente por la vista, por lo que, naturalmente, es el lugar perfecto para almacenar referencias a los objetos del modelo

  - *With the concept of scoping, we are for sure not polluting the global name space, Ensuring clean maintainable code.*
  - If we spawn any new scopes inside a controller, the current scope will be inherited.

  - Si en un controller defino una funcion o variable..

        myApp.controller("MyCtrl", function($scope) {
          	$scope.miVariable = 123;
          	$scope.otraVar = [{...},{...}]
          	$scope.miFuncion = function(..) {
          		var otraVar = $scope.otraVar;
          		...
          	}
        }
    -	  Después en HTML puedo usarla en una directiva en un elemento dentro del que tenga ng-controller
		  `<a href="javascript:" data-ng-click="miFuncion(miVariable)">..</a>;`

	- ["Controller as name"  o "injectar $scope"](http://codetunnel.io/angularjs-controller-as-or-scope/)

  - ***$watch, $apply, $digest***	<======================================
    -	**https://docs.angularjs.org/guide/scope#scope-life-cycle**
    - $scope.$watch() function creates a watch of some variable
    - $scope.$digest() function iterates through all the watches in the $scope object, and its child $scope objects
    - $scope.$apply() function takes a function as parameter which is executed, and after that $scope.$digest() is called internally
    - http://tutorials.jenkov.com/angularjs/watch-digest-apply.html
    - Most of the time AngularJS will call the $scope.$watch() and $scope.$digest() functions for you, but in some situations you may have to call them yourself.
    - **$watch():**
        - When you create a data binding from somewhere in your view to a variable on the $scope object, AngularJS creates a "watch" internally.
        - A watch means that AngularJS watches changes in the variable on the $scope object. Watches are created using the $scope.$watch()
    - **$digest():**
        - At key points in your application AngularJS calls the $scope.$digest() function.
        - 	This function iterates through all watches and checks if any of the watched variables have changed. If a watched variable has changed, a corresponding listener function is called
        - 	Thus, the $digest() function is what triggers the data binding to update.
        - The $digest() function is called whenever AngularJS thinks it is necessary. For instance, after a button click handler has been executed, or after an AJAX call returns (after the done() / fail() callback function has been executed).
        - You may encounter some corner cases where AngularJS does not call the $digest() function for you.
        - You will usually detect that by noticing that the data bindings do not upate the displayed values. In that case, call $scope.$digest() and it should work
    - **$apply():**
        - The $scope.$apply() function is used to execute some code, and then call $scope.$digest() after that, so all watches are checked and the corresponding watch listener functions are called.
        - That makes it easier for you to make sure that all watches are checked, and thus all data bindings refreshed
        - The $apply() function is useful when integrating AngularJS with other code.
    - Links:
      - **http://jimhoskins.com/2012/12/17/angularjs-and-apply.html**
      - http://www.sitepoint.com/understanding-angulars-apply-digest/
      - http://www.benlesh.com/2013/08/angularjs-watch-digest-and-apply-oh-my.html
      - **https://github.com/angular/angular.js/wiki/When-to-use-%24scope.%24apply%28%29**
      - http://onehungrymind.com/notes-on-angularjs-scope-life-cycle/


### [DATA BINDING](https://docs.angularjs.org/guide/databinding) ###
  - sync data between the model and the view - the DOM will be automatically updated whenever the model changes (variables or result of functions)
  - Cuando el modelo correspondiente al scope de determinada vista cambia, se actualiza el DOM, sin necesidad de escribir código de manipulación de DOM.
  - Ese binding se hace mediante directivas en el HTML, que a su vez pueden usar un controlador que manipula el scope de la vista
  - [Comparación data binding, con listeners de eventos (Backbone o Knockout)](https://github.com/jacarma/ngpro/wiki/Algunas%20cosas%20peliagudas%20de%20Angular)
  - Comparación data flow común con angular:
      - VER *Investigacion/AngularJS/angularjs-critique-common-data-flow-in-web-app* y *angularjs-critique-data-flow-in-angular-2waydatabinding*
      - The two-way data binding in AngularJS kind of gets in the way of creating this data flow.
      - You will end up binding your form fields to model variables that are separate from your model data objects, to avoid polluting your data objects.
      - That way you copy data from a model object into form field model properties, further into form fields, then back into form field model properties, then send them to the server, and if that succeeds, you can update your original model data object
  - Two-way data-binding is best described as a full-circle of synchronised data: update the Model and it updates the View, update the View and it updates the Model.
    This means that data is kept in sync without making any fuss. If I bind an ng-model to an <input> and start typing, this creates (or updates an existing) model at the same time.

### [CONTROLLER](https://docs.angularjs.org/guide/controller) ###
  - the business logic behind views - The purpose of controllers is to expose variables and functionality to expressions and directives.
  - a Controller is a JavaScript constructor function that is used to augment the Angular Scope.
  - When a Controller is attached to the DOM via the ng-controller directive, Angular will instantiate a new Controller object, using the specified Controller's constructor function
  - A new child scope will be available as an injectable parameter to the Controller's constructor function as $scope
  - "Los controladores definen el comportamiento de la aplicación y juegan un papel clave en la conexión de los modelos con las vistas."
  - USAR CONTROLLER PARA...
    - Set up the initial state of the $scope object
    - Add behavior to the $scope object.
  - NO USAR CONTROLLER PARA...
    - Manipulate DOM —(Controllers should contain ONLY BUSINESS LOGIC):
    	* Putting any presentation logic into Controllers significantly affects its testability
    	* Angular has databinding for most cases and directives to encapsulate manual DOM manipulation.
    - Format input —(Use angular FORM CONTROLS instead).
    - Filter output —(Use angular FILTERS instead).
    - Share code or state across controllers —(Use angular SERVICES instead)
    - Manage the life-cycle of other components (for example, to create service instances).


### [DEPENDENCY INJECTION (DI)](https://docs.angularjs.org/guide/di) ###
  - Creates and wires objects and functions Dependency Injection (DI) is a software design pattern that deals with how components get hold of their dependencies.
  - Everything within Angular (directives, filters, controllers, services, ...) is created and wired using dependency injection.
  - The Angular injector subsystem is in charge of creating components, resolving their dependencies, and providing them to other components as requested.
  - **[Provider, Injector...](https://github.com/angular/angular.js/wiki/Understanding-Dependency-Injection)**
  - Para usar un servicio en un controller, se puede hacer de las siguientes maneras:
    - Inline Array Annotation (preferido)

    	     someModule.controller('MyController', ['$scope', '$http', 'otro', function($scope, $http, otro) { // .... }]);
    - $inject Property Annotation:

          	var MyController = function($scope, $http, otro) {  // ... }
          	MyController.$inject = ['$scope', '$http', 'otro'];
          	someModule.controller('MyController', MyController);
    - Implicit Annotation:	--> Al minificar, se renombran las variables, causa error

    	     someModule.controller('MyController', function($scope, $http, otro) {  // ... });

  - Angular's dependency injector provides services to your controller when the controller is being constructed.
    - The dependency injector also takes care of creating any transitive dependencies the service may have (services often depend upon other services).

### [MODULE](https://docs.angularjs.org/guide/module) ###
  - a container for the different parts of an app including controllers, services, filters, directives which configures the Injector
  - (http://blog.koalite.com/2013/05/angularjs-servicios-inyeccion-de-dependencias-y-modulos/)
    - Todos los componentes registrados en angular son singleton, es decir, sólo existe una instancia de ellos en la aplicación y si hay varios componentes que dependen de un mismo objeto, todos recibirán la misma instancia del objeto.
    - Esto es lo que permite utilizar fácilmente los servicios para almacenar estado, ya que dos Controllers que dependan de un mismo servicio estarán utilizando el mismo objeto y, por tanto, podrán compartir información a través de él.
  - Angular modules solve the problem of removing global state from the application and provide a way of configuring the injector.
  - As opposed to AMD or require.js modules, Angular modules don't try to solve the problem of script load ordering or lazy script fetching.
  - These goals are totally independent and both module systems can live side by side and fulfill their goals.

  - [Tipos de módulos, que se pueden injectar](http://tutorials.jenkov.com/angularjs/dependency-injection.html)		<----
    - **VALUES**
      - It can be a number, string or JavaScript object. Values are typically used as configuration which is injected into factories, services or controllers
    - **FACTORY**
      - Factory is a function that creates values. When a service, controller etc. needs a value injected from a factory, the factory creates the value on demand.
      - Once created, the value is reused for all services, controllers etc. which need it injected.
      - Thus, a factory differs from a value in that it can use a factory function to create the object it returns.
      - You can also inject values into a factory for use when creating the object. You cannot do that with a value.
    - **SERVICE**
      - A service in AngularJS is a singleton JavaScript object which contains a set of functions.
      - The functions contain whatever logic is necessary for the service to carry out its work.
      - Services in AngularJS are created using the new keyword. Thus, AngularJS will do this internally: new MyService();
    - **FACTORY vs SERVICE**: Ver más abajo en [Services](#services)
    - **PROVIDER**: Ver a continuación en [providers - recipes](#providers-recipes)
	   - The JavaScript provider object contains a single $get() function.
	   - This is the factory function of the provider. In other words, the $get() function creates whatever the provider creates (service, value etc.).
	   - The object created by the provider's $get() function will be injected.

	- **EJEMPLO (minification safe dependency)**:

			var myutil = angular.module("myutil", []);
			/* VALUE */
			myutil.value("safeValue", "a safe value");

			/* FACTORY (dependencia: value safeValue) */
			myutil.factory("safeFactory", ['safeValue', function(p1) {
				return { value : p1 };
			}]);

			/* SERVICE (dependencia: service safeFactory */
			function MySafeService(p1){
				this.doIt = function() {
					return "MySafeService.doIt() called: " + p1.value;
				}
			}
			myutil.service("safeService", ['safeFactory', MySafeService]);

			/* PROVIDER ( dependencia: service safeService) */
			myutil.provider("safeService2", function() {
				var provider = {};
				provider.$get = ['safeService', function(p1) {
					var service = {};

					service.doService = function() {
						console.log("safeService from provider: " + p1.doIt());
					}
					return service;
				}];

				return provider;
			});

			/* CONTROLLER (dependencia: $scope y service safeService2 creado con provider) */
			myapp.controller("AController", ['$scope', 'safeService2', function(p1, p2) {
				p1.myvar = "the value";
				p2.doService();		// se inyectó el objeto creado por $get del provider
			}]);


#### [PROVIDERS - RECIPES](https://docs.angularjs.org/guide/providers) ####
  - **[AngularJS Providers: Constant/Value/Service/Factory/Decorator/Provider](https://gist.github.com/demisx/9605099)**  <=== VER
  - https://github.com/angular/angular.js/wiki/Understanding-Dependency-Injection
  - http://tutorials.jenkov.com/angularjs/dependency-injection.html
  - All the providers are instantiated only once. That means that they are all singletons.
  - The injector uses recipes to create two types of objects: services and special purpose objects
  - There are five recipe types that define how to create objects: Value, Factory, Service, Provider and Constant.
  - Factory and Service are the most commonly used recipes.
	- The only difference between them is that the Service recipe works better for objects of a custom type, while the Factory can produce JavaScript primitives and functions.
  - The Provider recipe is the core recipe type and all the other ones are just syntactic sugar on it.
  - Provider is the most complex recipe type. You don't need it unless you are building a reusable piece of code that needs global configuration.
  - All special purpose objects except for the Controller are defined via Factory recipes.
  - Providers are objects that provide (create) instances of services and expose configuration APIs that can be used to control the creation and runtime behavior of a service.
	  - In case of the $route service, the $routeProvider exposes APIs that allow you to define routes for your application.
	  - Providers can only be injected into config functions. Thus you could not inject $routeProvider into controller.

        	Provider Singleton Instantiable  Configurable
          Constant    Yes         No          No
          Value       Yes         No          No
          Service     Yes         No          No
          Factory     Yes         Yes         No
          Decorator   Yes         No?         No
          Provider    Yes         Yes         Yes

    - A constant is a value that can be injected everywhere. The value of a constant can never be changed.
    - A value is just a simple injectable value.
    - A service is an injectable constructor.
    - A factory is an injectable function.
    - A decorator can modify or encapsulate other providers except a constant.
    - A provider is a configurable factory.

#### INJECTOR ####
  - dependency injection container

  - When the application bootstraps, Angular creates an injector that will be used to find and inject all of the services that are required by your app
  - The injector only carries out the following steps :
    - load the module definition(s) that you specify in your app
   	- register all Providers defined in these module definitions
   	- when asked to do so, inject a specified function and any necessary dependencies (services) that it lazily instantiates via their Providers.


### [SERVICES](https://docs.angularjs.org/guide/services) ###
  - Reusable business logic independent of views - When the application grows it is a good practice to move view independent logic from the controller into a so called "service"
  - **Angular services are substitutable objects that are wired together using dependency injection (DI).**
  - You can use services to organize and share code across your app.

    > "Los servicios son objetos especializados que realizan el trabajo en nombre de otros objetos.
    > Los servicios tienen muchos usos, pueden ir a buscar los datos remotos o proporcionar una implementación de un algoritmo.
    > Los servicios están destinados a ser altamente reutilizables, están diseñados para ser intercambiados fácilmente con otros servicios similares."
  - Angular services are:
    - **Lazily instantiated** – Angular only instantiates a service when an application component depends on it.
    - **Singletons** – Each component dependent on a service gets a reference to the single instance generated by the service factory.

  - Angular offers several useful services (like $http), but for most applications you'll also want to create your own.
    - Like other core Angular identifiers, built-in services always start with $ (e.g. $http). (*Los servicios provistos por Angular empiezan con $.*)

  - **http://jonathancreamer.com/understanding-angular-js-services-the-easy-way/**
  - There are multiple ways to define their factory
  - **[Creacion mediante service o factory:](http://viralpatel.net/blogs/angularjs-service-factory-tutorial/)** <==== VER
    - In .service we create service methods using this.methodname.
    - In .factory we create a factory object and assigne the methods to it.
    - **SERVICE**:

            module.service('MyService', function() {
            	this.method1 = function() {
            		//..
            	}
            	this.method2 = function() {
            		//..
            	}
            });

			angular.factory('MyService', function MyService() {
				this.doSomething = function() {
					/* DO IT, DO IT NAOW */
				}
			});

      - Al inyectarlo en un controlador:
          - When declaring *serviceName* as an injectable argument you will be provided with an instance of the function.
          - In other words `new FunctionYouPassedToService()`. This object instance becomes the service object that AngularJS registers and injects later to other services / controllers if required.

    - **FACTORY**:

            module.factory('MyService', function() {
              var factory = {};
              factory.method1 = function() {
            	 //..
              }
              factory.method2 = function() {
            	 //..
              }
              return factory;
            });

			angular.factory('MyService2', function MyService2() {
				return {
					doSomething: function() { /* ... */}
				};
			});

      - Al inyectarlo en un controlador:
          - When declaring *factoryName* as an injectable argument you will be provided with the value that is returned by invoking the function reference passed to module.factory

				app.controller('HomeController', function(MyService2) {
					MyService2.doSomething();
				});

  - Services are often a confusing point. From experience and research, they're more a stylistic design pattern rather than providing much functional difference.
    After digging into the Angular source, they look to run through the same compiler and they share a lot of functionality.
    From my research, you should use Services for singletons, and Factories for more complex functions such as Object Literals and more complicated use cases.
    (http://toddmotto.com/ultimate-guide-to-learning-angular-js-in-one-day/)

  - [Ejemplo de services](http://mean-workshop.herokuapp.com/resources/day4/presentation/#/78)


- [¿Cuándo usar Controllers, Services or Directives?](http://kirkbushell.me/when-to-use-directives-controllers-or-services-in-angular/)

### [ROUTING](http://mean-workshop.herokuapp.com/resources/day4/presentation/#/71) ###

  - Módulo ngRoute  (angular-route.js)
  - Config servicio $routeProvider

		var myApp = angular.module('myApp', ['ngRoute','myController']);
		myApp.config(phonecatApp.config(['$routeProvider',
			function($routeProvider) {
				$routeProvider.
					when('url', {
						templateUrl: 'partials/miTemplate.html',
						controller: 'miCtrl'
					  }).
					  when('otroUrl/:param', {
						templateUrl: 'partials/otroTemplate.html',
						controller: 'otroCtrl'
					  }).
					  otherwise({
						redirectTo: 'url'
					  });
				 }]);

  - Parámetro en route: ( **servicio $routeParams** )

		module.controller("RouteController", function($scope, $routeParams) {
			$scope.param = $routeParams.param;
		})

  - Directiva `ng-view`	`<div ng-view></div>`
		- Inside the div with the ngView directive the HTML template specific to the given route will be displayed


  * Alternativa: **[UI-router](http://angular-ui.github.io/ui-router/)**
    + Soporta **Nested States & Views** y **Multiple & Named Views**
    - [Wiki](https://github.com/angular-ui/ui-router/wiki) <--- VER
    - [API](http://angular-ui.github.io/ui-router/site/#/api/ui.router)
    - [Ejemplo](http://angular-ui.github.io/ui-router/sample/)


### [ANIMATIONS](https://docs.angularjs.org/guide/animations) ###

### TESTING ###
#### [Unit testing](https://docs.angularjs.org/guide/unit-testing) ####
  -		Para testear funcionamiento unitario de controladores, filtros y directivas
  -	 Herramientas:
    - Jasmine: sintaxis (test driven development framework, provides functions to help with structuring your tests and also making assertions)
    - Karma: ejecucion de los tests (javascript CLI, carga la aplicacion en un browser y ejecuta los tests unitarios)

#### [End to end testing](https://docs.angularjs.org/guide/e2e-testing) ####
  - Simula la interaccion del usuario con la aplicación. Controla el browser realizando las acciones escritas en el test
  -	 Herramientas:
    - Jasmine: sintaxis
    - Protractor: ejecucion de los tests

**Ver [Testing](#testing)**


### [SEGURIDAD](https://docs.angularjs.org/guide/security) ###

### [PRODUCCION](https://docs.angularjs.org/guide/production) ###


************************************************************************
## LINKS útiles...  ##

- **[Guía](https://docs.angularjs.org/guide)**
- **[Angular a producción](https://github.com/jacarma/ngpro/wiki)**
  - Workflow - Tutorial Angular - Yeoman - Calidad - Testing - Empaquetado
- [STYLE-GUIDE](https://github.com/toddmotto/angularjs-styleguide)
- [Varios links (de Globant)](https://github.com/globant-ui/angular-lab) Incluye ejercicio
- **[Reference application for AngularJS](https://github.com/angular-app/angular-app/)**
- http://arvindr21.github.io/ng-overview/#/
    - S.P.A. (Single Page Application)
    - MVC vs MVP vs MVVM  (ver imagenes en Investigacion/MVW)
    - One-way data binding - Two-way data binding  - [Ejemplo data binding](http://arvindr21.github.io/ng-overview/examples/example1.html)
    - MODULES, VIEWS & CONTROLLERS - [Ejemplo]( http://arvindr21.github.io/ng-overview/examples/example2.html)
    - FILTERS - [Ejemplo](http://arvindr21.github.io/ng-overview/examples/example3.html)
    - TEMPLATING & ROUTING - [Ejemplo]( http://arvindr21.github.io/ng-overview/examples/example4.html)
    - SERVICES & FACTORY - [Ejemplo]( http://arvindr21.github.io/ng-overview/examples/example5.html)
- **[Parte del workshop de MEAN](http://mean-workshop.herokuapp.com/#/day4)** - We will go through the basics of Angularjs:
    - What & Why of Angularjs
    - Understanding that Angularjs is a framework and not a "2 way data binding library"
    - Understanding Filters, Routers, Controllers and Factories
    - Setup bower to maintain dependencies
    - Hands on basic examples
    - Angular.js + Express.js example
    - Angular.js + Express.js + Node.js + MongoDB example
- [¿Qué es AngularJS?](http://carlosazaustre.es/blog/empezando-con-angular-js/)
- [Primeros pasos para aprenderlo](http://joelhooks.com/blog/2013/08/03/learn-angularjs-in-a-weekend/)
    1. Tutorial Oficial	~4hrs		http://docs.angularjs.org/tutorial
    2. Video-Tutoriales de Egghead.io. ~3hrs	https://egghead.io/technologies/angularjs
    3. **Un vistazo a una Aplicación AngularJS real ~4hrs		https://github.com/angular-app/angular-app	<== VER Aplicación 100% MEAN !:)**
      - Folder structure (important!) - Modules (very important!) - Testing (super important!)
      - RESTful services - Navigation - Security
      - fantastic Grunt.js build with an integrated Karma Test Runner.
    4. Crea tu primera aplicación con Ng-Boilerplate.	https://github.com/joshdmiller/ng-boilerplate
      -  ng-boilerplate, unlike the angular-seed project, is suitable as a starting point for building a production app. It’s a solid shortcut, and worth study.
      -  (angular-seed es para aprender la tecnologia - ng-boilerplate sirve para produccion)
- [Fun with AngularJS!](http://devgirl.org/2013/03/21/fun-with-angularjs/)
- **[Pensar en AngularJS teniendo un background de JQuery](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background)**
    - http://www.artandlogic.com/blog/2013/03/angularjs-for-jquery-developers/
- [Slides	AngularJS 101 - Everything you need to know to get started](http://www.slideshare.net/sbegaudeau/angular-js-101-everything-you-need-to-know-to-get-started)
- [Slides AngularJS Architecture](http://www.slideshare.net/EyalV/angularjs-architecture)
- http://ng-course.org/demos/index.html

* **[Tools for Scaffolding, Building, and Testing](http://www.toptal.com/angular-js/your-first-angularjs-app-part-2-scaffolding-building-and-testing)**: Karma, Jasmine, Grunt, Bower, Yeoman… What are all these tools?

************************************************************************
## Seeds, Boilerplates  ##

- generator-angular-phonegap-seed
	 - https://github.com/thewildpendulum/gaps
	 - https://github.com/thewildpendulum/angular-phonegap-seed

************************************************************************

## FLUJO DE EJECUCION ##
- [AngularJS Application Execution](http://tutorials.jenkov.com/angularjs/index.html#angularjs-application-execution)

************************************************************************
## Ventajas, razones para usar AngularJS, interesting features ##

  - http://www.wintellect.com/devcenter/jlikness/10-reasons-web-developers-should-learn-angularjs
  - http://www.sitepoint.com/10-reasons-use-angularjs/
  - **http://code.tutsplus.com/tutorials/5-awesome-angularjs-features--net-25651**
      - Two Way Data-Binding
      - Templates
      - MVC (MVVM). Model - ViewModel - Controller - View
      - Dependency Injection
      - Directives
      - Testing
  - http://code.tutsplus.com/tutorials/3-reasons-to-choose-angularjs-for-your-next-project--net-28457
	1. It Was Developed by Google
	2. It's Comprehensive
		+ REST Easy
		+ MVVM to the Rescue: *Models talk to ViewModel objects (through something called the $scope object), which listen for changes to the Models.*
		+ Data Binding and Dependency Injection.
		+ Extends HTML
		+ Makes HTML your Template
		+ Enterprise-level Testing
	3. AngularJS is quickly becoming the dominant JavaScript framework for professional web development.



************************************************************************
## COMPARACIONES ##
* **Curva de aprendizaje**
	+ vs Backbone.js

	>	Angular.js has a very different learning curve from Backbone.js.
	>	Backbone.js has a steep learning curve up front: to write a simplest app, you need to know pretty much everything about it.
	>	And after you have nailed it, there is pretty much nothing other than some common building blocks and best practices.
	>
	>	However, Angular.js is very different. The initial barrier to get started is very low: after going through the examples on homepage, you should be good to go.
	>	You don’t need to understand all core concepts like module, service, dependency injection, scope. Controller and some directives can get you started. And the documentation for quick start is good enough.
	>
	>	The problem is when you dive into Angular.js and start to write some serious app, the learning curve suddenly becomes very steep and its documentations are either incomplete or cumbersome. It took quite some time to get over this stage and started to benefit from all these learning.
	>	This is the first thing I wish I were told - so that I would not feel frustrated when I had all these problems.

************************************************************************
## CRÍTICAS, CONTRAS DE ANGULAR ##

- **[AngularJS: The Bad Parts](http://larseidnes.com/2014/11/05/angularjs-the-bad-parts/)** <======== VER
	+ **The digest loop**

		> Angular supports **two-way databinding**, and this is how it does it: It scans through everything that has such a binding, and sees if it has changed by comparing its value to a stored copy of its value.
		> If a change is found, it triggers the code listening for such a change. It then scans through everything looking for changes again. This keeps going until no more changes are detected.
		>
		> The problem with this is that it is tremendously expensive. Changing anything in the application becomes an operation that triggers hundreds or thousands of functions looking for changes.
		> **This is a fundamental part of what Angular is, and it puts a hard limit on the size of the UI you can build in Angular while remaining performant.**

- **[CONTRAS DE ANGULARJS](https://medium.com/@mnemon1ck/why-you-should-not-use-angularjs-1df5ddf6fc99)**	<====
	+ **Ver links al final del artículo**  (algunos se incluyen en esta lista)

- [CRITICAS ANGULAR](http://tutorials.jenkov.com/angularjs/critique.html)
    >- The AngularJS directives are a suboptimal choice for HTML generation. - AngularJS Directives And The Declarative / Imperative Paradigm Mismatch
    >
    >  - The Intrusiveness of AngularJS Directives
    >
    >         (ver explicacion previa en articulo del balance entre declarativo e imperativo en HTML)
    >         As already mentioned earlier, AngularJS directives are intrusive on your HTML template, just like JSP tag libraries etc. were.
    >         In order to "teach HTML new tricks" you end up with HTML full of non-HTML elements and attributes.
    >         Think about it for a while. When you need to teach HTML new tricks, that is a pretty good sign it is time to change to the imperative paradigm (JavaScript), except perhaps for very simple tricks.
    >
    >         Another example of how the templating mechanism is intrusive is when you look at how many function calls that can (and will) be embedded in the HTML. Function calls on the $scope object.
    >         Before AngularJS it was "best practice" to keep function calls out of the HTML. For instance, you should not use the onclick event attributes on HTML elements, but rather attach event listeners via JavaScript.
    >         Somehow that was forgotten with AngularJS, and now we are back to embedding JavaScript function calls in the HTML.
    >- **[The 2-way data binding is not always that useful](http://tutorials.jenkov.com/angularjs/critique.html#two-data-binding)**
    >  - Comparación data flow común con angular:
    >      *VER Investigacion/AngularJS/angularjs-critique-common-data-flow-in-web-app* y *angularjs-critique-data-flow-in-angular-2waydatabinding*
    >- **Resumen de la crítica de este chabón**
    >   - We do indeed need better frameworks to make it easier to develop larger HTML / JavaScript applications, but I don't feel that AngularJS has chosen the right approach.
    >   - We do need to find a balance between the declarative HTML and the imperative JavaScript, but I feel that AngularJS has gone too far in the declarative direction.
    >   - We do need to find ways to bind data to HTML elements / GUI components, but the one-way data binding in the AngularJS directives and two-way data binding in forms can be done better.
    >   - But this is just my opinion. The whole purpose of this article was to help you form your own opinion.

- [What’s wrong with Angular.js](https://medium.com/este-js-framework/whats-wrong-with-angular-js-97b0a787f903)

- **[PROS Y CONTRAS](http://miceplans.net/node/36)**	<=====



- [Alternativas de Angular para distintas partes del stack](https://medium.com/@mnemon1ck/why-you-should-not-use-angularjs-1df5ddf6fc99)

- [The reason Angular JS will fail](http://okmaya.com/2014/03/12/the-reason-angular-js-will-fail/): Comparación con jQuery

- [2 years with Angular](http://www.fse.guru/2-years-with-angular)
  > Angular.js is "good enough" for majority of projects, but it is not good enough for professional web app development.
  - The bad parts:
	- [Bad Abstractions](http://www.fse.guru/angular-bad-parts-part-1)
	- **[Bad perfomance](http://www.fse.guru/angular-bad-parts-part-2)	<--- VER ($apply, $digest)**
	- [Name clashes](http://www.fse.guru/angular-bad-parts-part-3)
	- [Complexity](http://www.fse.guru/angular-bad-parts-part-4)
	- [3rd party modules are crappy](http://www.fse.guru/angular-bad-parts-part-5)

************************************************************************

## TIPS & TRICKS ##

- Thinking Angular (https://speakerdeck.com/toddmotto/angularjs-in-one-day)
  + Scopes and data, not DOM, no add/remove classes, ever. Angular does this all for you based on data
  + Let the data do the work, keep code as minimal as possible.
  + Abstract, abstract, abstract. Keep abstracting into different files for better management and copying individual files into new projects, premade working code

-	**http://www.artandlogic.com/blog/2013/05/ive-been-doing-it-wrong-part-1-of-3/**		<========= VER!
-	**http://leftshift.io/8-tips-for-angular-js-beginners/**		<================== VER
-	http://pabloleone.com/2014/05/angularjs-good-practices/
-	https://github.com/angular/angular.js/wiki/Best-Practices

- **[Anti patrones](https://github.com/angular/angular.js/wiki/Anti-Patterns)**

- **[Top 10 mistakes](https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make)** <================================= VER

- [Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

- [Things I Wish I Were Told About Angular.js](http://ruoyusun.com/2013/05/25/things-i-wish-i-were-told-about-angular-js.html)
	+ Curva de aprendizaje

- *[Investigacion/AngularJS/Advanced tips & tricks using AngularJS.pdf](http://es.slideshare.net/simonguest/advanced-tips-tricks-for-using-angular-js)*
//ToDo ///////////////////////

	10. STRUCTURE - How should I structure my angularJS project?
		- Yeoman
		....

	9. MINIFICATION - Should I minify my angular project?
		...

	8. DIRECTIVES  - What are they?
		...

	7. PAGE LOADING - How do I create a good user experience?
		....

	6. INTERNET EXPLORER - Does AngularJS work with IE?
		....

	5. DEVELOPMENT ENVIRONMENT	- What tools should I be using?
		- Sublime
		- Instal via Bower
		- Logging: usar $log
		- Chrome extension: Batarang
		- Javascript debugging

	4. ANGULAR-SUPPORTED FRAMEWORKS - How do I deal with nonAngularJS stuff?
		- Bootstrap
		- JQuery

	3. SEPARATION OF CONCERNS - How do I make the right choices?
		....

	2. SCOPE - What do I need to know about $scope?
		....

	1. PERFOMANCE - How do I prevent performance bottlenecks?
		....

************************************************************************
## UI - Plugins - Directivas ##

- [AngularUI](http://angular-ui.github.io/)
- [Angular UI Bootstrap](http://angular-ui.github.io/bootstrap/) - Native AngularJS (Angular) directives for Bootstrap.
- [Angular Google Maps](http://angular-ui.github.io/angular-google-maps) - AngularJS directives to integrate Google Maps into your applications.


#### MATERIAL DESIGN ####
  * https://material.angularjs.org/#/

  - Angular Material provides a grid system that is built on top of [Flex box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). You can find more info on the grid system [here](https://material.angularjs.org/#/layout/grid).

************************************************************************

## ELEMENTOS, FUNCIONES, FUNCIONAMIENTO ##

- Inicialización:  <html ng-app="modulo">
	Tells AngularJS to be active in this portion of the page. In this case the entire document
	When Angular starts, it will use the configuration of the module with the name defined by the ng-app directive, including the configuration of all modules that this module depends on.

- {{ }} are a declarative way of specifying data binding locations in the HTML.

### DIRECTIVAS (etiquetas HTML): ###

    => ng-app
    	Declares the root element of an AngularJS application, under which directives can be used to declare bindings and define behavior

    => ng-model="data.attr"
    	This links the <element> and the model. This means that any changes to the control update the data in your model, and when you change the model it updates the control.
    	(establishes a two-way data binding between the view and the scope.)
      --> As soon as Angular see a variable inside the ng-model attribute, it will bind the variable to the $scope object & monitors for changes.

    => ng-controller="MiControlador"
    	El comportamiento del <elemento> con esa etiqueta será manejado por la clase MiControlador definida en javascript
    	(Specifies a JavaScript controller class that evaluates HTML expressions.)

    => ng-view
    	We’re marking this <element> as the place we’ll load partial pages or “views”. The surrounding page will stay static while we load changing UI into this section.
    	(The base directive responsible for handling routes that resolve JSON before rendering templates driven by specified controllers.)

    	Usado con servicio $route (debe tener instalado el modulo angular-route): The role of the ngView directive is to include the view template for the current route into the layout template
    	ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (index.html) file.
    	Every time the current route changes, the included view changes with it according to the configuration of the $route service.

    => ng-bind o ng-bind-template:  para usar <element ng-bind-template="{{ expression }}">...</element>
    								en lugar de poner directamente  {{ expression }}
    		(para que no se vea antes de que se carge Angular)

    -> ng-bind-html: sanitiza la expresión (usa $sanitize: incluir ngSanitize como depencia, cargar script "angular-sanitize.js")
  	-> ng-src para usar {{expression}} en atributo src:  <img ng-src={{expression}} >  ( con src no funciona antes de que se ejecute angular)

    => ng-include	<div ng-include="'partials/header.html'"></div>
    	Incluye pedazos de html

    => ng-click="funcion()"
    	Instead of registering event-handlers, you declare which method on the controller to call.

    => ng-repeat="elem in collection"
    	Use ng-repeat to unroll a collection. This is one of the most versatile directives in AngularJS.
    	Instantiate an element once per item from a collection.
    	Repeaters are “for loops”. We define a list in the Angular scope & then iterate the list using a ng-repeat directive & display the data.
    	Por ejemplo, usado en un <li>:
    		When objects are added to the collection the ng-repeat automatically adds new <li> elements into the DOM. Similarly when the objects are removed from collection then the corresponding <li> element is removed as well.
    		(data-binding: ng-repeat actualiza el DOM cuando se modifica collection)

    	ng-repeat-start="elem in collection" y ng-repeat-end
    		Repite todo el codigo HTML por cada elemento del arreglo, entre el elemento HTML que tiene ng-repeat-start y el ng-repeat-end inclusive

    	Special ng-repeat Variables:
    		The ng-repeat directive defines a set of special variables which you can use when iterating the collection. These variables are:
    			$index, $first, $middle, $last
    			The $index variable contains the index of the element being iterated.
    			The $first, $middle and $last contain a boolean value depending on whether the current item is the first, middle or last element in the collection being iterated.

    => ng-submit="funcion()"
    	Intercepts form submission and instead calls funcion().

    -> ng-class:
    	ng-class="{miclase: condition1 && condition2}"
    		Agrega al elemento la clase miclase cuando se cumple la condicion
    	ng-class="[style1, style2, style3]"   otros elem... ng-model="style1" ng-model=style2
    		Evalua las variables y las agrega como clases


    -> ng-show:"condition1 && condition2"  / ng-hide
    	Muestra <element> cuando se cumple una condicion. (por ej, las variables condition1 y condition2 son true)
    -> ng-disabled:"condition"
    	Disable <element> cuando se cumple una condicion (por ej, la variable condition es true)

    -> ng-switch: is used if you want to add or remove HTML elements from the DOM based on data in the model
    	<div ng-switch on="myData.switch">
    		<div ng-switch-when="1">Shown when switch is 1</div>
    		<div ng-switch-when="2">Shown when switch is 2</div>
    		<div ng-switch-default>Shown when switch is anything else than 1 and 2</div>
    	</div>
    -> ng-if: can include / remove HTML elements from the DOM, just like the ng-switch directive, but it has a simpler syntax
    	 <div ng-if="myData.showIt">ng-if Show it</div>

    	The main difference between ng-if and ng-show + ng-hide is that ng-if removes the HTML element completely from the DOM,
    		whereas the ng-show + ng-hide just applies the CSS property display: none; to the elements.

### FILTROS: ###

  - filter: {{ filter_expression | filter : expression : comparator}}
    - https://docs.angularjs.org/api/ng/filter/filter
    - Para seleccionar en un arreglo los items que cumplan con expression
  - orderBy: {{ orderBy_expression | orderBy : expression : reverse}}
    - https://docs.angularjs.org/api/ng/filter/orderBy
    - Ordena los elementos de un arreglo segun expression
  - json: muestra los datos en formato json indentado

### FORMS:  (directiva `<form>` y los controls (inputs, etc) ###
  - **Validacion**: ng-pattern is a very powerful utility when dealing with inputs. We can write a regular expression in the pattern and  we can check the validation using formName.formField.$valid value

    - En cada input se pueden poner directivas (etiquetas): required, ng-pattern, etc.
    - ver https://docs.angularjs.org/api/ng/directive/input y los distintos tipos de inputs
    - Dentro de las directivas angular, se puede acceder a variables y funciones de angular que determinan el estado del form y cada input
    - (propiedades de FormController: https://docs.angularjs.org/api/ng/type/form.FormController)
        - 	Booleans: $pristine, $dirty, $valid, $invalid, $submitted.  Objeto: $error
            - 	$pristine: True if the form has not been changed (no form fields has changed), false if some fields have been changed.
            - $dirty: !$pristine
    - Por ej:
      - Si un input no valida (requiere solo numero) se muestra mensaje de error y deshabilita boton:
      - En el controller: `$scope.onlyNumbers = /^\d+$/;  (exp regular)`

        		<input type="text" name="inputName" data-ng-pattern="onlyNumbers" data-ng-model="modelName" required>
        		<span data-ng-hide="formName.inputName.$valid" class=" alert-danger">Please Enter a Valid Number</span>
        		<button data-ng-disabled="!(formName.inputName.$valid)" type="submit" class="btn btn-default">Submit</button>

### BUILT-IN SERVICES  (variables $ en Javascript) ###

    => $scope
    	contains your model data (y funciones). It is the glue between the controller and the view. The $scope is just one of the services that can be injected into the controller.

    => $location	-	https://docs.angularjs.org/guide/$location
    	You use the $location service to access the browser's location
    	- $location.path('/...')
    		Use the path method to change the application's 'deep-linking' location.
    		Changing the URL will automatically activate the new route, and transition the application to display that view

    => $routeProvider
    	responsible for mapping URL paths to partials.
    => $routeParams
    	We use it to access the parameters extracted from the route path definitions.

    => $http
    	a built-in service provided by Angular for accessing a server backend.
    	The $http service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.

    -> $locale
    	The $locale service contains meta-data for the current locale

    => $resource
    	The $resource service makes it easy to create a RESTful client with just a few lines of code.
    		This client can then be used in our application, instead of the lower-level $http service.

    	Cuando se invoca una accion a $resource, y no se ejecuta callback, si no que se iguala directamente a una variable, no es que se ejecute sincronicamente
    	What is returned synchronously is a "future" — an object, which will be filled with data when the XHR response returns.
    -->	Because of the data-binding in Angular, we can use this future and bind it to our template. Then, when the data arrives, the view will automatically update.
    	VER: https://docs.angularjs.org/api/ngResource/service/$resource

    	Acciones default de $resource (métodos que se pueden invocarle):
    		{ 'get':    {method:'GET'},
    		'save':   {method:'POST'},
    		'query':  {method:'GET', isArray:true},
    		'remove': {method:'DELETE'},
    		'delete': {method:'DELETE'} };


### CONSTRUCTORES  y CONFIG (funciones Javascript) ###

    => angular.module('modulo', ...)
    	This defines the project module. You use modules to configure existing services, and define new services, directives, filters, and so on.

    => value: angular.module(...).value('name',value )
    	Define a singleton object that can be injected into controllers and services.

    => service: angular.module(...).service(name, constructor)
    	Register a service constructor, which will be invoked with new to create the service instance

    => factory: angular.module(...).factory(name, $getFn)
    		POR EJ:	phonecatServices.factory('Phone', ['$resource',  function($resource){ return $resource(url, {}, { ... } }); }]);
    	Register a service factory, which will be called to return the service instance.

    	http://stackoverflow.com/questions/14324451/angular-service-vs-angular-factory

    => controller:  angular.module(...).controller('MiControlador',constructor )		constructor: [...,..., function() ]  o function()
    	registra el controlador 'MiControlador'
    	The controller MiControlador is the code behind the view. You can clearly see your application behavior because there is no DOM manipulation or framework specific boilerplate. Just simple, readable JavaScript.
    	Si se pasa un arreglo como constructor:
    		The array first contains the names of the service dependencies that the controller needs.
    		The last entry in the array is the controller constructor function.

    => config: angular.module(...).config(function($service) { .... })
    	You use config() to configure existing services.
    	Use this method to register work which needs to be performed on module loading.

    => directive: angular.module(...).('name',function(...){ }	)
    	Define new HTML vocabulary for our components	(Register a new directive with the compiler)

    => filter: angular.module(...).('filterName',function(){} )

-------------------------------------------------------------------
## DEBUGGING ##

Extension de Chrome: Batarang  https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en
			https://github.com/angular/angularjs-batarang

----------------------------------------------------------------------
## TESTING ##

### UNIT TESTS: ###

https://docs.angularjs.org/guide/unit-testing	<== VER

https://github.com/jacarma/ngpro/wiki/Tests%20Unitarios

Escribir tests con sintaxis Jasmine. Ejecutar con Karma (abre una instancia del Chrome.. resultados en consola)
Unit tests are perfect for testing controllers and other components of our application written in JavaScript

Por ejemplo:

    /* jasmine specs for controllers go here */
    describe('PhoneCat controllers', function() {			//Suite: agrupa suites de todos los controladores
    	describe('PhoneListCtrl', function(){		//Nested suite: de un controlador en particular
    		beforeEach(module('phonecatApp'));	//Declaro modulo a usar así está disponible en los specs

    		it('should create "phones" model with 3 phones', inject(function($controller) {	//Spec: test unitario de una funcion del controlador
    																						inject: https://docs.angularjs.org/api/ngMock/function/angular.mock.inject
    			var scope = {},
    			ctrl = $controller('PhoneListCtrl', {$scope:scope});	//el scope se va a modificar como en la app
    			expect(scope.phones.length).toBe(3);	//Asercion
    		}));
    	});
    });

    $httpBackend.expectGET(url).respond(data) : hace un get falso al url (para no tener dependencia con el server al hacer test) que responde data
    $httpBackend.flush para retornar la respuesta del expectGET
    Por ej: en beforeEach
    	$httpBackend.expectGET('phones/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    Luego, en un spec:
    	$httpBackend.flush();
    	expect(model_modificado_por_el_get).toEqual(data);


### END TO END TEST	 - Protractor ###

  - http://angular.github.io/protractor/#/

  - http://docs.angularjs.org/guide/dev_guide.e2e-testing

  - Protractor is an end-to-end test framework for AngularJS applications.
  - Protractor runs tests against your application running in a real browser, interacting with it as a user would.

  * https://github.com/jacarma/ngpro/wiki/Test%20e2e

  * **EJEMPLO - TUTORIAL** : *End to End Testing with Protractor* <== VER
    - [Blog](http://thejackalofjavascript.com/end-to-end-testing-with-protractor)