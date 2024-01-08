#include <iostream>
#include <iomanip>
#include <bitset>
int main(){
    while(1){
        int n = 5;
        std::cout<<"nombre : ";
        std::cin>>n;
        std::cout<<std::bitset<8>(n)<<std::endl;
    }
    return 0;
}
