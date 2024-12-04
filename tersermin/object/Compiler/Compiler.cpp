#ifndef __COMPILER_CPP__
#define __COMPILER_CPP__

Compiler::Compiler(){}

Compiler::~Compiler(){}

void Compiler::compile(vector<string> listFiles,string source,string destination){
    string cmd = "";
    string s = "";
    for(string c:listFiles){
        s = c;//sauvegarder la source
        c.replace(c.find(source),source.size(),destination);
        if(s.substr(s.size() - 3) == ".js"){
            cmd = "terser " + s + " -o " + c;
            cout << s << " -> " << c << endl;
            system(cmd.c_str());
        }
        // else{
        //     cmd = "cp " + s + " " + c;
        // }
    }
}

#endif