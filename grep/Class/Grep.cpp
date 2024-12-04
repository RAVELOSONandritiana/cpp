#ifndef __GREP_CPP__
#define __GREP_CPP__

Grep::Grep(){

}

Grep::~Grep(){

}

void Grep::setParameter(std::string dir,std::string motif){
    this->dir = dir;
    this->motif = motif;
}

void Grep::showParameter(){
    std::cout << "Repertoire : " << this->dir << std::endl;
    std::cout << "Motif      : " << this->motif << std::endl;
}

void Grep::showFiles(){
    std::ostringstream ss {};
    ss << "ls ";
    ss << this->dir;
    FILE *listFile = popen(ss.str().c_str(),"r");
    char chaine[255];
    while(fgets(chaine,sizeof(chaine),listFile)){
        std::string newChaine(chaine);
        if(toLower(newChaine).find(toLower(this->motif)) != std::string::npos)
        {
            std::cout << newChaine;
        }
    }
}
#endif


