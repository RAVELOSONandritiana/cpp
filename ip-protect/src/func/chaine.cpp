#ifndef __CHAINE_CPP__
#define __CHAINE_CPP__

string trim(string chaine){
    reverse(begin(chaine), end(chaine));
    for(int i = 0;i < chaine.size();i++){
        if(chaine[i] == ' ' || chaine[i] == '\n'){
            chaine.erase(i,1);
            i--;
        }
        else{
            break;
        }
    }
    reverse(begin(chaine), end(chaine));
    for(int i = 0;i < chaine.size();i++){
        if(chaine[i] == ' ' || chaine[i] == '\n'){
            chaine.erase(i,1);
            i--;
        }
        else{
            break;
        }
    }
    return chaine;
}

vector<string> split(string chaine,char del){
    vector<string> tab{};
    int currentIndex = 0;
    for(int i = 0;i < chaine.size();i++)
    {
        if(chaine[i] == del || chaine[i] == '\n' || i == chaine.size()-1){
            int ancienIndex = currentIndex;
            currentIndex = i+1;
            int len = currentIndex - ancienIndex;
            tab.push_back(trim(chaine.substr(ancienIndex,len)));
        }
    }
    return tab;
}
#endif
