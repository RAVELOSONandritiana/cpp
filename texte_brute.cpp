#include <iostream>
#include <string>
using namespace std;
void rectangle(int height,int width);
void rectangle(string name);
int main(){
	
	rectangle(5,3);

	return 0;
}
void rectangle(int height,int width){
	for(int i = 0;i < height;i++)
	{
		for(int j = 0;j < width;j++)
			cout<<"*";
		cout<<"\n";
	}
}
void rectangle(string name){
	cout<<name;
}
