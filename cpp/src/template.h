#pragma once
#include <iostream>

// ===============================================================
// A template is just a recipe to create functions/classes, nothing more.
// This makes this code tricky here, since if a compilation unit ever calls this
// template with type TYPE, the specific templated function with type TYPE there
// will have to be defined somewhere. Si there will need to be another
// compilation unit which both defines the template function and implements it
// specifically for TYPE.
template <typename T>
extern void templateFunction();  // extern here means we are just declaring

// ===============================================================
// This would have been better: usually better to define a template inside of
// the header. That way the compiler will be able to create the specific
// function for any TYPE at compile time

// template <typename T>
// extern void foo() {
//     std::cout << "Here I am!" << std::endl;
// };
