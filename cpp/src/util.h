#pragma once

#include <string>
#include <vector>

template <typename T>
std::string vec2string(const std::vector<T> v) {
    std::stringstream ss;
    int tmp = 0;
    for (const auto& val : v) {
        if (tmp != 0) ss << ", ";
        ss << val;
        tmp++;
    }
    return ss.str();
}
