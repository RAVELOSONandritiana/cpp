#ifndef __RESOLV_CPP
#define __RESOLV_CPP
string corr(string expr)
{
    if(expr.find("*)") != string::npos){
        expr.replace(expr.find("*)"),2,")");
    }
    if(expr[expr.size()-1] == '*'){
        expr.replace(expr.find("*"),1,"-");
    }
    return expr;
}

Resolv::Resolv(){

}

Resolv::~Resolv(){

}

void Resolv::setExpr(string expression)
{
    this->expression = expression;
}

string Resolv::getExpr()
{
    return this->expression;
}

// string Resolv::resolv()
// {
//     string expr = this->expression;

//     if(expr.find("(") != string::npos || expr.find(")") != string::npos)
//     {
//         Parenthese *par = new Parenthese();
//         par->setChaine(expr);

//         unsigned nb = par->getIndexParenthese(type::fermer).size();
//         unsigned cpt = 0;
//         for(cpt = 0;cpt < nb;cpt++)
//         {
//             vector<unsigned> index = par->indexParenthese(cpt);
//             string tmp = expr.substr(index[0]+1,index[1]-index[0]-1);
//             Eval *ev = new Eval();
//             if(tmp.find("(") != string::npos || tmp.find(")") != string::npos)
//             {
//                 for(int i = 0;i < tmp.size();i++)
//                 {
//                     if(tmp[i] == ')' || tmp[i] == '(')
//                     {
//                         tmp.erase(i,1);
//                         i = 0;
//                     }
//                 }
//                 index = par->indexParenthese(cpt);
//                 tmp = expr.substr(index[0]+1,index[1]-index[0]-1);
//             }
//             ev->setEval(tmp);
            
//             unsigned k = expr.find(tmp)-1 >= 0?expr.find(tmp)-1:0;
//             unsigned l = tmp.size()+1;
//             expr.replace(k,l,ev->calc());
//             par->setChaine(expr);
//         }
//         if(expr.find(")") != string::npos)
//         {
//             expr.erase(expr.size()-1,1);
//         }
//     }
//     else
//     {
//         Eval *ev = new Eval();
//         ev->setEval(expr);
//         expr = ev->calc();
//     }
    

//     return expr;
// }


#endif