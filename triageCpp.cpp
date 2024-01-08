#include <iostream>
#include <list>
#include <vector>
#include <algorithm>
using namespace std;
int main(){
    list<int> maListe = {2,0,9,56,34,26,78};
    vector<int> maVector = {2,0,9,56,34,26,78};
    maListe.sort();
    maListe.reverse();
    sort(maVector.begin(),maVector.end());
    for(int el : maListe)
        cout<<el<<" ";
    cout<<endl;
    for (int el : maVector)
        cout<<el<<" ";
//Vector afka ampiasana indice
    cout<<maVector[0];

    return 0;
}
