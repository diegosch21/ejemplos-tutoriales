<?php

namespace Diego\DemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;
use Diego\DemoBundle\Entity\Product; 

class DatabasePruebaController extends Controller
{
    /**
     * @Route("/create")
     */
    public function createAction()
    {
        $product = new Product();
        $product->setName('A Foo Bar');
        $product->setPrice('19.99');
        $product->setDescription('Lorem ipsum dolor');

        $em = $this->getDoctrine()->getManager();

        $em->persist($product);
        $em->flush();

        return new Response('Created product id '.$product->getId());

    }

    /**
     * @Route("/show/{id}")
     */
    public function showAction($id)
    {
        $product = $this->getDoctrine()
            ->getRepository('DiegoDemoBundle:Product')
            ->find($id);

        if (!$product) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }

        // ... do something, like pass the $product object into a template
        return new Response('Product id: '.$product->getId().' name: '.$product->getName().' price: '.$product->getPrice());
    }

    /**
     * @Route("/update/{id}")
     */
    public function updateAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository('DiegoDemoBundle:Product')->find($id);

        if (!$product) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }

        $product->setName('New product name!');
        $em->flush();

        return $this->redirect($this->generateUrl('diego_demo_homepage',array('limit' => 10)));
    }


}
