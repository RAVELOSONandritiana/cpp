#include <iostream>
#include "class/Accolade/Accolade.hpp"
#include "class/Virgule/Virgule.hpp"
using namespace std;
int main(int argc,char **argv){
    string nomFichier = "virgule.cass.cass";
    Virgule *v = new Virgule(argv[1],nomFichier);
    v->gerer_virgules();
    Accolade * a = new Accolade(nomFichier,argv[2]);
    remove("virgule.cass.cass");
    return 0;
}

