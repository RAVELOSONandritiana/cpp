#pragma once

Donne::Donne(){}

void Donne::addElement(int nombre)
{
    this->table.push_back(nombre);
}

vector<int> Donne::getElement(int div,int reste)
{
    vector<int> tmp {};
    for(int i:table)
    {
        if(i%div==reste)
            tmp.push_back(i);
    }
    return tmp;
}

Donne::~Donne(){}