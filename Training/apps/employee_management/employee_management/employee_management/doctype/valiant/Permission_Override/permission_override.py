import frappe


def permission_ov(user):
    pass
# print("///////////******///////******////******///**")
# print(user)
# print(frappe.session.user)

# return """(`tabValiant`.`native`='Salem' )"""
# return "(`tabValiant`.owner = 'i am')".format(user=frappe.db.escape(user))


def has_permission(doc, user=None, permission_type=None):
    # when reading a document allow if event is Public
    print("///////////******///////******////******///**")
    print(doc.native)
    print(user)
    print(permission_type)
    # if permission_type == "read":
    #     return True

    # if permission_type == "write":
    #     return True
    if doc.native == "Salem":
        return False
    # return True
    return True


def event():
    print("*/*/***")
    print("///////////******///////******////******///**")
    print("Event Working")
