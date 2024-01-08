#include <iostream>
int main(){

    int nombre = 5;
    int cpt = 0;
        for(int i=2;i<nombre;i++)
        {
            if(nombre%i==0)
                cpt++;
        }
    if(cpt>0)
        std::cout<<"ce n'est pas un nombre premier"<<std::endl;
    else
        std::cout<<"c'est un nombre premier"<<std::endl;


    return 0;
}
