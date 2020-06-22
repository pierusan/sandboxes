#pragma once

void header_variable_function();

// http://www.goldsborough.me/c/c++/linker/2016/03/30/19-34-25-internal_and_external_linkage_in_c++/

// int header_var; // In C, both declaration and definition with a garbage int
// int header_var = 2;
// ============================================================================
// Both fail because of linker multiple definition errors

const int header_var = 2;
// ============================================================================
// Works because a const global variable has internal linkage (symbol only
// visible to the translation unit --> no storage created here)

// extern int header_var;
// ============================================================================
// Works if then defined in exactly 1 translation unit
// This works here because extern will restrict this line to the declaration of
// the variable, in other words header_var will not be defined with garbage int,
// as it would normally without the 'extern'

// static int header_var = 2;
// ============================================================================
// Works BUT woudn't want to use it.
// It forces internal linkage since used here in global namespace. Each
// translation unit you include this file in will get its own unique copy of
// that symbol. This will result in higher memory costs, and the variables can
// actually end up being different since copies will be created. It would be
// like having multiple instances of a singleton created

// namespace {
// int header_var = 2;
// }
// ============================================================================
// Works but again not recommended. Anonymous namespace is generally the same as
// static