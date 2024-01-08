#pragma once
class Donne{
    private:
        vector <int> table {};
    public:
        Donne();
        void addElement(int nombre);
        vector<int> getElement(int div,int reste);
        ~Donne();
};