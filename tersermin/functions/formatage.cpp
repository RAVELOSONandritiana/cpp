#ifndef __FORMATAGE_CPP__
#define __FORMATAGE_CPP__
#include <iostream>
using namespace std;

template <class T>
void formatVector(vector<T> vect){
    for(T c:vect){
        cout << c << endl;
    }
}

string trim(string input){
    while(input[0] == ' ' || input[0] == '\n'){
        input.erase(0);
    }
    while(input[input.size() - 1] == ' ' || input[input.size() - 1] == '\n'){
        input.erase(input.size() - 1);
    }
    return input;
}

vector<int> detectChar(string chaine,char c){
    vector<int> list {};
    int index = 0;
    for(char a:chaine){
        if(a == c){
            list.push_back(index);
        }
        index++;
    }
    return list;
}
#endif