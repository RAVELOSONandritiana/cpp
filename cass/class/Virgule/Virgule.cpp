#ifndef __VIRGULE_CPP__
#define __VIRGULE_CPP__

Virgule::Virgule(std::string nom_fichier,std::string nouveau_fichier){
    this->nom_fichier= nom_fichier;
    this->nouveau_fichier = nouveau_fichier;
}

Virgule::~Virgule(){

}

void Virgule::gerer_virgules(){
    std::ifstream entrer {this->nom_fichier};
    std::ofstream sortie {this->nouveau_fichier};
    std::vector<std::string> tab_lignes {};

    if(entrer.is_open()){
        std::string ligne {};
        while(std::getline(entrer >> std::ws , ligne)){
            ligne = replaceAll(ligne,");",");\n");
            tab_lignes.push_back(ligne);
        }
    }

    for(std::string ligne : tab_lignes){
        sortie << ligne << "\n";
    }

}

#endif