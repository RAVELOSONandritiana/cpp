#include <iostream>
#include <vector>
#include <fstream>
using namespace std;
int cpt_espace(string chaine);
vector<int> getStatFile(string chemin_fichier);
int main()
{
	ifstream fichier {"doc.txt"};
	vector<int> file = getStatFile("doc.txt");
	int l = file[0];
	int c = file[1];
	int m = file[2];
	cout<<"ligne     : "<<l<<endl;
	cout<<"caractere : "<<c<<endl;
	cout<<"mot       : "<<m<<endl;
	return 0;
}
int cpt_espace(string chaine){
	int nb = 0;
	for(char c:chaine)
	{
		if(c == ' ')
			nb++;
	}
	return nb;
}

vector<int> getStatFile(string chemin_fichier)
{
	vector<int> ligne_caractere_mot {};
	ifstream fichier {chemin_fichier};
	string ligne {""};
	int cpt_ligne = 0;
	int caractere = 0;
	int cpt_mot = 0;
	while(getline(fichier,ligne))
	{
		cpt_mot+=cpt_espace(ligne);
		caractere+=size(ligne)-cpt_espace(ligne);
		cpt_ligne+=1;
		cpt_mot++;
	}
	cpt_mot--;
	ligne_caractere_mot.push_back(cpt_ligne);
	ligne_caractere_mot.push_back(caractere);
	ligne_caractere_mot.push_back(cpt_mot);
	return ligne_caractere_mot;
}
