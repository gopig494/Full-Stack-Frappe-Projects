from __future__ import unicode_literals
from frappe import _

def get_data():
	return {
		'fieldname': 'sam',
		
		'transactions': [
			{
				'label': _('sam'),
				'items': ['Payments']
			}
			]

}