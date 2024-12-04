#include "./Directory.hpp"
#include "../Fichier/Fichier.hpp"
#include "../Compiler/Compiler.hpp"

using namespace std;

int main(){

    //manipulation pour tout les fichiers
    Fichier *file = new Fichier();
    file->setSrc("/run/media/misa/2BFF929B3D4D228B/code/programme/cpp/tersermin/dist");
    file->setDst();
    file->listFile = file->getAllFiles();

    //creation de tout les repertoires
    Directory *directory = new Directory();
    directory->getDir(file->listFile);
    directory->createDirectory(file->getSrc(),file->dstname);

    Compiler *compiler = new Compiler();
    compiler->compile(file->listFile,file->getSrc(),file->getDst());

    return 0;
}
