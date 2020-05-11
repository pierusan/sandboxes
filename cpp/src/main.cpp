#include <cstdlib>
#include <iostream>
#include <vector>

#include "template.h"

void templateMisc() { templateFunction<int>(); }

int main() {
    templateMisc();
    return EXIT_SUCCESS;
}