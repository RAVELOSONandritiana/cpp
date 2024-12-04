#ifndef __PARENTHESE_HPP__
#define __PARENTHESE_HPP__
#include <iostream>
#include <string>
#include <vector>
#include "fonctionParenthese.tpp"
using namespace std;

namespace type{
	enum{
		ouvert = 0,
		fermer = 1
	};
}

class Parenthese
{
	public:
		string chaine {};
	public:
		Parenthese();
		void setChaine(string chaine);
		vector<unsigned> getIndexParenthese(int parenthese);
		vector<unsigned> indexParenthese(int p);
		~Parenthese();

	
};

#include "Parenthese.cpp"
#endif