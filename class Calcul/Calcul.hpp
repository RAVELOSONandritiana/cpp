#pragma once

class Calcul{
    private:
        int min;
        int max;
    public:
        Calcul();
        void init(int min,int max);
        int somme();
        int produit();
        vector<int> premier();
        void affiche(vector<int> n,string mot);
        vector<int> parfait();
        void table();
        int get_pgcd();
        int get_ppcm();
        ~Calcul();
};