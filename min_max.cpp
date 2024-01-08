#include <iostream>
#include <vector>
using namespace std;
int tab_min(vector<int> tab);
int tab_max(vector<int> tab);
int main(){
	vector<int> tab {2,4,6,8,10,-5};
	int min {0};
	int max {0};
	min = tab_min(tab);
	max = tab_max(tab);
	
	cout<<"min : "<<min<<" et max : "<<max;
	return 0;
}
int tab_min(vector<int> tab){
	int min = tab[0];
	for(auto element : tab){
		if(element < min)
			min = element;
	}
	return min;
}
int tab_max(vector<int> tab){
	int max = tab[0];
	for(auto element : tab){
		if(element > max)
			max = element;
	}
	return max;
}
