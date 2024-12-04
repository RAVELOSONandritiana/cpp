#include <iostream>
#include "./IP/Ip.hpp"

using namespace std;

int main(int argc,char *argv[])
{
    int number = 0;
    if(testEachNumberInIp(argv[2]) == false)
    {
        sscanf(argv[2],"%d",&number);
    }
    if(argc > 2 && testEachNumberInIp(argv[2]))
    {
        Ip *ip = new Ip(argv[1],argv[2]);
        ip->whoAmI();
        for(int i = 3;i < argc;i++)
        {
            ip->setIp(argv[i]);
            ip->verification();
        }
    }
    else if(argc > 2 && (testEachNumberInIp(argv[2]) == false || isnumber(to_string(number))) == true)
    {
        Ip *ip = new Ip(argv[1],argv[2]);
        ip->setMsq(getBitReseauToAdresseIp(number));
        ip->setNetworkID();
        ip->whoAmI();
        for(int i = 3;i < argc;i++)
        {
            ip->setIp(argv[i]);
            ip->verification();
        }
    }
    return 0;
}