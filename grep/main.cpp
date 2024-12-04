#include "./Class/Grep.hpp"
using namespace std;
int main(int argc,char *argv[])
{
    Grep *g = new Grep();
    if(argc == 3){
        g->setParameter(argv[1],argv[2]);
        g->showFeiles();
    }
    else{
        std::cout << "Syntax Error" << std::endl;
    }
    return 0;
}