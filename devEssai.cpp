#include <iostream>
using namespace std;
int main(){

    int nombre = 5;
    int somme = 0;
    int nombre2 = 3;
        for(int i=0;i<=10;i++)
        {
            somme=i*nombre;
            //printf("%d x %d = ",i,nombre);
            cout<<i;
            cout<<" x ";
            cout<<nombre;
            cout<<" = ";
            cout<<i*nombre<<endl; 
        }

    return 0;
}
