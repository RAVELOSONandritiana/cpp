#pragma once

Somme::Somme(){}

long long int Somme::getSomme(int debut,int n){
	debut--;
	return (n*(n+1))/2-(debut*(debut+1))/2;
}

Somme::~Somme(){}
