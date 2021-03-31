/*

Write a program that takes an operation followed by two operands and
outputs the result. For example:

+ 100 3.14
* 4 5

Read the operation into a string called operation and use an
if -statement to figure out which operation the user wants, for example,
if (operation== " + " ) . Read the operands into variables of type double .
Implement this for operations called +, –, *, /, plus, minus, mul, and div
with their obvious meanings.

*/

#include <iostream>
using namespace std;

double calculate(string operation, double num1, double num2);

int main()
{
    string operation = "";
    double num1 {0.0}, num2 {0.0};

    cout << "Enter a math operator followed by two integers\n";
    cout << "separated by a space (eg. '* 2 3'):   ";
    cin >> operation >> num1 >> num2;
    calculate(operation, num1, num2);
}

double calculate(string operation, double num1, double num2)
{
    if (operation == "+")
    {
        cout << "\nYou wanted to add " << num1 << " and " << num2 << "\n";
        cout << num1 << " + " << num2 << " = " << num1+num2;
    } else if (operation == "-") {
        cout << "\nYou wanted to subtract " << num1 << " and " << num2 << "\n";
        cout << num1 << " - " << num2 << " = " << num1-num2;
    } else if (operation == "*") {
        cout << "\nYou wanted to multiply " << num1 << " and " << num2 << "\n";
        cout << num1 << " * " << num2 << " = " << num1*num2;
    } else if (operation == "/") {
        cout << "\nYou wanted to add " << num1 << " and " << num2 << "\n";
        // TODO: Division by zero is undefined!
        cout << num1 << " / " << num2 << " = " << num1/num2;
    } else {
        cout << "\nThat is not an operation I am familiar with.\n";
        cout << "I only recognize '+', '-', '*', and '/'.";
    }
}