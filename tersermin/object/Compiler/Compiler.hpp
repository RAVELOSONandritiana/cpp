#ifndef __COMPILER_HPP__
#define __COMPILER_HPP__

#include <iostream>
#include <cstdlib>
#include <vector>

using namespace std;

class Compiler{
    private:
        string terser;
    public:
        Compiler();
        ~Compiler();
        void compile(vector<string> listFiles,string source,string destination);
};

#include "./Compiler.cpp"

#endif