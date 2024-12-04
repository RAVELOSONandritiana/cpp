#ifndef __VIRGULE_HPP__
#define __VIRGULE_HPP__
#include <iostream>
#include <string>
#include <fstream>
#include <vector>
#include "../../fonction/manip_chaine/manip_chaine.hpp"
class Virgule{
    private:
        std::string nom_fichier;
        std::string nouveau_fichier;

    public:
        Virgule(std::string nom_fichier,std::string nouveau_fichier);

        void gerer_virgules();

        ~Virgule();
};


#include "Virgule.cpp"
#endif