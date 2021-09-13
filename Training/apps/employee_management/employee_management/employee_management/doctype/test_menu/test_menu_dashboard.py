from __future__ import unicode_literals
from frappe import _

def get_data():
	return {
		'fieldname': 'sample',
		# 'non_standard_fieldnames': {
		# 	'Auto Repeat': 'reference_document',
		# },
		'transactions': [
			{
				'label': _('Test Menu Info'),
				'items': ['Test Menu Info']
			},
		]
	}