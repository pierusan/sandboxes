#!/usr/bin/zsh

# https://stackoverflow.com/questions/8073097/how-to-freeze-packages-installed-only-in-the-virtual-environment

step()
{
	[[ -z ${1:-} ]] && {echo "NO ARGUMENT GIVEN IN step"; return 1;}

	echo "\n==========================================================="
	echo $1
}

if [ -z "$VIRTUAL_ENV" ]; then
    step "FIRST ACTIVATE VIRTUAL ENV"
    [[ -d "${1:-}" ]] || { echo \
    "Since no virtual environment was already activated, please provide a dir as argument."; 
    return 1 }
    # source $1/$(basename $(readlink -f $1))_env/bin/activate
    source $(find $1 -iname activate)
else
    # step "source $VIRTUAL_ENV/bin/activate"
    # source $VIRTUAL_ENV/bin/activate
    pip list
fi
echo "VIRTUAL_ENV=$VIRTUAL_ENV"

# Only freeze local env
local requirements_path=$(dirname $VIRTUAL_ENV)/requirements.txt
step "Freezing pip at: ${requirements_path}"
pip freeze -l > ${requirements_path}