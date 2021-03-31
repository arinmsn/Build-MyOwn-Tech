//if the user enters the val-
//ues Steinbeck , Hemingway , Fitzgerald , the output should be Fitzgerald,
//Hemingway, Steinbeck .

#include <iostream>
#include <vector>
#include <algorithm> // for sort()
#include <string>
using namespace std;

int main()
{
    string userInput;
    vector<string> words {};
    string word1, word2, word3;
    cout << "\nPlease, enter 3 words:  ";
    
    cin >> word1 >> word2 >> word3;
    
    words.push_back(word1);
    words.push_back(word2);
    words.push_back(word3);
    
    sort(words.begin(), words.end());
    cout << words[0] << ", " << words[1] << ", " << words[2] << endl;
    // TODO: Use reverse and simplify code
}