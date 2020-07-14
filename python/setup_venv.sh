#!/usr/bin/zsh

step()
{
	[[ -z ${1:-} ]] && {echo "NO ARGUMENT IN step"; return 1;}

	echo "\n==========================================================="
	echo $1
	echo "==========================================================="
}

# Get dirname
[[ -d "${1:-}" ]] || { echo "Usage: $0 dirname"; return 1 } 
local dir_path=$(readlink -f $1)
local env_name=$(basename $dir_path)_env


# Create a new virtual environment. Based on https://youtu.be/TILIcrrVABg?t=528
pushd ${dir_path}
step "CREATE ENV: ${env_name}"
python3 -m venv ${env_name}

# Install wheel to avoid errors when installing packages later
# https://stackoverflow.com/questions/34819221/why-is-python-setup-py-saying-invalid-command-bdist-wheel-on-travis-ci
step "PIP INSTALL WHEEL"
source ${env_name}/bin/activate
pip install wheel

# Install pip libraries if a requirements.txt is present
step "PIP INSTALL FROM requirements.txt"
req=${dir_path}/requirements.txt
if [ -r ${dir_path}/requirements.txt ]; then
	echo "Installing libraries based on ${req}"
	pip install -r ${req}
else
	echo "No file: ${req}. Won't pip install libraries."
fi
popd

