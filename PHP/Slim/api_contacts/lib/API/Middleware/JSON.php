<?php
namespace API\Middleware;

/*
 * JSON Middleware:
 * We can pass a root path to our middleware constructor. 
 * In this case I’m passing /api/v1 so that our middleware is applied only on the API part of our site. 
 * If the current path matches the response content type header is forced to application/json, then I check the request method. 
 * If the request method is one of the write-enabled ones (PUT, POST, PATCH) the request content type header must be application/json, if not the application exits with a 415 Unsupported Media Type HTTP status code.
 */
class JSON extends \Slim\Middleware
{
    public function __construct($root = '')
    {
        $this->root = $root;
    }

    // JSON middleware call  
    public function call()
    {
        // realiza la accion sólo si el request está precedido por root (por ej: /api/v1)
        if (preg_match('|^' . $this->root . '.*|', $this->app->request->getResourceUri() )) {
            
            // Force response headers to JSON
            $this->app->response->headers->set('Content-Type','application/json');
            
            $method = strtolower($this->app->request->getMethod());
            $mediaType = $this->app->request->getMediaType();

            // If the request method is one of the write-enabled ones (PUT, POST, PATCH) 
            // the request content type header must be application/json, 
            // if not the application exits with a 415 Unsupported Media Type HTTP status code.
            if (in_array($method,array('post', 'put', 'patch') ) 
                && '' !== $this->app->request()->getBody()) {
                
                if (empty($mediaType)  || $mediaType !== 'application/json') {
                    $this->app->halt(415);
                }
            }
        }
        $this->next->call(); //runs the next middleware in the chain.
    }    

}