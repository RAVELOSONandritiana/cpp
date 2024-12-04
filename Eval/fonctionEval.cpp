#ifndef __FONCTION_EVAL_CPP__
#define __FONCTION_EVAL_CPP__

template <class T>
void printVector(T v){
	for(auto i:v){
		cout << i << endl;
	}
}

int indexMultiplication(string signe){
	for(int i = 0;i < signe.size();i++){
		if(signe[i] == '*'){
			return i;
		}
	}
	return -1;
}

int indexDivision(string signe){
	for(int i = 0;i < signe.size();i++){
		if(signe[i] == '/'){
			return i;
		}
	}
	return -1;
}


int indexSigneDouble(string &chaine){
	for(int i = 0;i < chaine.size() - 1;i++)
	{
		if(chaine[i] == '-' || chaine[i] == '+' ||chaine[i] == '*' ||chaine[i] == '/'){
			if(chaine[i+1] == '-' || chaine[i+1] == '+' ||chaine[i+1] == '*' ||chaine[i+1] == '/'){
				return i;
			}
		}
	}
	return -1;
}


void replaceSigne(string &signe,unsigned index,char first,char second){
	if(first == '+' && second == '+'){
		signe.replace(index,1,"+");
		signe.erase(signe.begin()+index+1);
	}
	else if(first == '-' && second == '-'){
		signe.replace(index,1,"+");
		signe.erase(signe.begin()+index+1);
	}
	else if(first == '+' && second == '-'){
		signe.replace(index,1,"-");
		signe.erase(signe.begin()+index+1);
	}
	else if(first == '-' && second == '+'){
		signe.replace(index,1,"-");
		signe.erase(signe.begin()+index+1);
	}
	else if(first == '*' && second == '*'){
		signe.replace(index,1,"*");
		signe.erase(signe.begin()+index+1);
	}
	else if(first == '-' && second == '*'){
		signe.replace(index,1,"-1*");
		signe.erase(signe.begin()+index+1);
	}
	else if(first == '/' && second == '/'){
		signe.replace(index,1,"/");
		signe.erase(signe.begin()+index+1);
	}
	else if(first == '*' && second == '+'){
		signe.replace(index,1,"*");
		signe.erase(signe.begin()+index+1);
	}
	else if(first == '+' && second == '*'){
		signe.replace(index,1,"+");
		signe.erase(signe.begin()+index+1);
	}
}

void cEval(string &chaine){
	while(indexSigneDouble(chaine) > -1)
	{
		int index = indexSigneDouble(chaine);
		replaceSigne(chaine,index,chaine[index],chaine[index+1]);
	}
}

#endif