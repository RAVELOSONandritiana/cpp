#include <iostream>
using namespace std;
class Voiture{
    public:
        int vitesse = 0;
    int maVitesse(int vitesse){
        vitesse+=10;
        return vitesse;
    }
};
int main(){
    Voiture car;
    int vitesse = 50;
    cout<<vitesse<<endl;
    vitesse = car.maVitesse(vitesse);
    cout<<vitesse<<endl;
    Voiture *ptr = &car;
    vitesse = ptr->maVitesse(vitesse);
    cout<<vitesse<<endl;

    return 0;
}