#include <iostream>
#include <sstream>
using namespace std;
string replaceAll(string chaine,string ancien,string nouveau);
int main(){


    // cout << replaceAll("#include <stdio.h>",");",");\n");
    // cout << replaceAll("hello",");",");\n");

    return 0;
}


std::string replaceAll(std::string chaine,std::string ancien,std::string nouveau){
    int len_ancien = ancien.size();
    std::stringstream ss {};
    size_t pos = 0;
    int debut = 0;
    if((pos = chaine.find(ancien,pos)) != std::string::npos){
        while((pos = chaine.find(ancien,pos)) != std::string::npos){
            ss << chaine.substr(debut,pos - debut) << nouveau;
            pos++;
            debut = pos+len_ancien-1;
        }
    }
    else{
        return chaine;
    }
    return ss.str();
}