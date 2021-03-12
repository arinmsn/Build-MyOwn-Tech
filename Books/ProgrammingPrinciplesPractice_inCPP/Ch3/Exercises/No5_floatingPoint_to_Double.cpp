#include <iostream>
using namespace std;

int main()
{
    // Ask user to floating-point values
    // Store then in double variables
    // Compare output of two programs (No.4_ val1_to_val2)
    cout << "Please, enter two floating-point numbers: ";
    double val1, val2;
    cin >> val1 >> val2;
    cout << "You entered: \n";
    cout << "First number: " << val1 << "\n";
    cout << "Second number: " << val1 << "\n";
    // Strange effects
    // 1.565 3.145 returns -> 1.565 1.565
    // 1.0 2.0 returns -> 1 1
    // 0.05 10.05 returns -> 0.05 0.05
}