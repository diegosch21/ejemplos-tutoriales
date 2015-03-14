#How to create REST API for Android app using PHP, Slim and MySQL#

* [Blog - Parte 1](http://www.androidhive.info/2014/01/how-to-create-rest-api-for-android-app-using-php-slim-and-mysql-day-12-2/): Explicaciones REST API, instalación, creación de BD
* [Blog - Parte 2](http://www.androidhive.info/2014/01/how-to-create-rest-api-for-android-app-using-php-slim-and-mysql-day-23/): PHP


##Task manager API##
1. User related operations like registration and login
2. Task related operations like creating, reading, updating and deleting task. All task related API calls should include API key in Authorization header field.    

####API Url Structure####

http://localhost/ejemplos/PHP/Slim/task_manager/v1

| URL        | Method | Parameters            | Description          |
|------------|--------|-----------------------|----------------------|
| /register  | POST   | name, email, password | User registration    |
| /login     | POST   | email, password       | User login           |
| /tasks     | POST   | task                  | To create new task   |
| /tasks     | GET    |                       | Fetching all tasks   |
| /tasks/:id | GET    |                       | Fetching single task |
| /tasks/:id | PUT    | task, status          | Updating single task |
| /tasks/:id | DELETE |                      g | Deleting single task |

####Database tables####

* **users** – All user related data will be stored here. A row will inserted when a new user register in our app.
* **tasks** – All user tasks data will be stored in this table
* **user_tasks** – Table used to store the relation between user and his tasks. Basically we store users id and task id in this table

####PHP Project directory structure####

* **vendor** – All the third party libraries goes here. In our case we place Slim library here
* **include** – All the helpers classes we build placed here
    - PassHash: Generacion de password encriptada
    - DbHandler: funciones de acceso a la BD, usando mysqli - especificas de la logica de la aplicacion
    - Functions:
        - verifyRequiredParams() – This function verifies the mandatory parameters in the request.
        - validateEmail() – Verifies whether email address is valid one or not.
        - echoRespnse() – This function will echo the JSON response with a status code.
* **v1/index.php** – Takes care of all the API requests
* **v1/.htaccess** – Rules for url structure and other apache rules

####Testing####

Usando extensión Chrome: Advenced REST Client
