#include <iostream>
using namespace std;
class Carre{
    public:
        int init = 0;
    public:
        Carre(int init):init(init){};
        int getDouble(){
            return init*init;
        }
};
class Cube:public Carre{
    public:
        Cube(int init):Carre(init){};
        int getCube(){
            Carre douBle(init);
            return douBle.getDouble()*2;
        }
};
int main(){
    Carre nombre(4);
    int resultat = nombre.getDouble();
    cout<<resultat;

    Cube triple(2);
    resultat = triple.getCube();
    cout<<resultat;
    return 0;
}