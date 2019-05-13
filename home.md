# Architecture {docsify-ignore-all}

**If you are new** to the world of Shopaholic`s ecosystem, we recommend you to start learning from this section.

In "Architecture" section, you will be able to learn in detail about the architecture of Shopaholic plugins.
You will get answers to most of your questions: "Why is it done so and not otherwise? How does it work? How to quickly develop projects together with Shopaholic?"

## Directory structure

All plugins developed by [LOVATA](https://lovata.com) or our verified partners have the same directory structure:

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

> Detailed information on how to become a verified partner you can find in "[Contribution](http://shopaholic.one/contribution)" section

## Migration and seeder files

Migration  and seeder files contains all changes in database.
All migration files contains checks that will allow you to avoid errors when you restart migration or roll back version of the plugins.
 
Files are located in **"update/"** directory.
You can be found detailed information about migration and seeder files in OctoberCMS [documentation](https://octobercms.com/docs/database/structure).

## Model classes

Models are used to create/update/delete/get data from database.
We add to model classes only configuration arrays ([validation](https://octobercms.com/docs/database/traits#validation), [relations](https://octobercms.com/docs/database/relations), etc.),
[scope](https://octobercms.com/docs/database/model#query-scopes) methods, methods for working the model in backend.
Logic for working with models contains in separate classes. We do not develop models overloaded with methods for getting data.

> All models **contain annotations** with list of fields and scope methods that are in this class of model. This will allow you to quickly develop your projects using IDE autocomplete function.

Files are located in **"models/"** directory.
You can be found detailed information about models in OctoberCMS [documentation](https://octobercms.com/docs/database/model).

## Caching

We use [ElementItem](item-class/item-class.md), [ElementCollection](collection-class/collection-class.md), [Store](store-class/store-class.md)
classes for caching of model data and output cached data in templates.

> **Attention!** Caching is very important information for faster development with using Shopaholic plugins.
We recommend that you definitely study [ElementItem](item-class/item-class.md), [ElementCollection](collection-class/collection-class.md) sections.