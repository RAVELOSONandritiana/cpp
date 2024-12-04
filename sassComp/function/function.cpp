#ifndef __FUNCTION_CPP__
#define __FUNCTION_CPP__
#include <cstdio>
#include <string>
#include <iostream>
#include <cstring>
#include <assert.h>
#include <cstdlib>
using namespace std;

char *reverse(char *chaine){
    char *name = NULL;
    name = (char *)malloc(sizeof(char ) * strlen(chaine));
    assert(name != NULL && "name a ete alloue");
    for(int i = 0;i < (int)strlen(chaine);i++){
        name[strlen(chaine)-i-1] = chaine[i];
    }
    return name;
}

int dirExist(string dir){
    string cmd = "ls " + dir + " ;echo $?";
    FILE *fichier = popen(cmd.c_str(),"r");
    char chaine[255];
    while(fgets(chaine,sizeof(chaine),fichier)){
        
    }
    string res {chaine};
    res = trim(res);
    cout << "Retour de la commande : " + res << endl;
    if(equal(begin(res),end(res),"0")){
        cout << "Success : directory found" << endl;
    }
    else{
        cout << "File not exists" << endl;
    }
    return stoi(res);
}

bool hasExtensionFileScss(string file){
    return (file.find(".scss") == file.size() - 5)?true:false;
}

void compileScss(string source,string dest){
    string file = getNameFileInPath(source,"scss");
    string cmd = "mkdir -p "+dest+getSecondaryPath(getDirInPath(source));
    system(cmd.c_str());
    cmd = "scss "+trim(source)+":"+dest+getSecondaryPath(getDirInPath(source))+file+".css";
    system(cmd.c_str());
    cout << " -> "+dest+file+".css" << endl;
}

string trim(string chaine){
    while(chaine[0] == ' ' || chaine[0] == '\n'){
        chaine.erase(0,1); 
    }
    while(chaine[chaine.size()-1] == ' ' || chaine[chaine.size()-1] == '\n'){
        chaine.erase(chaine.size()-1);
    }
    return chaine;
}

string getNameFileInPath(string path,string extension){
    // assert(hasExtensionFileScss(path) == 1 && "Le fichier n a pas de scss ou est uniquement un dossier");
    char *path_r = reverse((char *)path.c_str());
    string file = path.substr(path.size()-strcspn(path_r,"/"));
    return file.substr(0,file.size()-extension.size()-1);
}

string getDirInPath(string path){
    // assert(hasExtensionFileScss(path) == true && "Le fichier n a pas de scss ou est uniquement un dossier");
    char *path_r = reverse((char *)path.c_str());
    path_r = strpbrk(path_r,"/");
    string res{reverse(path_r)};
    return res;
}

string getSecondaryPath(string path){
    char *dir = (char *)path.c_str();
    for(int i = 0;i < 1;i++){
        dir = strpbrk(dir,"/");
        dir[0] = ' ';
    }
    string name{dir};
    name = name.substr(1);
    return name;
}

#endif