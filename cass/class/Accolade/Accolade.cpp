#ifndef __ACCOLADE_CPP__
#define __ACCOLADE_CPP__

Accolade::Accolade(std::string nom_fichier,std::string nouveau_fichier){
    this->nom_fichier = nom_fichier;
    this->nouveau_fichier = nouveau_fichier;
    this->clone();
    this->supprimer_ligne_vide();
    this->tabulation_avance(this->bloc(type::ouvert),this->bloc(type::fermer));
}

Accolade::~Accolade(){}

void Accolade::clone(){
    std::ifstream fichier {this->nom_fichier};
    std::ofstream sortie {this->nouveau_fichier};
    if(fichier.is_open()){
        std::string line;
        while(std::getline(fichier >> std::ws, line)){
            size_t pos = 0;

            while((pos = line.find("{",pos)) != std::string::npos){
                line.replace(pos,1,"\n{\n");
                pos += 2;
            }
            pos = 0;
            while((pos = line.find("}",pos)) != std::string::npos){
                line.replace(pos,1,"\n}\n");
                pos += 2;
            }
    next:;
            sortie << line << "\n";
        }
    }
    fichier.close();
    sortie.close();
}


std::vector<std::string> Accolade::lignes(){
    std::vector<std::string> tab_ligne {};
    std::ifstream fichier {this->nouveau_fichier};
    std::string line;
    while(std::getline(fichier >> std::ws , line)){
        tab_ligne.push_back(line);
    }
    return tab_ligne;
}


void Accolade::supprimer_ligne_vide(){

    std::vector<std::string> tab_ligne = this->lignes();
    std::ofstream sortie {this->nouveau_fichier};

    for(std::string line : tab_ligne){
        sortie << line << "\n";
    }
    sortie.close();
}

std::vector<int> Accolade::liste_accolade(int accolade){
    std::vector<int> Aouvert {};
    std::vector<int> Afermer {};
    std::ifstream lire {this->nouveau_fichier};
    std::string line {};
    int num_ligne = 1;
    while(std::getline(lire >> std::ws,line)){
        if(count(line,"{") == 1){
            Aouvert.push_back(num_ligne);
        }
        else if(count(line,"}") == 1){
            Afermer.push_back(num_ligne);
        }
        num_ligne++;
    }

    if(accolade == type::ouvert){
        return Aouvert;
    }
    else if(accolade == type::fermer){
        return Afermer;
    }
    else if(accolade == type::tout){
        Aouvert.insert(Aouvert.end(),Afermer.begin(),Afermer.end());
        return Aouvert;
    }

    return Aouvert;
}


std::vector<std::string> Accolade::tabulation(std::vector<std::string> lignes_fichier,std::vector<int> ouvert,std::vector<int> fermer){

    std::sort(ouvert.begin(),ouvert.end());
    std::sort(fermer.begin(),fermer.end());
    std::reverse(fermer.begin(),fermer.end());
    int tour = ouvert.size();
    for(int i = 0;i < tour;i++){
        if(i == 0){
            // std::cout << min(ouvert) << " --> " << max(fermer) << std::endl;
            lignes_fichier[min(ouvert)-2] = "\n"+lignes_fichier[min(ouvert)-2];
            for(int j = min(ouvert);j < max(fermer);j++){

                if(j >= min(ouvert) && j < max(fermer)-1){
                    lignes_fichier[j] = "\t"+lignes_fichier[j];
                }
            }
            ouvert.erase(ouvert.begin());
            fermer.erase(fermer.begin());
        }
        else{
            // std::cout << min(ouvert) << " --> " << min(fermer) << std::endl;
            for(int j = min(ouvert);j < min(fermer);j++){
                if(j >= min(ouvert) && j < min(fermer)-1){
                    lignes_fichier[j] = "\t"+lignes_fichier[j];
                }
            }
            ouvert.erase(ouvert.begin() + index(ouvert,min(ouvert)));
            fermer.erase(fermer.begin() + index(fermer,min(fermer)));
        }
    }

    return lignes_fichier;
}

std::string Accolade::get_accolade(){
    std::ifstream fichier {this->nouveau_fichier};
    std::string line;
    std::string accolade;
    while(std::getline(fichier >> std::ws , line)){
        for(char c:line){
            if(c == '}' || c == '{'){
                accolade += c;
            }
        }
    }
    return accolade;
}

std::vector<int> Accolade::bloc(int type){
    int cpt = 1;
    int nb_bloc = 0;
    std::string accolade = this->get_accolade();
    std::vector<int> debut {0};
    std::vector<int> fin {};
    for(int i = 1;i < accolade.size();i++){
        cpt += accolade[i]=='}'?-1:1;
        if(cpt == 0){
            nb_bloc++;
            fin.push_back(i);
            debut.push_back(i+1);
        }
    }
    debut.erase(debut.end()-1);

    if(type == type::ouvert){
        return debut;
    }
    else if(type == type::fermer){
        return fin;
    }

    return debut;
}

int Accolade::nombre_bloc(){
    int cpt = 1;
    int nb_bloc = 0;
    std::string accolade = this->get_accolade();
    std::vector<int> debut {0};
    std::vector<int> fin {};
    for(int i = 1;i < accolade.size();i++){
        cpt += accolade[i]=='}'?-1:1;
        if(cpt == 0){
            nb_bloc++;
            fin.push_back(i);
            debut.push_back(i+1);
        }
    }
    debut.erase(debut.end()-1);
    return nb_bloc;
}

void Accolade::tabulation_avance(std::vector<int> intervalle_ouvert,std::vector<int> intervalle_fermer){

    std::vector<int> ouvert = this->liste_accolade(type::ouvert);
    std::vector<int> fermer = this->liste_accolade(type::fermer);
    std::vector<std::string> lignes_fichier = this->lignes();
    std::ofstream fichier {this->nouveau_fichier};
    for(int i = 0;i < intervalle_ouvert.size();i++){
        std::vector<int> Couvert {};
        std::vector<int> Cfermer {};
        int suite = (intervalle_fermer[i] - intervalle_ouvert[i] + 1)/2;

        for(int j = 0;j < suite;j++){
            Couvert.push_back(ouvert[j]);
            Cfermer.push_back(fermer[j]);
        }
        for(int j = 0;j < suite;j++){
            ouvert.erase(ouvert.begin());
            fermer.erase(fermer.begin());
        }
        print_tab(Couvert,"ouvert");
        print_tab(Cfermer,"fermer");
        lignes_fichier = this->tabulation(lignes_fichier,Couvert,Cfermer);
    }

    for(std::string line : lignes_fichier){
        fichier << line << "\n";
    }

}
#endif