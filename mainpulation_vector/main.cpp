using namespace std;
#include <iostream>
#include <vector>
#include "Donne.hpp"
#include "Donne.cpp"
int main()
{
    Donne table = Donne();

    table.addElement(30);
    table.addElement(10);
    table.addElement(11);

    vector<int> donne = table.getElement(30,0);

    for(int i:donne)
    {
        cout<<i<<endl;
    }
    return 0;
}