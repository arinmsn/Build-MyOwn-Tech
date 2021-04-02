/*
Get the “repeated word detection program” to run. Test it with the sentence
She she laughed He He He because what he did did not look very very good
good . How many repeated words were there? Why? What is the definition of
word used here? What is the definition of repeated word? (For example, is She
she a repetition?)

Pg 73
*/
#include <iostream>
#include <string>
using namespace std;

int main()
{
    int number_of_words = 0;
    string previous = " ";
    string current;

    while (cin >> current)
    {
        ++number_of_words;
        if (previous == current)
        {
            cout << "word number " << number_of_words << " repeated: " << current << "\n";
            previous = current;
        }
    }
}