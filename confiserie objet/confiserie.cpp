#ifndef CONFISERIE_CPP
#define CONFISERIE_CPP

class Confiserie{
    private:
        string nom;
        int prix;
    public:
        Confiserie();
        void setName(string nom);
        void setPrix(int prix);
        void afficheToi();
        void memePrix(Confiserie c);
        ~Confiserie();
};


#endif