#ifndef __IP_HPP__
#define __IP_HPP__
#include <iostream>
#include <cstdlib>
#include <vector>
#include <fstream>
#include <sstream>
#include "../func/chaine.hpp"
using namespace std;
class Ip{
    private:
        string interface;
        string ip;
        int security;
    public:
        Ip();
        ~Ip();
        void setInterface(string interface);
        void setIp(string ip);
        void setSecurity(int security);
        vector<string> getLigneInFile(string fichier);
        string getInterface();
        string getIpOrNetmask(int p);
        void createSecurity();
};

#include "Ip.cpp"

#endif