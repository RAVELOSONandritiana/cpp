#ifndef __EVAL_CPP__
#define __EVAL_CPP__

Eval::Eval(){

}

Eval::~Eval(){

}

void Eval::setEval(string chaine){
	if(chaine[0] == '-'){
		chaine[0] = 'M';
	}
	else if(chaine[0] == '+' || chaine[0] == '*' || chaine[0] == '/'){
		chaine.erase(chaine.begin());
	}
	if(chaine[0] == '-'){
		chaine[0] = 'M';
	}
	else if(chaine[0] == '+' || chaine[0] == '*' || chaine[0] == '/'){
		chaine.erase(chaine.begin());
	}
	cEval(chaine);
	
	this->eval = chaine;
}

string Eval::getEval(){
	return this->eval;
}

string Eval::getOperator(){
	stringstream ss {};
	for(char element:this->getEval()){
		if(element == '+' || element == '-' || element == '/' || element == '*'){
			ss << element;
		}
	}
	return ss.str();
}

vector<unsigned> Eval::getIndexOperator(){
	vector<unsigned> index {};
	string eval = this->getEval();
	string signe = this->getOperator();
	unsigned pos = 0;
	for(char c : signe){
		if((pos = eval.find(c,pos)) != string::npos){
			index.push_back(pos);
			pos++;
		}
	}
	return index;
}

string Eval::replaceSpec(string sub)
{
	size_t pos = 0;
	if(sub.find('M') != string::npos){
		sub[pos] = '-';
	}
	return sub;
}

vector<string> Eval::getSubEval(){
	vector<unsigned> index = this->getIndexOperator();
	string eval = this->getEval();
	vector<string> sub {};
	unsigned in = 0;
	for(unsigned i = 0;i <= index.size();i++)
	{
		sub.push_back(this->replaceSpec(eval.substr(in,index[i]-in)));
		in = index[i]+1;
	}
	return sub;
}

string Eval::calc(){
	string signe = this->getOperator();
	vector<string> sub = this->getSubEval();

	// while(indexMultiplication(signe) > -1){
	// 	const char *s = sub[indexMultiplication(signe)].c_str();
	// 	float partie1 = .0;
	// 	sscanf(s,"%f\n", &partie1);
	// 	float partie2 = .0;
	// 	s = sub[indexMultiplication(signe)+1].c_str();
	// 	sscanf(s,"%f\n", &partie2);
	// 	stringstream r {};
	// 	r << partie1 * partie2;
	// 	sub[indexMultiplication(signe)] = r.str();
	// 	sub.erase(sub.begin()+indexMultiplication(signe)+1);
	// 	signe.erase(indexMultiplication(signe),1);
	// }

	// while(indexDivision(signe) > -1){
	// 	const char *s = sub[indexDivision(signe)].c_str();
	// 	float partie1 = .0;
	// 	sscanf(s,"%f\n", &partie1);
	// 	float partie2 = .0;
	// 	s = sub[indexDivision(signe)+1].c_str();
	// 	sscanf(s,"%f\n", &partie2);
	// 	stringstream r {};
	// 	r << partie1 / partie2;
	// 	sub[indexDivision(signe)] = r.str();
	// 	sub.erase(sub.begin()+indexDivision(signe)+1);
	// 	signe.erase(indexDivision(signe),1);
	// }
	while(indexMultiplication(signe) > -1 || indexDivision(signe) > -1){
		if(indexMultiplication(signe) > -1 && indexDivision(signe) > -1)
		{
			if(indexMultiplication(signe) < indexDivision(signe))
			{
				const char *s = sub[indexMultiplication(signe)].c_str();
				float partie1 = .0;
				sscanf(s,"%f\n", &partie1);
				float partie2 = .0;
				s = sub[indexMultiplication(signe)+1].c_str();
				sscanf(s,"%f\n", &partie2);
				stringstream r {};
				r << partie1 * partie2;
				sub[indexMultiplication(signe)] = r.str();
				sub.erase(sub.begin()+indexMultiplication(signe)+1);
				signe.erase(indexMultiplication(signe),1);
			}
			else
			{
				const char *s = sub[indexDivision(signe)].c_str();
				float partie1 = .0;
				sscanf(s,"%f\n", &partie1);
				float partie2 = .0;
				s = sub[indexDivision(signe)+1].c_str();
				sscanf(s,"%f\n", &partie2);
				stringstream r {};
				r << partie1 / partie2;
				sub[indexDivision(signe)] = r.str();
				sub.erase(sub.begin()+indexDivision(signe)+1);
				signe.erase(indexDivision(signe),1);
			}
		}
		else if(indexMultiplication(signe) > -1)
		{
			const char *s = sub[indexMultiplication(signe)].c_str();
			float partie1 = .0;
			sscanf(s,"%f\n", &partie1);
			float partie2 = .0;
			s = sub[indexMultiplication(signe)+1].c_str();
			sscanf(s,"%f\n", &partie2);
			stringstream r {};
			r << partie1 * partie2;
			sub[indexMultiplication(signe)] = r.str();
			sub.erase(sub.begin()+indexMultiplication(signe)+1);
			signe.erase(indexMultiplication(signe),1);
		}
		else
		{
			const char *s = sub[indexDivision(signe)].c_str();
			float partie1 = .0;
			sscanf(s,"%f\n", &partie1);
			float partie2 = .0;
			s = sub[indexDivision(signe)+1].c_str();
			sscanf(s,"%f\n", &partie2);
			stringstream r {};
			r << partie1 / partie2;
			sub[indexDivision(signe)] = r.str();
			sub.erase(sub.begin()+indexDivision(signe)+1);
			signe.erase(indexDivision(signe),1);
		}
		
	}
	while(signe.size() > 0)
	{
		const char *s = sub[0].c_str();
		float partie1 = .0;
		sscanf(s,"%f\n", &partie1);
		float partie2 = .0;
		s = sub[1].c_str();
		sscanf(s,"%f\n", &partie2);

		stringstream r {};
		if(signe[0] == '+')
		{
			r << partie1 + partie2;
		}
		else if(signe[0] == '-')
		{
			r << partie1 - partie2;
		}
		sub[0] = r.str();
		sub.erase(sub.begin()+1);
		signe.erase(0,1);
	}
	return sub[0];
}


#endif