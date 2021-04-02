#include <iostream>
using namespace std;

int main()
{
    string previous = " ";  // not a word
    int num_of_words = 0;
    string current;
    while (cin >> current)
    {
        ++num_of_words;
        if (previous == current)
        {
            
            cout << "word number " << num_of_words
            << " repeated: " << current << "\n";
        }
        previous = current;
    }   
}

