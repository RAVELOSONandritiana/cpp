#ifndef __MANIP_CHAINE_CPP__
#define __MANIP_CHAINE_CPP__

int count(std::string chaine,std::string search){
    int cpt = 0;
    size_t pos = 0;
    while((pos = chaine.find(search,pos)) != std::string::npos){
        pos += search.size();
        cpt++;
    }
    return cpt;
}

std::vector<int> print_tab(std::vector<int> tab,std::string signal){
    std::sort(tab.begin(),tab.end());
    std::cout << signal << std::endl;
    for(int i:tab){
        std::cout << i << std::endl;
    }

    return tab;
}

int min(std::vector<int> tab){
    int m = tab[0];
    for(int i: tab){
        if(i < m){
            m = i;
        }
    }
    return m;
}

int max(std::vector<int> tab){
    int m = tab[0];
    for(int i: tab){
        if(i > m){
            m = i;
        }
    }
    return m;
}

int index(std::vector<int> tab,int element){
    for(int i = 0;i < tab.size();i++){
        if(tab[i] == element){
            return i;
        }
    }
    return -1;
}

void print_bloc(std::vector<int> ouvert,std::vector<int> fermer){
    std::sort(ouvert.begin(),ouvert.end());
    std::sort(fermer.begin(),fermer.end());
    std::reverse(fermer.begin(),fermer.end());
    int tour = ouvert.size();
    for(int i = 0;i < tour;i++){
        if(i == 0){
            std::cout << min(ouvert) << " --> " << max(fermer) << std::endl;
            ouvert.erase(ouvert.begin());
            fermer.erase(fermer.begin());
        }
        else{
            std::cout << min(ouvert) << " --> " << min(fermer) << std::endl;
            ouvert.erase(ouvert.begin() + index(ouvert,min(ouvert)));
            fermer.erase(fermer.begin() + index(fermer,min(fermer)));
        }
    }
}

std::string replaceAll(std::string chaine,std::string ancien,std::string nouveau){
    size_t pos = 0;
    while((pos = chaine.find(");",pos)) != std::string::npos){
        if(entre_cote(chaine,"\"",pos) == 0){
            chaine.replace(pos,2,");\n");
            pos++;
        }
        
    }

    return chaine;
}

int entre_cote(std::string chaine,std::string element,int index_element){
    std::vector<int> index {};
    int test = 0;

    size_t pos = 0;

    while((pos = chaine.find(element,pos)) != std::string::npos){
        index.push_back(pos);
        pos++;
    }

    for(int i = 0;i < index.size();i+=2){
        if(index_element > index[i] && index_element < index[i+1]){
            return 1;
        }
    }
    
    return 0;
}

#endif