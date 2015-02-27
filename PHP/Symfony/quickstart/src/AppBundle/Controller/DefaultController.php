<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/ejemplo", name="homepage")
     */
    public function indexAction(Request $request)
    {
    	
    	//return $this->render('default/index.html.twig');
    	
    /* Returning Raw Responses */
    	//return new Response('Welcome to Symfony!');
    	
    /* Displaying Error Pages */
    	//throw $this->createNotFoundException();	//error 404
    	//throw new \Exception('Something went horribly wrong!');	//error 500

	/* Getting Information from the Request */
    	// is it an Ajax request?
        $notAjax = !$request->isXmlHttpRequest();
        // what's the preferred language of the user?
        $language = $request->getPreferredLanguage(array('en', 'fr','es'));
        // get the value of a $_GET parameter
        $pageName = $request->query->get('page');
        // get the value of a $_POST parameter
        //$pageName = $request->request->get('page');
        //
        //return new Response($notAjax."  ".$language."  ".$pageName);
        
    /* Persisting Data in the Session */    
    	$session = $request->getSession();
	   	// store an attribute for reuse during a later user request
    	$session->set('foo', 'bar');
    	//return new Response("sesion seteada");
    	// get the value of a session attribute
    	//$foo = $session->get('foo');
    	//return new Response("sesion - foo:".$foo);
    	// use a default value if the attribute doesn't exist
    	$foo = $session->get('foo', 'default_value');
    	//return new Response("sesion - foo:".$foo);
    	
    	// store a message for the very next request
    	$session->getFlashBag()->add('notice', 'Congratulations, your action succeeded!');

    /* Redirecting and Forwarding */
    	//return $this->redirect($this->generateUrl('hello_name', array('name' => 'Mundo')));
    	
    	return $this->forward('AppBundle:Default:hello', array(
            'name'  => "Pepe",
        )); 

    


    	       
        
    }


    /**
     * @Route("/hello/{name}.{_format}",
     *     defaults = {"_format"="html","name"="world"},
     *     requirements = { "_format" = "html|xml|json" },
     *     name = "hello_name"
     * )
     */
    public function helloAction($name, $_format='html')
    {
        return $this->render('default/hello.'.$_format.'.twig', array(
            'name' => $name
        ));
    }
}
