# Eqn Calculator in simple HTML, CSS and JavaScript


## Usage

Just use any web-server in the folder, for instance:

> python -m http.server 



## Pros and Cons

Pros: 

* Extremely light (as light as it gets)
* Only need to know HTML, CSS and a bit of JavaScript
* No dependencies
* Will stand the pass of time. Small variations of this code would have worked 20 years ago and will work in the foreseeable future
* Easy to hack, change update

Cons:

* <joke>It's not supersymmetric and it lives only in 4 dimensions</joke>. And by that I mean, it is not React
* You can't easily embed this code in someone else's project: i.d. you cannot do: npm install eqn_calculator and be done

## Best for

Small projects

## Comments


### Event delegation

I use _event delegation_. There is only one onclick event attached. That's trivial in this setting, will proof a bit less so with frameworks.


### CSS gaps

Note the:

```css
.eqn-button + .eqn-button {
    margin-left: 10px;
}

.eqn-row + .eqn-row {
    margin-top: 10px;
}
```

This is to leave a 10px separation between buttons or between rows.

I think these days I am happier putting a div element that would take the space (I learned this from my days working with Qt)


## References:

* MDN HTML, CSS and JavaScript