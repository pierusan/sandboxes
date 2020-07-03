
#include <algorithm>
#include <chrono>
#include <iostream>
#include <random>

// Derived from conversation with dllu
// https://gist.github.com/dllu/6abea1cb3853c989602306858e4514e9

template <class T>
std::vector<T> nth_elements_subarray_simple(
    std::vector<T>& v, const std::vector<size_t>& percentiles) {
    std::vector<T> output;
    output.reserve(percentiles.size());
    auto it = v.begin();
    for (size_t perc : percentiles) {
        size_t ind = perc * v.size() / 100;
        std::nth_element(it, v.begin() + ind, v.end());
        output.push_back(*(v.begin() + ind));
        it = v.begin() + ind;
    }
    return output;
}

template <class T>
std::vector<T> nth_elements_simple(std::vector<T>& v,
                                   const std::vector<size_t>& percentiles) {
    std::vector<T> output;
    output.reserve(percentiles.size());
    for (size_t perc : percentiles) {
        size_t ind = perc * v.size() / 100;
        std::nth_element(v.begin(), v.begin() + ind, v.end());
        output.push_back(*(v.begin() + ind));
    }
    return output;
}

template <class T>
std::vector<T> nth_elements_sort(std::vector<T>& v,
                                 const std::vector<size_t>& percentiles) {
    std::vector<T> output;
    std::sort(v.begin(), v.end());
    for (size_t perc : percentiles) {
        size_t ind = perc * v.size() / 100;
        output.push_back(v[ind]);
    }
    return output;
}

template <class T>
void recursion(std::vector<T>& v, std::vector<T>& output,
               const std::vector<size_t>& inds, std::ptrdiff_t lo,
               std::ptrdiff_t hi) {
    const std::ptrdiff_t pivot = (lo + hi) / 2;
    const std::ptrdiff_t ind = inds[pivot];
    // std::cout << lo << ", " << pivot << ", " << hi << std::endl;
    std::nth_element(v.begin() + inds[lo], v.begin() + ind,
                     v.begin() + inds[hi]);
    if (hi <= lo + 1) return;

    output[pivot - 1] = *(v.begin() + ind);
    recursion(v, output, inds, lo, pivot);
    recursion(v, output, inds, pivot, hi);
}

template <class T>
std::vector<T> nth_elements_subarray_optimal(
    std::vector<T>& v, const std::vector<size_t>& percentiles) {
    std::vector<T> output;
    std::vector<size_t> inds;
    inds.reserve(percentiles.size() + 2);
    inds.push_back(0);
    for (size_t p : percentiles) {
        inds.push_back(p * v.size() / 100);
    }
    inds.push_back(v.size());
    output.resize(percentiles.size());
    recursion(v, output, inds, 0, inds.size() - 1);
    return output;
}

void nth_elements_benchmark(const size_t n) {
    std::random_device rd;
    std::default_random_engine engine(rd());
    std::uniform_int_distribution<int> uniform_dist(1, 100 * n);
    std::vector<int> test;

    for (size_t i = 0; i < n; i++) {
        test.push_back(uniform_dist(engine));
    }

    auto test0 = test;
    auto test1 = test;
    auto test2 = test;
    auto test3 = test;

    std::vector<size_t> percentiles;
    for (size_t p = 5; p <= 95; p += 5) {
        percentiles.push_back(p);
    }

    auto t0 = std::chrono::steady_clock::now();
    auto o0 = nth_elements_subarray_simple(test0, percentiles);
    auto t1 = std::chrono::steady_clock::now();
    auto o1 = nth_elements_simple(test1, percentiles);
    auto t2 = std::chrono::steady_clock::now();
    auto o2 = nth_elements_sort(test2, percentiles);
    auto t3 = std::chrono::steady_clock::now();
    auto o3 = nth_elements_subarray_optimal(test3, percentiles);
    auto t4 = std::chrono::steady_clock::now();
    std::cout << "n = " << n << std::endl;
    std::cout << "nth_elements_simple:            " << (t2 - t1).count() / 1e6
              << " ms" << std::endl;
    std::cout << "nth_elements_sort:              " << (t3 - t2).count() / 1e6
              << " ms" << std::endl;
    std::cout << "nth_elements_subarray_simple:   " << (t1 - t0).count() / 1e6
              << " ms" << std::endl;
    std::cout << "nth_elements_subarray_optimal:  " << (t4 - t3).count() / 1e6
              << " ms" << std::endl;
    // for (auto& o : o0) {
    //     std::cout << o << " ";
    // }
    // std::cout << std::endl;
    // for (auto& o : o1) {
    //     std::cout << o << " ";
    // }
    // std::cout << std::endl;
    // for (auto& o : o2) {
    //     std::cout << o << " ";
    // }
    // std::cout << std::endl;
    // for (auto& o : o3) {
    //     std::cout << o << " ";
    // }
    // std::cout << std::endl;
    if (o3 != o2 || o1 != o2 || o0 != o2) {
        std::cout << "OH NO!!!!!!!!!!!!" << std::endl;
    }
}