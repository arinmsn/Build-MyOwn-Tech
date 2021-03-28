#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int user_ints;
    vector<int> userInputs {};
    cout << "\nPlease, enter 3 integers: ";
    
    while (cin >> user_ints) 
    {
        userInputs.push_back(user_ints);
    }
    cout << user_ints << endl;
    // for (auto x : userInputs)
    // {
    //     cout << x << ", ";
    // }

}