// Write a program to copy its input to its output, replacgin each tab with \t
// each backsapce by \b, and each backslash by \\. This makes tabs and basckaspaces
// visible in an unambigous way.

#include <stdio.h>

int main(void)
{
    int c;

    while( (c = getchar() != EOF) )
    {
        if (c == '\t')
        {
            putchar('\\');
            putchar('t');
        }

        if (c == '\b')
        {
            putchar('\\');
            putchar('b');
        }

        if (c == '\\')
        {
            putchar('\\');
            putchar('\\');
        }

        if (c != '\t' && c != '\b' && c != '\\')
        {
            putchar(c);
        }

        return 0;
    }
}