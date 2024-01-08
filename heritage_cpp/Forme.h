#pragma once
class Forme{
    protected:
        string color = "blue";
        int longueur;
        int largeur;
        int cote;
        int rayon;
    public:
        Forme();
        void setColor(string color);
        void afficheCouleur();
        ~Forme();
};