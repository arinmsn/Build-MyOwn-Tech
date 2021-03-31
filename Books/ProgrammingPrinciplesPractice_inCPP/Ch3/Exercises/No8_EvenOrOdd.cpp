#include <iostream>
using namespace std;

int main()
{
    int userNumber;
    bool isEven = false;
   
    cout << "Let's determine if an integer is odd or even.\n";
    cout << "Enter a positive integer: ";
    cin >> userNumber;

    // (userNumber % 2 == 0) ? 'even' : 'odd';
    if (userNumber % 2 == 0)
    {
        cout << "The value " << userNumber << " is even.\n";
    } else {
        cout << "The value " << userNumber << " is odd.\n";
    }
    
}