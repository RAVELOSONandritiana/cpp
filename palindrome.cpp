#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main(){
	string mot {"kayak"};
	string mot_copie {};
	mot_copie = mot;
	reverse(begin(mot_copie),end(mot_copie));
	(mot==mot_copie)?cout<<"true":cout<<"false";
	return 0;
}
