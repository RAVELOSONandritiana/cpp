#ifndef __FORMATAGE_HPP__
#define __FORMATAGE_HPP__
#include <vector>
#include <iostream>
#include <string>
#include "../functions/formatage.hpp"

using namespace std;

template <class T>
void formatVector(vector<T> vector);

string trim(string input);

vector<int> detectChar(string chaine,char c);
#include "./formatage.cpp"
#endif