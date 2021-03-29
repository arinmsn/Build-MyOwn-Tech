/*
Write a program that prompts the user to enter three integer values, and
then outputs the values in numerical sequence separated by commas. So,
if the user enters the values 10 4 6 , the output should be 4, 6, 10 . If two
values are the same, they should just be ordered together. So, the input
4 5 4 should give 4, 4, 5 .
*/

#include <iostream>
#include <vector>
#include <algorithm> // for sort()
using namespace std;

int main()
{
    int user_ints;
    vector<int> v {};
    int num1, num2, num3;
    cout << "\nPlease, enter 3 integers: ";
    
    cin >> num1 >> num2 >> num3;
    
    v.push_back(num1);
    v.push_back(num2);
    v.push_back(num3);
    
    sort(v.begin(), v.end());
    // for (auto i: v)
    // {
    //     cout << i << ", ";
    // }
    cout << v[0] << ", " << v[1] << ", " << v[2] << endl;
}