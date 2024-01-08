#include <iostream>
#include "Somme.hpp"
#include "Somme.cpp"
using namespace std;

int main(){
	
	Somme nombre = Somme();
	
	long long int n = nombre.getSomme(1,2000);
	cout<<n<<endl;
	return 0;
}
