#ifndef __EVAL_HPP__
#define __EVAL_HPP__
#include <string>
#include <vector>
#include <sstream>
#include "fonctionEval.hpp"
using namespace std;
/////////Evalue une chaine de caractere sans parenthese et sans repetition de signe
class Eval
{
	private:
		string eval {};
	public:
		Eval();
		void setEval(string chaine);
		string getEval();
		string getOperator();
		vector<unsigned> getIndexOperator();
		vector<string> getSubEval();
		string replaceSpec(string sub);
		string calc();
		~Eval();
};

#include "Eval.cpp"
#endif