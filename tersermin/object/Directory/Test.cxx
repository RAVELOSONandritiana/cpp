#include "./Directory.hpp"
#include "../Fichier/Fichier.hpp"
using namespace std;
int main(){
    Fichier *file = new Fichier();
    file->setSrc("/run/media/misa/2BFF929B3D4D228B/code/programme/c++/tersermin/dist");
    file->setDst();
    file->listFile = file->getAllFiles();

    Directory *directory = new Directory();
    directory->getDir(file->listFile);
    directory->createDirectory(file->dstname);
    return 0;
}