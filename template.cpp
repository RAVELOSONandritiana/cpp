#include <iostream>
using namespace std;
template <class T> T minimum(T a,T b);
int main()
{
	cout<<minimum(1,2);
	return 0;
}

template <class T> T minimum(T a,T b)
{
	if(a < b)
		return a;
	else
		return b;
}
