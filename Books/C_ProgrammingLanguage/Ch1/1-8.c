// Write a program to count blanks, tabs, and newlines.
#include <stdio.h>

int main()
{
   int char_counter, blanks_counter, tabs_counter, newlines_counter;
   
   blanks_counter = 0;
   tabs_counter = 0;
   newlines_counter = 0;
   
   while ( (char_counter = getchar()) != EOF)
   {
       if (char_counter == ' ')
       {
           ++blanks_counter;
       }
       
       if (char_counter == '\t')
       {
           ++tabs_counter;
       }
       
       if (char_counter == '\n')
       {
           ++newlines_counter;
       }
   }
   printf("# of blanks: %d\n", blanks_counter);
   printf("# of tabs: %d\n", tabs_counter);
   printf("# of newlines: %d\n", newlines_counter);
   
   return 0;
}