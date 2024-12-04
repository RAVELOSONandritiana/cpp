#ifndef __FONCTION_EVAL_HPP__
#define __FONCTION_EVAL_HPP__
#include <string>
#include <vector>
#include <sstream>
using namespace std;

template <class T>
void printVector(T v);

int indexMultiplication(string signe);
int indexDivision(string signe);
int indexSigneDouble(string &chaine);
void replaceSigne(string &signe,unsigned index,char first,char second);
void cEval(string &chaine);

#include "fonctionEval.cpp"
#endif