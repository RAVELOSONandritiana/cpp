#include <iostream>
using namespace std;
class point{
    private:
    int x;int y;
    public:
    point(int a,int b):x(a),y(b){}
    void aff(){
        cout<<x<<" et "<<y;
    }
    ~point(){}
};
int main(){
    point p(5,3);
    p.aff();



    return 0;
}
