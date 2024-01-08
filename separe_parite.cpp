#include <iostream>
#include <vector>
using namespace std;
int main(){
    vector<int> total {};
    vector<int> paire {};
    vector<int> impair{};
    int taille = 0;
    int var = 0;
    int cpt = 0;
    cout<<"Entrer la taille : ";
    cin>>taille;
        for(int i = 0;i<taille;i++)
        {
            cout<<"tab["<<i<<"] : ";
            cin>>var;
            total.push_back(var);
        }
            for(int i = 0;i<taille;i++)
            {
                if(total[i] % 2 == 0)
                    paire.push_back(total[i]);
                else
                    impair.push_back(total[i]);
            }
        for(int element : paire)
        {
            if(cpt == 0)
                cout<<"PAIR   : | ";
            cout<<element<<" | ";
            cpt++;
        }
        cout<<""<<endl;
        cpt = 0;
        for(int element : impair)
        {
            if(cpt == 0)
                cout<<"IMPAIR : | ";
            cout<<element<<" | ";
            cpt++;
        }
        cout<<""<<endl;
    cout<<"FIN DU PROCESSUS DE SEPARATION A PARTIR DE LA PARITE"<<endl;
    return 0;
}
