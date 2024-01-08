//ecrire dans un fichier
//lire dans le fichier
#include <fstream>
#include <iostream>
#include <string>
using namespace std;
int main(){
	cout<<"phrase : ";
	string phrase {""};
	getline(cin,phrase);
	ofstream fichier {"file.txt"};
	fichier << phrase;
	fichier.close();
	ifstream file{"file.txt"};
	while(getline(file,phrase))
		cout<<phrase;
	file.close();
	return 0;
}
