/*
Write a program that converts spelled-out numbers such as “zero” and
“two” into digits, such as 0 and 2. When the user inputs a number, the
program should print out the corresponding digit. Do it for the values 0,
1, 2, 3, and 4 and write out not a number I know if the user enters some-
thing that doesn’t correspond, such as stupid computer! .
*/

#include <iostream>
#include <string>
#include <vector>
#include <map>
using namespace std;

int main()
{
    vector<string> numbersInWords = {"zero", "one", "two", "three", "four"};
    string userInput = "";

    cout << "======== Words to numbers Converter ========\n";
    // TODO: lowercase user entered string
    cout << " Enter a number in words (all lowercase): ";
    cin >> userInput;
    
    // TODO:  Simplify code here. 
    if (userInput == numbersInWords.at(0))
    {
        cout << "You entered 0.\n";
    } else if (userInput == numbersInWords.at(1)){
        cout << "You entered 1.\n";
    } else if (userInput == numbersInWords.at(2)){
        cout << "You entered 2.\n";
    } else if (userInput == numbersInWords.at(3)){
        cout << "You entered 3.\n";
    } else if (userInput == numbersInWords.at(4)){
        cout << "You entered 4.\n";
    } else {
        cout << "Not a number I know yet!\n";
    }
    
}

// TODO: 
/*
std::map<char, char> my_map = {
    { 'A', '1' },
    { 'B', '2' },
    { 'C', '3' }
};
*/