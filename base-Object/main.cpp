#include <iostream>
#include "Mere.hpp"
#include "Fils.hpp"
int main()
{
    Fils *fils = new Fils("junior",18);

    cout << fils->getName() << endl;

    return 0;
}