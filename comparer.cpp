#include <iostream>
using namespace std;
int len(char *mot);
int equals(string m,string n);
int main(){
    string mot1 {"Hello"};
    string mot2 {"Hello"};
    if(equals(mot1,mot2) > 0)
        cout<<"Ce sont les memes mots qui de trouvent dans de variables differents"<<endl;
    else
        cout<<"Ce sont des mots differents"<<endl;

    return 0;
}
int len(string m){
    int taille = 0;
    for(char c : m)
    {
        taille++;
    }
    return taille;
}
//retoure -1 ou 1
int equals(string m,string n){
    int test = 0;
    int t_m = len(m);
    int t_n = len(n);

    if(t_m != t_n)
        return -1;

    else if(t_m == t_n)
    {
        for(int j = 0;j<t_m;j++)
        {
            for(int i = j;i<=j;i++)
            {
                if(m[i] != n[j])
                    return -1;
            }
        }
    }

    return 1;
}
