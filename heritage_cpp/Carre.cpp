#pragma once
Carre::Carre(){
    this->cote = 4;
}

void Carre::setCote(int cote){
    this->cote = cote;
}

double Carre::getSurface(){
    return cote*cote;
}

Carre::~Carre(){}