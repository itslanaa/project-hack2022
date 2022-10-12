#include <iostream>
#include <cstring>
using namespace std;

#include "solution.h"
bool isPermutation(char input1[], char input2[])
{
    int f[256] = {0};
    for (int i = 0; input1[i] != '\0'; i++)
    {
        int a = input1[i];
        f[a]++;
    }
    for (int i = 0; input2[i] != '\0'; i++)
    {
        int a = input2[i];
        f[a]--;
    }
    int check = 0;
    for (int i = 0; i < 256; i++)
    {
        if (f[i] == 0)
            check++;
    }
    if (check == 256)
        return true;
    else
        return false;
}

int main()
{
    int size = 1e6;
    char str1[size];
    char str2[size];
    cin >> str1 >> str2;
    cout << (isPermutation(str1, str2) ? "true" : "false");
}