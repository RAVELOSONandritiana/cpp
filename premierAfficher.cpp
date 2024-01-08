#include <iostream>
using namespace std;
int main(){

    int afficher = 0;
    int nombre = 2;
    int cpt = 0;
    int stop = 0;
    int n = 0;
    int manisa = 1;
        cout << "Ce programme affiche les nombres premiers et c'est a vous de donner le nombre a afficher"<<endl;
        cout <<"Combien voulez vous en afficher : ";
        scanf("%d",&n);
    do{

        cout<<manisa;
        do{
            cpt = 0;
            for(int i=2;i<nombre;i++)
            {
                if(nombre%i==0)
                {
                    cpt++;              //compte le nombre de diviseur du nombre
                }
            }
                if(cpt == 0)
                {
                    
                    cout<<" - ";
                    cout<<nombre<<endl;
                    stop++;

                }
            nombre++;
        }while(cpt != 0);
        manisa++;
    }while(stop != n);

    return 0;
}