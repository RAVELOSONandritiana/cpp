#ifndef __DIRECTORY_HPP__
#define __DIRECTORY_HPP__

#include <iostream>
#include <string>
#include <set>
#include <vector>
#include <cstdlib>
#include "../../functions/formatage.hpp"

using namespace std;

class Directory{
    private:
        set<string> listDirectory {};
    public:
        Directory();
        ~Directory();
        set<string> getDir(vector<string> listFiles);
        void createDirectory(string destination);
};

#include "./Directory.cpp"
#endif