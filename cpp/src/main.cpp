#include <algorithm>
#include <cstdlib>
#include <iostream>
#include <sstream>
#include <vector>

#include "header_variables.h"
#include "template.h"

void templateMisc() { templateFunction<int>(); }

// int header_var = 2;  // To use with extern
void headerVariables() {
    std::cout << "main.cpp | header_var: " << header_var << std::endl;
    header_variable_function();
};

template <typename T>
std::string vec_to_string(const std::vector<T> v) {
    std::stringstream ss;
    int tmp = 0;
    for (const auto& val : v) {
        if (tmp != 0) ss << ", ";
        ss << val;
        tmp++;
    }
    return ss.str();
}
void copyif() {
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

    std::cout << "vec: " << vec_to_string(vec) << std::endl;
    std::cout << "mask: " << vec_to_string(mask) << std::endl;
    std::cout << "v_copy: " << vec_to_string(v_copy) << std::endl;
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
    copyif();

    return EXIT_SUCCESS;
}