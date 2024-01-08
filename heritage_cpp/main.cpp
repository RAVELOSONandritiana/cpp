using namespace std;
#include <iostream>
#include <cmath>
#include "Forme.h"
#include "Forme.cpp"
#include "Cercle.h"
#include "Cercle.cpp"
#include "Carre.h"
#include "Carre.cpp"
#include "Rectangle.h"
#include "Rectangle.cpp"
int main(){

    Rectangle p = Rectangle();

    p.setProp(8,5);

    p.setColor("hello");

    p.afficheCouleur();

    cout<< p.getSurface()<<endl;

    return 0;
}