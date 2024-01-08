#pragma once

Cercle::Cercle(){}

void Cercle::setRayon(int rayon){
    this->rayon = rayon;
}

double Cercle::getSurface(){
    return rayon*rayon*M_PI;
}

Cercle::~Cercle(){}