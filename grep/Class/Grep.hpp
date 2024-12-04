#ifndef __GREP_HPP__
#define __GREP_HPP__

#include <string>
#include <iostream>
#include <sstream>
#include <vector>
#include "../function/chaine.hpp"

class Grep{
    private:
        std::string dir;
        std::string motif;
        std::vector<string> args;
    public:
        Grep();
        ~Grep();
        void setParameter(std::string dir,std::string motif);
        void showParameter();
        void showFiles();
};

#include "./Grep.cpp"

#endif  //fin __GREP__HPP