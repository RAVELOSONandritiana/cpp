#ifndef __FICHIER__CPP__
#define __FICHIER__CPP__

Fichier::Fichier(){
    cout << "construction de l objet Fichier reussi" << endl;
}

Fichier::~Fichier(){
    cout << "destruction de l objet Fichier reussi" << endl;
}

void Fichier::setSrc(string src){
    this->srcname = src;
}

string Fichier::getSrc(){
    return this->srcname;
}

string Fichier::getDst(){
    return this->dstname;
}

void Fichier::setDst(){
}

void Fichier::setDst(string dst){
    this->dstname = dst;
    cout << "changement du pertertoire de destination" << endl;
}

vector<string> Fichier::getAllFiles(){
    vector<string> result {};
    string cmd = "find " + this->srcname + " -type f";
    FILE *file = popen(cmd.c_str(),"r");
    char ligne[255];
    ostringstream ss{};
    while(fgets(ligne,255,file)){
        ss << ligne;
        result.push_back(trim(ss.str()));
        ss.str("");
        ss.str();
    }
    return result;
}

void Fichier::formatList(){
    formatVector(this->listFile);
}

#endif