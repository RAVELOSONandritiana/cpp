#ifndef __RESOLV_HPP
#define __RESOLV_HPP
#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include "Eval.hpp"
#include "Parenthese.hpp"
using namespace std;
class Resolv{
    private:
        string expression  {};
    public:
        Resolv();
        void setExpr(string expression);
        string getExpr();
        string resolv();
        ~Resolv();
};


#include "Resolv.cpp"
#endif