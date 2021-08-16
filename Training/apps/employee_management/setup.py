# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in employee_management/__init__.py
from employee_management import __version__ as version

setup(
	name='employee_management',
	version=version,
	description='This app is used to manage the dta of employees',
	author='Gopi',
	author_email='App@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
