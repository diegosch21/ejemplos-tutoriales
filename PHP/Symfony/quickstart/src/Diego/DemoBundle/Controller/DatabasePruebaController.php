<?php

namespace Diego\DemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;
use Diego\DemoBundle\Entity\Product; 
use Diego\DemoBundle\Entity\Category;

class DatabasePruebaController extends Controller
{
    /**
     * @Route("/create")
     */
    public function createAction()
    {
        $category = new Category();
        $category->setName('Main Products');

        $product = new Product();
        $product->setName('A Foo Bar');
        $product->setPrice('19.99');
        $product->setDescription('Lorem ipsum dolor');
        // relate this product to the category
        $product->setCategory($category);

        $em = $this->getDoctrine()->getManager();
        $em->persist($category);
        $em->persist($product);
        $em->flush();

        return $this->render(
            'DiegoDemoBundle:Database:view.html.twig',
            array(
                'accion' => 'Created product',
                'data' => 'Id: '.$product->getId().' Category id: '.$category->getId()
            )
        );

    }

    /**
     * @Route("/show/{id}")
     */
    public function showAction($id)
    {
        // 1 query ahora, otra query despues cuando obtiene nombre de category
        $product = $this->getDoctrine()
            ->getRepository('DiegoDemoBundle:Product')
            ->find($id);
        if (!$product) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }    

        /* 1 query con JOIN (metodo en ProductRepository) */
        // $product = $this->getDoctrine()
        //         ->getRepository('DiegoDemoBundle:Product')
        //         ->findOneByIdJoinedToCategory($id);

        $category = $product->getCategory();  
        echo get_class($category).'<br/>';
        if ($category)  
            $categoryName = $category->getName();   // Si use la priera alternativa acá vuelve a hacer query para obtener el nombre (lazy)
        else                                        // Si use el JOIN, ya tiene esta data
            $categoryName = "-";


        return $this->render(
            'DiegoDemoBundle:Database:view.html.twig',
            array(
                'accion' => 'Mostrando producto...',
                'data' => 'Product id: '.$product->getId().' name: '.$product->getName().' price: '.$product->getPrice().' Category: '.$categoryName
            )
        );      
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
        $product->setPrice('52.569');

        echo get_class($product).'<br/>';
        
        $category = $product->getCategory(); 
        if (!$category || $category->getId(2)) {
            $category = $em->getRepository('DiegoDemoBundle:Category')
                ->find(2);
            $product->setCategory($category);
        }
        $category->setName('Category updated by '.$id);

        echo get_class($category).'<br/>';

        //$em->persist($category);
        $em->flush();

        //return $this->redirect($this->generateUrl('diego_demo_homepage',array('limit' => 10)));
        return $this->render(
            'DiegoDemoBundle:Database:view.html.twig',
            array(
                'accion' => 'Cambio nombre y precio producto...',
                'data' => 'Product id: '.$product->getId().' name: '.$product->getName().' Category name: '.$category->getName()
            )
        );
    }

    /**
     * @Route("/remove/{id}")
     */
    public function removeAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository('DiegoDemoBundle:Product')->find($id);

        if (!$product) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }
        $productid = $product->getId();
        $em->remove($product);
        $em->flush();

        //return $this->redirect($this->generateUrl('diego_demo_homepage',array('limit' => 10)));
        return $this->render(
            'DiegoDemoBundle:Database:view.html.twig',
            array(
                'accion' => 'Remove product...',
                'data' => 'Producto borrado id: '.$productid
            )
        );
    }

    /**
     * @Route("/show")
     */
    public function showUpdatedAction()
    {
        $products = $this->getDoctrine()
            ->getRepository('DiegoDemoBundle:Product')
            ->findByName("New product name!");

        $data = array();    
        foreach ($products as $key => $product) {
            array_push($data, 'Product id: '.$product->getId().' name: '.$product->getName().' price: '.$product->getPrice());    
        }    

        return $this->render(
            'DiegoDemoBundle:Database:view.html.twig',
            array(
                'accion' => 'Mostrando productos con nombre actualizado...',
                'data' => json_encode($data)
            )
        );      
    }

    /**
     * @Route("/show_category")
     */
    public function showProductsCategoryUpdatedAction()
    {
        $category = $this->getDoctrine()
               ->getRepository('DiegoDemoBundle:Category')
               ->find(2);
        echo get_class($category).'<br/>';       
        $products = $category->getProducts();       
        echo get_class($products).'<br/>';

        $data = array();    
        foreach ($products as $key => $product) {
            array_push($data, 'Product id: '.$product->getId().' name: '.$product->getName().' price: '.$product->getPrice().' Category name: '.$category->getName());    
        }    

        return $this->render(
            'DiegoDemoBundle:Database:view.html.twig',
            array(
                'accion' => 'Mostrando productos con categoria actualizada...',
                'data' => json_encode($data)
            )
        );      
    }

    /**
     * @Route("/show/price/{p}")
     */
    public function showPriceAction($p)
    {
        
        /* USANDO QUERY BUILDER */
        // $repository = $this->getDoctrine()->getRepository('DiegoDemoBundle:Product');
        // $query = $repository->createQueryBuilder('p')
        //     ->where('p.price >= :price')
        //     ->setParameter('price', $p)
        //     ->orderBy('p.price', 'ASC')
        //     ->getQuery();
        // $products = $query->getResult();
        
        /* USANDO DQL */
        // $query = $this->getDoctrine()->getManager()->createQuery(
        //     "SELECT p
        //     FROM DiegoDemoBundle:Product p
        //     WHERE p.price >= :price
        //     ORDER BY p.price ASC"
        // )->setParameter('price', $p);
        // $products = $query->getResult();

        /* USANDO funcion definida en ProductRepository */
        $products = $this->getDoctrine()->getManager()
            ->getRepository('DiegoDemoBundle:Product')->findAllMayorPrecio($p); 

        $data = array();    
        foreach ($products as $key => $product) {
            array_push($data, 'Product id: '.$product->getId().' name: '.$product->getName().' price: '.$product->getPrice());    
        }    

        return $this->render(
            'DiegoDemoBundle:Database:view.html.twig',
            array(
                'accion' => 'Mostrando productos con precio mayor a '.$p,
                'data' => json_encode($data)
            )
        );      
    }



}
