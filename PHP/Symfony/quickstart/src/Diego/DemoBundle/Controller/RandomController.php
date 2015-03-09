<?php

namespace Diego\DemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
// use Symfony\Component\HttpFoundation\Response;

class RandomController extends Controller
{
    public function indexAction($limit)
    {
        
        //return new Response('<html><body>Number: '.rand(1, $limit).'</body></html>');
        $number = rand(1,$limit);

        return $this->render(
            'DiegoDemoBundle:Random:index.html.twig',
            array('number' => $number)
        );

        // render a PHP template instead
        // return $this->render(
        //     'AcmeDemoBundle:Random:index.html.php',
        //     array('number' => $number)
        // );


    }
}
