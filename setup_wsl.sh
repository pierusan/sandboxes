#!/usr/bin/zsh
sudo apt update
sudo apt upgrade
sudo apt install -y build-essential gdb clang-format-8
sudo ln -s /usr/bin/clang-format-8 /usr/bin/clang-format
