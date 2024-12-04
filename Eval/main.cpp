#include <iostream>
#include "Resolv.hpp"

using namespace std;

int main()
{

	Resolv *r = new Resolv();
	r->setExpr("(2*2)+2");
	cout << r->resolv() << endl;

	return 0;
}

