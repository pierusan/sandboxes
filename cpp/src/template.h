#pragma once
#include <iostream>

// ===============================================================
// Tricky code here, since if a compilation unit ever calls this template with
// type TYPE, then there will have to be somewhere a compilation unit which both
// defines the template function and implements it specifically for TYPE Usually
// the template should be created in
template <typename T>
extern void templateFunction();

// ===============================================================
// This would have been better: usually better to define a template inside of
// the header

// template <typename T>
// extern void foo() {
//     std::cout << "Here I am!" << std::endl;
// };
