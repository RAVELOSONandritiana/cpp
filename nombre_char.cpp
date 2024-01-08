#include <iostream>
#include <string>
#include <cctype>
using namespace std;
int main(){
    string mot = "Andritiana Michel";
    char s  = '1';
    int cpt = 0;
    cout<<"Entrer le caractere a rechercher : ";
    cin>>s;
    char original = 'A';
    original = tolower(s);
    for(char c : mot)
    {
        c = tolower(c);
        if(c == original)
            cpt++;
    }
    if(cpt != 0)
        cout<<"Il y a "<<cpt<<" ("<<s<<") dans cette chaine"<<endl;
    else
        cout<<"Il n'y a aucun "<<"("<<s<<") dans cette chaine"<<endl;

    return 0;
}
