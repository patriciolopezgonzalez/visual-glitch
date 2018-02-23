#!/bin/bash

export FLASK_APP=api.py
export FLASK_DEBUG=1
env/bin/flask run --host=0.0.0.0 --port=5001
