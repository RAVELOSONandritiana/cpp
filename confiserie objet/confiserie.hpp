#ifndef CONFISERIE_HPP
#define CONFISERIE_HPP

Confiserie::Confiserie()
{

}

void Confiserie::afficheToi()
{
    cout<<"Nom  : "<<nom<<endl;
    cout<<"Prix : "<<prix<<" ar"<<endl;
}

void Confiserie::setName(string nom)
{
    this->nom = nom;
}

void Confiserie::setPrix(int prix)
{
    this->prix = prix;
}

void Confiserie::memePrix(Confiserie c)
{
    this->prix = c.prix;
}

Confiserie::~Confiserie(){}
#endif