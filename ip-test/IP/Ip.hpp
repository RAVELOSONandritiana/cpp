#ifndef __IP_HPP__
#define __IP_HPP__
#include <string>
#include <iostream>
#include "../function/function.hpp"

using namespace std;

class Ip
{
    private:
        string ip;
        string msq;
        string netID;
    public:
        Ip(string ip,string msq);
        ~Ip();
        void setIp(string ip);
        void setMsq(string msq);
        bool validePointIp(string ip);
        string getCurrentIp();
        bool checkIp();
        void verification();
        void setNetworkID();
        void whoAmI();
};

#include "./Ip.cpp"

#endif