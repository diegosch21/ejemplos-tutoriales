AngularJS: TUTORIALES - EJEMPLOS
==================================================

###  [Angular-app: AngularJS CRUD application demo](https://github.com/angular-app/angular-app)   ***  VER  ###
  **Aplicación para SCRUM realista, compleja, con backend usando nod.js y mongoDB, seguridad, etc - Excelente build system con grunt**
  
  - */ejemplos/angular/angular-app*
  - [Repo](https://github.com/angular-app/angular-app)
  - Leer README.md para instalacion, config, buid
  - Run: `cd server` `node server.js` http://localhost:3000
    - user: `admin@abc.com` pass: `qwerty`
  - *Stack*
    + Persistence store: **MongoDB** hosted on MongoLab
    + Backend: **Node.js**
    + Awesome **AngularJS** on the client
    + CSS based on **Twitter's bootstrap**
  - *Build*
    + powered by **Grunt.js**
    + test written using **Jasmine** syntax
    + test are executed by **Karma Test Runner** (integrated with the Grunt.js build)
    + build supporting JS, CSS and AngularJS templates **minification**
    + Twitter's bootstrap with **LESS templates** processing integrated into the build
    + **Travis-CI** integration
  - **Cosas destacadas para ver** 
    + Folder structure (important!)
    + Modules (very important!)
    + Testing (super important!)
    + RESTful services
    + Navigation
    + Security

-------------------------------------------------------------------   
### [Ejemplos del sitio home oficial](https://angularjs.org/) 	** 				-OK- ###
  - **VER COMENTARIOS EXPLICATIVOS EN EL CÓDIGO**
  - */ejemplos/angular/basics*			
    * The Basics: Hello World	> Video: http://youtu.be/uFTFsKmkQnQ  (compara JQuery vs Angular)
  	  - */0-helloworld.html*
    * Add Some Control: ToDo	> Video: http://youtu.be/WuiHuZq_cg4
  		- */1-todo.html*
  		- Data binding, controller 
    * Wire up a Backend				<---- VER
  		- */2-projects.html*
  		- Backend (con Firebase), routing - **deep linking**, **services**, **form validation**
    * Create Components				<---- VER
  		- */3-localization-pluralization.html*
  		- Directivas: etiquetas personalizadas (reusable components). Localizacion y pluralizacion (idiomas). 
  			+ **CUSTOM DIRECTIVES**, y controlador en dos modulos distintos

--------------------------------------------------------------------
### [Ejemplos guía oficial - Conversión de monedas](https://docs.angularjs.org/guide ) ** 		-OK- ###
  - */ejemplos/angular/basics/guide*
  * [Data-binding basico](https://docs.angularjs.org/guide/concepts#a-first-example-data-binding)
  	- */0-data-binding-basic.html*
  * [Adding UI logic: Controllers](https://docs.angularjs.org/guide/concepts#adding-ui-logic-controllers)
  	- */1-controller.html*
  	- Controlador contiene toda la lógica
  * [View independent business logic: Services](https://docs.angularjs.org/guide/concepts#view-independent-business-logic-services)
  	- */2-services.html*
  	- Conversión de monedas en un servicio - Dependency injection
  * [Accessing the backend](https://docs.angularjs.org/guide/concepts#accessing-the-backend )
  	- */3-backend.html*	
  	- Servicio de conversión de monedas: usa API de Yahoo

--------------------------------------------------------------------	
### [TUTORIAL OFICIAL - angular-phonecat](https://docs.angularjs.org/tutorial) ***** 			-OK- ###

  - */ejemplos/angular/angular-phonecat*
  - [localhost](http://localhost/ejemplos/angular/angular-phonecat/app/)
  - [Tutorial](https://code.angularjs.org/1.3.11/docs/tutorial)
  - [Repo](https://github.com/angular/angular-phonecat)
    - [fork](https://github.com/diegosch21/angular-phonecat)
  - [Demo](http://angular.github.io/angular-phonecat/step-12/app/#/phones)
  - Para aprender a...
    - Create a dynamic application that works in all modern browsers
    - Use data binding to wire up your data model to your views.
    - Create and run unit tests, with Karma.
    - Create and run end to end tests, with Protractor.
    - Move application logic out of the template and into Controllers.
    - Get data from a server using Angular services. - how to use dependency injection and services to make common web tasks, such as getting data into your app
    - Apply animations to your application, using ngAnimate.
  -  Tools:		`npm install`
    - Bower - client-side code package manager
    - Http-Server - simple local static web server 	-->  `npm start` --> http://localhost:8000/app/index.html
    - Karma - unit test runner	 	-->	 `npm test`
        - open up a Chrome browser and connect it to Karma
        - execute all the unit tests in this browser
        - report the results of these tests in the terminal/command line window
        - watch all the project's JavaScript files and re-run the tests whenever any of these change
    - Protractor - end to end (E2E) test runner 	-->  `npm run protractor`
        - open up a Chrome browser and connect it to the application
        - execute all the End to End tests in this browser
        - report the results of these tests in the terminal/command line window
        - close down the browser and exit
  - Pasos:	`git checkout -f step-n  (n: # paso)`		
  	- [Funcionalidades por paso](https://github.com/angular/angular-phonecat/#commits--tutorial-outline)
  	-	0) Bootstrapping
  	- 1) Static template
  	- 2) Angular Templates wit Repeater:  Vista con lista dinamica mediante controller y ng-repeat. Unit testing
  		- **VIEW** (**TEMPLATE** con ng-repeat), **CONTROLLER** (usa **$SCOPE**), **MODEL** (phones: datos in-memory en el controller)
  		- Data-binding entre model y view mediante ng-controller y ng-repeat 
  		- **UNIT TEST** del controller: sintaxis Jasmine - run with Karma (npm test)
  	- 3) Filtering Repeaters - Interactive Search: Search box, filtra la lista. End-to-end testing 
  		- TEMPLATE (add search box: input con ng-model -> MODEL: texto entrado / - - **FILTER** en ng-repeat con ese model)
  		- DATA-BINDING: input con model (la variable correspondiente al model es parte del scope del controller)
  		- **END-TO-END TEST**: Run with Protractor. Verifica que el search box y la lista dinamica funcionan bin juntos
  	- 4) Two-way Data Binding - Phone ordering: ordenar los items de la lista, mediante otra propiedad del modelo.
  		- TEMPLATE (select con ng-model / FILTER: orderBy en ng-repeat con model del select) 
  		- CONTROLLER: valor default para order
  		- **TWO-WAY DATA-BINDING**: 
  			- Cuando el model cambia (porque se escribe en el input o cambia el select en la UI o en el controller) se actualiza la view, Sin necesidad de código para manipular DOM
  			- Binding Model -> UI: En el controller se setea la propiedad a usar, entonces el dropdown y el filtro utilizan esa propiedad.
  			- Binding UI -> Model: Si se selecciona en la UI otra propiedad, se actualiza el model
  		- UNIT TEST: Con beforeEach se crea el controller antes de cada test - END-TO-END-TEST	
  	- 5) XHRs & Dependency Injection: Obtiene los datos de server, usando service $http. Usa dependency injection para que el controller tenga ese service. Test con fake http
  		- DATA del server: url: app/phones/phones.json
  		- CONTROLLER: Usa **SERVICE $http** $http.get para obtener data (promise object, con callback success)
  		- **DEPENDENCY INJECTION**: Para inyectar el service en el controller. Distintas notaciones (tener en cuenta para minificacion)
  		- UNIT TEST: Se inyecta $rootScope, $controller y $httpBackend en beforeEach, para empezar desde un punto conocido y aislado en cada test, definiendo el estado de las dependencias
  			- `scope= $rootScope.$new()` / 
  			- `$httpBackend.expectGET(url).respond(data)` : hace un get falso al url (para no tener dependencia con el server al hacer test) que responde data
  			- `$httpBackend.flush` para retornar la respuesta del expectGET
  	- 6) Templating Links & Images: links e imagen de cada telefono
  		- TEMPLATE: links e imgs (con ng-src)
  		- END-TO-END TEST
  	- 7) Routing & Multiple Views: service $route, layout template, deep linking
  		- DEPENDENCIA ngRoute: En bower.json agrega modulo ngRoute (angular-route). Agregar script en index.html
  		- **LAYOUT TEMPLATE**: index.html sólo un `<div ng-view>`. The role of the ngView directive is to include the view template for the current route into the layout template.
  			- (los templates irán dentro de este div, de acuerdo a la configuracion del route)
  			- `partials/phone-list.html`:  lo que había antes (lista dinamica con filtros)  (el controller correspondiente es enlazado con el router)
  			- `partials/phone-detail.html`: detalle de un phone
  		- MODULOS: 
  			- app.js: modulo principal carga modulo route y modulo controller. Configura routes
  			- controllers.js: define modulo en el que crea los controladores
  		- **ROUTING**: service $route. CONFIG (en modulo ppal): phonecatApp.config - inject $routeProvider - configurar routes con $routeProvider.when(...)
  		- CONTROLLER: agrega controlador para detalle de telefono. Inyecta $routeParams para ver qué id es (especificado en la url)
  		- END-TO-END TEST: navegar en distintos routes
  	- 8) More Templating: Phone detail view	
  		- CONTROLLER: PhoneDetailCtrl con service $http para obtener data del phone
  		- TEMPLATE: View phone detail, con ng-repeat
  		- UNIT & E2E TEST. Inyectar $httpBackend, $rootScope y $routeParams para testear el controller PhoneDetailCtrl. Defino con routeParams el id
  	- 9) Custom Filters - checkmark: crear filtro para poner tick o cruz en lugar de true o false		
  		- **CUSTOM FILTER**: Creo modulo a parte. Lo defino con el consctructor module(..).filter('name', function()))
  		- TEMPLATE: uso el filter definido y cargado como dependencia en el modulo de la app
  		- **UNIT TEST para filter**:  Para tener acceso al filter:  inject(function(checkmarkFilter) { expects..... })
  	- 10) Event handlers - image swapping with ng:click. En phone detail, ver en grande cada thumbnail al hacer clic
  		- CONTROLLER: en PhoneDetailCtrl, funcion setImage para setear la propiedad mainImageUrl en el scope
  		- TEMPLATE: usa ng-click para registrar el evento - llama a funcion setImage
  		- E2E & UNIT TEST
  	- 11) REST and Custom Services -  custom service and $resource  (en lugar de usar $http)
  		- DEPENDENCIA ngResource: En bower.json agrega modulo ngResource(angular-resource). Agregar script en index.html
  		- **CUSTOM SERVICE**: definido con constructor factory... inyecta y usa servicio $resource. Redefine metodo query
  			- The $resource service makes it easy to create a RESTful client with just a few lines of code. 
  			- This client can then be used in our application, instead of the lower-level $http service.
  		- CONTROLLERS: se simplifican (usar metodo query del servicio creado con $resource, más facil que $http).
  		- UNIT TEST: incluir ngResource en karma.conf. Se crea un custom matcher para que no compare los metodos que agrega $resource al request inventado	
  	- 12) Applying Animations
  		- DEPENDENCIA ngAnimate y jQuery (v2.1+):  En bower.json agrega modulo ngAnimate(angular-animate) y jquery. Agregar scripts en index.html
  		- Se definen animaciones para...
  			- Animar ngRepeat con transiciones CSS (sin codigo javascript)
  				- Clases CSS definidas por angular: ng-enter, ng-move, ng-leave  (para animar al agregar, remover y mover elemento de las listas)		
  			- Animar ngView con CSS keyframe: clases ng-enter y ng-leave  (transiciones entre views, sin codigo javascript)
  			- Animar ngClass con Javascript: animar thumbnails dde phone detail
  				- Module **ANIMATIONS**.	Usa animaciones de jQuery.
  				- Método animation(.clase,function(){.. return{ }}): Se registra una .clase que seleccionen elementos sobbre los que se va a aplicar las animaciones.
  				- Se definen dos callbacks (addClass y removeClass) que se ejecutará cada vez que se agregue o remueva una clase en el elemento
  				- En el elemento: ng-class, que agrega clase cuando se cumple condicion	

