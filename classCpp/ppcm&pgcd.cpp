#include <iostream>
using namespace std;
/***********************************************/
class Valeur{
    private:
        int a = 0,b = 0;
    public:
    //Le constructeur
        Valeur(int n,int m):a(n),b(m){}
        void getPpcm(int &ppcm){
            int t = a*b;
            //Tableau pour stocker les donnes
            long int *tab_a = new long int[t];
            long int *tab_b = new long int[t];
            for(int i = 0;i < t;i++)
                tab_a[i] = a*i;
            for(int i = 0;i < t;i++)
                tab_b[i] = i*b;
            int cpt = 0;
            for(int i = 0;i < t;i++)
            {
                for(int j = 0;j < t;j++)
                {
                    if(tab_a[i] == tab_b[j] && tab_b[j] != 0 && cpt == 0)
                    {
                        ppcm = tab_a[i];
                        cpt++;
                    }
                }
            }
        }
        void getPgcd(int &pgcd){
            Valeur initial(a,b);
            int p_init = 0;
            initial.getPpcm(p_init);
            pgcd = ((a*b)/p_init);
        }
};
/***********************************************/
int main(){
    int ppcm = 0;
    int pgcd = 0;
    Valeur v(666,11);
    v.getPpcm(ppcm);
    v.getPgcd(pgcd);
    cout<<"PPCM : "<<ppcm<<" et PGCD : "<<pgcd<<endl;
    return 0;
}
