#ifndef FICHIER_FONCTION_H
#define FICHIER_FONCTION_H
#include "fichier_class.h"
Nombre::Nombre(int a){
    this->a = a;
}
void Nombre::carre(int &a){
    a*=a;
}
#endif
