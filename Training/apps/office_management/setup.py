# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in office_management/__init__.py
from office_management import __version__ as version

setup(
	name='office_management',
	version=version,
	description='management',
	author='gopi',
	author_email='dd@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
