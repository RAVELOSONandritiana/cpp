using namespace std;
#include <iostream>
#include "confiserie.cpp"
#include "confiserie.hpp"
int main()
{
    Confiserie c1 = Confiserie();
    c1.setName("Jus de coco");
    c1.setPrix(1000);
    c1.afficheToi();

    Confiserie c2 = Confiserie();
    c2.setName("Jus de cocombre");
    c2.memePrix(c1);
    c2.afficheToi();
    return 0;
}