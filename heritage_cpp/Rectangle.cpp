#pragma once
Rectangle::Rectangle(){}

void Rectangle::setProp(int longueur,int largeur){
    this->longueur = longueur>largeur?longueur:largeur;
    this->largeur = longueur>largeur?largeur:longueur;
}

int Rectangle::getSurface(){
    return longueur*largeur;
}
Rectangle::~Rectangle(){}