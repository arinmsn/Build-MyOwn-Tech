#include <iostream>
using namespace std;

int main() 
{
    // Rates below are subject to change. Correct as of March 28, 2021
    // yen to dollars 
    constexpr double yen_to_dollars = 0.0091177872;

    // euros to dollars
    constexpr double euro_to_dollars = 1.1806042;

    // Great British Pound pounds to dollars
    constexpr double britishPound_to_dollars = 1.3791798;

    double currency = 1;
    char unit;

    cout << "======================= Currency Converter =========================\n";
    cout << "'y' for Japanese Yen.\t'e' for Euros.\t'p' for GBP - British Pound.\n";
    cout << "\nPlease enter a amount followed by a currency:  ";
    cin >> currency >> unit;

    if (unit == 'y') {
        cout << currency << " yen is " << yen_to_dollars * currency << " dollars\n";    
    } else if (unit == 'e') {
        cout << currency << " euros is " << euro_to_dollars * currency << " dollars\n";    
    } else if (unit == 'p') {
        cout << currency << " British pounds is " << britishPound_to_dollars * currency << " dollars\n";    
    } else {
        cout << "Sorry, I am not familiar with that currency yet.\n";
    }

}