from __future__ import unicode_literals
from frappe import _


def get_data():
    return {
        'fieldname': 'pyt_menu',
        # 'non_standard_fieldnames': {
        #     'Auto Repeat': 'reference_document',
        # },
        'transactions': [
            {
                'label': _('Payment Menu'),
                'items': ['Payment Menu']
            },
        ]
    }
