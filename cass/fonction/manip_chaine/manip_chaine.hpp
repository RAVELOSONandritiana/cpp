#ifndef __MANIP_CHAINE_HPP__
#define __MANIP_CHAINE_HPP__
#include <iostream>
#include <string>
#include <vector>
#include <sstream>

int count(std::string chaine,std::string search);
std::vector<int> print_tab(std::vector<int> tab,std::string signal);
int min(std::vector<int> tab);
int max(std::vector<int> tab);
void print_bloc(std::vector<int> ouvert,std::vector<int> fermer);
int index(std::vector<int> tab,int element);
std::string replaceAll(std::string chaine,std::string ancien,std::string nouveau);
int entre_cote(std::string chaine,std::string element,int index_element);
#include "manip_chaine.cpp"

#endif