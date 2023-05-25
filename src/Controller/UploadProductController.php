<?php

namespace App\Controller;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploadProductController extends AbstractController
{
    private $manager; 

    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;
    }
   
    public function __invoke(Request $request)
    {
        $data = new Product();
        $uploadedFile = $request->files->get('image');
        if(!$uploadedFile)
        {
            die('You need a file upload');
        }else{
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = transliterator_transliterate('Any-Latin; Latin-ASCII; [^A-Za-z0-9_] remove; Lower()', $originalFilename);
            $newFilename = $safeFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
            try{
                $uploadedFile->move(
                    $this->getParameter('uploads_directory'),
                    $newFilename
                );
            }catch(FileException $e)
            {
                return $e->getMessage();
            }

            $data->setImage($newFilename);
        }
        


    }
}
