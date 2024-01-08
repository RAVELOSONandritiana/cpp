#pragma once
class Carre:public Cercle{
    public:
        Carre();
        void setCote(int cote);
        double getSurface();
        ~Carre();
};