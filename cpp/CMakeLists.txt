cmake_minimum_required(VERSION 3.3.0)
project(cpp_sandbox)

# https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html#Warning-Options
# Wall - Enables most warning flags
# Wetra - Enables extra warning flags not in Wall
# Werror - Treat every warning as an error
add_compile_options(-Wall -Wextra -Werror)
# TODO: Use target_compile_options instead!

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

add_executable(exercice src/exercice.cpp)