#pragma once
class Cercle:public Forme{
    public:
        Cercle();
        void setRayon(int rayon);
        double getSurface();
        ~Cercle();
};