#include <iostream>
#include "./src/Object/Ip.hpp"
#include "./src/func/chaine.hpp"

using namespace std;

int main()
{
    
    Ip *i = new Ip();
    i->createSecurity();
    return 0;
}