#include <iostream>
#include "fichier_fonction.h"
using namespace std;
int main(){

    int a = 2;

    Nombre num(a);
    num.carre(a);
    cout<<a<<endl;
    num.carre(a);
    cout<<a<<endl;
    return 0;
}
