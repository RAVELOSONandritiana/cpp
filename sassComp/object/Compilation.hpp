#ifndef __COMPILATION_HPP__
#define __COMPILATION_HPP__
#include <vector>
#include <string>
using namespace std;
class Compilation{
    private:
        string name_dir{};
        string out_dir{};
        int lengthFile{};
    public:
        Compilation(string name_dir,string out_dir);
        ~Compilation();
        void getNameDir();
        void CompileFilesInDir();
};

#include "Compilation.cpp"

#endif