<?php

// Initilization
require_once dirname(__FILE__) . '/../bootstrap.php';

use API\Middleware\TokenOverBasicAuth;
use API\Exception;
use API\Exception\ValidationException;

/* ROUTING STRUCTURE */
// Two nested groups, /api and /v1, so we can easily adhere to the “versioning in the URL” best practice

// General API group
$app->group('/api', function () use ($app, $log) {

    // Common to all sub routes
    // Get contacts
    $app->get('/', function () {
        echo "<h1>This can be the documentation entry point</h1>";
        echo "<p>This URL could also contain discovery"
        ." information in side the headers</p>";
    });
 
    // Group for API Version 1
    $app->group('/v1', function () use ($app, $log) {
 
        include '../lib/routesContacts.php';

        include '../lib/routesNotes.php';

 
    });
 
});


// Public human readable home page
$app->get(
    '/',
    function () use ($app, $log) {
        echo "<h1>Hello, this can be the public App Interface</h1>";
    }
);


/* Consumable error payloads */


/* JSON friendly errors
 * NOTE: debug must be false or default error template will be printed
 *
 * $app->error() method is triggered when there is an exception and Slim transforms standard PHP errors in ErrorException objects
 * give a useful error to the client without exposing too much of our internal mechanism in order to avoid security flaws 
 * 
 * The $app->error() method receives the thrown exception as argument. By default I fetch all the data I need and fill the $error array, 
 * then if I’m in production mode I unset the private data and rewrite the message with a generic one
 *
 * The custom ValidationException class has a custom getData() method that returns an array of validation errors that are added to the final payload
 */
$app->error(function (\Exception $e) use ($app, $log) {

    $mediaType = $app->request->getMediaType();

    $isAPI = (bool) preg_match('|^/api/v.*$|', $app->request->getPath());

    // Standard exception data
    $error = array(
        'code' => $e->getCode(),
        'message' => $e->getMessage(),
        'file' => $e->getFile(),
        'line' => $e->getLine(),
    );

    // Graceful error data for production mode
    if (!in_array( get_class($e),  array('API\\Exception', 'API\\Exception\ValidationException'))
        && 'production' === $app->config('mode')) {
        
        $error['message'] = 'There was an internal error';
        unset($error['file'], $error['line']);
    }

    // Custom error data (e.g. Validations)
    if (method_exists($e, 'getData')) {
        $errors = $e->getData();
    }

    if (!empty($errors)) {
        $error['errors'] = $errors;
    }

    $log->error($e->getMessage());
    if ('application/json' === $mediaType || true === $isAPI) {
        $app->response->headers->set('Content-Type','application/json');
        echo json_encode($error, JSON_PRETTY_PRINT);
    } else {
        echo '<html>
        <head><title>Error</title></head>'.
        '<body><h1>Error: ' . $error['code'] . '</h1>'.
        '<p>' . $error['message'].'</p></body></html>';
    }

});

 

/* Custom 404 error 
 * If the client requested an API URL or sent a JSON content type header I’m returning a JSON output, 
 * else I can render a template or simply print some static HTML, as in this example
 */ 
$app->notFound(function () use ($app) {

    $mediaType = $app->request->getMediaType();

    $isAPI = (bool) preg_match('|^/api/v.*$|', $app->request->getPath());


    if ('application/json' === $mediaType || true === $isAPI) {

        $app->response->headers->set('Content-Type','application/json');

        echo json_encode(
            array(
                'code' => 404,
                'message' => 'Not found'
            ),
            JSON_PRETTY_PRINT
        );

    } else {
        echo 
        '<html><head><title>404 Page Not Found</title></head>
        <body>
            <h1>404 Page Not Found</h1>
            <p>The page you are looking for could not be found.</p>
        </body></html>';
    }
});

$app->run();