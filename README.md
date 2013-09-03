Reactive-coffee for Meteor
==============

## Introduction

**Reactive-coffee** is a Coffeescript reactive library ([link](http://yang.github.io/reactive-coffee/)) that makes it easier to create rich, reusable web components. It automate almost everything in reactive web app. I love the fact that **Reactive-coffee** offers this powerful reactive programming paradigm that play well with Meteor, you don't even need to write a html template.

### Install

```bash
mrt add reactive-coffee
```

### Usage

#### Basic Usage `rx`, `rxt`

See official documentation [here](http://yang.github.io/reactive-coffee/quickstart.html). We also built a Meteor demo site: [Reactive-Coffee-Demo.meteor.com](http://reactive-coffee-demo.meteor.com)

#### Connecting Meteor `rx.meteor.find()` and `rx.meteor.findOne()`

##### APIs

* rx.meteor.find( _collection_, _selector_, _options_)
    * returns `rx.array`, and each element in the array is an regular object
    * use `.all()` to fetch all the elements in the `rx.array`
* rx.meteor.findOne( _collection_, _selector_, _options_)
    * returns `rx.cell`
    * use `.get()` to fetch the element in the `rx.cell`

_collection_ should be an instance of Meteor.Collection.

Please refer to official api to learn more about `rx.array` and `rx.cell`, [doc](http://yang.github.io/reactive-coffee/api.html). 


## Workflow

Highly recommended for `coffeescript` lovers.

* 0) Initialization and importTags

```
Meteor.startup ->
  window.bind = rx.bind    # shorthand for bind function
  rxt.importTags()  # import p, span, div, etc. tags as functions into the namespace
```

* 1) Populate Meteor.Collection instance to a `rx.array` or `rx.cell`, e.g.

```coffeescript
todos = rx.meteor.find Todo, {}, {sort: {created: -1}}          # returns rx.array
latestTodo = rx.meteor.findOne Todo, {}, {sort: {created: -1}}  # returns rx.cell
```

* 2) Hook/Bind to Html elements

```coffeescript
$('foo').prepend(
  span {}, bind -> [latestTodo.get().title]
  div {}, bind -> todos.all().map (todo) ->
    div todo.title
)
```

* 3) CRUD operation on Meteor.Collection will automatically reflect on `rx.array` or `rx.cell` instance. For example:

```coffeescript
Todo.update todo._id, {$set: {isCompleted: true}}
```

## Thanks

Thanks for [yang/reactive-coffee](https://github.com/yang/reactive-coffee)
