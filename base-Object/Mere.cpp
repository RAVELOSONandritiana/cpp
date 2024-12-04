#ifndef __MERE_CPP__
#define __MERE_CPP__

Mere::Mere(string name,unsigned age)
{
    this->name = name;
    this->age = age;
}

string Mere::getName()
{
    return this->name;
}

unsigned Mere::getAge()
{
    return this->age;
}

#endif