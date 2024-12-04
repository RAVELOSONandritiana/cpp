#ifndef __FICHIER__HPP__
#define __FICHIER__HPP__
#include <iostream>
#include <vector>
#include <cstdio>
#include <sstream>
#include "../../functions/formatage.hpp"
using namespace std;

class Fichier{
    private:
        string srcname;
    public:
        string dstname = "./distmin";
        vector<string> listFile {};
    public:
        Fichier();
        ~Fichier();
        void setSrc(string src);
        void setDst();
        void setDst(string dst);
        string getSrc();
        vector<string> getAllFiles();
        void formatList();
};

#include "./Fichier.cpp"

#endif