#include "./Fichier.hpp"

int main(){
    Fichier *file = new Fichier();
    file->setSrc("/run/media/misa/2BFF929B3D4D228B/code/programme/c++/tersermin/dist");
    file->setDst();
    file->listFile = file->getAllFiles();
    file->formatList();
    return 0;
}
