using namespace std;
#include <iostream>
#include <vector>
#include "Calcul.hpp"
#include "Calcul.cpp"
int main()
{
    Calcul c = Calcul();
    c.init(6,15);
    cout << c.get_ppcm();
    return 0;
}