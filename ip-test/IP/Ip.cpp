#ifndef __IP_CPP__
#define __IP_CPP__

Ip::Ip(string ip,string msq)
{
    this->ip= ip;
    this->msq = msq;
    this->setNetworkID();
}

Ip::~Ip(){

}

void Ip::setIp(string ip)
{
    this->ip = ip;
}

void Ip::setMsq(string msq)
{
    this->msq = msq;
}

string Ip::getCurrentIp()
{
    return this->ip;
}

bool Ip::validePointIp(string ip)
{
    short cpt = 0;
    for(char c:ip)
    {
        cpt = c == '.'?cpt+1:cpt;
    }
    return cpt == 3?true:false;
}

bool Ip::checkIp()
{
    if(this->validePointIp(this->ip) && this->validePointIp(this->msq) && testEachNumberInIp(this->ip) && testEachNumberInIp(this->msq))
    {
        return true;
    }
    if(testEachNumberInIp(this->msq) == false)
    {
        cout << "Erreur dans le masque" << endl;
    }
    if(testEachNumberInIp(this->ip) == false)
    {
        cout << "Erreur dans l\'adresse IP" << endl;
    }
    return false;
}

void Ip::verification()
{
    if(this->checkIp() == true)
    {
        cout << this->ip + " / " + this->msq << " : ";
    }
    if(adresseReseau(this->ip,this->msq) == this->netID)
    {
        cout << "true" << endl;
        return;
    }
    cout << "false" << endl;
}

void Ip::setNetworkID()
{
   this->netID = adresseReseau(this->ip,this->msq);
}

void Ip::whoAmI()
{
    cout << "ip     : " << this->ip << endl;
    cout << "msq    : " << this->msq << endl;
    cout << "reseau : " << this->netID << endl;
}

#endif