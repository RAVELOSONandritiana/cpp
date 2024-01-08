#include <iostream>
using namespace std;
struct point{
    private:
        int x;int y;
    /*
    void initialise(int x,int y){
        this->x = x;
        this->y = y;
    }
    */
    public:
        point(int a,int b):x(a),y(b){}
        void aff(){
            cout<<x<<" et "<<y;
        }
        ~point(){}
};
int main(){
    point p(2,3);
    //p.initialise(8,3);
    p.aff();



    return 0;
}
