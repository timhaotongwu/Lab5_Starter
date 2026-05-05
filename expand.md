1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)

I think IDs and classes are more than just labels. They are the main connection point between HTML, CSS, and JavaScript. HTML uses them to identify elements, CSS uses them for styling, and JavaScript uses them to select and manipulate elements.

If they are not clearly named or organized, it becomes easy to break things unintentionally. For example, changing a class name might affect both styling and functionality at the same time. In this lab, I noticed that when my selectors were clear and consistent, it was much easier to connect user actions to changes on the page. Overall, thoughtful naming helps make the code more readable, maintainable, and less error-prone.

2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?

Data attributes are custom attributes in HTML that start with `data-`. They allow us to store extra information directly inside an element without changing how it looks or behaves by default.

They are useful because they provide a simple way to connect HTML and JavaScript. For example, instead of hardcoding values in JavaScript, we can store small pieces of data in the HTML and access them when needed.

In JavaScript, they can be accessed using:
js
element.dataset.name;
For example, data-type="horn" becomes element.dataset.type.

However, data attributes are mainly intended for internal use in the application. When it comes to structured data for search engines (microdata), they are not ideal because they are not always interpreted as meaningful metadata. For that purpose, more formal standards like schema markup are more appropriate.

3. What is a DOM fragment? Why are they powerful?

A DOM fragment is a temporary container used to hold multiple elements before inserting them into the actual document. It does not affect the page until it is attached to the DOM.

They are powerful mainly because of performance. Instead of updating the DOM multiple times, which can be slow, we can build everything inside a fragment and insert it once. This reduces unnecessary re-rendering and improves efficiency, especially when working with many elements.

4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?

The Virtual DOM is a concept used by frameworks like React. It creates a lightweight copy of the real DOM and compares changes before updating the actual page.

The main advantage is performance. Only the parts of the page that actually change are updated, which makes rendering more efficient. It also simplifies development because developers do not have to manually manage every DOM update.

However, it adds an extra layer of abstraction. This means less direct control and some overhead. For small projects like this lab, using the real DOM directly is simpler and more straightforward.

5. Why is class accessed as className in JavaScript?

In JavaScript, class is a reserved keyword used to define classes in the language. Because of this, it cannot be used directly as a property name.

Instead, the HTML class attribute is accessed using className in JavaScript. This avoids conflicts with the language syntax and allows JavaScript to work correctly.

6. What is the difference between addEventListener() and onClick()?

addEventListener() is more flexible and powerful. It allows multiple event handlers to be attached to the same element and provides more control over how events are handled.

onClick() is simpler but more limited. It only allows one event handler at a time, and assigning a new one will overwrite the previous one.

In general, addEventListener() is preferred for larger or more complex applications because it is more scalable, while onClick() may be sufficient for simple use cases.
