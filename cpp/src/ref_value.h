#pragma once

#include <iostream>
#include <vector>

struct MyVecWrapper {
    MyVecWrapper() : v() { std::cout << "MyVecWrapper()" << std::endl; }
    MyVecWrapper(const MyVecWrapper& other) : v(other.v) {
        std::cout << "MyVecWrapper(const MyVecWrapper& other)" << std::endl;
    }
    MyVecWrapper(MyVecWrapper&& other) : v(std::move(other.v)) {
        std::cout << "MyVecWrapper(MyVecWrapper&& other)" << std::endl;
    }

    MyVecWrapper& operator=(const MyVecWrapper& other) {
        v = other.v;
        std::cout << "MyVecWrapper& operator=(const MyVecWrapper& other)"
                  << std::endl;
        return *this;
    }

    MyVecWrapper& operator=(MyVecWrapper&& other) {
        v = std::move(other.v);
        std::cout << "MyVecWrapper& operator=(MyVecWrapper&& other)"
                  << std::endl;
        return *this;
    }
    ~MyVecWrapper() { std::cout << "~MyVecWrapper()" << std::endl; }
    std::vector<int> v;
};

void refValue();