#ifndef __FUNCTION_HPP__
#define __FUNCTION_HPP__
#include <iostream>
#include <cctype>
#include <cmath>

using namespace std;

string bin(string number);
bool testEachNumberInIp(string number);
bool isnumber(string number);
string binAdresse(string adresse);
bool anding(string ip,string msq);
string getAndingBinaire(string ip,string msq);
string binAdresseToDecimal(string bin);
int binToDec(string bin);
string adresseReseau(string ip,string msq);
string getBitReseauToAdresseIp(int num);
#include "./function.cpp"

#endif
