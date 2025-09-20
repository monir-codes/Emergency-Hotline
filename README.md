
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   **ans.** getElementById (**this only gets a specific unique element**), getElementsByClassName (**used to return multiple elements with a specific className**), querySelector (**used to
   return the first matching element**), querySelectorAll (**used to return all matching elements**).


2. How do you create and insert a new element into the DOM?
   **ans.**  const newDiv = document.createElement("**element name**");
             newDiv.textContent = "**inner text here**";
             newDiv.id = "**set id name**";
             newDiv.classList.add("**add classes here**");
             document.body.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
   **ans.** **Event bubbling** happens when an event is triggered on a specific element and then moves upward through its ancestors in the DOM hierarchy until it reaches the root.

4. What is Event Delegation in JavaScript? Why is it useful?
   **ans.** In JavaScript, event delegation means attaching one event listener to a parent element instead of adding separate listeners to each child. When a child element triggers an event, it naturally bubbles up to the parent, and from there you can figure out which child was clicked or interacted with using event.target.
   **Why is it useful?** : Event delegation is handy because it keeps your code lighter and faster — you don’t waste memory adding the same listener to multiple elements. It also works well when new elements are added later, since the parent listener can still catch their events. Plus, it makes the code much easier to manage and maintain.

5. What is the difference between preventDefault() and stopPropagation() methods?
**ans.** **preventDefault()** stops the browser’s default action, while **stopPropagation()** stops the event from bubbling to parent elements.
