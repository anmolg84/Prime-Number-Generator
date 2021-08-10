#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
// Function for brute force approach (Method-1) -> Checking each number if it is divisible by any other number or not
void PrintPrimeMethod1(int num1, int num2)
{
    for (int i = num1; i <= num2; i++)
    {
        // Skip when number = 1 or 0
        if (i == 1 || i == 0)
        {
            continue;
        }
        bool isPrime = true;
        for (int j = 2; j <= i / 2; j++)
        {
            if (i % j == 0)
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
        {
            cout << i << " ";
        }
    }
    cout << endl;
    return;
}
// Optimal solution: only 2 is smallest even prime others are all odd ,so skip even numbers
void PrintPrimeMethod2(int num1, int num2)
{
    // Check if number is less than 2
    if (num1 <= 2)
    {
        // assign it to  2
        num1 = 2;
        // if 2 is in range
        if (num2 >= 2)
        {
            cout << num1 << " ";
            num1++;
        }
    }
    // If number 1 is even we need to skip that
    if (num1 % 2 == 0)
    {
        num1++;
    }
    // Skipping even number by i+=2
    bool isPrime = true;
    for (int i = num1; i <= num2; i += 2)
    {
        bool isPrime = true;
        for (int j = 2; j <= sqrt(i); j++)
        {
            if (i % j == 0)
            {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
        {
            cout << i << " ";
        }
    }
    cout << endl;
    return;
}
// Method 3 (Most efficient): Sieve Of Eratosthenes : choose a nummber ,make a array of that range and mark all its factors to 1 , do it and after that which are unmarked will be our prime number
void SeivePrintPrimeMethod3(int num1, int num2)
{
    // Array for marking
    int prime[1000] = {0};

    for (int i = 2; i <= num2; i++)
    {
        // If not marked
        if (prime[i] == 0)
        {
            for (int j = i * i; j <= num2; j += i)
            {
                // Marking all factors of number
                prime[j] = 1;
            }
        }
    }
    for (int i = num1; i <= num2; i++)
    {
        if (prime[i] == 0)
        {
            cout << i << " ";
        }
    }
    cout << endl;
}
int main()
{
    // For Fast Input-Output
    cin.tie(0);

    // Introductory Part
    cout << "---Welcome To Prime Number Generator---" << endl;
    cout << "Method 1: Brute Force Approach " << endl;
    cout << "Method 2: Optimal Approach " << endl;
    cout << "Method 3: Using Sieve Of Eratosthenes " << endl;

    ll num1, num2, method;
    cout << "Enter Number 1: ";
    cin >> num1;
    cout << "Enter Number 2: ";
    cin >> num2;
    cout << "Enter Method: ";
    cin >> method;
    // Result according to output
    if ((method) == 1)
    {
        PrintPrimeMethod1(num1, num2);
    }
    else if ((method) == 2)
    {
        PrintPrimeMethod2(num1, num2);
    }
    else
    {
        SeivePrintPrimeMethod3(num1, num2);
    }

    return 0;
}