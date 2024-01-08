#pragma once
class Rectangle:public Forme{
    public:
        Rectangle();
        void setProp(int longueur,int largeur);
        int getSurface();
        ~Rectangle();
};