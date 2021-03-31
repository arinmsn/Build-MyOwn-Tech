/*

Write a program that prompts the user to enter some number of pen-
nies (1-cent coins), nickels (5-cent coins), dimes (10-cent coins), quar-
ters (25-cent coins), half dollars (50-cent coins), and one-dollar coins
(100-cent coins). Query the user separately for the number of each sizeCHAPTER 3 POSTSCRIPT
coin, e.g., “How many pennies do you have?” Then your program should
print out something like this:

You have 23 pennies.
You have 17 nickels.
You have 14 dimes.
You have 7 quarters.
You have 3 half dollars.
The value of all of your coins is 573 cents.

(2) Improvements - TODO: 
Make some improvements: if only one of a coin is reported, make the
output grammatically correct, e.g., 14 dimes and 1 dime (not 1 dimes ).
Also, report the sum in dollars and cents, i.e., $5.73 instead of 573 cents .

*/
#include <iostream>
using namespace std;

int calculateCoinValue(int coin);

int main()
{
    double pennies, nickels, dimes, quarters, half_dollars;
    double total = 0;
    
    cout << "\t=======================================\n";
    cout << "\tHow many pennies do you have?  ";
    cin >> pennies;
    total = pennies*0.01;
    cout << total;
    
    cout << "\tHow many nickels do you have?  ";
    cin >> nickels;
    total += nickels * 0.05;
    cout << total;
    
    cout << "\tHow many dimes do you have?  ";
    cin >> dimes;
    total += dimes * 0.10;
    cout << total;
    
    cout << "\tHow many quarters do you have?  ";
    cin >> quarters;
    total += quarters * 0.25;
    cout << total;
    
    cout << "\tHow many half dollars do you have?  ";
    cin >> half_dollars;
    total += half_dollars * 0.50;
    cout << total;
    
    cout << "\t=======================================\n";
    // You have 23 pennies.
    // Make it grammically correct. If user enters 1 for penny, show 
    // You have 1 penny. (not pennies)
    cout << "\tThe value of all of your coins is " << total*100 << " cents.\n";
    cout << "\tThe value of all of your coins is worth $" << total << " cents.\n";
}
