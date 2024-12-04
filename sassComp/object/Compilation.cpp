#ifndef __COMPILATION_CPP__
#define __COMPILATION_CPP__
using namespace std;
#include <cstdlib>
#include <cstdio>
#include <cassert>
#include "../function/function.hpp"
Compilation::Compilation(string name_dir,string out_dir){
    if(name_dir[name_dir.size()-1] != '/'){
        name_dir+="/";
    }
    if(out_dir[out_dir.size()-1] != '/'){
        out_dir+="/";
    }
    this->name_dir = name_dir;
    this->out_dir= out_dir;
}

Compilation::~Compilation(){
}

void Compilation::getNameDir(){
    cout << this->name_dir << endl;
}

void Compilation::CompileFilesInDir(){
    assert(dirExist(this->name_dir) == 0 && "File doesn\'t exists");
    string cmd = "find " + this->name_dir + " -type f";
    FILE *fichier = popen(cmd.c_str(),"r");
    char chaine[255];
    while(fgets(chaine,255,fichier)){
        string name {chaine};
        name = trim(name);
        if(hasExtensionFileScss(name)){
            cout << name << " ";
            compileScss(name,this->out_dir);
        }
    }
}


#endif