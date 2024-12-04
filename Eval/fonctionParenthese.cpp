#ifndef __FONCTION_PARENTHESE_CPP
#define __FONCTION_PARENTHESE_CPP

template <class T>
void printVector2(T vect1,T vect2)
{
    vect2 = decal(vect2);
	for(unsigned i = 0;i < vect1.size();i++)
	{
		cout << vect1[i] << " --> " << vect2[i]<< endl;
	}
}

template <class T>
T decal(T vect)
{
    unsigned taille = (unsigned)vect.size();
    T res {};
    for(unsigned i = 0;i < taille;i++)
    {
        if(i == 0)
        {
            res.push_back(vect[taille - 1]);
        }
        else{
            res.push_back(vect[i-1]);
        }
    }
    return res;
}



#endif