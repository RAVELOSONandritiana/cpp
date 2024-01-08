#include <iostream>
using namespace std;
class Couple{
    protected:
        int a,b;
    public:
        Couple(int a,int b):a(a),b(b){}
        void getPgcd(int &pgcd){
            int reste,nombre_avant,nombre_apres;
            reste = 1;
            nombre_avant=(a>b)?a:b;
            nombre_apres=(a>b)?b:a;
            while(reste)
            {
                pgcd = reste;
                reste = nombre_avant%nombre_apres;
                nombre_avant = nombre_apres;
                nombre_apres = reste;
            }
        }
        void getPpcm(int &ppcm){
            Couple c(a,b);
            int pgcd = 0;
            c.getPgcd(pgcd);
            ppcm = (a*b)/pgcd;
        }
    ~Couple(){}
};
int main(){
    int pgcd = 0;
    int ppcm = 0;
    int a = 11,b = 666;
    Couple nombre(a,b);
    nombre.getPgcd(pgcd);
    nombre.getPpcm(ppcm);
    cout<<"PGCD : "<<pgcd<<endl;
    cout<<"PPCM : "<<ppcm<<endl;
    return 0;
}
