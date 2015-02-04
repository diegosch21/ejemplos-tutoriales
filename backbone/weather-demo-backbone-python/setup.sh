#!/usr/bin/env bash

python virtualenv.py env --no-site-packages
source env/bin/activate
pip install -r modules.txt

cp base_data.db weather/data.db
