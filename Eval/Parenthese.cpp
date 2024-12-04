#ifndef __PARENTHESE_CPP__
#define __PARENTHESE_CPP__

Parenthese::Parenthese(){

}

Parenthese::~Parenthese(){

}

void Parenthese::setChaine(string chaine){
	this->chaine = chaine;
}

vector<unsigned> Parenthese::getIndexParenthese(int parenthese){
	vector<unsigned> ouvert {};
	vector<unsigned> fermer {};
	for(unsigned i = 0;i < (unsigned)this->chaine.size();i++)
	{
		if(this->chaine[i] == '(')
		{
			ouvert.push_back(i);
		}
		else if(this->chaine[i] == ')')
		{
			fermer.push_back(i);
		}
	}
	return parenthese == 0 ? ouvert : fermer;
}


vector<unsigned> Parenthese::indexParenthese(int p)
{
    vector<unsigned> tab {};
	vector<unsigned> fermer = this->getIndexParenthese(type::fermer);
	vector<unsigned> ouvert = this->getIndexParenthese(type::ouvert);
	unsigned actuel {};
	for(int element : ouvert)
	{
		if(element < fermer[p])
		{
			actuel = element;
		}
		else
		{
			break;
		}
	}
	tab.push_back(actuel);
	tab.push_back(fermer[p]);

	return tab;
}


#endif