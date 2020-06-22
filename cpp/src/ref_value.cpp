#include "ref_value.h"

#include <map>

void f_value(MyVecWrapper v) {
    // Just do something so the compiler doesn't toss this function
    size_t n = v.v.size();
    std::cout << n << std::endl;
}
void f_reference(MyVecWrapper& v) {
    // Just do something so the compiler doesn't toss this function
    size_t n = v.v.size();
    std::cout << n << std::endl;
}

void refValue() {
    MyVecWrapper v0;
    std::map<std::string, MyVecWrapper> map0;

    std::cout << std::endl << "|| Simple Constructors ||" << std::endl;
    {
        MyVecWrapper v1;
        MyVecWrapper v2 = v1;
        MyVecWrapper v3{v1};
        MyVecWrapper v4{std::move(v3)};
        v4 = v1;
    }

    std::cout << std::endl << "|| Map insert ||" << std::endl;
    map0.insert(
        {"v_map_1", {}});  // Will call default and then 2 copy constructors!!

    std::cout << std::endl << "|| Map emplace ||" << std::endl;
    map0.emplace(std::make_pair<std::string, MyVecWrapper>(
        "v_map_2", {}));  // Will call default and then 2 copy constructors!!

    std::cout << std::endl << "|| Pair ||" << std::endl;
    {
        std::pair<std::string, MyVecWrapper> p =
            std::make_pair<std::string, MyVecWrapper>("v_map_2", {});
    }

    std::cout << std::endl << "|| Value Passing ||" << std::endl;
    {
        f_value(v0);
        f_value(map0.at("v_map_1"));
    }

    std::cout << std::endl << "|| Ref Passing ||" << std::endl;
    {
        f_reference(v0);
        f_reference(map0.at("v_map_1"));
    }

    std::cout << std::endl << "|| End ||" << std::endl;
}