#include "template.h"
#include <iostream>
template <typename T>
void templateFunction() {
    std::cout << "Template Defined!" << std::endl;
}

// ============================================================================
// Without this line, there will be a linker error with the current code since
// the "int" version of foo never actually gets created by the compiler in any
// other compilation unit otherwise
template void templateFunction<int>();