#include "./object/Directory/Directory.hpp"
#include "./object/Fichier/Fichier.hpp"
#include "./object/Compiler/Compiler.hpp"

using namespace std;

int main(int argc, char *argv[]){

    //manipulation pour tout les fichiers
    Fichier *file = new Fichier();
    file->setSrc(argv[1]);
    
    if(argc > 2){
        file->setDst(argv[2]);
    }
    else{
        file->setDst();
    }

    file->listFile = file->getAllFiles();

    //creation de tout les repertoires
    Directory *directory = new Directory();
    directory->getDir(file->listFile);
    directory->createDirectory(file->getSrc(),file->dstname);

    Compiler *compiler = new Compiler();
    compiler->compile(file->listFile,file->getSrc(),file->getDst());

    return 0;
}
