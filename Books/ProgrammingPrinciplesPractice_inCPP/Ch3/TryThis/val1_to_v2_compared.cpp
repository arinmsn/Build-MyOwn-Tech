#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    cout << "Please, enter two integer numbers: ";
    int val1, val2;
    cin >> val1 >> val2;
    cout << "You entered " << val1 << " and " << val2 << ".\n";
    cout << "Smaller number: " << min(val1, val2) << "\n";
    cout << "Bigger number: " << max(val1, val2) << "\n";
    cout << "Product of two numbers: " << val1*val2 << "\n";
    cout << "Sum of the two numbers: " << val1+val2 << "\n";
    cout << "Difference: " << val1 - val2 << "\n";
    
    // Difference
    // int diff = std::abs(val1 - val2);
    // cout << "Difference: " << diff << "\n";
    
    // Division by zero is undefined!

}

