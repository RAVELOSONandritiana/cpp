#pragma once

Calcul::Calcul(){}

void Calcul::init(int min,int max)
{
    if(min > max)
    {
        int tmp = min;
        min = max;
        max = tmp;
    }
    this->min = min;
    this->max = max;
}

int Calcul::somme()
{
    return min+max;
}

int Calcul::produit()
{
    return min*max;
}
int test_premier(int nombre)
{
    int div = 0;
    for(int i = 1;i <= nombre;i++)
    {
        if(nombre%i==0)
            div++;
    }
    if(div == 2)
        return 1;
    else
        return 0;
}
vector<int> Calcul::premier()
{
    vector<int> premier {};
    cout<<"Liste des nombres premiers entre ["<<min<<";"<<max<<"]:"<<endl;
    for(int i = min;i <= max;i++)
    {
        if(test_premier(i))
        {
            premier.push_back(i);
        }
    }
    return premier;
}

void Calcul::affiche(vector<int> n,string mot)
{
    for(int i : n)
    {
        cout<<mot<< i <<endl;
    }
}
int test_parfait(int nombre)
{
    int somme_diviseur = 0;
    for(int i = 1;i < nombre;i++)
    {
        if(nombre%i==0)
            somme_diviseur+=i;
    }
    if(somme_diviseur == nombre)
        return 1;
    else
        return 0;
}
vector<int> Calcul::parfait()
{
    vector<int> n {};
    for(int i = min;i <= max;i++)
    {
        if(test_parfait(i))
            n.push_back(i);
    }
    return n;
}
void print_table(int nombre)
{
    cout<<"Table : "<<nombre<<endl;
    for(int i = 0;i < 10;i++)
    {
        cout<<nombre<<" * "<<i<<" = "<<nombre*i<<endl;
    }
    cout<<"-----------------------------------------\n";
}

void Calcul::table()
{
    for(int i = min;i <= max;i++)
    {
        print_table(i);
    }
}

int Calcul::get_pgcd(){
    int pgcd = 0;
    int reste = 1;
    while(reste)
    {
        pgcd = reste;
        reste = max%min;
        max = min;
        min = reste;
    }
    return pgcd;
}

int Calcul::get_ppcm()
{
    Calcul c = Calcul();
    c.init(min,max);
    int pgcd = c.get_pgcd();
    return (min*max)/pgcd;
}
Calcul::~Calcul(){}