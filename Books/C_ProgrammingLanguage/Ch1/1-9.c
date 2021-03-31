// Write a program to copy its input to its output , replacing 
// each string of one or more blanks by a single blank.

#include <stdio.h>
#define BLANK '-'

int main()
{
   int c, last_C;
   last_C = BLANK;
   
   while ( (c = getchar()) != EOF)
   {
       if (c == ' ')
       {
           if (last_C != ' ')
           {
               putchar(c);
           }
       } 
       else 
       {
           putchar(c);
       }
       last_C = c;
   }
   
   return 0;
}