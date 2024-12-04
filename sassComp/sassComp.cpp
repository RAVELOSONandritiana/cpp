#include <iostream>
#include <string>
#include <cassert>
using namespace std;
#include "./object/Compilation.hpp"
#include "./function/function.hpp"
int main(int argc,char *argv[])
{
    assert(argc == 3 && "Argument incomplet");
    Compilation *comp = new Compilation(argv[1],argv[2]);
    comp->CompileFilesInDir();
    return 0;
}