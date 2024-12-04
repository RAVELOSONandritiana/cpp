#ifndef __DIRECTORY_CPP__
#define __DIRECTORY_CPP__

Directory::Directory(){

}

Directory::~Directory(){
    
}
//obtenir un ensemble de dossier comme valeur de retour mais 
//en meme temps en remplacant immediatement l attrubut
set<string> Directory::getDir(vector<string> listFiles){
    set<string> dir {};
    for(string ligne : listFiles){
        vector<int> indexes = detectChar(ligne,'/');
        int i = indexes[indexes.size() - 1];
        dir.insert(ligne.substr(0,i));
    }
    this->listDirectory = dir;
    return dir;
}

//creer les repertoires avant la compilation des fichiers.js
void Directory::createDirectory(string destination){
    string cmd = "mkdir -p " + destination;
    system(cmd.c_str());
    for(string c:this->listDirectory){
        cmd = "mkdir -p " + c;
        cout << cmd << endl;
        system(cmd.c_str());
    }
    cout << "creation des repertoires reussi" << endl;
}

#endif