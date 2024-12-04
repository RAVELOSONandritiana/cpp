#ifndef __FUNCTION_HPP__
#define __FUNCTION_HPP__
#include <string>
#include <iostream>

using namespace std;

char *reverse(char *chaine);
int dirExist(string dir);
bool hasExtensionFileScss(string file);
string trim(string chaine);
void compileScss(string source,string dest);
string getNameFileInPath(string path,string extension);
string getDirInPath(string path);
string getSecondaryPath(string path);

#include "function.cpp"

#endif