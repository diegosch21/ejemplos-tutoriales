<?php
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

session_start(); 

$app = new \Slim\Slim();

//$app->get('/employees', 'getEmployees');
//$app->get('/employees/:id', 'getEmployee');
//$app->get('/employees/:id/reports', 'getReports');

// I add the login route as a post, since we will be posting the login form info
$app->post('/login', 'login');

$app->get('/employees', authorize('user'), 'getEmployees');
$app->get('/employees/:id',	authorize('user'),'getEmployee');
$app->get('/employees/:id/reports',	authorize('user'),'getReports');
$app->get('/employees/search/:query', authorize('user'),'getEmployeesByName');
$app->get('/employees/modifiedsince/:timestamp', authorize('user'), 'getModifiedEmployees');

$app->run();

function getEmployees() {

    if (isset($_GET['name'])) {
        return getEmployeesByName($_GET['name']);
    } else if (isset($_GET['modifiedSince'])) {
        return getModifiedEmployees($_GET['modifiedSince']);
    }

    $sql = "select e.id, e.firstName, e.lastName, e.title, count(r.id) reportCount " .
            "from employee e left join employee r on r.managerId = e.id " .
            "group by e.id order by e.lastName, e.firstName";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $employees = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        // Include support for JSONP requests
        if (!isset($_GET['callback'])) {
            echo json_encode($employees);
        } else {
            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
        }

    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
    echo "go";
}

function getEmployee($id) {
    $sql = "select e.id, e.firstName, e.lastName, e.title, e.officePhone, e.cellPhone, e.email, e.managerId, e.twitterId, CONCAT(m.firstName, ' ', m.lastName) managerName, count(r.id) reportCount " .
            "from employee e " .
            "left join employee r on r.managerId = e.id " .
            "left join employee m on e.managerId = m.id " .
            "where e.id=:id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("id", $id);
        $stmt->execute();
        $employee = $stmt->fetchObject();
        $db = null;

        // Include support for JSONP requests
        if (!isset($_GET['callback'])) {
            echo json_encode($employee);
        } else {
            echo $_GET['callback'] . '(' . json_encode($employee) . ');';
        }

    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function getReports($id) {

    $sql = "select e.id, e.firstName, e.lastName, e.title, count(r.id) reportCount " .
            "from employee e left join employee r on r.managerId = e.id " .
            "where e.managerId=:id " .
            "group by e.id order by e.lastName, e.firstName";

    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("id", $id);
        $stmt->execute();
        $employees = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        // Include support for JSONP requests
        if (!isset($_GET['callback'])) {
            echo json_encode($employees);
        } else {
            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
        }

    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function getEmployeesByName($name) {
    $sql = "select e.id, e.firstName, e.lastName, e.title, count(r.id) reportCount " .
            "from employee e left join employee r on r.managerId = e.id " .
            "WHERE UPPER(CONCAT(e.firstName, ' ', e.lastName)) LIKE :name " .
            "group by e.id order by e.lastName, e.firstName";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $name = "%".$name."%";
        $stmt->bindParam("name", $name);
        $stmt->execute();
        $employees = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        // Include support for JSONP requests
        if (!isset($_GET['callback'])) {
            echo json_encode($employees);
        } else {
            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
        }

    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}

function getModifiedEmployees($modifiedSince) {
    if ($modifiedSince == 'null') {
        $modifiedSince = "1000-01-01";
    }
    $sql = "select * from employee WHERE lastModified > :modifiedSince";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("modifiedSince", $modifiedSince);
        $stmt->execute();
        $employees = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;

        // Include support for JSONP requests
        if (!isset($_GET['callback'])) {
            echo json_encode($employees);
        } else {
            echo $_GET['callback'] . '(' . json_encode($employees) . ');';
        }

    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function getConnection() {
    $dbhost="127.0.0.1";
    $dbuser="root";
    $dbpass="";
    $dbname="directory";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}

/**
 * Quick and dirty login function with hard coded credentials (admin/admin)
 * This is just an example. Do not use this in a production environment
 */
function login() {
    if(!empty($_POST['email']) && !empty($_POST['password'])) {
        // normally you would load credentials from a database. 
        // This is just an example and is certainly not secure
        if($_POST['email'] == 'admin' && $_POST['password'] == 'admin') {
            $user = array("email"=>"admin", "firstName"=>"Clint", "lastName"=>"Berry", "role"=>"user");
            $_SESSION['user'] = $user;
            echo json_encode($user);
        }
        else {
            echo '{"error":{"text":"You shall not pass..."}}';
        }
    }
    else {
        echo '{"error":{"text":"Username and Password are required."}}';
    }
}

/**
 * Authorise function, used as Slim Route Middlewear
 */
function authorize($role = "user") {
    return function () use ( $role ) {
        // Get the Slim framework object
        //$app = Slim::getInstance();
        $app = \Slim\Slim::getInstance();
       
        // First, check to see if the user is logged in at all
        if(!empty($_SESSION['user'])) {
            // Next, validate the role to make sure they can access the route
            // We will assume admin role can access everything
            if($_SESSION['user']['role'] == $role || 
                $_SESSION['user']['role'] == 'admin') {
                //User is logged in and has the correct permissions... Nice!
                return true;
            }
            else {
                // If a user is logged in, but doesn't have permissions, return 403
                $app->halt(403, 'You shall not pass!');
            }
        }
        else {
            // If a user is not logged in at all, return a 401
            $app->halt(401, 'Dude, you aren\'t logged in... sign in for me, will you?');

        }
    };
}