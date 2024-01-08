#include <iostream>
#include <cstdlib>
#include <cctype>
#define TAILLE 50
using namespace std;
int main(){
    char *nom;
        nom = new char[TAILLE];
    int nombre = 0;
    int confirmation;
    cout<<"Entret votre ID : ";
    cin>>nom;
    nom[0] = toupper(nom[0]);
    do{
        cout<<"Entrer la table a afficher mr"<<nom<<" : ";
        cin>>nombre;
        for (int i = 0;i<11;i++)
        {
            cout<<nombre<<" x "<<i<<" = "<<nombre*i<<endl;
        }
        do{
            cout<<"Relancer?[1/0] ";
            cin>>confirmation;
        }while(confirmation!=0 && confirmation!=1);
    }while(confirmation == 1);
    return 0;
}
