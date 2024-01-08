#include <iostream>
#include <cmath>
using namespace std;
class Equa2{
    private:
        float a,b,c,delta,x1,x2,x;
    public:
/*
        void initialise(float x,float y,float z){
            a = x;
            b = y;
            c = z;
        }
*/
        Equa2(float x,float y,float z):a(x),b(y),c(z){}
        void resolve(){
            delta = b*b-4*a*c;
            x1 = ((-b-sqrt(delta))/(2*a));
            x2 = ((-b+sqrt(delta))/(2*a));
            x = -c/2*a;
        }
        void affiche(){
            if(delta < 0)
                cout<<"Aucune solution reel pour cette equation"<<endl;
            else if(delta == 0)
                cout<<"racine double : "<<x<<endl;
            else{
                cout<<"x1 = "<<x1<<endl;
                cout<<"x2 = "<<x2<<endl;
            }
        }
        ~Equa2(){}
};
int main(){
    Equa2 eq(2,5,-3);
    //eq.initialise(2,5,-3);
    eq.resolve();
    eq.affiche();
    return 0;
}
