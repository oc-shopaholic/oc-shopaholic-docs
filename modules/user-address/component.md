{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [UserAddress](#useraddress)
  * [onAdd](#onadd)
  * [onClear](#onclear)
  * [onRemove](#onremove)
  * [onUpdate](#onupdate)
  * [onUpdateList](#onupdatelist)

## UserAddress

Component allows to create/update/remove user addresses.

### onAdd()

Method creates new user address.
```javascript
$('form').request('UserAddress::onAdd');
```

### onClear()

Method removes all user addresses.
```javascript
$.request('UserAddress::onClear');
```

### onRemove()

Method removes user address.
```javascript
var data = {
    'id': 10
};

$.request('UserAddress::onRemove', {
    'data': data
});
```
```javascript
var data = {
    'id': [2, 10]
};

$.request('UserAddress::onRemove', {
    'data': data
});
```

### onUpdate()

Method updates user address.
```javascript
//Prepare object with address data
var data = {
    'id': 10,
    'address1': 'test'
};

//Send ajax request
$.request('UserAddress::onUpdate', {
    'data': data
});
```

### onUpdateList()

Method syncs user address list.
```javascript
//Prepare object with address data
var data = [
      {'id': 10, 'address1': 'test1'},
      {'id': 12, 'address1': 'test2'}
];

//Send ajax request
$.request('UserAddress::onUpdateList', {
    'data': data
});
```
{% endblock %}