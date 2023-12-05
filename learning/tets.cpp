#include<iostream>
using namespace std;
int main(){
    bool a = true && true && !false && (!false);
    cout<<a<<endl;

    for(int i=1 ; i<=10 ; i*=2)
    cout<<i<<endl;

    return 0;
}