#ifndef __IP_CPP__
#define __IP_CPP__

Ip::Ip(){
    this->security = 5;
}

Ip::~Ip(){}

void Ip::setInterface(string interface){
    this->interface = interface;
}

void Ip::setIp(string ip){
    this->ip = ip;
}

void Ip::setSecurity(int security){
    this->security = security;
}

string Ip::getInterface(){
    char ligne[255];
    vector<string> tab {};
    FILE *fichier = popen("ip -o link show | awk -F\':\' \'{print $2}\'","r");
    while(fgets(ligne,sizeof(ligne),fichier))
    {
        string l(ligne);
        tab.push_back(l);
    }
    return trim(tab[tab.size()-1]);
}

vector<string> Ip::getLigneInFile(string fichier){
    vector<string> tab {};
    fichier = "/etc/networking/interfaces";
    FILE *f = popen("cat /etc/network/interfaces","r");
    char chaine[255];
    while(fgets(chaine,sizeof(chaine),f)){
        string c(chaine);
        tab.push_back(c);
    }
    return tab;
}

string Ip::getIpOrNetmask(int p){
    string interface = this->getInterface();
    ostringstream cmd{};
    cmd << "sudo ifconfig " << interface;
    FILE *statInterface = popen(cmd.str().c_str(),"r");
    char chaine[255];
    int ligne = 0;
    vector<string> tab{};
    while(fgets(chaine,sizeof(chaine),statInterface)){
        string c(chaine);
        tab.push_back(trim(c));
        ligne++;
        if(ligne == 2){
            break;
        }
    }
    if(p == 0){
        return trim(split(tab[1],' ')[1]);
    }
    return trim(split(tab[1],' ')[4]);
}

void Ip::createSecurity(){
    string ip = this->getIpOrNetmask(0);
    vector<string> tab = split(ip,'.');
    string interface = this->getInterface();
    ostringstream ss{};
    system("sudo chmod 777 /etc/network/interfaces");
    ofstream dstFichier {"/etc/network/interfaces",ios::app};
    for(int i = 0;i < this->security;i++){
        string newInterface = interface + ":" + to_string(i);
        string newIp = tab[0]+tab[1]+tab[2]+to_string(stoi(tab[3])+i+1);
        ss << "\nauto " << newInterface << '\n';
        ss << "iface " << newInterface << " inet static\n";
        ss << "\t address " << newIp << "\n";
        ss << "\t netmask " << this->getIpOrNetmask(1) << "\n";
        dstFichier << ss.str();
        ss.str("");
    }
}
#endif