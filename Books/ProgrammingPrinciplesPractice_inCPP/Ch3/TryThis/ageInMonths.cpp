#include <iostream>
using namespace std;

int main()
{
    string name = "";
    double age = 0.0;

    cout << "Enter your name: \n";
    cin >> name;
    cout << "Enter you age in years: \n";
    cin >> age;
    cout << "Your name is: " << name << endl;
    cout << "Your age is: " << age*12 << endl;

}