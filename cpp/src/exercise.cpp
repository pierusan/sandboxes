#include <iostream>
#include <vector>

struct DuplicateCosts {
    int sum = 0;
    int max = 0;
    void add(int cost) {
        sum += cost;
        max = std::max(max, cost);
    }
    int deletionCost() { return sum - max; }
    void clear() {
        sum = 0;
        max = 0;
    }
};

int min_cost(const std::string& S, const std::vector<int>& C) {
    int total_deletion_cost = 0;

    DuplicateCosts prev_duplicate_costs;
    bool was_prev_duplicate = false;
    for (size_t i = 1; i < S.size(); i++) {
        if (S.at(i) == S.at(i - 1)) {
            if (!was_prev_duplicate) {
                prev_duplicate_costs.add(C[i - 1]);
            }
            prev_duplicate_costs.add(C[i]);
            was_prev_duplicate = true;
        } else {
            total_deletion_cost += prev_duplicate_costs.deletionCost();
            was_prev_duplicate = false;
            prev_duplicate_costs.clear();
        }
    }
    total_deletion_cost += prev_duplicate_costs.deletionCost();
    return total_deletion_cost;
}

int main() {
    std::string s = "aaacaa";
    std::vector<int> C = {1, 2, 5, 2, 2, 100};
    std::cout << "INPUTS:" << std::endl
              << "s - \"" << s << "\"" << std::endl
              << "C - {";
    for (const auto& cost : C) {
        std::cout << cost << ", ";
    }
    std::cout << "}" << std::endl << std::endl;

    std::cout << "result: " << min_cost(s, C) << std::endl;

    return EXIT_SUCCESS;
}