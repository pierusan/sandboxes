#include <algorithm>
#include <cstdlib>
#include <iostream>
#include <sstream>
#include <vector>

#include "header_variables.h"
#include "template.h"
#include "util.h"

void templateMisc() { templateFunction<int>(); }

// int header_var = 2;  // To use with extern
void headerVariables() {
    std::cout << "main.cpp | header_var: " << header_var << std::endl;
    header_variable_function();
};

void copyifUsingMask() {
    std::vector<int> mask = {1, 1, 0, 0, 1, 1};
    std::vector<int> vec = {1, 2, 3, 4, 5, 6};

    std::vector<int> v_copy;
    v_copy.reserve(vec.size());
    std::copy_if(vec.begin(), vec.end(), std::back_inserter(v_copy),
                 [index = 0, &mask](int value) mutable {
                     (void)value;
                     return mask[index++] == 1;
                 });
    v_copy.shrink_to_fit();

    std::cout << "vec: " << vec2string(vec) << std::endl;
    std::cout << "mask: " << vec2string(mask) << std::endl;
    std::cout << "v_copy: " << vec2string(v_copy) << std::endl;
}

void newSection() {
    std::cout << std::endl << "==================================" << std::endl;
}

int main() {
    newSection();
    templateMisc();

    newSection();
    headerVariables();

    newSection();
    copyifUsingMask();

    return EXIT_SUCCESS;
}