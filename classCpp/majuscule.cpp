#include <iostream>
#include <string>
#include <cctype>
using namespace std;
class Maj{
    private:
        string mot;
        int taille = 0;
    public:
//Declaration du constructeur
        Maj(string mot):mot(mot){}
//Methode pour mettre en majuscule
        void majuscule(string &mot){
            for(char c:mot)
                taille++;

            for(int i = 0;i<taille;i++)
            {
                mot[i] = toupper(mot[i]);
            }
        }
//Declaration du destructeur
        ~Maj(){}

};

int main(){
    string mot;
    cout<<"Entrer mot  : ";
    cin>>mot;
    cout<<mot;
    Maj name(mot);
    name.majuscule(mot);
    cout<<"Mot modifie : ";
    cout<<mot;

    return 0;
}
