#include <cstdlib>
#include <iostream>
#include <vector>

#include "header_variables.h"
#include "template.h"

void templateMisc() { templateFunction<int>(); }

// int header_var = 2;  // To use with extern
void headerVariables() {
    std::cout << "main.cpp | header_var: " << header_var << std::endl;
    header_variable_function();
};

int main() {
    templateMisc();
    headerVariables();
    return EXIT_SUCCESS;
}