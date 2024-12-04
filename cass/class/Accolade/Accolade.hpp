#ifndef __ACCOLADE_HPP__
#define __ACCOLADE_HPP__
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>
#include "../../fonction/manip_chaine/manip_chaine.hpp"

namespace type{
    enum{
        ouvert,
        fermer,
        tout
    };
}

class Accolade{
    private:
        std::string nom_fichier;
        std::string nouveau_fichier;
    public:
        Accolade(std::string nom_fichier,std::string nouveau_fichier);
        
        void clone();

        void supprimer_ligne_vide();

        std::vector<int> liste_accolade(int accolade);//correspond a l enumeration donne au dessus

        std::vector<std::string> lignes();

        std::vector<std::string> tabulation(std::vector<std::string> lignes_fichier,std::vector<int> ouvert,std::vector<int> fermer);

        std::string get_accolade();

        std::vector<int> bloc(int type);

        int nombre_bloc();

        void tabulation_avance(std::vector<int> intervalle_ouvert,std::vector<int> intervalle_fermer);

        ~Accolade();
};
#include "Accolade.cpp"
#endif