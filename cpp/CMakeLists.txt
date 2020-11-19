cmake_minimum_required(VERSION 3.3.0)
project(cpp_sandbox)

# https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html#Warning-Options
# Wall - Enables most warning flags
# Wetra - Enables extra warning flags not in Wall
# Werror - Treat every warning as an error
# mavx2 - Generates code with AVX2 instructions (not completely sure why needed)
add_compile_options(-Wall -Wextra -Werror -mavx2)

# Use C++ 14
set(CMAKE_CXX_STANDARD 14)

# Output a compile_commands.json to see what the compiler did
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

set(SRC src/header_variables.cpp 
        src/template.cpp 
        src/ref_value.cpp 
        src/nth_element.cpp 
        src/main.cpp)
add_executable(sandbox ${SRC})