// Hint: 1.609 km to the mile
#include <iostream>
using namespace std;

int main()
{
    double converstion_unit{0.62137119};
    cout << "\t---- Miles to Kilometers Coverter ----\n";
    cout << "\tEnter a number in miles: ";
    double miles_userInput = 0.0;
    cin >> miles_userInput;
    double mi_to_km = miles_userInput / converstion_unit;
    cout << "\t" << miles_userInput << " miles is " << mi_to_km << " km.";
}