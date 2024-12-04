#ifndef __chaine_cpp__
#define __chaine_cpp__


std::string toLower(std::string src){
    std::string dst {};
    for(char c:src)
    {
        dst.push_back(tolower(c));
    }
    return dst;
}

#endif