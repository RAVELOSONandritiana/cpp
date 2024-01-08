#include <iostream>
using namespace std;
int main(){

    int nombre = 10;
    int somme = 0;
        cout<<"Veuillez entrer un nombre entier : ";
        scanf("%d",&nombre);
        int stop = 0;
        int cpt = 0;
        cout<<"combien voulez vous en afficher  : ";
        scanf("%d",&stop);
        do{
            somme=0;
            for(int i=1;i<nombre;i++)
            {
                if(nombre%i==0)
                    somme+=i;
            }
                if(somme == nombre)
                {
                    cout<<nombre<<endl;
                    cpt++;
                }
            nombre++;
        }while(cpt != stop);
    return 0;
}