--------------------------------------------------------------------							
### [AngularJS Tutorial - conceptos](http://tutorials.jenkov.com/angularjs/index.html)		***		VER			-OK- ###
  - 1) Hello World
  - 2) Views & Directives *(ejemplos de directivas de angular, filters, custom filters)*
  - 3) $scope *(jerarquía)*
  - 4) Eventos *(listener directives)*
  - 5) **$watch(), $digest() and $apply()**	<------------------
  - 6) AJAX *($http service, response promise, jsonp)*
  - 7) Forms *(binding inputs, directives, validation)*
  - 8) $timeout, $interval *(ejecutan automaticamente $digest() al terminar, salvo que se ponga 3° parametro false: útil cuando se invoca dentro de un $apply())*
  - 9) **Custom Directives**	<---- VER	
  - 10) Modularization & Dependency Injection *(value, factory, service, provider, constant, minification safe dependency injection)*
  - 11) Routes *(modulo ngRoute, directiva ngView, servicio $routeProvider, parámetros en route)*
  - 12) Internalization *(date filter, currency filter, number filter, setting locale)*
  - 13) Crítica
	
--------------------------------------------------------------------			
### [MovieStub - A Hands On tutorial](http://thejackalofjavascript.com/angularjs-hands-on-tutorial/) **** 	-OK!!- ###
  **(Online Movie Ticket Booking) - CRUD (fetch & post data) -  Server side Express**

  - */ejemplos/angular/movieStub*
      - En terminal: `node index.js` (Ejecuta servidor node + express para que funcione API REST)
      - En Browser: http://localhost:2595/
  - [Blog](http://thejackalofjavascript.com/angularjs-hands-on-tutorial/)
  - [Repo](https://github.com/arvindr21/ngMovieStub)
      - [Paso a paso](https://github.com/arvindr21/ngMovieStub/tree/master/tutorial-parts)
  - [Demo](http://moviestub.cloudno.de/)
  
    * Angularjs Boilerplate desde 0:
    
        	npm init / editar package.json / npm install express --save-dev 
        	bower init / editar bower.json / bower install angular --save-dev / bower install bootstrap --save-dev
        	Server en index.js: ejecutar con > node index.js
    * Model bindings
    * Repeaters, module, controller
    * Filters: uppercase, orderBy, json, filter
    * Scope functions	- Partial views (ngInclude)
    * Routers (bower install angular-route --save-dev / agregar script en index, y ngRoute como dependencia del module)
    * Services	(bower install angular-resource --save-dev / agregar script en index, y ngResource como dependencia del module): 
        - Crear mediante factory. Usa $resource para obtener data del server (Express): return $resource('/movies');	 Service.query()	
    * Post data (book tickets) al server con $http. **Form validation**	*(Ver bookTickets.html y bookTicketsController en app.js)*  
        - Agrega método post() en server Express. Se guarda en un arreglo los post que va recibiendo
    * Fetch data (Show Booking Details) del server con otro service, usando $resource:  return $resource('/bookings');  Luego a ese service se le pide query()
    * **$location**: usado para saber en qué parte de la app está y poner estado de activo en el header, y para redireccionar a otra seccion desde un controller
	
--------------------------------------------------------------------		
### [MediaExplorer - Fun with AngularJS](http://devgirl.org/2013/03/21/fun-with-angularjs/) ****	-OK-	###
  - */ejemplos/angular/mediaExplorer*
  - [Blog](http://devgirl.org/2013/03/21/fun-with-angularjs/)
  - [Repo](https://github.com/hollyschinsky/MediaExplorer)
  - [Demo](http://devgirl.org/files/MediaExplorer)
    * **iTunes Media Search API	<-- VER service, con JSONP**
  	* Custom filter
  	* **Custom directives**		<--- VER
  	* Modal con video html5 - Directiva videoLoader
  		- cuando cambia el url `scope.$watch("url"...)` cargar y hacer play al video
  		- cuando se cierra el modal hace pausa del video haciendo watch a un flag

--------------------------------------------------------------------	
### [Photo App - Tutorial en castellano](https://github.com/jacarma/ngpro/wiki/Tutorial-de-Angular.js) 	** 		-OK- ###
  - */ejemplos/angular/photoApp*
  - [Wiki](https://github.com/jacarma/ngpro/wiki/Tutorial-de-Angular.js) (explicación paso a paso, código en plunker)
  - [Original](http://www.adobe.com/devnet/archive/html5/articles/getting-started-with-angularjs.html)
  - [Demo](http://embed.plnkr.co/Sr7duFhXxyPz2AEus9MK/preview)
    * básico: 1 controlador, 1 servicio
    * **ver service creado con factory**

--------------------------------------------------------------------
### [ToDoMVC](http://todomvc.com/)												*** 			-OK- ###

#### AngularJS • TodoMVC   											-OK- ####
  - */ejemplos/angular/todomvc/angularjs*
  - [Demo](http://todomvc.com/examples/angularjs)
  - [Repo](https://github.com/tastejs/todomvc/tree/gh-pages/examples/angularjs)
    * Template inline:  `<script type="text/ng-template" id="todomvc-index.html">`
      + Usa ng-pluralize, ng-cloak
    * Router para ver sólo los completed o los active	
    * Main Controller:
      + retrieves and persists the model via the todoStorage service
  		+ usa $scope.$watch('todos',...) para guardar en localStorage y contar	(detecta cambios en la lista de todos, al agregar o actualizar)	 **<----VER ($watch)**
  		+ usa $filter para filtrar array en javascript
      + exposes the model to the template and provides event handlers
    * Service: todoStorage - Services that persists and retrieves TODOs from localStorage	**<----- VER (locaStorage service)**
    * Directivas 	**<------------- VER (directivas)**
      + todoEscape (atributo todo-escape en input para editar cada todo):
  		+ Directive that executes an expression when the element it is applied to gets an `escape` keydown event 
  		+ (para que al hacer escape se desactive el input)
  		+ (usa scope.$apply) **<----------- VER ($apply)**
      + todoFocus	(atributo todo-focus en input para editar cada todo)
  		+ Directive that places focus on the element it is applied to when the expression it binds to evaluates to true
  		+ (le pone focus al input del todo que se vaa editar)
  		+ (usa scope.$watch) **<------------------ VER ($watch)**
    * Tests unitarios: 
      + controller  
          + usa scope.$digest **<----- VER ($digest en testing)**
      + directivas
          
#### AngularJS Performance Optimized • TodoMVC    -OK- ####
  - */ejemplos/angular/todomvc/angularjs-perf*
  - [Demo](http://todomvc.com/examples/angularjs-perf/#/)
  - [Repo](https://github.com/tastejs/todomvc/tree/gh-pages/examples/angularjs-perf)
    
	> "The normal AngularJS TodoMVC implementation performs deep watching of the todos array object. 
  > This means that it keeps an in-memory copy of the complete array that is used for dirty checking in order to detect model mutations. 
  > For smaller applications such as TodoMVC, this is completely fine as one trades off a little memory and performance for the sake of simplicity.
  > In larger more complex applications however, where one might be working with 100s or 1000s of large objects one definitely should avoid using this approach. 
  > This implementation of the AngularJS app demonstrates the correct way to approach this problem when working in larger apps."
 
  - Diferencias con el anterior...
    * No usa router, si no scope.$watch con $location.path para mostrar completeds o actives
    * No usa scope.$watch del array para actualizar en localstorage, si no que hace put en localStorage en cada funcion que modifica el arreglo (add, remove, complete..)
			
#### AngularJS & RequireJS • TodoMVC   				-OK- ####
  - */ejemplos/angular/todomvc/angularjs_require*
  - [Demo](http://todomvc.com/examples/angularjs_require)
  -	[Repo](https://github.com/tastejs/todomvc/tree/gh-pages/examples/angularjs_require)
  * Módulos con RequireJS: usa angular.bootstrap en main.js. Cada módulo con define
		
#### Firebase & AngularJS Realtime	• TodoMVC  		-OK- ####
  - */ejemplos/angular/todomvc/firebase-angular*
  - [Demo](http://todomvc.com/examples/firebase-angular)
  -	[Repo](https://github.com/tastejs/todomvc/tree/gh-pages/examples/firebase-angular)
  -	Diferencias con el original...
    * En lugar de router, en app.js usa filter con $location.path para ver completed o active. Usa el filter en el ng-repeat del template
    * Hace binding del array $scope.todos con $firebase

--------------------------------------------------------------------
### [Ejemplo de service: CRUD Contacts](http://viralpatel.net/blogs/angularjs-service-factory-tutorial/) ###
  - [Blog + Code + Demo](http://viralpatel.net/blogs/angularjs-service-factory-tutorial/)
    + Ver 6. End to End application using AngularJS Service

*****************************************************************************************************
*****************************************************************************************************
## Con Backend (MEAN o PHP) - REST API ##

### [MovieStub - A Hands On tutorial](http://thejackalofjavascript.com/angularjs-hands-on-tutorial/) ****   -OK!!- ###
  *ver arriba*

--------------------------------------------------------------------
### [MEAN workshop - Angular day - Hands on Examples](http://mean-workshop.herokuapp.com/#/day4) * ###
  **Ejemplos movie list. Integración con server Node+Express (STACK MEAN)**         VISTO
                            
  - [Repo](https://github.com/arvindr21/MEAN-Workshop/tree/master/resources/day4/examples)
  - *Ejemplos*: setupBasico, modelBinding, repeaters, filters, scopeFunctions, ngInclude, routers, Service: integrar con Express

--------------------------------------------------------------------    
### Single Page Todo App - REST API con Node  * ###
  - [Blog castellano](http://carlosazaustre.es/blog/tutorial-ejemplo-de-aplicacion-web-con-angular-js-y-api-rest-con-node/)
  - [Original inglés - actualizado](https://scotch.io/collections/node-and-angular-to-do-app)
    1. [Creating a Single Page To-do App with Node and Angular](https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular)
    2. [Node Application Organization and Structure](https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure)
    3. [Angular Modules: Controllers and Services](https://scotch.io/tutorials/node-and-angular-to-do-app-controllers-and-services)
  * ToDo list simple
  * Backend con Node + Express + Mongoose (driver para mongodb)  

--------------------------------------------------------------------    
### [Wine Cellar](http://coenraets.org/blog/2012/02/sample-application-with-angular-js/)  *  ###
  **CON VERSIÓN VIEJA DE ANGULAR**

  - */ejemplos/angular/wine-cellar*
  - [Blog](http://coenraets.org/blog/2012/02/sample-application-with-angular-js/)
  - [Repo](https://github.com/ccoenraets/angular-cellar)
  - [Demo](http://coenraets.org/angular-cellar)
    * Backend: **Slim PHP**

--------------------------------------------------------------------
### [Employee Directory - Sample Mobile Application with AngularJS](http://coenraets.org/blog/2013/11/sample-mobile-application-with-angularjs/) *** OK ###

  - */ejemplos/angular/employee-directory*
  - [Blog](http://coenraets.org/blog/2013/11/sample-mobile-application-with-angularjs/)
  - [Repo](https://github.com/ccoenraets/angular-directory)
  - [Demo](http://coenraets.org/apps/angular-directory/)  
  * **Data services** - alternativas de persistencia de datos, ambas implementadas como servicios intercambiables:    <======= VER
    + **Backend REST: Node + Express + MongoDB**. `node server`  http://localhost:3000
      - En app.js (carga dedendencias del modulo), línea 8: `myApp.restServices`
    + **Datos in memory en client**.
      - En app.js (carga dedendencias del modulo), línea 8: `myApp.memoryServices`
  * UI Framework: **Topcoat**


*****************************************************************************************************
*****************************************************************************************************
## Con UI (de angular u otro framework) y plugins ##

### [Employee Directory - Sample Mobile Application with AngularJS](http://coenraets.org/blog/2013/11/sample-mobile-application-with-angularjs/) *** OK ###
  *ver arriba* - UI Framework: **Topcoat**

--------------------------------------------------------------------    
### AngularJS + Ratchet 2.0: Sample Mobile App built with AngularJS and Ratchet 2.0 **    OK   <=== VER ###
  - */ejemplos/angular/app-mobile-angularjs-ratchet2*
  - [Blog](http://vicentegarcia.com/blog/aplicacion-movil-ratchet-angularjs/)
  - [Repo](https://github.com/vicentegarcia/app-mobile-angularjs-ratchet2)
    * Lista de tareas - Localstorage
    * UI Framework: **Ratchet** http://goratchet.com/ (sólo CSS)
    * **Angular-UI Router**: *State-based routing for AngularJS*

--------------------------------------------------------------------    
### [ngTwitterApp: Twitter Live Search App - Angularjs, Material Design and Twitter Streams](http://thejackalofjavascript.com/twitter-live-search/) * ###
  - */ejemplos/angular/ngTwitterApp*  - `node server.js` - http://localhost:3000
  - [Blog](http://thejackalofjavascript.com/twitter-live-search/)
  - [Repo](https://github.com/arvindr21/ngTwitterApp)
  - **[MATERIAL DESIGN en Angular](https://material.angularjs.org/#/)**
  * Arquitectura - Technologies
    - Node.js 
      - Express --> Para hacer el get del index
      - Package [twit](https://www.npmjs.com/package/twit): Twitter API client for node (REST & Streaming)
    - **Twitter Streams**
      - [Twitter stream API](https://dev.twitter.com/streaming/overview)
    - **Socket.io**
    - Angularjs
    - **Material Design**
      + [Grid system](https://material.angularjs.org/#/layout/grid) -> to position the elements on the page
      + [Tabs component](https://material.angularjs.org/#/demo/material.components.tabs) -> to build the search results interface `md-tabs`
      + [Card component](https://material.angularjs.org/#/demo/material.components.card) -> to show a tweet  
      + [Button component](https://material.angularjs.org/#/demo/material.components.button) -> to show the Tweet link.  `md-button`
  * Uses Twitter’s Streaming API to access public stream with the help of a Node module named Twit and then filter the stream based on the search text a user enter.
    Uses socket.io to keep the Node.js server in sync with the Angular client
      - When a user establishes a new connection, we will dispatch a web page that consists of the initial view and we will start listening for a query event on the socket.
      - When the user searches, we will create a new stream instance using the Twit API with the provided search keyword and then start listening for events on the stream. Whenever there is a new tweet on the stream, a Tweet event would be fired.
      - Inside this event, we trigger our socket to emit the new tweet to the client. And then on the client, we will be listening for the tweet event and update the UI. 
      - Finally Material Design is used to enhance the UX.

  * *Usa directivas deprecated*. Ver ngTwitterAppOriginal para correcto con funcionamiento con librerias viejas.    

--------------------------------------------------------------------    
### [LookAround](https://github.com/shidhincr/LookAround) <------ VER ###
  *AngularJS Learning Playground ( with some more items like Twitter bootstrap, Google maps API, TDD using Karma runner )*
  
  - */ejemplos/angular/lookAround*
  - [Repo](https://github.com/shidhincr/LookAround)
  - [Demo](http://lookaround.herokuapp.com/)
  * Technologies/Frameworks used here:
    - Angular JS
    - **Google Maps API** 
    - Google Analitycs (usa API en los controllers)
    - **Twitter bootstrap: angular-ui-bootstrap**
    - TDD ( Karma runner )
    - Yeoman ( Optional now )

  * Custom Directives:
    - Loading indicator (para mostrar pgina loaing)  <---- **VER**
    - gmaps - (renderMap: place the markers in the map) 
  * Service: define service (factory) para google maps  <--- **VER**  
  * Controller: usa google maps API para obtener ubicacion del zip code. **Usa $apply**

*****************************************************************************************************
## Testing ##

### End to End Testing with Protractor * ###
  - [Blog](http://thejackalofjavascript.com/end-to-end-testing-with-protractor)
  - Con explicaciones de testing      

*****************************************************************************************************
### [Tutoriales varios](http://angular.org.il/tutorials/ ) * ###

