#pragma once

Forme::Forme(){}

void Forme::setColor(string color){
    this->color = color;
}

void Forme::afficheCouleur(){
    cout<<color<<endl;
}

Forme::~Forme(){}