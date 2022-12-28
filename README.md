# Build a Website 2022 | Day 4 | JavaScript 👨‍💻

## So, what will you do in the exercise?
1. First, open the `script.js` file. We will use JavaScript code to toggle the visibility of a specific element using a class. First, we define a variable called `allMenuContainer` and assign it the value of the element in the _DOM (Document Object Model)_ that has the class "menu". This element will be used later in the code to hold the HTML representation of the menu items. </br>

The DOM is a tree-like structure that represents the HTML elements on a web page as objects. The `document` object represents the entire HTML document. </br>

```javascript
let allMenuContainer = document.fillthis('.menu');
```

_You should work on this! Change the "fillthis" to a *method* that allows you to select an element from the DOM based on its class or other attributes._

2. Then we'll define an array called `menuItem` that contains objects representing each menu item, with properties like `menuName`, `menuImg`, `menuPrice`, `menuDescription`, and `menuType`. You can see line 5-34 in the script.js file.

2. Then, the `map()` method is implemented to create an HTML representation of each menu item by iterating (looping) over the `menuItem` array and creating an HTML template for each menu item. The resulting HTML is *appended* to the element with the class `menu` on the page, which is the `allMenuContainer`. </br> 

```javascript
    // Append menuGroup containing HTML to menus' container
    fillthis.fillthis += menuGroup;
```

_You should work on this! Change the "fillthis" to an appropriate code so that it'll produce the correct output in your browser_ </br>

👨‍💻 ProTip: you can use a JS *property*

3. Next up, you should define two variables. These variables will be used later in the code to attach event listeners to the "ul" elements and to hide or show the menu items based on the selected category.
```javascript
const menuBox = fillthis.fillthis('.menu-group');
const menu = fillthis.fillthis('ul');
```

4. The code then sets up an event listener on the click event for each of the ul elements, which are the *categories filters*. </br>

When one of these elements (category filters) is clicked, the code will *loop through each of the menu items* and *add* a `hidden` class if the category of the menu item does not match the clicked filter. In other word, the code hides all of the menu items and then displays _only_ the items that match the selected category. </br>

If the filter is `All`, it will remove the `hidden` class from all menu items, then all of the items will be displayed.

_You should work on this! Change the "fillthis" in line 62 to an appropriate code so that it'll produce the correct output. You also have to add something in the stylesheet.css file (line 85-87), so an HTML element will be hidden when you click on a specific filter_ </br>

5. _Optional read_ </br>
`e.target.innerHTML` refers to the inner HTML of an element that has been targeted by an event in JavaScript. The `===` operator is the strict equality operator, which checks if two values are equal and of the same type. </br>

For example, if e is an event object that refers to a click event on an HTML element with the inner HTML `"Hello"`, then `e.target.innerHTML` would evaluate to the string `"Hello"`. </br>

The strict equality operator checks for both value and type equality, while the loose equality (==) operator only checks for value equality and performs type coercion if necessary. This means that `e.target.innerHTML === "Hello"` would only evaluate to true if e.target.innerHTML is the string *"Hello"*, while `e.target.innerHTML == "Hello"` would evaluate to true if `e.target.innerHTML` is any value that can be *coerced* to the string *"Hello"*, such as the number 42 or the boolean value true. </br>

Here are a few examples of how you might use `e.target.innerHTML` to check if the inner HTML of the targeted element is equal to a specific value:
*Checking if a list item was clicked:*
```javascript
document.getElementById('list').addEventListener('click', function(e) {
  if (e.target.innerHTML === 'Item 1') {
    console.log('Item 1 was clicked!');
  }
});
```
In this example, we are using an *event listener* to listen for a click event on an element with the ID list, which is a list element containing several list items. When one of the list items *is clicked*, the event listener will trigger a callback function that checks if the inner HTML of the targeted element (the list item that was clicked) is equal to the string `"Item 1"`. If it is, the string `"Item 1 was clicked!"` will be logged to the console.


## Expected Output:
![Image1](https://github.com/shafatalitha/template/blob/f0291c5ec90daa2923eaf312d9c1e377eb94ce17/images/img-one.png)
![Image2](https://github.com/shafatalitha/template/blob/f0291c5ec90daa2923eaf312d9c1e377eb94ce17/images/img-two.png)
![Image3](https://github.com/shafatalitha/template/blob/799cb284ccaeb1da954032a3af07e4c395639195/images/img-three.png)


## References:
- https://www.javatpoint.com/javascript-classlist </br>
- https://www.w3schools.com/jsref/met_document_addeventlistener.asp
