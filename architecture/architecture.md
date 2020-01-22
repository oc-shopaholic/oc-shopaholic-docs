# Architecture {docsify-ignore-all}

**If you are new** to world of Shopaholic`s ecosystem, we recommend you to start learning from this section.

In "Architecture" section, you will be able to learn in detail about architecture of Shopaholic plugins.
You will get answers to most of your questions: "Why is it done so and not otherwise? How does it work? How to quickly develop projects together with Shopaholic?"

## Directory structure

All plugins developed by [LOVATA](https://lovata.com) or our verified partners have same directory structure:

```
assets/
    css/
    js/
    images/
classes/            <=== Folder with main classes of plugin
    collection/     <=== Folder with *Collection classes
    console/        <=== Folder with artisan commands
    event/          <=== Folder with classes of event listeners
    helper/         <=== Folder with helper classes
    item/           <=== Folder with *Item classes
    queue/          <=== Folder with queue classes
    store/          <=== Folder with *Store classes
components/
interfaces/
config/             <=== Folder with .yaml configs
lang/
models/
tests/
traits/
updates/
views/

```

> Detailed information on how to become verified partner you can find in "[Contribution](http://shopaholic.one/contribution)" section

## Migration and seeder files

Migration  and seeder files contains all changes in database.
All migration files contains checks that will allow you to avoid errors when you restart migration or roll back version of plugins.
 
Files are located in **"update/"** directory.
You can be found detailed information about migration and seeder files in OctoberCMS [documentation](https://octobercms.com/docs/database/structure).

## Model classes

Models are used to create/update/delete/get data from database.
We add to model classes only configuration arrays ([validation](https://octobercms.com/docs/database/traits#validation), [relations](https://octobercms.com/docs/database/relations), etc.),
[scope](https://octobercms.com/docs/database/model#query-scopes) methods, methods for working model in backend.
Logic for working with models contains in separate classes. We do not develop models overloaded with methods for getting data.

> All models **contain annotations** with list of fields and scope methods that are in this class of model. This will allow you to quickly develop your projects using IDE autocomplete function.

Files are located in **"models/"** directory.
You can be found detailed information about models in OctoberCMS [documentation](https://octobercms.com/docs/database/model).

## Caching

We use [ElementItem](architecture/item-class/item-class.md), [ElementCollection](architecture/collection-class/collection-class.md), [Store](architecture/store-class/store-class.md)
classes for caching of model data and output cached data in templates.
Generated cache is automatically reset when an event occurs that affects the validity of this cache.
The logic of automatic cache reset allows you to store cache data for a long time and get good indicators of the speed of your site.

!> **Attention!**  Caching is very important information for faster development with using Shopaholic plugins.
We recommend that you definitely study [ElementItem](architecture/item-class/item-class.md), [ElementCollection](architecture/collection-class/collection-class.md) sections.

## Components

!> **Attention!**  Components don't have templates. Components allow you to get objects of [ElementItem](architecture/item-class/item-class.md), [ElementCollection](architecture/collection-class/collection-class.md) classes.

Components don't have templates, because each project has its own unique design and html structure.
Logic of blocks may be similar, but with few differences.
Therefore, so that developers don't have to freeze plugins, fitting logic to project, we provide flexible classes for rendering data in template.

Most components belong to one of 4 types: element list, element data, element page, submit form.

### Component type: element list

Components of this type can make objects of [ElementCollection](architecture/collection-class/collection-class.md) class and allow to render blocks with lists of elements.
Developers can easily render blocks:
  * Full list with all active elements
  * List with active elements + pagination
  * List with random elements with filters applied (For example: random products with filter by category)
  * List with first elements from list (For example: 5 most popular products)
  * List with nearest elements (For example: list of nearest articles by publication date)
  * etc.

### Component type: element page

Component of this type allows developers to quickly create page elements. For example: product page, brand page, etc.

### Component type: element data

Component of this type allows developers to quickly get objects by ID. For example: popup with detailed product information in catalog.

### Component type: submit form

Component of this type is used to submit forms and to get as answer object with error text or redirect on success page.
For example: order creation, user registration, etc.