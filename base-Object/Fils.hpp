#ifndef __FILS_HPP__
#define __FILS_HPP__
#include "Mere.hpp"
using namespace std;
class Fils:public Mere{
    private:
        string name;
        unsigned age;
    public:
        Fils() = delete;
        Fils(string name,unsigned age);
        
};

#include "Fils.cpp"

#endif