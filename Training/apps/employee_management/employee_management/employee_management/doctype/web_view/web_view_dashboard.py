from __future__ import unicode_literals
from frappe import _


def get_data():
    return {
        'fieldname': 'ref',
        # 'non_standard_fieldnames': {
        #     'Auto Repeat': 'reference_document',
        # },
        'transactions': [
            {
                'label': _('List'),
                'items': ['Web Link']
            },
        ]
    }


# def get_data():
#     return {
#         'fieldname': 'klienti',
#         'transactions': [
#             {
#                 'label': _('Intervence'),
#                 'items': ['Intervence']
#             }
#         ]
#     }
