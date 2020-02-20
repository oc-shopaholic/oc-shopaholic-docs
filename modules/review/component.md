{% extends 'docs/modules/component-default.md' %}

{% block content %}

* [MakeReview](#makereview)

## MakeReview

The component allows to create reviews.

**Component properties:**
  - Mode (Submit form/Ajax form)
  - Send flash message (only for Ajax mode)
  - Enable redirect
  - Choose page for redirect (review ID, product ID and product slug will be passed to page URL)
  
**Usage:**
The component is used to process review form.
To send ajax request, you must use **MakeReview::onCreate** method.
Available fields: name, email, phone, comment, rating.

**Example 1:** Submit form

{% verbatim %}
```twig
[MakeReview]
mode="submit"
redirect_on=1
redirect_page="review_success"
==
{% set arError = MakeReview.getErrorMessage %}
{% set arForm = MakeReview.getOldFormData %}

<form>
    <label for="field-email">Email</label>
    <input type="email" id="field-email" placeholder="Email" name="email" value="{{ arForm.email }}">
    {% if arError.message is not empty and arError.field == 'email' %}
        <p>{{ arError.message }}</p>
    {% endif %}
    
    <label for="field-comment">Comment</label>
    <textarea id="field-comment" name="comment">{{ arForm.comment }}</textarea>
    {% if arError.message is not empty and arError.field == 'comment' %}
        <p>{{ arError.message }}</p>
    {% endif %}
    
    <span>Rating:</label>
    <label><input type="radio" name="rating" value="1">1</label>
    <label><input type="radio" name="rating" value="2">2</label>
    <label><input type="radio" name="rating" value="3">3</label>
    <label><input type="radio" name="rating" value="4">4</label>
    <label><input type="radio" name="rating" value="5">5</label>
    
    <input type="hidden" name="product_id" value="10">
    <button type="submit">Submit</button>
</form>
{% if arError.message is not empty %}
    <p>{{ arError.message }}</p>
{% endif %}
```
{% endverbatim %}

**Example 2:** Ajax request

```javascript
$('form').request('MakeReview::onCreate');
```

The MakeReview.getOldFormData method returns filled form fields, if form was sent and error occurred.
The MakeReview.getErrorMessage method returns error message if form was sent and error occurred.
```php
[
    'message' => 'Error message',
    'field'   => 'email',           //Field name, if there was validation error
]
```
{% endblock %}