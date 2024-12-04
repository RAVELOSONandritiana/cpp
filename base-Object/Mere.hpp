#ifndef __MERE_HPP__
#define __MERE_HPP__

using namespace std;
class Mere{
    private:
        string name {};
        unsigned age;
    public:
        Mere() = delete;
        Mere(string name,unsigned age);
        string getName();
        unsigned getAge();
};

#include "Mere.cpp"
#endif