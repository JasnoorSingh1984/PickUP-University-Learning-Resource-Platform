export const quizSubjects = [
  {
    "id": "frontend",
    "title": "Front End Engineering",
    "semester": "Semester 1 & 3",
    "icon": "\ud83c\udfa8",
    "category": "Web Dev",
    "description": "HTML5, CSS3, JavaScript ES6+, React, DOM manipulation, and responsive web design.",
    "questions": [
      {
        "id": 1,
        "question": "What does HTML stand for?",
        "options": [
          "Hyper Text Markup Language",
          "High Text Marking Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language"
        ],
        "correctAnswer": 0,
        "explanation": "HTML stands for Hyper Text Markup Language, the standard markup language for web documents."
      },
      {
        "id": 2,
        "question": "Which HTML5 element is used to define navigation links?",
        "options": [
          "<nav>",
          "<navigation>",
          "<links>",
          "<navigate>"
        ],
        "correctAnswer": 0,
        "explanation": "<nav> is the semantic HTML5 tag intended for navigation links."
      },
      {
        "id": 3,
        "question": "Which CSS property controls the text size?",
        "options": [
          "text-style",
          "font-size",
          "text-size",
          "font-style"
        ],
        "correctAnswer": 1,
        "explanation": "font-size sets the size of the font."
      },
      {
        "id": 4,
        "question": "How do you select an element with id 'header' in CSS?",
        "options": [
          "#header",
          ".header",
          "header",
          "*header"
        ],
        "correctAnswer": 0,
        "explanation": "The '#' character selects elements by ID in CSS."
      },
      {
        "id": 5,
        "question": "How do you select elements with class name 'menu' in CSS?",
        "options": [
          ".menu",
          "#menu",
          "menu",
          "class:menu"
        ],
        "correctAnswer": 0,
        "explanation": "The '.' dot character selects elements by class name in CSS."
      },
      {
        "id": 6,
        "question": "Which CSS layout module is designed for one-dimensional layouts?",
        "options": [
          "Flexbox",
          "Grid",
          "Float",
          "Position"
        ],
        "correctAnswer": 0,
        "explanation": "Flexbox is designed for one-dimensional layouts (rows or columns)."
      },
      {
        "id": 7,
        "question": "Which CSS property sets the inner spacing of an element?",
        "options": [
          "margin",
          "padding",
          "border",
          "spacing"
        ],
        "correctAnswer": 1,
        "explanation": "Padding is the space between the element content and its border."
      },
      {
        "id": 8,
        "question": "Which CSS property sets the outer spacing around an element?",
        "options": [
          "margin",
          "padding",
          "outline",
          "border"
        ],
        "correctAnswer": 0,
        "explanation": "Margin is the space outside the border of an element."
      },
      {
        "id": 9,
        "question": "What is the default value of the CSS 'position' property?",
        "options": [
          "relative",
          "absolute",
          "static",
          "fixed"
        ],
        "correctAnswer": 2,
        "explanation": "The default position value for all HTML elements is static."
      },
      {
        "id": 10,
        "question": "Which JavaScript operator is used to assign a value to a variable?",
        "options": [
          "=",
          "==",
          "===",
          "=>"
        ],
        "correctAnswer": 0,
        "explanation": "The '=' assignment operator assigns a value to a variable."
      },
      {
        "id": 11,
        "question": "Which keyword declares a block-scoped variable in JavaScript that can be reassigned?",
        "options": [
          "let",
          "const",
          "var",
          "static"
        ],
        "correctAnswer": 0,
        "explanation": "'let' allows block-scoped variable declaration with re-assignment."
      },
      {
        "id": 12,
        "question": "Which keyword declares a block-scoped constant variable in JavaScript?",
        "options": [
          "const",
          "let",
          "var",
          "immutable"
        ],
        "correctAnswer": 0,
        "explanation": "'const' declares block-scoped variables that cannot be reassigned."
      },
      {
        "id": 13,
        "question": "What does 'NaN' stand for in JavaScript?",
        "options": [
          "Not a Number",
          "New and Null",
          "Number and Name",
          "Not Available Now"
        ],
        "correctAnswer": 0,
        "explanation": "NaN represents 'Not-a-Number' in JavaScript numeric operations."
      },
      {
        "id": 14,
        "question": "What is the result of `typeof null` in JavaScript?",
        "options": [
          "'object'",
          "'null'",
          "'undefined'",
          "'boolean'"
        ],
        "correctAnswer": 0,
        "explanation": "'typeof null' returns 'object', which is a historical bug in JavaScript."
      },
      {
        "id": 15,
        "question": "What is the result of `typeof undefined` in JavaScript?",
        "options": [
          "'undefined'",
          "'object'",
          "'null'",
          "'symbol'"
        ],
        "correctAnswer": 0,
        "explanation": "'typeof undefined' returns the string 'undefined'."
      },
      {
        "id": 16,
        "question": "Which array method adds one or more elements to the end of an array?",
        "options": [
          "push()",
          "pop()",
          "shift()",
          "unshift()"
        ],
        "correctAnswer": 0,
        "explanation": "push() adds elements to the end of an array."
      },
      {
        "id": 17,
        "question": "Which array method removes the last element from an array?",
        "options": [
          "pop()",
          "push()",
          "shift()",
          "slice()"
        ],
        "correctAnswer": 0,
        "explanation": "pop() removes and returns the last element of an array."
      },
      {
        "id": 18,
        "question": "Which array method removes the first element from an array?",
        "options": [
          "shift()",
          "unshift()",
          "pop()",
          "splice()"
        ],
        "correctAnswer": 0,
        "explanation": "shift() removes the first element from an array."
      },
      {
        "id": 19,
        "question": "Which array method creates a new array populated with the results of calling a provided function on every element?",
        "options": [
          "map()",
          "filter()",
          "reduce()",
          "forEach()"
        ],
        "correctAnswer": 0,
        "explanation": "map() transforms each element and returns a new array."
      },
      {
        "id": 20,
        "question": "Which array method returns a new array containing only elements that pass a test function?",
        "options": [
          "filter()",
          "map()",
          "some()",
          "every()"
        ],
        "correctAnswer": 0,
        "explanation": "filter() selects elements matching a criteria."
      },
      {
        "id": 21,
        "question": "What is the purpose of the `useEffect` hook in React?",
        "options": [
          "To handle side effects in components",
          "To create component state",
          "To optimize CSS styling",
          "To handle form validation"
        ],
        "correctAnswer": 0,
        "explanation": "useEffect performs side effects such as data fetching or subscriptions."
      },
      {
        "id": 22,
        "question": "What is the purpose of the `useState` hook in React?",
        "options": [
          "To add state to functional components",
          "To fetch data from APIs",
          "To manipulate DOM directly",
          "To handle routing"
        ],
        "correctAnswer": 0,
        "explanation": "useState allows functional components to store and update local state."
      },
      {
        "id": 23,
        "question": "What is JSX in React?",
        "options": [
          "A syntax extension for JavaScript that looks like HTML",
          "A new database engine",
          "A CSS preprocessor",
          "A server runtime"
        ],
        "correctAnswer": 0,
        "explanation": "JSX allows writing HTML-like markup inside JavaScript code."
      },
      {
        "id": 24,
        "question": "How are props passed to a component in React?",
        "options": [
          "As attributes in JSX elements",
          "Via global window object",
          "Through CSS files",
          "Inside red-line parameters"
        ],
        "correctAnswer": 0,
        "explanation": "Props are passed as attributes to JSX components (e.g. `<Component name='John' />`)."
      },
      {
        "id": 25,
        "question": "What is the Virtual DOM in React?",
        "options": [
          "In-memory lightweight copy of real DOM",
          "Full browser engine",
          "Remote database",
          "CSS style sheet"
        ],
        "correctAnswer": 0,
        "explanation": "Virtual DOM enables fast diffing and selective real DOM updates."
      },
      {
        "id": 26,
        "question": "What does `event.preventDefault()` do in JavaScript form handling?",
        "options": [
          "Prevents default browser form submission refresh",
          "Clears form input fields",
          "Disables form validation",
          "Submits data to backend"
        ],
        "correctAnswer": 0,
        "explanation": "preventDefault() stops the default browser action such as page reloading on form submission."
      },
      {
        "id": 27,
        "question": "Which event fires when an HTML input value changes?",
        "options": [
          "change / input",
          "submit",
          "hover",
          "click"
        ],
        "correctAnswer": 0,
        "explanation": "The 'change' or 'input' event triggers when user modifies form inputs."
      },
      {
        "id": 28,
        "question": "Which HTTP method is used to retrieve data from a server?",
        "options": [
          "GET",
          "POST",
          "PUT",
          "DELETE"
        ],
        "correctAnswer": 0,
        "explanation": "GET requests data from a specified resource."
      },
      {
        "id": 29,
        "question": "Which HTTP method is typically used to send data to create a new resource?",
        "options": [
          "POST",
          "GET",
          "HEAD",
          "OPTIONS"
        ],
        "correctAnswer": 0,
        "explanation": "POST submits data to create a resource."
      },
      {
        "id": 30,
        "question": "Which HTTP method is used to update an existing resource completely?",
        "options": [
          "PUT",
          "GET",
          "POST",
          "TRACE"
        ],
        "correctAnswer": 0,
        "explanation": "PUT updates or replaces a target resource."
      },
      {
        "id": 31,
        "question": "Which HTTP status code represents 'Not Found'?",
        "options": [
          "404",
          "200",
          "500",
          "403"
        ],
        "correctAnswer": 0,
        "explanation": "404 indicates the server cannot find the requested resource."
      },
      {
        "id": 32,
        "question": "Which HTTP status code represents 'Internal Server Error'?",
        "options": [
          "500",
          "404",
          "401",
          "200"
        ],
        "correctAnswer": 0,
        "explanation": "500 indicates a generic server-side error."
      },
      {
        "id": 33,
        "question": "What does CORS stand for in web development?",
        "options": [
          "Cross-Origin Resource Sharing",
          "Central Organized Resource Storage",
          "Client Order Routing System",
          "Custom Object Rendering Style"
        ],
        "correctAnswer": 0,
        "explanation": "CORS enables servers to indicate any origins other than its own from which a browser should permit loading resources."
      },
      {
        "id": 34,
        "question": "Which Storage API persists data in browser even after browser window is closed?",
        "options": [
          "localStorage",
          "sessionStorage",
          "cookies",
          "memoryCache"
        ],
        "correctAnswer": 0,
        "explanation": "localStorage has no expiration time."
      },
      {
        "id": 35,
        "question": "Which Storage API clears stored data when the browser tab is closed?",
        "options": [
          "sessionStorage",
          "localStorage",
          "IndexedDB",
          "WebSQL"
        ],
        "correctAnswer": 0,
        "explanation": "sessionStorage maintains storage for the duration of the page session."
      },
      {
        "id": 36,
        "question": "What does JSON stand for?",
        "options": [
          "JavaScript Object Notation",
          "Java Server Object Network",
          "JavaScript Organized Network",
          "Joint Standard Object Notation"
        ],
        "correctAnswer": 0,
        "explanation": "JSON stands for JavaScript Object Notation."
      },
      {
        "id": 37,
        "question": "How do you convert a JavaScript object into a JSON string?",
        "options": [
          "JSON.stringify()",
          "JSON.parse()",
          "Object.toJSON()",
          "String.fromJSON()"
        ],
        "correctAnswer": 0,
        "explanation": "JSON.stringify() converts JS values/objects to JSON strings."
      },
      {
        "id": 38,
        "question": "How do you convert a JSON string into a JavaScript object?",
        "options": [
          "JSON.parse()",
          "JSON.stringify()",
          "Object.fromJSON()",
          "parseJSON()"
        ],
        "correctAnswer": 0,
        "explanation": "JSON.parse() parses a JSON string into a JavaScript object."
      },
      {
        "id": 39,
        "question": "Which CSS property makes an element flex container?",
        "options": [
          "display: flex",
          "flex-direction: row",
          "position: flex",
          "float: left"
        ],
        "correctAnswer": 0,
        "explanation": "'display: flex' establishes a new flex formatting context."
      },
      {
        "id": 40,
        "question": "Which CSS property aligns flex items along the main axis?",
        "options": [
          "justify-content",
          "align-items",
          "align-content",
          "flex-wrap"
        ],
        "correctAnswer": 0,
        "explanation": "justify-content aligns items along the main axis."
      },
      {
        "id": 41,
        "question": "Which CSS property aligns flex items along the cross axis?",
        "options": [
          "align-items",
          "justify-content",
          "text-align",
          "vertical-align"
        ],
        "correctAnswer": 0,
        "explanation": "align-items aligns items along the cross axis."
      },
      {
        "id": 42,
        "question": "Which CSS unit is relative to the font-size of the root element (<html>)?",
        "options": [
          "rem",
          "em",
          "px",
          "vh"
        ],
        "correctAnswer": 0,
        "explanation": "'rem' stands for Root EM, relative to root font size."
      },
      {
        "id": 43,
        "question": "Which CSS unit is relative to 1% of the viewport width?",
        "options": [
          "vw",
          "vh",
          "rem",
          "%"
        ],
        "correctAnswer": 0,
        "explanation": "vw equals 1% of the viewport width."
      },
      {
        "id": 44,
        "question": "What is the event bubbling phase in JavaScript?",
        "options": [
          "Event propagates from target element up through its ancestors",
          "Event propagates from window down to target element",
          "Event stops immediately",
          "Event runs on server"
        ],
        "correctAnswer": 0,
        "explanation": "Bubbling propagates event upward through the DOM tree."
      },
      {
        "id": 45,
        "question": "What is closure in JavaScript?",
        "options": [
          "A function bundled together with references to its surrounding state (lexical environment)",
          "A function that has no return statement",
          "A CSS layout rule",
          "A method to close browser tabs"
        ],
        "correctAnswer": 0,
        "explanation": "Closure allows an inner function to access variables from an outer enclosing scope."
      },
      {
        "id": 46,
        "question": "Which Promise method runs after a Promise is resolved successfully?",
        "options": [
          ".then()",
          ".catch()",
          ".finally()",
          ".async()"
        ],
        "correctAnswer": 0,
        "explanation": ".then() attaches callbacks for the resolution of the Promise."
      },
      {
        "id": 47,
        "question": "Which Promise method runs if a Promise is rejected?",
        "options": [
          ".catch()",
          ".then()",
          ".always()",
          ".error()"
        ],
        "correctAnswer": 0,
        "explanation": ".catch() handles errors or rejections in promises."
      },
      {
        "id": 48,
        "question": "What does the 'async' keyword before a function declaration mean?",
        "options": [
          "The function automatically returns a Promise",
          "The function executes synchronously",
          "The function runs in background worker thread",
          "The function throws error"
        ],
        "correctAnswer": 0,
        "explanation": "An async function implicitly returns a Promise."
      },
      {
        "id": 49,
        "question": "Which React hook returns a memoized value to prevent expensive recalculations?",
        "options": [
          "useMemo",
          "useCallback",
          "useRef",
          "useReducer"
        ],
        "correctAnswer": 0,
        "explanation": "useMemo caches the result of a calculation between renders."
      },
      {
        "id": 50,
        "question": "Which React hook persists a mutable reference value across renders without triggering a re-render?",
        "options": [
          "useRef",
          "useState",
          "useMemo",
          "useContext"
        ],
        "correctAnswer": 0,
        "explanation": "useRef returns a mutable object whose `.current` property persists without re-rendering."
      }
    ]
  },
  {
    "id": "python",
    "title": "Python Programming",
    "semester": "Semester 1",
    "icon": "\ud83d\udc0d",
    "category": "Languages",
    "description": "Core syntax, data types, lists, dictionaries, list comprehensions, and OOP in Python.",
    "questions": [
      {
        "id": 1,
        "question": "What is the output of `print(2 ** 3)` in Python?",
        "options": [
          "8",
          "6",
          "9",
          "23"
        ],
        "correctAnswer": 0,
        "explanation": "The `**` operator represents exponentiation in Python: 2^3 = 8."
      },
      {
        "id": 2,
        "question": "Which of the following data types in Python is IMMUTABLE?",
        "options": [
          "Tuple",
          "List",
          "Dictionary",
          "Set"
        ],
        "correctAnswer": 0,
        "explanation": "Tuples are immutable; once created, their elements cannot be modified."
      },
      {
        "id": 3,
        "question": "Which data type in Python is MUTABLE?",
        "options": [
          "List",
          "Tuple",
          "String",
          "Int"
        ],
        "correctAnswer": 0,
        "explanation": "Lists are mutable data structures in Python."
      },
      {
        "id": 4,
        "question": "How do you start a single-line comment in Python?",
        "options": [
          "#",
          "//",
          "/*",
          "--"
        ],
        "correctAnswer": 0,
        "explanation": "The `#` symbol starts a single-line comment in Python."
      },
      {
        "id": 5,
        "question": "What does `len([1, 2, 3, 4])` return?",
        "options": [
          "4",
          "3",
          "5",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "len() returns the number of items in a sequence."
      },
      {
        "id": 6,
        "question": "Which keyword is used to handle exceptions in Python?",
        "options": [
          "try / except",
          "do / catch",
          "try / catch",
          "error / handle"
        ],
        "correctAnswer": 0,
        "explanation": "Python uses `try` and `except` blocks for exception handling."
      },
      {
        "id": 7,
        "question": "Which function converts a string to an integer in Python?",
        "options": [
          "int()",
          "str()",
          "float()",
          "parse()"
        ],
        "correctAnswer": 0,
        "explanation": "int() parses string/float into integer."
      },
      {
        "id": 8,
        "question": "What is the output of `bool('')` in Python?",
        "options": [
          "False",
          "True",
          "None",
          "Error"
        ],
        "correctAnswer": 0,
        "explanation": "An empty string evaluates to False in boolean context."
      },
      {
        "id": 9,
        "question": "What is the output of `bool([0])` in Python?",
        "options": [
          "True",
          "False",
          "None",
          "Error"
        ],
        "correctAnswer": 0,
        "explanation": "A list containing 0 is non-empty, so `bool([0])` returns True."
      },
      {
        "id": 10,
        "question": "Which Python method adds an element to the end of a list?",
        "options": [
          "append()",
          "extend()",
          "insert()",
          "add()"
        ],
        "correctAnswer": 0,
        "explanation": "append() adds a single element to the end of a list."
      },
      {
        "id": 11,
        "question": "Which Python list method inserts an item at a given index?",
        "options": [
          "insert()",
          "append()",
          "add()",
          "push()"
        ],
        "correctAnswer": 0,
        "explanation": "list.insert(index, element) places an element at a specific position."
      },
      {
        "id": 12,
        "question": "What is the output of `range(5)` converted to list?",
        "options": [
          "[0, 1, 2, 3, 4]",
          "[1, 2, 3, 4, 5]",
          "[0, 1, 2, 3, 4, 5]",
          "[1, 2, 3, 4]"
        ],
        "correctAnswer": 0,
        "explanation": "range(5) generates numbers from 0 up to (but not including) 5."
      },
      {
        "id": 13,
        "question": "Which operator tests if a key exists in a Python dictionary?",
        "options": [
          "in",
          "has",
          "contains",
          "exists"
        ],
        "correctAnswer": 0,
        "explanation": "The `in` operator checks if a key is present in a dictionary."
      },
      {
        "id": 14,
        "question": "How do you get all keys from a dictionary `d`?",
        "options": [
          "d.keys()",
          "d.all_keys()",
          "d.values()",
          "d.items()"
        ],
        "correctAnswer": 0,
        "explanation": "d.keys() returns a view object of dictionary keys."
      },
      {
        "id": 15,
        "question": "How do you get all values from a dictionary `d`?",
        "options": [
          "d.values()",
          "d.keys()",
          "d.items()",
          "d.get_all()"
        ],
        "correctAnswer": 0,
        "explanation": "d.values() returns dictionary values."
      },
      {
        "id": 16,
        "question": "Which built-in function returns both index and item when looping over a list?",
        "options": [
          "enumerate()",
          "zip()",
          "range()",
          "map()"
        ],
        "correctAnswer": 0,
        "explanation": "enumerate() adds a counter to an iterable and returns it."
      },
      {
        "id": 17,
        "question": "Which built-in function pairs elements from two iterables together?",
        "options": [
          "zip()",
          "enumerate()",
          "combine()",
          "pair()"
        ],
        "correctAnswer": 0,
        "explanation": "zip() aggregates elements from each of the iterables into tuples."
      },
      {
        "id": 18,
        "question": "What is the output of `'hello'.upper()`?",
        "options": [
          "'HELLO'",
          "'Hello'",
          "'hELLO'",
          "Error"
        ],
        "correctAnswer": 0,
        "explanation": "upper() converts all characters in a string to uppercase."
      },
      {
        "id": 19,
        "question": "Which method removes leading and trailing whitespace from a string in Python?",
        "options": [
          "strip()",
          "trim()",
          "clean()",
          "cut()"
        ],
        "correctAnswer": 0,
        "explanation": "strip() removes whitespace from beginning and end of a string."
      },
      {
        "id": 20,
        "question": "Which string method splits a string into a list of substrings based on a delimiter?",
        "options": [
          "split()",
          "slice()",
          "partition()",
          "divide()"
        ],
        "correctAnswer": 0,
        "explanation": "split() breaks a string into a list."
      },
      {
        "id": 21,
        "question": "What is the default return value of a Python function that has no `return` statement?",
        "options": [
          "None",
          "0",
          "False",
          "Null"
        ],
        "correctAnswer": 0,
        "explanation": "Python functions without explicit return statements return `None`."
      },
      {
        "id": 22,
        "question": "Which keyword is used to create a generator in Python?",
        "options": [
          "yield",
          "return",
          "generate",
          "emit"
        ],
        "correctAnswer": 0,
        "explanation": "The `yield` keyword turns a function into a generator."
      },
      {
        "id": 23,
        "question": "What is a lambda function in Python?",
        "options": [
          "An anonymous inline single-expression function",
          "A recursive module",
          "A class constructor",
          "A system process"
        ],
        "correctAnswer": 0,
        "explanation": "Lambda functions are small anonymous functions defined with `lambda`."
      },
      {
        "id": 24,
        "question": "Which module in Python is used for generating random numbers?",
        "options": [
          "random",
          "rand",
          "math",
          "numbers"
        ],
        "correctAnswer": 0,
        "explanation": "The `random` module implements pseudo-random number generators."
      },
      {
        "id": 25,
        "question": "Which module in Python provides mathematical functions like sqrt, sin, cos?",
        "options": [
          "math",
          "cmath",
          "numpy",
          "calc"
        ],
        "correctAnswer": 0,
        "explanation": "The `math` module provides standard mathematical functions."
      },
      {
        "id": 26,
        "question": "How do you open a file for reading in Python?",
        "options": [
          "open('file.txt', 'r')",
          "open('file.txt', 'w')",
          "read('file.txt')",
          "file.open('r')"
        ],
        "correctAnswer": 0,
        "explanation": "'r' mode opens a file for reading."
      },
      {
        "id": 27,
        "question": "Which mode opens a file for writing and truncates existing content?",
        "options": [
          "'w'",
          "'r'",
          "'a'",
          "'x'"
        ],
        "correctAnswer": 0,
        "explanation": "'w' mode opens for writing and overwrites existing file content."
      },
      {
        "id": 28,
        "question": "Which mode opens a file for appending data at the end?",
        "options": [
          "'a'",
          "'w'",
          "'r'",
          "'x'"
        ],
        "correctAnswer": 0,
        "explanation": "'a' mode appends data without truncating the file."
      },
      {
        "id": 29,
        "question": "Which statement automatically closes a file after operations are complete?",
        "options": [
          "with open(...) as f:",
          "try open(...) as f:",
          "file.close()",
          "using open(...)"
        ],
        "correctAnswer": 0,
        "explanation": "The `with` context manager handles opening and closing resources automatically."
      },
      {
        "id": 30,
        "question": "What is `__init__` in a Python class?",
        "options": [
          "The class constructor method called when an instance is created",
          "A destructor method",
          "A private variable",
          "A global function"
        ],
        "correctAnswer": 0,
        "explanation": "__init__ is the initializer / constructor method of a class."
      },
      {
        "id": 31,
        "question": "What does `self` represent in a Python class method?",
        "options": [
          "The instance of the class",
          "The class definition itself",
          "The parent module",
          "A global keyword"
        ],
        "correctAnswer": 0,
        "explanation": "`self` refers to the instance of the object calling the method."
      },
      {
        "id": 32,
        "question": "How do you inherit from a parent class `Parent` in a child class `Child`?",
        "options": [
          "class Child(Parent):",
          "class Child extends Parent:",
          "class Child implements Parent:",
          "class Child -> Parent:"
        ],
        "correctAnswer": 0,
        "explanation": "Inheritance syntax in Python is `class Child(Parent):`."
      },
      {
        "id": 33,
        "question": "Which keyword calls a method from the parent superclass?",
        "options": [
          "super()",
          "parent()",
          "base()",
          "this()"
        ],
        "correctAnswer": 0,
        "explanation": "super() returns a proxy object delegating method calls to a parent class."
      },
      {
        "id": 34,
        "question": "What is the output of `set([1, 2, 2, 3])`?",
        "options": [
          "{1, 2, 3}",
          "[1, 2, 2, 3]",
          "(1, 2, 3)",
          "{1, 2, 2, 3}"
        ],
        "correctAnswer": 0,
        "explanation": "Sets automatically remove duplicate values."
      },
      {
        "id": 35,
        "question": "What is list comprehension syntax for creating squares of numbers 0 to 4?",
        "options": [
          "[x**2 for x in range(5)]",
          "[x^2 for x in range(5)]",
          "(x**2 for x in range(5))",
          "{x**2 in range(5)}"
        ],
        "correctAnswer": 0,
        "explanation": "`[x**2 for x in range(5)]` builds `[0, 1, 4, 9, 16]`."
      },
      {
        "id": 36,
        "question": "What is the difference between `is` and `==` in Python?",
        "options": [
          "`is` checks memory identity; `==` checks value equality",
          "`is` checks value; `==` checks memory",
          "They are identical",
          "`is` is used only for strings"
        ],
        "correctAnswer": 0,
        "explanation": "`is` checks if two references point to the same memory object, whereas `==` evaluates value equality."
      },
      {
        "id": 37,
        "question": "What does `isinstance(5, int)` return?",
        "options": [
          "True",
          "False",
          "None",
          "Error"
        ],
        "correctAnswer": 0,
        "explanation": "isinstance() checks if an object belongs to a class or tuple of classes."
      },
      {
        "id": 38,
        "question": "Which built-in function returns the absolute value of a number?",
        "options": [
          "abs()",
          "fabs()",
          "val()",
          "positive()"
        ],
        "correctAnswer": 0,
        "explanation": "abs() computes absolute value."
      },
      {
        "id": 39,
        "question": "Which built-in function rounds a float number?",
        "options": [
          "round()",
          "floor()",
          "ceil()",
          "trunc()"
        ],
        "correctAnswer": 0,
        "explanation": "round() rounds numbers to specified decimals or nearest integer."
      },
      {
        "id": 40,
        "question": "What is the output of `'abc'.find('z')`?",
        "options": [
          "-1",
          "0",
          "None",
          "Error"
        ],
        "correctAnswer": 0,
        "explanation": "find() returns -1 if the substring is not found."
      },
      {
        "id": 41,
        "question": "What is the output of `'abc'.index('z')`?",
        "options": [
          "Raises ValueError",
          "-1",
          "None",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "index() raises ValueError when substring is not found."
      },
      {
        "id": 42,
        "question": "Which statement escapes execution out of a loop immediately?",
        "options": [
          "break",
          "continue",
          "pass",
          "exit"
        ],
        "correctAnswer": 0,
        "explanation": "break terminates the innermost loop."
      },
      {
        "id": 43,
        "question": "Which statement skips the rest of current loop iteration and moves to next loop cycle?",
        "options": [
          "continue",
          "break",
          "pass",
          "return"
        ],
        "correctAnswer": 0,
        "explanation": "continue jumps to the next loop iteration."
      },
      {
        "id": 44,
        "question": "What does the `pass` statement do in Python?",
        "options": [
          "It is a null statement placeholder that does nothing",
          "It skips loop",
          "It breaks execution",
          "It exits program"
        ],
        "correctAnswer": 0,
        "explanation": "pass is a placeholder when syntax requires a statement but no action is needed."
      },
      {
        "id": 45,
        "question": "Which module in Python handles JSON encoding and decoding?",
        "options": [
          "json",
          "simplejson",
          "pickle",
          "marshal"
        ],
        "correctAnswer": 0,
        "explanation": "The standard library module `json` handles JSON data."
      },
      {
        "id": 46,
        "question": "Which function parses a JSON string into a Python dictionary?",
        "options": [
          "json.loads()",
          "json.dumps()",
          "json.load()",
          "json.dump()"
        ],
        "correctAnswer": 0,
        "explanation": "json.loads() parses JSON string to Python objects."
      },
      {
        "id": 47,
        "question": "Which function serializes a Python dictionary to a JSON string?",
        "options": [
          "json.dumps()",
          "json.loads()",
          "json.dump()",
          "json.load()"
        ],
        "correctAnswer": 0,
        "explanation": "json.dumps() serializes Python objects to JSON string."
      },
      {
        "id": 48,
        "question": "What does GIL stand for in Python CPython implementation?",
        "options": [
          "Global Interpreter Lock",
          "General Instruction Language",
          "Graphical Interface Layer",
          "Global Index List"
        ],
        "correctAnswer": 0,
        "explanation": "GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes simultaneously."
      },
      {
        "id": 49,
        "question": "Which decorator is used to define a class method in Python?",
        "options": [
          "@classmethod",
          "@staticmethod",
          "@property",
          "@method"
        ],
        "correctAnswer": 0,
        "explanation": "@classmethod receives the class (`cls`) as implicit first argument."
      },
      {
        "id": 50,
        "question": "Which decorator is used to define a static method that takes no implicit self/cls argument?",
        "options": [
          "@staticmethod",
          "@classmethod",
          "@property",
          "@fn"
        ],
        "correctAnswer": 0,
        "explanation": "@staticmethod defines a method bound to class without passing self/cls."
      }
    ]
  },
  {
    "id": "os",
    "title": "Operating Systems",
    "semester": "Semester 2",
    "icon": "\ud83d\udcbb",
    "category": "Systems",
    "description": "Processes, threads, CPU scheduling algorithms, virtual memory, and deadlock prevention.",
    "questions": [
      {
        "id": 1,
        "question": "What is the primary role of an Operating System Kernel?",
        "options": [
          "Core component that manages system resources and hardware interaction",
          "A graphical user interface framework",
          "A web browser engine",
          "A compiler for C++"
        ],
        "correctAnswer": 0,
        "explanation": "The kernel manages CPU, memory, devices, and system calls."
      },
      {
        "id": 2,
        "question": "Which of the following is NOT an operating system?",
        "options": [
          "Apache",
          "Linux",
          "Windows 11",
          "macOS"
        ],
        "correctAnswer": 0,
        "explanation": "Apache is a web server software, not an OS."
      },
      {
        "id": 3,
        "question": "What is a Process in OS?",
        "options": [
          "A program in execution",
          "A file saved on hard drive",
          "A compiler",
          "A network protocol"
        ],
        "correctAnswer": 0,
        "explanation": "A process is a program loaded into memory and currently executing."
      },
      {
        "id": 4,
        "question": "What is a Thread?",
        "options": [
          "A lightweight unit of execution within a process",
          "A physical wire inside CPU",
          "A hard drive partition",
          "An HTML element"
        ],
        "correctAnswer": 0,
        "explanation": "A thread is the smallest unit of processing that can be scheduled by an OS."
      },
      {
        "id": 5,
        "question": "What is PCB in operating systems?",
        "options": [
          "Process Control Block",
          "Primary Computer Board",
          "Program Counter Buffer",
          "Process Communication Bus"
        ],
        "correctAnswer": 0,
        "explanation": "PCB stores process state, PID, CPU registers, memory limits, and open files."
      },
      {
        "id": 6,
        "question": "Which CPU scheduling algorithm allocates CPU to the process that arrives first?",
        "options": [
          "FCFS (First Come First Served)",
          "SJF (Shortest Job First)",
          "Round Robin",
          "Priority Scheduling"
        ],
        "correctAnswer": 0,
        "explanation": "FCFS processes requests in arrival order."
      },
      {
        "id": 7,
        "question": "Which CPU scheduling algorithm uses time quanta / slices for process execution?",
        "options": [
          "Round Robin",
          "FCFS",
          "SJF",
          "Multilevel Queue"
        ],
        "correctAnswer": 0,
        "explanation": "Round Robin assigns a fixed time quantum to each process in circular order."
      },
      {
        "id": 8,
        "question": "What is starvation in process scheduling?",
        "options": [
          "When a process waits indefinitely due to lower priority or long jobs ahead",
          "When memory runs out",
          "When CPU overheats",
          "When disk fills up"
        ],
        "correctAnswer": 0,
        "explanation": "Starvation happens when low-priority processes never get CPU time."
      },
      {
        "id": 9,
        "question": "What is Aging in CPU scheduling?",
        "options": [
          "Gradually increasing priority of processes waiting long in queue",
          "Deleting old files",
          "Compressing RAM",
          "Overclocking CPU"
        ],
        "correctAnswer": 0,
        "explanation": "Aging prevents starvation by increasing priority over time."
      },
      {
        "id": 10,
        "question": "What is Context Switching?",
        "options": [
          "Saving state of current process and restoring state of another process",
          "Switching user accounts",
          "Changing screen resolution",
          "Swapping hard drives"
        ],
        "correctAnswer": 0,
        "explanation": "Context switching enables multi-tasking on a single CPU core."
      },
      {
        "id": 11,
        "question": "What is a System Call?",
        "options": [
          "Programmatic way a process requests service from the OS kernel",
          "Calling customer support",
          "An HTTP GET request",
          "A GPU shader function"
        ],
        "correctAnswer": 0,
        "explanation": "System calls provide an interface between user applications and the kernel."
      },
      {
        "id": 12,
        "question": "Which system call in Unix/Linux creates a new child process?",
        "options": [
          "fork()",
          "exec()",
          "exit()",
          "wait()"
        ],
        "correctAnswer": 0,
        "explanation": "fork() creates a new process by duplicating the calling process."
      },
      {
        "id": 13,
        "question": "Which system call replaces current process image with a new process image?",
        "options": [
          "exec()",
          "fork()",
          "clone()",
          "spawn()"
        ],
        "correctAnswer": 0,
        "explanation": "exec() loads and executes a new binary image in the current process space."
      },
      {
        "id": 14,
        "question": "What is a Zombie Process in Unix?",
        "options": [
          "A process that has completed execution but still has an entry in process table",
          "A process consuming 100% CPU",
          "A malware process",
          "A process running on remote server"
        ],
        "correctAnswer": 0,
        "explanation": "A zombie process has exited, but its parent has not yet read its exit status via wait()."
      },
      {
        "id": 15,
        "question": "What is an Orphan Process?",
        "options": [
          "A running process whose parent process has terminated",
          "A process with no PID",
          "A process with no memory",
          "A deleted file"
        ],
        "correctAnswer": 0,
        "explanation": "An orphan process continues executing after its parent terminates (adopted by `init`/`systemd`)."
      },
      {
        "id": 16,
        "question": "What is a Race Condition?",
        "options": [
          "When outcome depends on non-deterministic order of thread execution",
          "When network speed drops",
          "When disk read fails",
          "When memory leaks"
        ],
        "correctAnswer": 0,
        "explanation": "Race condition occurs when concurrent threads access shared data without synchronization."
      },
      {
        "id": 17,
        "question": "What is Critical Section?",
        "options": [
          "Part of code where shared resources are accessed",
          "Part of kernel code",
          "RAM address 0x00",
          "Hard drive boot sector"
        ],
        "correctAnswer": 0,
        "explanation": "Critical section must be executed atomically to prevent data corruption."
      },
      {
        "id": 18,
        "question": "Which mechanism provides mutual exclusion for critical sections?",
        "options": [
          "Mutex / Semaphore",
          "Interrupt Vector",
          "Page Table",
          "Disk Buffer"
        ],
        "correctAnswer": 0,
        "explanation": "Mutex (Mutual Exclusion) locks resources so only one thread accesses it at a time."
      },
      {
        "id": 19,
        "question": "What is a Counting Semaphore?",
        "options": [
          "A synchronization tool whose value can range over an unrestricted domain",
          "A binary 0/1 flag",
          "A CPU clock counter",
          "A hardware timer"
        ],
        "correctAnswer": 0,
        "explanation": "Counting semaphore controls access to a resource pool with finite instances."
      },
      {
        "id": 20,
        "question": "What is a Binary Semaphore?",
        "options": [
          "A semaphore whose value can only be 0 or 1",
          "A 64-bit integer counter",
          "A dual-core CPU lock",
          "A network ping"
        ],
        "correctAnswer": 0,
        "explanation": "Binary semaphore acts like a mutex lock (0 or 1)."
      },
      {
        "id": 21,
        "question": "Which of the following is NOT one of the 4 necessary conditions for Deadlock?",
        "options": [
          "Preemption",
          "Mutual Exclusion",
          "Hold and Wait",
          "Circular Wait"
        ],
        "correctAnswer": 0,
        "explanation": "No Preemption is a deadlock condition; active Preemption actually prevents deadlock!"
      },
      {
        "id": 22,
        "question": "Which algorithm is used for Deadlock Avoidance?",
        "options": [
          "Banker's Algorithm",
          "Dijkstra's Algorithm",
          "Round Robin",
          "LRU Algorithm"
        ],
        "correctAnswer": 0,
        "explanation": "Banker's Algorithm tests safe states before allocating resources."
      },
      {
        "id": 23,
        "question": "What is Virtual Memory?",
        "options": [
          "Feature that allows execution of processes larger than physical RAM",
          "RAM on graphics card",
          "USB drive storage",
          "Cloud backup"
        ],
        "correctAnswer": 0,
        "explanation": "Virtual memory creates an illusion of large contiguous RAM space using secondary storage."
      },
      {
        "id": 24,
        "question": "What is Paging in memory management?",
        "options": [
          "Fixed-size memory allocation scheme dividing logical memory into pages",
          "Dynamic variable splitting",
          "Copying files to USB",
          "Deleting temporary files"
        ],
        "correctAnswer": 0,
        "explanation": "Paging maps fixed-size logical pages to physical frames."
      },
      {
        "id": 25,
        "question": "What is a Page Fault?",
        "options": [
          "Occurs when a process accesses a page not currently loaded in physical RAM",
          "Memory hardware failure",
          "Disk corruption",
          "Syntax error in C code"
        ],
        "correctAnswer": 0,
        "explanation": "Page fault triggers OS to fetch missing page from swap disk into RAM."
      },
      {
        "id": 26,
        "question": "What is Thrashing in OS?",
        "options": [
          "When OS spends more time swapping pages than executing instructions",
          "Disk defragmentation",
          "CPU overheating",
          "Virus attack"
        ],
        "correctAnswer": 0,
        "explanation": "Thrashing occurs when memory is over-committed and excessive page faulting occurs."
      },
      {
        "id": 27,
        "question": "Which Page Replacement Algorithm replaces the page that will not be used for longest time in future?",
        "options": [
          "Optimal Page Replacement (OPT)",
          "FIFO",
          "LRU",
          "MRU"
        ],
        "correctAnswer": 0,
        "explanation": "Optimal (Belady's) algorithm replaces the page needed furthest in the future."
      },
      {
        "id": 28,
        "question": "Which Page Replacement Algorithm replaces the page least recently used?",
        "options": [
          "LRU (Least Recently Used)",
          "FIFO",
          "Optimal",
          "LIFO"
        ],
        "correctAnswer": 0,
        "explanation": "LRU replaces pages that haven't been accessed for the longest time."
      },
      {
        "id": 29,
        "question": "What is Belady's Anomaly?",
        "options": [
          "In FIFO page replacement, increasing page frames can increase page faults",
          "LRU runs in O(1) time",
          "Virtual memory crashes",
          "CPU clock speed drops"
        ],
        "correctAnswer": 0,
        "explanation": "Belady's Anomaly occurs in FIFO where allocating more frames results in more page faults."
      },
      {
        "id": 30,
        "question": "What is Fragmentation in memory management?",
        "options": [
          "Unused memory space that cannot be allocated effectively",
          "File compression",
          "Disk formatting",
          "Process creation"
        ],
        "correctAnswer": 0,
        "explanation": "Fragmentation is wasted memory space (Internal or External)."
      },
      {
        "id": 31,
        "question": "What is Internal Fragmentation?",
        "options": [
          "Unused space inside allocated fixed-size memory blocks",
          "Unused space between variable memory blocks",
          "Hard drive sector failure",
          "Cache miss"
        ],
        "correctAnswer": 0,
        "explanation": "Internal fragmentation happens when allocated block is larger than requested size."
      },
      {
        "id": 32,
        "question": "What is External Fragmentation?",
        "options": [
          "Total free memory is enough for request, but not contiguous",
          "Unused space inside block",
          "RAM corruption",
          "Swap file full"
        ],
        "correctAnswer": 0,
        "explanation": "External fragmentation occurs when free memory is broken into small non-contiguous chunks."
      },
      {
        "id": 33,
        "question": "Which technique solves External Fragmentation by moving memory contents to coalesce free spaces?",
        "options": [
          "Compaction",
          "Paging",
          "Swapping",
          "Segmentation"
        ],
        "correctAnswer": 0,
        "explanation": "Compaction shifts processes to combine free memory into one large block."
      },
      {
        "id": 34,
        "question": "What is Segmentation in memory management?",
        "options": [
          "Variable-size memory allocation scheme dividing memory according to logical units (code, data, stack)",
          "Fixed-size paging",
          "Disk formatting",
          "File indexing"
        ],
        "correctAnswer": 0,
        "explanation": "Segmentation divides memory into variable-sized logical segments."
      },
      {
        "id": 35,
        "question": "What is a Translation Lookaside Buffer (TLB)?",
        "options": [
          "High-speed hardware cache used to speed up virtual-to-physical address translation",
          "Disk controller",
          "GPU VRAM",
          "BIOS chip"
        ],
        "correctAnswer": 0,
        "explanation": "TLB caches recent page table translation entries."
      },
      {
        "id": 36,
        "question": "What is a File Allocation Table (FAT)?",
        "options": [
          "A file system architecture using a table to map cluster allocation",
          "A database table",
          "RAM index",
          "CPU register"
        ],
        "correctAnswer": 0,
        "explanation": "FAT maintains cluster links for files on disk storage."
      },
      {
        "id": 37,
        "question": "In Linux file permissions `chmod 755 script.sh`, what does `7` represent for owner?",
        "options": [
          "Read (4) + Write (2) + Execute (1)",
          "Read only",
          "Execute only",
          "Write only"
        ],
        "correctAnswer": 0,
        "explanation": "7 = 4(read) + 2(write) + 1(execute) = rwx."
      },
      {
        "id": 38,
        "question": "What is an inode in Unix/Linux file system?",
        "options": [
          "Data structure storing file metadata (permissions, owner, size, block pointers)",
          "The file name string",
          "Root directory",
          "RAM cache"
        ],
        "correctAnswer": 0,
        "explanation": "Inodes contain metadata about files except file names and actual contents."
      },
      {
        "id": 39,
        "question": "Which Disk Scheduling Algorithm services disk requests closest to current head position?",
        "options": [
          "SSTF (Shortest Seek Time First)",
          "FCFS",
          "SCAN",
          "C-SCAN"
        ],
        "correctAnswer": 0,
        "explanation": "SSTF chooses request requiring least disk arm movement."
      },
      {
        "id": 40,
        "question": "Which Disk Scheduling Algorithm moves disk head from one end to another, servicing requests along the way?",
        "options": [
          "SCAN (Elevator Algorithm)",
          "FCFS",
          "SSTF",
          "FIFO"
        ],
        "correctAnswer": 0,
        "explanation": "SCAN algorithm mimics an elevator servicing requests in direction of travel."
      },
      {
        "id": 41,
        "question": "What is Spooling?",
        "options": [
          "Simultaneous Peripheral Operations On-Line (queuing jobs for devices like printers)",
          "CPU overclocking",
          "Memory paging",
          "Thread locking"
        ],
        "correctAnswer": 0,
        "explanation": "Spooling buffers data for slow I/O devices (e.g., print spooler)."
      },
      {
        "id": 42,
        "question": "What is a Monolithic Kernel?",
        "options": [
          "Kernel where all OS core services (memory, FS, drivers) run in single kernel space",
          "Kernel broken into small modules in user space",
          "Virtual machine supervisor",
          "Browser engine"
        ],
        "correctAnswer": 0,
        "explanation": "Monolithic kernels execute all OS services in unified high-privilege space."
      },
      {
        "id": 43,
        "question": "What is a Microkernel?",
        "options": [
          "Kernel that keeps only essential mechanisms in kernel space, running services in user space",
          "A tiny operating system for microcontrollers",
          "A web browser kernel",
          "A hardware chip"
        ],
        "correctAnswer": 0,
        "explanation": "Microkernel minimizes kernel space code, running services as user-space processes."
      },
      {
        "id": 44,
        "question": "What is RAID 0?",
        "options": [
          "Disk striping without redundancy for maximum performance",
          "Disk mirroring",
          "Striping with parity",
          "Dual parity"
        ],
        "correctAnswer": 0,
        "explanation": "RAID 0 stripes data across multiple disks for speed but offers no fault tolerance."
      },
      {
        "id": 45,
        "question": "What is RAID 1?",
        "options": [
          "Disk mirroring for fault tolerance",
          "Disk striping",
          "Parity block",
          "RAID 0 + 5"
        ],
        "correctAnswer": 0,
        "explanation": "RAID 1 duplicates identical data across two or more disks."
      },
      {
        "id": 46,
        "question": "What is RAID 5?",
        "options": [
          "Block-level striping with distributed parity",
          "Mirroring only",
          "Striping without parity",
          "RAM caching"
        ],
        "correctAnswer": 0,
        "explanation": "RAID 5 requires at least 3 disks and distributes parity across all drives."
      },
      {
        "id": 47,
        "question": "Which interrupt is generated by hardware devices like keyboard or disk drive?",
        "options": [
          "Hardware Interrupt / Asynchronous Interrupt",
          "Software Interrupt",
          "System Call",
          "Division by zero"
        ],
        "correctAnswer": 0,
        "explanation": "Hardware interrupts signal external device events asynchronously."
      },
      {
        "id": 48,
        "question": "What is a Trap in OS?",
        "options": [
          "A software-generated interrupt caused by error or system call request",
          "A hardware fault",
          "A memory leak",
          "A network virus"
        ],
        "correctAnswer": 0,
        "explanation": "A trap (or exception) is a synchronous software interrupt."
      },
      {
        "id": 49,
        "question": "What is DMA (Direct Memory Access)?",
        "options": [
          "Feature allowing hardware devices to transfer data directly to/from RAM without CPU intervention",
          "CPU instruction cache",
          "GPU shader pipeline",
          "Wireless protocol"
        ],
        "correctAnswer": 0,
        "explanation": "DMA frees CPU from handling high-volume data transfers."
      },
      {
        "id": 50,
        "question": "What is the primary function of a Bootloader (e.g. GRUB)?",
        "options": [
          "Loads operating system kernel into memory during startup",
          "Compiles C programs",
          "Formats hard drives",
          "Manages user login passwords"
        ],
        "correctAnswer": 0,
        "explanation": "Bootloader initializes hardware and loads the OS kernel into RAM."
      }
    ]
  },
  {
    "id": "dbms",
    "title": "Database Management Systems (DBMS)",
    "semester": "Semester 3",
    "icon": "\ud83d\uddc4\ufe0f",
    "category": "Databases",
    "description": "SQL queries, relational algebra, normalization (1NF-5NF), indexing, and ACID transactions.",
    "questions": [
      {
        "id": 1,
        "question": "What does DBMS stand for?",
        "options": [
          "Database Management System",
          "Data Binding & Modeling Service",
          "Direct Base Memory Storage",
          "Digital Binary Management System"
        ],
        "correctAnswer": 0,
        "explanation": "DBMS is software system for creating and managing databases."
      },
      {
        "id": 2,
        "question": "Which database model organizes data into tables consisting of rows and columns?",
        "options": [
          "Relational Model",
          "Hierarchical Model",
          "Network Model",
          "Object Model"
        ],
        "correctAnswer": 0,
        "explanation": "Relational model uses tables (relations) with rows (tuples) and columns (attributes)."
      },
      {
        "id": 3,
        "question": "What is a Primary Key?",
        "options": [
          "An attribute or set of attributes that uniquely identifies each tuple in a table",
          "A key used to decrypt files",
          "A foreign link to another table",
          "An index on text columns"
        ],
        "correctAnswer": 0,
        "explanation": "Primary key uniquely identifies each record in a database table and cannot be NULL."
      },
      {
        "id": 4,
        "question": "What is a Foreign Key?",
        "options": [
          "An attribute in one table that references Primary Key of another table",
          "A backup key",
          "A master password",
          "An index column"
        ],
        "correctAnswer": 0,
        "explanation": "Foreign key creates link between data in two tables."
      },
      {
        "id": 5,
        "question": "What is a Candidate Key?",
        "options": [
          "A minimal set of attributes that can uniquely identify a record",
          "Any key selected as primary key",
          "A key containing duplicate values",
          "A foreign key"
        ],
        "correctAnswer": 0,
        "explanation": "Candidate key is a super key with no redundant attributes."
      },
      {
        "id": 6,
        "question": "What is a Super Key?",
        "options": [
          "A set of one or more attributes that uniquely identifies a record in a table",
          "A primary key only",
          "A foreign key only",
          "A column with numbers"
        ],
        "correctAnswer": 0,
        "explanation": "Super key is any combination of columns that uniquely identifies a row."
      },
      {
        "id": 7,
        "question": "Which SQL clause is used to filter records in a `SELECT` statement?",
        "options": [
          "WHERE",
          "HAVING",
          "GROUP BY",
          "ORDER BY"
        ],
        "correctAnswer": 0,
        "explanation": "WHERE filters rows before grouping occurs."
      },
      {
        "id": 8,
        "question": "Which SQL clause is used to filter aggregated groups created by `GROUP BY`?",
        "options": [
          "HAVING",
          "WHERE",
          "ORDER BY",
          "FILTER"
        ],
        "correctAnswer": 0,
        "explanation": "HAVING filters groups created by GROUP BY."
      },
      {
        "id": 9,
        "question": "Which SQL keyword is used to eliminate duplicate rows from query results?",
        "options": [
          "DISTINCT",
          "UNIQUE",
          "DIFFERENT",
          "SINGLE"
        ],
        "correctAnswer": 0,
        "explanation": "SELECT DISTINCT returns only unique values."
      },
      {
        "id": 10,
        "question": "Which SQL command modifies existing records in a table?",
        "options": [
          "UPDATE",
          "MODIFY",
          "ALTER",
          "CHANGE"
        ],
        "correctAnswer": 0,
        "explanation": "UPDATE modifies existing data in table rows."
      },
      {
        "id": 11,
        "question": "Which SQL command adds new rows into a table?",
        "options": [
          "INSERT INTO",
          "ADD ROW",
          "APPEND",
          "UPDATE"
        ],
        "correctAnswer": 0,
        "explanation": "INSERT INTO adds new tuples to a table."
      },
      {
        "id": 12,
        "question": "Which SQL command deletes rows from a table based on a condition?",
        "options": [
          "DELETE FROM",
          "DROP",
          "TRUNCATE",
          "REMOVE"
        ],
        "correctAnswer": 0,
        "explanation": "DELETE removes specified rows while keeping table structure."
      },
      {
        "id": 13,
        "question": "Which SQL command removes all rows from a table without logging individual row deletions?",
        "options": [
          "TRUNCATE TABLE",
          "DELETE FROM",
          "DROP TABLE",
          "REMOVE"
        ],
        "correctAnswer": 0,
        "explanation": "TRUNCATE quickly empties a table without firing individual row delete triggers."
      },
      {
        "id": 14,
        "question": "Which SQL command completely deletes a table structure and data from database?",
        "options": [
          "DROP TABLE",
          "TRUNCATE TABLE",
          "DELETE TABLE",
          "CLEAR"
        ],
        "correctAnswer": 0,
        "explanation": "DROP TABLE deletes both data and schema structure."
      },
      {
        "id": 15,
        "question": "Which category of SQL commands includes `CREATE`, `ALTER`, `DROP`, `TRUNCATE`?",
        "options": [
          "DDL (Data Definition Language)",
          "DML (Data Manipulation Language)",
          "DCL (Data Control Language)",
          "TCL (Transaction Control Language)"
        ],
        "correctAnswer": 0,
        "explanation": "DDL commands define and modify database schemas."
      },
      {
        "id": 16,
        "question": "Which category of SQL commands includes `SELECT`, `INSERT`, `UPDATE`, `DELETE`?",
        "options": [
          "DML (Data Manipulation Language)",
          "DDL",
          "DCL",
          "TCL"
        ],
        "correctAnswer": 0,
        "explanation": "DML commands manipulate data stored inside database tables."
      },
      {
        "id": 17,
        "question": "Which category of SQL commands includes `GRANT` and `REVOKE`?",
        "options": [
          "DCL (Data Control Language)",
          "DDL",
          "DML",
          "TCL"
        ],
        "correctAnswer": 0,
        "explanation": "DCL handles user rights and permissions."
      },
      {
        "id": 18,
        "question": "Which category of SQL commands includes `COMMIT`, `ROLLBACK`, `SAVEPOINT`?",
        "options": [
          "TCL (Transaction Control Language)",
          "DDL",
          "DML",
          "DCL"
        ],
        "correctAnswer": 0,
        "explanation": "TCL manages database transactions."
      },
      {
        "id": 19,
        "question": "What does the `COMMIT` command do in SQL?",
        "options": [
          "Saves all transaction changes permanently to database",
          "Undoes changes",
          "Rolls back to savepoint",
          "Deletes database"
        ],
        "correctAnswer": 0,
        "explanation": "COMMIT makes all transaction changes permanent."
      },
      {
        "id": 20,
        "question": "What does the `ROLLBACK` command do in SQL?",
        "options": [
          "Reverts database changes back to last committed state or savepoint",
          "Saves changes",
          "Creates table",
          "Deletes index"
        ],
        "correctAnswer": 0,
        "explanation": "ROLLBACK undoes changes made in current uncommitted transaction."
      },
      {
        "id": 21,
        "question": "Which SQL JOIN returns all rows from both tables matching ON condition?",
        "options": [
          "INNER JOIN",
          "LEFT JOIN",
          "RIGHT JOIN",
          "FULL OUTER JOIN"
        ],
        "correctAnswer": 0,
        "explanation": "INNER JOIN returns records that have matching values in both tables."
      },
      {
        "id": 22,
        "question": "Which SQL JOIN returns all rows from left table and matched rows from right table?",
        "options": [
          "LEFT (OUTER) JOIN",
          "RIGHT JOIN",
          "INNER JOIN",
          "CROSS JOIN"
        ],
        "correctAnswer": 0,
        "explanation": "LEFT JOIN keeps all rows from left table regardless of match in right table."
      },
      {
        "id": 23,
        "question": "Which SQL JOIN returns cartesian product of two tables?",
        "options": [
          "CROSS JOIN",
          "INNER JOIN",
          "FULL JOIN",
          "LEFT JOIN"
        ],
        "correctAnswer": 0,
        "explanation": "CROSS JOIN pairs every row of first table with every row of second table."
      },
      {
        "id": 24,
        "question": "What is Normalization in database design?",
        "options": [
          "Process of organizing data to minimize redundancy and dependency",
          "Creating backups",
          "Encrypting passwords",
          "Adding indexes"
        ],
        "correctAnswer": 0,
        "explanation": "Normalization eliminates duplicate data and improves data integrity."
      },
      {
        "id": 25,
        "question": "What is 1NF (First Normal Form)?",
        "options": [
          "Table attributes must contain atomic (indivisible) values with no repeating groups",
          "No partial dependency",
          "No transitive dependency",
          "BCNF compliant"
        ],
        "correctAnswer": 0,
        "explanation": "1NF requires atomic values and unique column names."
      },
      {
        "id": 26,
        "question": "What is 2NF (Second Normal Form)?",
        "options": [
          "Table is in 1NF and has NO partial dependencies (non-key attributes depend on whole PK)",
          "No transitive dependency",
          "Atomic values only",
          "No multi-valued dependency"
        ],
        "correctAnswer": 0,
        "explanation": "2NF eliminates partial dependencies on composite primary keys."
      },
      {
        "id": 27,
        "question": "What is 3NF (Third Normal Form)?",
        "options": [
          "Table is in 2NF and has NO transitive dependencies",
          "No partial dependency",
          "Atomic values only",
          "5NF compliant"
        ],
        "correctAnswer": 0,
        "explanation": "3NF requires that non-key attributes depend only on candidate keys (no A->B->C)."
      },
      {
        "id": 28,
        "question": "What is BCNF (Boyce-Codd Normal Form)?",
        "options": [
          "Strict version of 3NF where for every functional dependency X -> Y, X must be a super key",
          "1NF variant",
          "2NF variant",
          "4NF variant"
        ],
        "correctAnswer": 0,
        "explanation": "BCNF requires every determinant to be a super key."
      },
      {
        "id": 29,
        "question": "What is Denormalization?",
        "options": [
          "Process of intentionally adding redundancy to normalized database to speed up read performance",
          "Fixing 1NF errors",
          "Deleting tables",
          "Creating views"
        ],
        "correctAnswer": 0,
        "explanation": "Denormalization trades storage and update efficiency for faster query execution."
      },
      {
        "id": 30,
        "question": "What is Atomicity in ACID properties?",
        "options": [
          "Transaction completes fully or not at all (All or Nothing)",
          "Database remains consistent",
          "Transactions are isolated",
          "Data persists across crashes"
        ],
        "correctAnswer": 0,
        "explanation": "Atomicity guarantees that all operations in a transaction succeed or all fail."
      },
      {
        "id": 31,
        "question": "What is Consistency in ACID properties?",
        "options": [
          "Transaction brings database from one valid state to another valid state",
          "All or nothing",
          "Data hidden from other transactions",
          "Saved on disk"
        ],
        "correctAnswer": 0,
        "explanation": "Consistency preserves database constraints and invariants."
      },
      {
        "id": 32,
        "question": "What is Isolation in ACID properties?",
        "options": [
          "Concurrent execution of transactions leaves database in same state as sequential execution",
          "All or nothing",
          "Valid state only",
          "Disk backup"
        ],
        "correctAnswer": 0,
        "explanation": "Isolation prevents intermediate state of one transaction from being seen by others."
      },
      {
        "id": 33,
        "question": "What is Durability in ACID properties?",
        "options": [
          "Committed transaction changes persist permanently even in system failure",
          "All or nothing",
          "Fast query speed",
          "No locks"
        ],
        "correctAnswer": 0,
        "explanation": "Durability guarantees committed data is saved in non-volatile storage."
      },
      {
        "id": 34,
        "question": "What is a Dirty Read anomaly?",
        "options": [
          "Reading uncommitted changes made by another concurrent transaction",
          "Reading same row twice with different results",
          "Adding new rows",
          "Deleting indexes"
        ],
        "correctAnswer": 0,
        "explanation": "Dirty read happens when Transaction A reads data modified by Transaction B before B commits."
      },
      {
        "id": 35,
        "question": "What is a Non-Repeatable Read anomaly?",
        "options": [
          "Re-reading same row within transaction yields different values because another transaction modified & committed it",
          "Reading uncommitted data",
          "Phantom rows",
          "Deadlock"
        ],
        "correctAnswer": 0,
        "explanation": "Non-repeatable read occurs when data read once changes upon second read within same transaction."
      },
      {
        "id": 36,
        "question": "What is a Phantom Read anomaly?",
        "options": [
          "Transaction re-runs query returning new set of rows inserted by another committed transaction",
          "Reading uncommitted row",
          "Key duplicate",
          "Lock error"
        ],
        "correctAnswer": 0,
        "explanation": "Phantom read occurs when new rows matching search criteria are inserted by another transaction."
      },
      {
        "id": 37,
        "question": "Which Transaction Isolation Level prevents Dirty Reads, Non-Repeatable Reads, AND Phantom Reads?",
        "options": [
          "SERIALIZABLE",
          "REPEATABLE READ",
          "READ COMMITTED",
          "READ UNCOMMITTED"
        ],
        "correctAnswer": 0,
        "explanation": "SERIALIZABLE is highest isolation level providing complete transaction isolation."
      },
      {
        "id": 38,
        "question": "What is a Database View?",
        "options": [
          "A virtual table based on the result-set of an SQL statement",
          "A physical file on disk",
          "A primary key",
          "A database backup"
        ],
        "correctAnswer": 0,
        "explanation": "A View displays computed data from underlying tables without storing duplicate data."
      },
      {
        "id": 39,
        "question": "What is an Index in database?",
        "options": [
          "Data structure (like B-Tree) that speeds up data retrieval operations on a table",
          "A primary key constraint",
          "A foreign key link",
          "A backup copy"
        ],
        "correctAnswer": 0,
        "explanation": "Index enables fast lookup without scanning every row in table."
      },
      {
        "id": 40,
        "question": "Which data structure is most commonly used for database indexing?",
        "options": [
          "B-Tree / B+ Tree",
          "Array",
          "Stack",
          "Queue"
        ],
        "correctAnswer": 0,
        "explanation": "B+ Trees keep data sorted and allow logarithmic search, insertion, and deletion."
      },
      {
        "id": 41,
        "question": "What is a Clustered Index?",
        "options": [
          "Index that determines the physical order of data rows stored on disk",
          "Index stored separately from table data",
          "A non-unique index",
          "A composite foreign key"
        ],
        "correctAnswer": 0,
        "explanation": "Clustered index reorganizes table rows on disk to match index order (only one per table)."
      },
      {
        "id": 42,
        "question": "What is a Non-Clustered Index?",
        "options": [
          "Index structure separate from data rows containing pointers to physical location",
          "Physical table order index",
          "Primary key default",
          "Partition key"
        ],
        "correctAnswer": 0,
        "explanation": "Non-clustered index stores index key with pointers to actual data rows."
      },
      {
        "id": 43,
        "question": "What is a Stored Procedure?",
        "options": [
          "Precompiled collection of SQL statements executed as a unit on server",
          "A table backup file",
          "A browser script",
          "A CPU process"
        ],
        "correctAnswer": 0,
        "explanation": "Stored procedures execute compiled SQL logic directly inside database engine."
      },
      {
        "id": 44,
        "question": "What is a Database Trigger?",
        "options": [
          "Procedural code automatically executed in response to specific events (INSERT/UPDATE/DELETE) on a table",
          "A button click event",
          "A primary key generator",
          "A backup timer"
        ],
        "correctAnswer": 0,
        "explanation": "Triggers fire automatically when specified DML/DDL events occur."
      },
      {
        "id": 45,
        "question": "What is a Cardinality in Entity-Relationship (ER) diagram?",
        "options": [
          "Number of entity instances associated with another entity (1:1, 1:N, M:N)",
          "Number of columns in table",
          "Primary key count",
          "Table size in bytes"
        ],
        "correctAnswer": 0,
        "explanation": "Cardinality specifies numerical relationships between entities."
      },
      {
        "id": 46,
        "question": "What is Relational Algebra `Selection` operation (\u03c3)?",
        "options": [
          "Filters rows satisfying a given condition",
          "Selects specified columns",
          "Joins two tables",
          "Divides tuples"
        ],
        "correctAnswer": 0,
        "explanation": "Selection (sigma \u03c3) acts like SQL WHERE clause filtering tuples."
      },
      {
        "id": 47,
        "question": "What is Relational Algebra `Projection` operation (\u03c0)?",
        "options": [
          "Selects specified attributes/columns from relation",
          "Filters rows",
          "Combines relations",
          "Deletes duplicates"
        ],
        "correctAnswer": 0,
        "explanation": "Projection (pi \u03c0) selects specific columns, omitting unlisted ones."
      },
      {
        "id": 48,
        "question": "What is a NoSQL Database?",
        "options": [
          "Non-relational database designed for unstructured or semi-structured data scaling horizontally",
          "SQL-only engine",
          "C-based database",
          "RAM-only cache"
        ],
        "correctAnswer": 0,
        "explanation": "NoSQL databases handle flexible schemas (Document, Key-Value, Column, Graph)."
      },
      {
        "id": 49,
        "question": "Which of the following is a Document-oriented NoSQL database?",
        "options": [
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "Oracle"
        ],
        "correctAnswer": 0,
        "explanation": "MongoDB stores data in flexible JSON-like BSON documents."
      },
      {
        "id": 50,
        "question": "What does CAP Theorem state for distributed databases?",
        "options": [
          "A system can provide at most TWO of: Consistency, Availability, Partition Tolerance",
          "Computers Are Powerful",
          "Cache Always Persists",
          "Code And Program"
        ],
        "correctAnswer": 0,
        "explanation": "CAP theorem proves distributed data stores can guarantee only 2 of 3 properties simultaneously."
      }
    ]
  },
  {
    "id": "dsa",
    "title": "Data Structures & Algorithms",
    "semester": "Semester 4",
    "icon": "\u26a1",
    "category": "Algorithms",
    "description": "Arrays, stacks, queues, linked lists, trees, graphs, sorting, and Big-O time complexity.",
    "questions": [
      {
        "id": 1,
        "question": "What is Big-O notation used for?",
        "options": [
          "Describing the upper bound of algorithm time or space complexity",
          "Calculating exact runtime in milliseconds",
          "Counting number of lines of code",
          "Measuring CPU temperature"
        ],
        "correctAnswer": 0,
        "explanation": "Big-O characterizes algorithm efficiency in worst-case scenario as input size grows."
      },
      {
        "id": 2,
        "question": "What is the time complexity of searching an element in an unsorted array of size N?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)",
          "O(N\u00b2)"
        ],
        "correctAnswer": 0,
        "explanation": "Linear search checks each element one by one up to N times."
      },
      {
        "id": 3,
        "question": "What is the time complexity of accessing an array element by index `arr[i]`?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)",
          "O(N\u00b2)"
        ],
        "correctAnswer": 0,
        "explanation": "Array indexing calculates memory address directly in constant O(1) time."
      },
      {
        "id": 4,
        "question": "What is the average time complexity of Binary Search on a sorted array?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)",
          "O(N log N)"
        ],
        "correctAnswer": 0,
        "explanation": "Binary search repeatedly halves search space in O(log N) steps."
      },
      {
        "id": 5,
        "question": "Which condition must be met before executing Binary Search?",
        "options": [
          "The array must be sorted",
          "The array size must be even",
          "The array must contain positive numbers",
          "The array must be linked list"
        ],
        "correctAnswer": 0,
        "explanation": "Binary search requires elements to be in sorted order."
      },
      {
        "id": 6,
        "question": "What is the worst-case time complexity of Bubble Sort?",
        "options": [
          "O(N\u00b2)",
          "O(N log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": 0,
        "explanation": "Bubble Sort compares adjacent elements requiring N(N-1)/2 comparisons = O(N\u00b2)."
      },
      {
        "id": 7,
        "question": "What is the average-case time complexity of Merge Sort?",
        "options": [
          "O(N log N)",
          "O(N\u00b2)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": 0,
        "explanation": "Merge Sort uses divide-and-conquer to guarantee O(N log N) time in all cases."
      },
      {
        "id": 8,
        "question": "What is the space complexity of Merge Sort?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)",
          "O(N\u00b2)"
        ],
        "correctAnswer": 0,
        "explanation": "Merge Sort requires O(N) auxiliary space for temporary merging arrays."
      },
      {
        "id": 9,
        "question": "What is the worst-case time complexity of QuickSort?",
        "options": [
          "O(N\u00b2)",
          "O(N log N)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": 0,
        "explanation": "QuickSort degrades to O(N\u00b2) when pivot chosen is worst possible (e.g. already sorted array with bad pivot)."
      },
      {
        "id": 10,
        "question": "What is the best-case time complexity of Insertion Sort on an already sorted array?",
        "options": [
          "O(N)",
          "O(N\u00b2)",
          "O(N log N)",
          "O(1)"
        ],
        "correctAnswer": 0,
        "explanation": "Insertion sort checks each element once taking O(N) linear time when input is already sorted."
      },
      {
        "id": 11,
        "question": "Which sorting algorithm is STABLE and runs in O(N log N) worst-case time?",
        "options": [
          "Merge Sort",
          "QuickSort",
          "Heap Sort",
          "Selection Sort"
        ],
        "correctAnswer": 0,
        "explanation": "Merge Sort preserves relative order of equal elements and runs in O(N log N)."
      },
      {
        "id": 12,
        "question": "Which sorting algorithm is IN-PLACE and runs in O(N log N) worst-case time?",
        "options": [
          "Heap Sort",
          "Merge Sort",
          "Counting Sort",
          "Radix Sort"
        ],
        "correctAnswer": 0,
        "explanation": "Heap Sort sorts in-place O(1) auxiliary space with O(N log N) time."
      },
      {
        "id": 13,
        "question": "Which sorting algorithm has a linear time complexity O(N + K) for integer ranges?",
        "options": [
          "Counting Sort",
          "QuickSort",
          "Bubble Sort",
          "Insertion Sort"
        ],
        "correctAnswer": 0,
        "explanation": "Counting Sort counts integer frequencies achieving O(N+K) time."
      },
      {
        "id": 14,
        "question": "What is a Stack data structure?",
        "options": [
          "LIFO (Last-In, First-Out) data structure",
          "FIFO data structure",
          "Random access array",
          "Tree structure"
        ],
        "correctAnswer": 0,
        "explanation": "Stack operates on Last-In First-Out principle."
      },
      {
        "id": 15,
        "question": "Which operation adds an element to the top of a Stack?",
        "options": [
          "push()",
          "pop()",
          "peek()",
          "enqueue()"
        ],
        "correctAnswer": 0,
        "explanation": "push() inserts element at top of stack."
      },
      {
        "id": 16,
        "question": "Which operation removes and returns the top element of a Stack?",
        "options": [
          "pop()",
          "push()",
          "peek()",
          "dequeue()"
        ],
        "correctAnswer": 0,
        "explanation": "pop() removes the top element."
      },
      {
        "id": 17,
        "question": "Which operation returns top element of Stack without removing it?",
        "options": [
          "peek() / top()",
          "pop()",
          "push()",
          "poll()"
        ],
        "correctAnswer": 0,
        "explanation": "peek() inspects top element without mutating stack."
      },
      {
        "id": 18,
        "question": "What is a Queue data structure?",
        "options": [
          "FIFO (First-In, First-Out) data structure",
          "LIFO data structure",
          "Heap structure",
          "Hash map"
        ],
        "correctAnswer": 0,
        "explanation": "Queue processes elements in First-In First-Out order."
      },
      {
        "id": 19,
        "question": "Which operation adds an element to the rear of a Queue?",
        "options": [
          "enqueue() / push()",
          "dequeue()",
          "pop()",
          "peek()"
        ],
        "correctAnswer": 0,
        "explanation": "enqueue() adds element to rear of queue."
      },
      {
        "id": 20,
        "question": "Which operation removes an element from the front of a Queue?",
        "options": [
          "dequeue() / poll()",
          "enqueue()",
          "push()",
          "peek()"
        ],
        "correctAnswer": 0,
        "explanation": "dequeue() removes element from front of queue."
      },
      {
        "id": 21,
        "question": "What is a Circular Queue?",
        "options": [
          "Queue where last position is connected back to first position to make a circle",
          "A stack linked list",
          "A double priority queue",
          "A tree queue"
        ],
        "correctAnswer": 0,
        "explanation": "Circular Queue reuses memory spaces freed by dequeue operations."
      },
      {
        "id": 22,
        "question": "What is a Priority Queue?",
        "options": [
          "Queue where elements are served based on assigned priority rather than insertion order",
          "LIFO queue",
          "Simple FIFO queue",
          "Array queue"
        ],
        "correctAnswer": 0,
        "explanation": "Priority Queue dequeues highest priority elements first."
      },
      {
        "id": 23,
        "question": "Which data structure is typically used to implement a Priority Queue efficiently?",
        "options": [
          "Binary Heap",
          "Unsorted Array",
          "Stack",
          "Queue"
        ],
        "correctAnswer": 0,
        "explanation": "Binary Heap implements Priority Queue with O(log N) push/pop operations."
      },
      {
        "id": 24,
        "question": "What is a Singly Linked List node composed of?",
        "options": [
          "Data field and pointer to next node",
          "Data field and pointer to previous node",
          "Two pointers to children",
          "Array index"
        ],
        "correctAnswer": 0,
        "explanation": "Singly linked list node contains data and `next` reference."
      },
      {
        "id": 25,
        "question": "What is a Doubly Linked List node composed of?",
        "options": [
          "Data field, pointer to next node, and pointer to previous node",
          "Data and next pointer only",
          "Three pointers",
          "Value and hash"
        ],
        "correctAnswer": 0,
        "explanation": "Doubly linked list allows bidirectional traversal (`prev` and `next`)."
      },
      {
        "id": 26,
        "question": "What is the time complexity to insert a node at the head of a Singly Linked List?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)",
          "O(N\u00b2)"
        ],
        "correctAnswer": 0,
        "explanation": "Updating head pointer takes constant O(1) time."
      },
      {
        "id": 27,
        "question": "What is the time complexity to search an element in a Singly Linked List of size N?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)",
          "O(N log N)"
        ],
        "correctAnswer": 0,
        "explanation": "Searching requires traversing nodes from head to target taking O(N) time."
      },
      {
        "id": 28,
        "question": "What is a Hash Table?",
        "options": [
          "Data structure mapping keys to values using hash function for fast lookup",
          "Sorted array",
          "Binary tree",
          "Stack"
        ],
        "correctAnswer": 0,
        "explanation": "Hash Table computes index into bucket array for average O(1) lookups."
      },
      {
        "id": 29,
        "question": "What is a Hash Collision?",
        "options": [
          "When hash function generates same index for two different keys",
          "When hash table runs out of memory",
          "When key is null",
          "When array is full"
        ],
        "correctAnswer": 0,
        "explanation": "Collision happens when two distinct keys yield identical hash codes."
      },
      {
        "id": 30,
        "question": "Which collision resolution technique uses linked lists attached to hash buckets?",
        "options": [
          "Chaining / Separate Chaining",
          "Linear Probing",
          "Quadratic Probing",
          "Double Hashing"
        ],
        "correctAnswer": 0,
        "explanation": "Chaining stores colliding keys in a linked list at bucket index."
      },
      {
        "id": 31,
        "question": "Which collision resolution technique searches next sequential empty slot in hash array?",
        "options": [
          "Linear Probing",
          "Chaining",
          "Double Hashing",
          "Rehashing"
        ],
        "correctAnswer": 0,
        "explanation": "Linear Probing searches index (i+1), (i+2) linearly for open slot."
      },
      {
        "id": 32,
        "question": "What is average time complexity for lookup in Hash Table?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)",
          "O(N\u00b2)"
        ],
        "correctAnswer": 0,
        "explanation": "With good hash distribution, lookup is average O(1)."
      },
      {
        "id": 33,
        "question": "What is worst-case time complexity for lookup in Hash Table when all keys collide into one bucket?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)",
          "O(N\u00b2)"
        ],
        "correctAnswer": 0,
        "explanation": "If all keys hash to same bucket, lookup degrades to O(N) linked list search."
      },
      {
        "id": 34,
        "question": "What is a Binary Tree?",
        "options": [
          "Tree structure where each node has at most TWO children (left and right)",
          "Tree with 3 children",
          "Graph with cycles",
          "Sorted array"
        ],
        "correctAnswer": 0,
        "explanation": "Binary tree nodes have maximum degree of 2."
      },
      {
        "id": 35,
        "question": "What is a Binary Search Tree (BST)?",
        "options": [
          "Binary tree where left subtree node values < parent < right subtree node values",
          "Heap tree",
          "Complete tree",
          "Random tree"
        ],
        "correctAnswer": 0,
        "explanation": "BST property maintains ordered hierarchy for fast search."
      },
      {
        "id": 36,
        "question": "What is the worst-case time complexity of search in unbalanced BST (skewed tree)?",
        "options": [
          "O(N)",
          "O(log N)",
          "O(1)",
          "O(N log N)"
        ],
        "correctAnswer": 0,
        "explanation": "A skewed BST resembles a linked list with O(N) depth."
      },
      {
        "id": 37,
        "question": "Which tree traversal visits nodes in order: Left -> Root -> Right?",
        "options": [
          "Inorder Traversal",
          "Preorder Traversal",
          "Postorder Traversal",
          "Level-order Traversal"
        ],
        "correctAnswer": 0,
        "explanation": "Inorder traversal of BST yields elements in sorted ascending order."
      },
      {
        "id": 38,
        "question": "Which tree traversal visits nodes in order: Root -> Left -> Right?",
        "options": [
          "Preorder Traversal",
          "Inorder Traversal",
          "Postorder Traversal",
          "BFS"
        ],
        "correctAnswer": 0,
        "explanation": "Preorder visits root before left and right subtrees."
      },
      {
        "id": 39,
        "question": "Which tree traversal visits nodes in order: Left -> Right -> Root?",
        "options": [
          "Postorder Traversal",
          "Inorder Traversal",
          "Preorder Traversal",
          "DFS"
        ],
        "correctAnswer": 0,
        "explanation": "Postorder visits children before parent node."
      },
      {
        "id": 40,
        "question": "What is an AVL Tree?",
        "options": [
          "Self-balancing Binary Search Tree where height difference of subtrees is at most 1",
          "B-Tree",
          "Red-Black Tree",
          "Trie"
        ],
        "correctAnswer": 0,
        "explanation": "AVL tree maintains strict balance factor (-1, 0, +1) using rotations."
      },
      {
        "id": 41,
        "question": "What is the worst-case lookup time complexity in an AVL Tree?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)",
          "O(N\u00b2)"
        ],
        "correctAnswer": 0,
        "explanation": "Strict height balancing guarantees O(log N) lookup."
      },
      {
        "id": 42,
        "question": "What is a Max-Heap?",
        "options": [
          "Complete binary tree where parent node value >= children node values",
          "Min-heap",
          "BST",
          "Graph"
        ],
        "correctAnswer": 0,
        "explanation": "In Max-Heap, root holds the maximum element."
      },
      {
        "id": 43,
        "question": "What is the time complexity to insert an element into a Binary Heap of size N?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": 0,
        "explanation": "Insertion inserts at end and bubbles up height log(N)."
      },
      {
        "id": 44,
        "question": "What is a Graph?",
        "options": [
          "Non-linear data structure consisting of vertices (nodes) and edges connecting them",
          "Linear array",
          "Tree with no root",
          "Hash map"
        ],
        "correctAnswer": 0,
        "explanation": "Graph G = (V, E) represents network of connected entities."
      },
      {
        "id": 45,
        "question": "Which Graph Traversal uses Queue data structure and visits nodes level by level?",
        "options": [
          "Breadth-First Search (BFS)",
          "Depth-First Search (DFS)",
          "Dijkstra",
          "Kruskal"
        ],
        "correctAnswer": 0,
        "explanation": "BFS explores nearest neighbors first using FIFO queue."
      },
      {
        "id": 46,
        "question": "Which Graph Traversal uses Stack (or recursion) and explores deep along branches?",
        "options": [
          "Depth-First Search (DFS)",
          "BFS",
          "Prim's Algorithm",
          "Bellman-Ford"
        ],
        "correctAnswer": 0,
        "explanation": "DFS explores as deep as possible along each branch before backtracking."
      },
      {
        "id": 47,
        "question": "What is the time complexity of BFS/DFS on graph with V vertices and E edges using adjacency list?",
        "options": [
          "O(V + E)",
          "O(V * E)",
          "O(V\u00b2)",
          "O(E log V)"
        ],
        "correctAnswer": 0,
        "explanation": "Traversal visits all vertices and inspects all edges: O(V + E)."
      },
      {
        "id": 48,
        "question": "Which algorithm finds Shortest Path from single source in non-negative weighted graph?",
        "options": [
          "Dijkstra's Algorithm",
          "Kruskal's Algorithm",
          "Prim's Algorithm",
          "Floyd-Warshall"
        ],
        "correctAnswer": 0,
        "explanation": "Dijkstra computes shortest path tree for non-negative edge weights."
      },
      {
        "id": 49,
        "question": "Which algorithm finds Minimum Spanning Tree (MST) by greedily adding smallest edge that doesn't form cycle?",
        "options": [
          "Kruskal's Algorithm",
          "Dijkstra",
          "BFS",
          "Bellman-Ford"
        ],
        "correctAnswer": 0,
        "explanation": "Kruskal uses disjoint-set union (DSU) to add smallest non-cycling edges."
      },
      {
        "id": 50,
        "question": "What is Dynamic Programming (DP)?",
        "options": [
          "Optimization technique that solves complex problems by breaking into overlapping subproblems and storing results",
          "Sorting algorithm",
          "Graph traversal",
          "Greedy method without memory"
        ],
        "correctAnswer": 0,
        "explanation": "DP avoids redundant calculations by memoizing or tabulating subproblem solutions."
      }
    ]
  },
  {
    "id": "backend",
    "title": "Backend Engineering",
    "semester": "Semester 4",
    "icon": "\u2699\ufe0f",
    "category": "Backend",
    "description": "Node.js runtime, Express REST APIs, JWT authentication, MongoDB/Mongoose, and middleware.",
    "questions": [
      {
        "id": 1,
        "question": "What is Node.js?",
        "options": [
          "Asynchronous event-driven JavaScript runtime built on Chrome's V8 engine",
          "A CSS framework",
          "A relational database",
          "A frontend UI library"
        ],
        "correctAnswer": 0,
        "explanation": "Node.js allows executing JavaScript on the server side."
      },
      {
        "id": 2,
        "question": "What is the Event Loop in Node.js?",
        "options": [
          "Mechanism that handles asynchronous I/O operations non-blocking on single thread",
          "A multi-threaded CPU pool",
          "A database queue",
          "A CSS animation loop"
        ],
        "correctAnswer": 0,
        "explanation": "Event Loop offloads operations to system kernel whenever possible."
      },
      {
        "id": 3,
        "question": "What is npm in Node.js ecosystem?",
        "options": [
          "Node Package Manager used to install and manage project dependencies",
          "Node Program Module",
          "Network Protocol Manager",
          "New Project Model"
        ],
        "correctAnswer": 0,
        "explanation": "npm is default package manager for Node.js."
      },
      {
        "id": 4,
        "question": "Which file in a Node.js project manages project metadata and dependency list?",
        "options": [
          "package.json",
          "server.js",
          "index.html",
          "config.xml"
        ],
        "correctAnswer": 0,
        "explanation": "package.json contains scripts, dependencies, version info."
      },
      {
        "id": 5,
        "question": "How do you import a CommonJS module in Node.js?",
        "options": [
          "const fs = require('fs');",
          "import fs from 'fs';",
          "include('fs')",
          "using fs;"
        ],
        "correctAnswer": 0,
        "explanation": "`require()` is the CommonJS syntax for importing modules."
      },
      {
        "id": 6,
        "question": "How do you export a module function in CommonJS Node.js?",
        "options": [
          "module.exports = myFunction;",
          "export default myFunction;",
          "public export myFunction;",
          "return myFunction;"
        ],
        "correctAnswer": 0,
        "explanation": "`module.exports` exposes module functions/objects."
      },
      {
        "id": 7,
        "question": "Which built-in Node.js module provides utilities for working with file and directory paths?",
        "options": [
          "path",
          "fs",
          "http",
          "url"
        ],
        "correctAnswer": 0,
        "explanation": "The `path` module provides utilities for joining and normalizing file paths."
      },
      {
        "id": 8,
        "question": "Which built-in Node.js module provides file system operations (read, write, delete)?",
        "options": [
          "fs",
          "path",
          "os",
          "stream"
        ],
        "correctAnswer": 0,
        "explanation": "The `fs` (File System) module handles file read/write operations."
      },
      {
        "id": 9,
        "question": "What is Express.js?",
        "options": [
          "Fast, unopinionated, minimalist web framework for Node.js",
          "A NoSQL database",
          "A template engine",
          "A CSS framework"
        ],
        "correctAnswer": 0,
        "explanation": "Express simplifies HTTP routing, middleware processing, and response handling."
      },
      {
        "id": 10,
        "question": "In Express.js, what is Middleware?",
        "options": [
          "A function that has access to request (req), response (res), and next middleware function",
          "A database driver",
          "A frontend button component",
          "A compiler plugin"
        ],
        "correctAnswer": 0,
        "explanation": "Middleware functions execute during request-response lifecycle."
      },
      {
        "id": 11,
        "question": "What does `next()` function call do in Express middleware?",
        "options": [
          "Passes control to the next middleware function in stack",
          "Sends response to client",
          "Closes database connection",
          "Throws exception"
        ],
        "correctAnswer": 0,
        "explanation": "next() signals completion of current middleware work."
      },
      {
        "id": 12,
        "question": "Which middleware in Express parses incoming JSON request payloads?",
        "options": [
          "express.json()",
          "express.urlencoded()",
          "cors()",
          "morgan()"
        ],
        "correctAnswer": 0,
        "explanation": "express.json() parses body payload formatted in JSON."
      },
      {
        "id": 13,
        "question": "Which Express method defines route handler for HTTP GET requests?",
        "options": [
          "app.get('/path', handler)",
          "app.post('/path', handler)",
          "app.use('/path', handler)",
          "app.route('/path')"
        ],
        "correctAnswer": 0,
        "explanation": "app.get() registers GET endpoint handler."
      },
      {
        "id": 14,
        "question": "Which Express method defines route handler for HTTP POST requests?",
        "options": [
          "app.post('/path', handler)",
          "app.get('/path', handler)",
          "app.put('/path', handler)",
          "app.delete('/path', handler)"
        ],
        "correctAnswer": 0,
        "explanation": "app.post() registers POST endpoint handler."
      },
      {
        "id": 15,
        "question": "How do you extract URL route parameters in Express (e.g. `/users/:id`)?",
        "options": [
          "req.params.id",
          "req.query.id",
          "req.body.id",
          "req.headers.id"
        ],
        "correctAnswer": 0,
        "explanation": "Route parameters defined with `:param` are accessible in `req.params`."
      },
      {
        "id": 16,
        "question": "How do you extract URL query string parameters in Express (e.g. `/search?q=node`)?",
        "options": [
          "req.query.q",
          "req.params.q",
          "req.body.q",
          "req.data.q"
        ],
        "correctAnswer": 0,
        "explanation": "URL query parameters after `?` are accessible in `req.query`."
      },
      {
        "id": 17,
        "question": "How do you extract JSON body data sent in POST request in Express?",
        "options": [
          "req.body",
          "req.params",
          "req.query",
          "req.payload"
        ],
        "correctAnswer": 0,
        "explanation": "`req.body` contains parsed request body payload."
      },
      {
        "id": 18,
        "question": "Which HTTP response status code should be sent when a resource is created successfully?",
        "options": [
          "201 Created",
          "200 OK",
          "204 No Content",
          "400 Bad Request"
        ],
        "correctAnswer": 0,
        "explanation": "201 Created indicates successful resource creation."
      },
      {
        "id": 19,
        "question": "Which HTTP response status code indicates client sent bad/invalid request payload?",
        "options": [
          "400 Bad Request",
          "401 Unauthorized",
          "403 Forbidden",
          "404 Not Found"
        ],
        "correctAnswer": 0,
        "explanation": "400 Bad Request means server cannot process request due to client error."
      },
      {
        "id": 20,
        "question": "Which HTTP status code indicates request lacks valid authentication credentials?",
        "options": [
          "401 Unauthorized",
          "403 Forbidden",
          "404 Not Found",
          "500 Error"
        ],
        "correctAnswer": 0,
        "explanation": "401 Unauthorized means client must authenticate."
      },
      {
        "id": 21,
        "question": "Which HTTP status code indicates client is authenticated but lacks permission to access resource?",
        "options": [
          "403 Forbidden",
          "401 Unauthorized",
          "404 Not Found",
          "502 Bad Gateway"
        ],
        "correctAnswer": 0,
        "explanation": "403 Forbidden means client is authenticated but denied access."
      },
      {
        "id": 22,
        "question": "What does REST stand for in API design?",
        "options": [
          "Representational State Transfer",
          "Remote Execution System Technology",
          "Realtime Enterprise Storage Transfer",
          "Resource Encryption Standard Tool"
        ],
        "correctAnswer": 0,
        "explanation": "REST is architectural style for designing networked web APIs."
      },
      {
        "id": 23,
        "question": "Which of the following is NOT a RESTful API constraint?",
        "options": [
          "Stateful Session Server",
          "Statelessness",
          "Client-Server Architecture",
          "Cacheability"
        ],
        "correctAnswer": 0,
        "explanation": "REST APIs must be STATELESS; server should not store client session state between requests."
      },
      {
        "id": 24,
        "question": "What is JWT (JSON Web Token)?",
        "options": [
          "Stateless compact token used for securely transmitting information between parties as JSON object",
          "A database engine",
          "A CSS framework",
          "A Node module loader"
        ],
        "correctAnswer": 0,
        "explanation": "JWT is used for user authentication and authorization."
      },
      {
        "id": 25,
        "question": "Which three parts comprise a JWT string separated by dots?",
        "options": [
          "Header.Payload.Signature",
          "Key.Value.Secret",
          "Token.User.Hash",
          "ID.Role.Expire"
        ],
        "correctAnswer": 0,
        "explanation": "JWT format is `base64(Header).base64(Payload).Signature`."
      },
      {
        "id": 26,
        "question": "Where should JWT tokens typically be sent by client in secure HTTP requests?",
        "options": [
          "Authorization header (Bearer <token>)",
          "URL query string",
          "HTML title tag",
          "CSS stylesheet"
        ],
        "correctAnswer": 0,
        "explanation": "Standard convention is `Authorization: Bearer <token>` header."
      },
      {
        "id": 27,
        "question": "What is password hashing algorithm bcrypt used for?",
        "options": [
          "One-way cryptographic hashing of user passwords with salt",
          "Two-way encryption of images",
          "Compressing database logs",
          "Generating JWT tokens"
        ],
        "correctAnswer": 0,
        "explanation": "bcrypt safely hashes passwords with automatic salting to prevent rainbow table attacks."
      },
      {
        "id": 28,
        "question": "What is CORS (Cross-Origin Resource Sharing)?",
        "options": [
          "Browser security mechanism allowing server to explicitly permit cross-domain API requests",
          "Database backup tool",
          "CSS layout engine",
          "Node process manager"
        ],
        "correctAnswer": 0,
        "explanation": "CORS controls cross-domain HTTP requests from web browsers."
      },
      {
        "id": 29,
        "question": "Which npm package is commonly used in Express to enable CORS headers?",
        "options": [
          "cors",
          "helmet",
          "dotenv",
          "morgan"
        ],
        "correctAnswer": 0,
        "explanation": "The `cors` package provides middleware to handle CORS headers."
      },
      {
        "id": 30,
        "question": "Which npm package is used to load environment variables from `.env` file into `process.env`?",
        "options": [
          "dotenv",
          "env-loader",
          "config",
          "nodemon"
        ],
        "correctAnswer": 0,
        "explanation": "dotenv loads environment variables from `.env` file."
      },
      {
        "id": 31,
        "question": "Which npm package automatically restarts Node application when file changes are detected during development?",
        "options": [
          "nodemon / node --watch",
          "express",
          "pm2",
          "forever"
        ],
        "correctAnswer": 0,
        "explanation": "nodemon monitors source code and restarts process on change."
      },
      {
        "id": 32,
        "question": "What is Mongoose in Node.js / MongoDB environment?",
        "options": [
          "Object Data Modeling (ODM) library for MongoDB and Node.js",
          "SQL driver",
          "Web server",
          "Template engine"
        ],
        "correctAnswer": 0,
        "explanation": "Mongoose manages schema validation and database queries for MongoDB."
      },
      {
        "id": 33,
        "question": "In Mongoose, what is a Schema?",
        "options": [
          "Defines structure of document, default values, and validators",
          "A database backup file",
          "An Express route",
          "A JWT secret"
        ],
        "correctAnswer": 0,
        "explanation": "Mongoose Schema defines document properties and types."
      },
      {
        "id": 34,
        "question": "In Mongoose, what is a Model?",
        "options": [
          "Wrapper constructed from Schema providing interface to query, create, update MongoDB collections",
          "A JSON object",
          "An HTTP handler",
          "A CSS class"
        ],
        "correctAnswer": 0,
        "explanation": "Models are constructors compiled from Schema definitions."
      },
      {
        "id": 35,
        "question": "Which Mongoose method creates and saves a new document in MongoDB?",
        "options": [
          "Model.create() / doc.save()",
          "Model.insertRow()",
          "Model.append()",
          "Model.push()"
        ],
        "correctAnswer": 0,
        "explanation": "Model.create() or instantiating doc and calling `doc.save()` writes data to collection."
      },
      {
        "id": 36,
        "question": "Which Mongoose method finds documents matching a query condition?",
        "options": [
          "Model.find()",
          "Model.get()",
          "Model.select()",
          "Model.fetch()"
        ],
        "correctAnswer": 0,
        "explanation": "Model.find() returns array of documents matching query filter."
      },
      {
        "id": 37,
        "question": "Which Mongoose method finds a single document by its `_id`?",
        "options": [
          "Model.findById()",
          "Model.getOne()",
          "Model.searchId()",
          "Model.filterId()"
        ],
        "correctAnswer": 0,
        "explanation": "Model.findById(id) finds document by unique primary ObjectId."
      },
      {
        "id": 38,
        "question": "Which Mongoose method updates a single document matching filter?",
        "options": [
          "Model.updateOne() / Model.findOneAndUpdate()",
          "Model.change()",
          "Model.modify()",
          "Model.replace()"
        ],
        "correctAnswer": 0,
        "explanation": "updateOne or findOneAndUpdate modifies matching document."
      },
      {
        "id": 39,
        "question": "Which Mongoose method deletes a single document by condition?",
        "options": [
          "Model.deleteOne() / Model.findOneAndDelete()",
          "Model.removeRow()",
          "Model.drop()",
          "Model.truncate()"
        ],
        "correctAnswer": 0,
        "explanation": "deleteOne or findOneAndDelete removes matching document."
      },
      {
        "id": 40,
        "question": "What is Environment Variable `process.env.PORT` used for?",
        "options": [
          "Configuring server listening port dynamically from environment configuration",
          "Storing user passwords",
          "Defining database table names",
          "Setting CPU speed"
        ],
        "correctAnswer": 0,
        "explanation": "process.env.PORT allows deployment platforms (Heroku, Render) to assign listening port."
      },
      {
        "id": 41,
        "question": "What is the purpose of HTTP `Helmet` security middleware in Express?",
        "options": [
          "Secures Express apps by setting various HTTP security response headers",
          "Parses JSON body",
          "Logs requests to console",
          "Compresses HTTP responses"
        ],
        "correctAnswer": 0,
        "explanation": "Helmet sets security headers like X-Frame-Options, X-XSS-Protection, CSP."
      },
      {
        "id": 42,
        "question": "What is Rate Limiting in API backend?",
        "options": [
          "Limiting number of requests client can make to API within timeframe to prevent abuse/DDoS",
          "Limiting database size",
          "Slowing down CPU speed",
          "Limiting network bandwidth"
        ],
        "correctAnswer": 0,
        "explanation": "Rate limiting protects API endpoints against brute-force attacks and abuse."
      },
      {
        "id": 43,
        "question": "What is WebSocket protocol (ws:// or wss://)?",
        "options": [
          "Full-duplex persistent bidirectional communication protocol over single TCP connection",
          "Stateless HTTP request",
          "FTP file upload protocol",
          "Database query language"
        ],
        "correctAnswer": 0,
        "explanation": "WebSockets enable real-time two-way communication between client and server."
      },
      {
        "id": 44,
        "question": "Which npm library is popular for real-time WebSocket communication in Node.js?",
        "options": [
          "socket.io / ws",
          "axios",
          "fetch",
          "express"
        ],
        "correctAnswer": 0,
        "explanation": "socket.io enables real-time event-based communication."
      },
      {
        "id": 45,
        "question": "What is Connection Pooling in database backend?",
        "options": [
          "Maintaining cache of reusable database connections to avoid connection overhead",
          "Connecting two databases",
          "Deleting idle tables",
          "Syncing files"
        ],
        "correctAnswer": 0,
        "explanation": "Connection pool reuses active database connections to optimize performance."
      },
      {
        "id": 46,
        "question": "What is SQL Injection attack?",
        "options": [
          "Attacker injects malicious SQL code into input fields to manipulate backend queries",
          "Stealing CSS styles",
          "Crashing browser tab",
          "Sending 1000 emails"
        ],
        "correctAnswer": 0,
        "explanation": "SQL Injection occurs when untrusted user input is concatenated directly into SQL queries."
      },
      {
        "id": 47,
        "question": "How do you prevent SQL Injection attacks in backend code?",
        "options": [
          "Using parameterized queries / prepared statements / ORM",
          "Encrypting database disk",
          "Using GET requests only",
          "Removing JavaScript"
        ],
        "correctAnswer": 0,
        "explanation": "Parameterized queries separate SQL code from input data, neutralizing injection."
      },
      {
        "id": 48,
        "question": "What is XSS (Cross-Site Scripting)?",
        "options": [
          "Vulnerability where attacker injects malicious client-side scripts into web pages viewed by others",
          "Database crash",
          "Server power outage",
          "CSS layout bug"
        ],
        "correctAnswer": 0,
        "explanation": "XSS occurs when untrusted input is rendered in browser without sanitization."
      },
      {
        "id": 49,
        "question": "How do you prevent XSS attacks in backend/frontend application?",
        "options": [
          "Sanitizing and escaping user input before rendering in DOM",
          "Using HTTP 500 error code",
          "Disabling CSS",
          "Encrypting database"
        ],
        "correctAnswer": 0,
        "explanation": "Input sanitization and output encoding prevent execution of injected scripts."
      },
      {
        "id": 50,
        "question": "What is CSRF (Cross-Site Request Forgery)?",
        "options": [
          "Attack that forces authenticated user to execute unwanted actions on web app in which they are logged in",
          "Brute forcing password",
          "SQL injection",
          "Server memory overflow"
        ],
        "correctAnswer": 0,
        "explanation": "CSRF tricks victim's browser into sending unauthorized requests using cached auth cookies."
      }
    ]
  },
  {
    "id": "ai_ml",
    "title": "Machine Learning & AI",
    "semester": "Semester 5",
    "icon": "\ud83e\udd16",
    "category": "AI & ML",
    "description": "Supervised & unsupervised learning, classification, linear regression, neural networks, and evaluation metrics.",
    "questions": [
      {
        "id": 1,
        "question": "What is Machine Learning?",
        "options": [
          "Field of study giving computers ability to learn from data without being explicitly programmed",
          "Writing static if-else statements",
          "Hardware assembly of PCs",
          "Web page layout design"
        ],
        "correctAnswer": 0,
        "explanation": "ML algorithms build mathematical models based on sample data to make predictions."
      },
      {
        "id": 2,
        "question": "Which type of Machine Learning uses LABELED training data?",
        "options": [
          "Supervised Learning",
          "Unsupervised Learning",
          "Reinforcement Learning",
          "Clustering"
        ],
        "correctAnswer": 0,
        "explanation": "Supervised learning maps input features to target labels using labeled data."
      },
      {
        "id": 3,
        "question": "Which type of Machine Learning finds hidden patterns/clusters in UNLABELED data?",
        "options": [
          "Unsupervised Learning",
          "Supervised Learning",
          "Reinforcement Learning",
          "Classification"
        ],
        "correctAnswer": 0,
        "explanation": "Unsupervised learning discovers intrinsic structures in unlabeled datasets."
      },
      {
        "id": 4,
        "question": "Which type of Machine Learning learns optimal actions through trial-and-error rewards and penalties?",
        "options": [
          "Reinforcement Learning",
          "Supervised Learning",
          "Unsupervised Learning",
          "Regression"
        ],
        "correctAnswer": 0,
        "explanation": "Reinforcement Learning agents learn behavior policies via environmental feedback."
      },
      {
        "id": 5,
        "question": "Which task predicts a CONTINUOUS numeric output value (e.g. house prices)?",
        "options": [
          "Regression",
          "Classification",
          "Clustering",
          "Dimensionality Reduction"
        ],
        "correctAnswer": 0,
        "explanation": "Regression predicts continuous real-valued targets."
      },
      {
        "id": 6,
        "question": "Which task predicts a DISCRETE category label (e.g. Spam vs Not Spam)?",
        "options": [
          "Classification",
          "Regression",
          "Clustering",
          "Association Rules"
        ],
        "correctAnswer": 0,
        "explanation": "Classification assigns inputs into discrete category classes."
      },
      {
        "id": 7,
        "question": "Which of the following is a Linear Regression equation?",
        "options": [
          "y = mx + b",
          "y = sigmoid(x)",
          "y = log(x)",
          "y = e^x"
        ],
        "correctAnswer": 0,
        "explanation": "Linear regression models linear relationship between feature x and target y."
      },
      {
        "id": 8,
        "question": "Which algorithm is commonly used for binary classification outputting probabilities between 0 and 1?",
        "options": [
          "Logistic Regression",
          "Linear Regression",
          "K-Means",
          "PCA"
        ],
        "correctAnswer": 0,
        "explanation": "Logistic regression uses sigmoid function to output class probabilities."
      },
      {
        "id": 9,
        "question": "What function maps any real-valued number into a range between 0 and 1?",
        "options": [
          "Sigmoid / Logistic Function",
          "ReLU",
          "Tanh",
          "Step Function"
        ],
        "correctAnswer": 0,
        "explanation": "Sigmoid function 1 / (1 + e^-z) bounds output between 0 and 1."
      },
      {
        "id": 10,
        "question": "What is K-Means?",
        "options": [
          "Unsupervised clustering algorithm that partitions data into K clusters",
          "Supervised classification tree",
          "Neural network activation",
          "Regression loss function"
        ],
        "correctAnswer": 0,
        "explanation": "K-Means groups data into K clusters by minimizing distance to cluster centroids."
      },
      {
        "id": 11,
        "question": "What is K-Nearest Neighbors (KNN)?",
        "options": [
          "Instance-based non-parametric algorithm classifying data based on majority vote of K nearest neighbors",
          "Deep neural network",
          "Clustering algorithm",
          "Linear regression model"
        ],
        "correctAnswer": 0,
        "explanation": "KNN classifies new data points based on proximity to nearest labeled neighbors."
      },
      {
        "id": 12,
        "question": "What is Decision Tree algorithm?",
        "options": [
          "Supervised model that splits data recursively based on feature decisions creating tree structure",
          "Unsupervised clustering",
          "Neural network optimizer",
          "Dimensionality reduction"
        ],
        "correctAnswer": 0,
        "explanation": "Decision Tree splits dataset into subsets based on feature threshold criteria."
      },
      {
        "id": 13,
        "question": "Which metric measures impurity in Decision Trees?",
        "options": [
          "Gini Impurity / Entropy (Information Gain)",
          "Mean Squared Error",
          "Precision",
          "Cosine Distance"
        ],
        "correctAnswer": 0,
        "explanation": "Gini Impurity and Entropy measure disorder/heterogeneity of node classes."
      },
      {
        "id": 14,
        "question": "What is a Random Forest?",
        "options": [
          "Ensemble learning method operating by constructing multitude of decision trees at training time",
          "Single decision tree",
          "Linear regression model",
          "Neural network layer"
        ],
        "correctAnswer": 0,
        "explanation": "Random Forest combines predictions of multiple decision trees (bagging)."
      },
      {
        "id": 15,
        "question": "What is Support Vector Machine (SVM)?",
        "options": [
          "Supervised algorithm that finds hyper-plane maximizing margin between classes",
          "Clustering method",
          "Neural net optimizer",
          "Decision tree"
        ],
        "correctAnswer": 0,
        "explanation": "SVM finds optimal decision boundary (hyperplane) with maximum margin."
      },
      {
        "id": 16,
        "question": "What is Kernel Trick in SVM?",
        "options": [
          "Transforming data into higher-dimensional space to make non-linearly separable data linearly separable",
          "A trick to speed up CPU",
          "A data cleaning step",
          "A neural activation"
        ],
        "correctAnswer": 0,
        "explanation": "Kernel functions compute inner products in high-dimensional feature space implicitly."
      },
      {
        "id": 17,
        "question": "What is Overfitting in Machine Learning?",
        "options": [
          "Model performs exceptionally well on training data but poorly on unseen test data",
          "Model performs poorly on both training and test data",
          "Model trains in under 1 second",
          "Model has no parameters"
        ],
        "correctAnswer": 0,
        "explanation": "Overfitting means model memorized training noise rather than generalizable pattern."
      },
      {
        "id": 18,
        "question": "What is Underfitting in Machine Learning?",
        "options": [
          "Model is too simple to capture underlying trend of training data",
          "Model performs 100% on test data",
          "Model has too many parameters",
          "Model memorized data"
        ],
        "correctAnswer": 0,
        "explanation": "Underfitting occurs when algorithm cannot learn patterns from training set."
      },
      {
        "id": 19,
        "question": "How do you detect Overfitting during training?",
        "options": [
          "High training accuracy but significantly lower validation/test accuracy",
          "Low training accuracy",
          "Equal training and validation accuracy",
          "Fast training speed"
        ],
        "correctAnswer": 0,
        "explanation": "Large gap between high train performance and low validation performance indicates overfitting."
      },
      {
        "id": 20,
        "question": "What is Bias-Variance Tradeoff?",
        "options": [
          "Conflict between minimizing model underfitting (bias) and sensitivity to data fluctuations (variance)",
          "Tradeoff between CPU and RAM",
          "Tradeoff between speed and accuracy",
          "Tradeoff between disk and network"
        ],
        "correctAnswer": 0,
        "explanation": "High bias leads to underfitting; high variance leads to overfitting."
      },
      {
        "id": 21,
        "question": "Which technique is used to prevent Overfitting by penalizing large parameter weights?",
        "options": [
          "Regularization (L1 Lasso / L2 Ridge)",
          "Gradient Descent",
          "Data Imputation",
          "Feature Scaling"
        ],
        "correctAnswer": 0,
        "explanation": "Regularization adds penalty term (L1/L2) to loss function to keep weights small."
      },
      {
        "id": 22,
        "question": "What is L1 Regularization (Lasso)?",
        "options": [
          "Adds absolute value of coefficients to loss function, driving redundant feature weights to zero",
          "Adds squared coefficients",
          "Multiplies weights by 2",
          "Removes dataset rows"
        ],
        "correctAnswer": 0,
        "explanation": "L1 regularization performs feature selection by driving irrelevant feature weights to exactly 0."
      },
      {
        "id": 23,
        "question": "What is L2 Regularization (Ridge)?",
        "options": [
          "Adds squared magnitude of coefficients to loss function, shrinking weights evenly",
          "Adds absolute value",
          "Sets weights to zero",
          "Increases learning rate"
        ],
        "correctAnswer": 0,
        "explanation": "L2 regularization prevents any single feature from dominating by shrinking weights smoothly."
      },
      {
        "id": 24,
        "question": "What is Cross-Validation (e.g. K-Fold Cross-Validation)?",
        "options": [
          "Resampling technique evaluating model performance across K distinct folds of dataset",
          "Splitting data into 2 parts",
          "Training model K times on full data",
          "Testing model on training set"
        ],
        "correctAnswer": 0,
        "explanation": "K-Fold cross-validation splits data into K subsets to validate generalization stability."
      },
      {
        "id": 25,
        "question": "What is Data Preprocessing scaling technique `Min-Max Scaling`?",
        "options": [
          "Rescales features to fixed range [0, 1]",
          "Transforms features to mean=0, std=1",
          "Removes outliers",
          "Converts categorical strings"
        ],
        "correctAnswer": 0,
        "explanation": "Min-Max scaling formula: (x - min) / (max - min)."
      },
      {
        "id": 26,
        "question": "What is `Standardization` (Z-score normalization)?",
        "options": [
          "Rescales features to have Mean = 0 and Standard Deviation = 1",
          "Rescales to [0, 1]",
          "Converts text to numbers",
          "Fills missing values"
        ],
        "correctAnswer": 0,
        "explanation": "Standardization formula: (x - mean) / std."
      },
      {
        "id": 27,
        "question": "What is One-Hot Encoding?",
        "options": [
          "Converting categorical text variables into binary (0/1) indicator columns",
          "Normalizing numbers",
          "Removing duplicate rows",
          "Grouping continuous data"
        ],
        "correctAnswer": 0,
        "explanation": "One-Hot encoding represents nominal categories as binary vectors."
      },
      {
        "id": 28,
        "question": "What is Confusion Matrix?",
        "options": [
          "Tabular summary of prediction results showing True Positives, True Negatives, False Positives, False Negatives",
          "A mathematical error",
          "A matrix of feature weights",
          "A neural layer"
        ],
        "correctAnswer": 0,
        "explanation": "Confusion Matrix evaluates classification model performance metrics."
      },
      {
        "id": 29,
        "question": "What is Accuracy metric in classification?",
        "options": [
          "Ratio of correct predictions (TP + TN) to total predictions",
          "TP / (TP + FP)",
          "TP / (TP + FN)",
          "FP / TN"
        ],
        "correctAnswer": 0,
        "explanation": "Accuracy = (True Positives + True Negatives) / Total Samples."
      },
      {
        "id": 30,
        "question": "What is Precision metric?",
        "options": [
          "TP / (TP + FP) \u2014 proportion of positive identifications that were actually correct",
          "TP / (TP + FN)",
          "TN / (TN + FP)",
          "Accuracy"
        ],
        "correctAnswer": 0,
        "explanation": "Precision measures exactness: how many predicted positives are true positives."
      },
      {
        "id": 31,
        "question": "What is Recall (Sensitivity) metric?",
        "options": [
          "TP / (TP + FN) \u2014 proportion of actual positives that were identified correctly",
          "TP / (TP + FP)",
          "TN / (TN + FP)",
          "Precision"
        ],
        "correctAnswer": 0,
        "explanation": "Recall measures completeness: how many actual positive cases were caught."
      },
      {
        "id": 32,
        "question": "What is F1-Score?",
        "options": [
          "Harmonic mean of Precision and Recall: 2 * (P * R) / (P + R)",
          "Arithmetic mean of Precision and Recall",
          "Accuracy * Precision",
          "Recall / Precision"
        ],
        "correctAnswer": 0,
        "explanation": "F1-Score balances Precision and Recall, especially for imbalanced datasets."
      },
      {
        "id": 33,
        "question": "What is ROC Curve (Receiver Operating Characteristic)?",
        "options": [
          "Plot of True Positive Rate vs False Positive Rate at various classification thresholds",
          "Plot of loss vs epochs",
          "Feature importance graph",
          "Tree diagram"
        ],
        "correctAnswer": 0,
        "explanation": "ROC curve illustrates diagnostic ability of binary classifier across thresholds."
      },
      {
        "id": 34,
        "question": "What does Area Under the ROC Curve (AUC-ROC) score of 1.0 indicate?",
        "options": [
          "Perfect classifier",
          "Random guessing classifier",
          "Worst possible classifier",
          "Overfitted model"
        ],
        "correctAnswer": 0,
        "explanation": "AUC = 1.0 represents a flawless classification performance."
      },
      {
        "id": 35,
        "question": "What is Mean Squared Error (MSE) in regression evaluation?",
        "options": [
          "Average of squared differences between predicted values and actual targets",
          "Average absolute error",
          "Percentage error",
          "Accuracy score"
        ],
        "correctAnswer": 0,
        "explanation": "MSE measures average squared prediction residual magnitude."
      },
      {
        "id": 36,
        "question": "What is Root Mean Squared Error (RMSE)?",
        "options": [
          "Square root of Mean Squared Error, expressed in same units as target variable",
          "Square of MSE",
          "Absolute error",
          "R2 score"
        ],
        "correctAnswer": 0,
        "explanation": "RMSE brings error metric back to original scale of target values."
      },
      {
        "id": 37,
        "question": "What is R-squared (R\u00b2) metric in regression?",
        "options": [
          "Proportion of variance in target variable predictable from features (0 to 1)",
          "MSE ratio",
          "Accuracy percentage",
          "Error count"
        ],
        "correctAnswer": 0,
        "explanation": "R\u00b2 (Coefficient of Determination) measures goodness of fit."
      },
      {
        "id": 38,
        "question": "What is Gradient Descent?",
        "options": [
          "Optimization algorithm iteratively adjusting model parameters to minimize loss function",
          "Classification algorithm",
          "Clustering method",
          "Feature scaling technique"
        ],
        "correctAnswer": 0,
        "explanation": "Gradient Descent steps parameters in direction opposite to loss gradient."
      },
      {
        "id": 39,
        "question": "What is Learning Rate (alpha) in Gradient Descent?",
        "options": [
          "Hyperparameter controlling step size taken toward loss minimum at each iteration",
          "Number of training epochs",
          "Number of features",
          "Model accuracy"
        ],
        "correctAnswer": 0,
        "explanation": "Learning rate dictates size of parameter update steps."
      },
      {
        "id": 40,
        "question": "What happens if Learning Rate (alpha) is set TOO HIGH?",
        "options": [
          "Gradient Descent may overshoot minimum and diverge",
          "Training becomes extremely slow",
          "Model underfits",
          "Memory runs out"
        ],
        "correctAnswer": 0,
        "explanation": "Too high learning rate causes parameter updates to oscillate or diverge."
      },
      {
        "id": 41,
        "question": "What happens if Learning Rate (alpha) is set TOO LOW?",
        "options": [
          "Gradient Descent takes very small steps making training extremely slow",
          "Model overshoots",
          "Loss explodes",
          "Accuracy drops instantly"
        ],
        "correctAnswer": 0,
        "explanation": "Too low learning rate requires excessive epochs to converge."
      },
      {
        "id": 42,
        "question": "What is Stochastic Gradient Descent (SGD)?",
        "options": [
          "Gradient Descent variant updating parameters using single random sample per iteration",
          "Updating parameters on full dataset",
          "Updating on mini-batches",
          "Grid search"
        ],
        "correctAnswer": 0,
        "explanation": "SGD computes loss gradient on individual samples for fast, stochastic updates."
      },
      {
        "id": 43,
        "question": "What is an Artificial Neural Network (ANN)?",
        "options": [
          "Computing system inspired by biological neural networks consisting of connected layers of nodes (neurons)",
          "SQL database",
          "Decision tree forest",
          "Linear regression equation"
        ],
        "correctAnswer": 0,
        "explanation": "ANNs consist of input, hidden, and output layers of interconnected artificial neurons."
      },
      {
        "id": 44,
        "question": "What is Activation Function in Neural Networks?",
        "options": [
          "Non-linear function applied to neuron's weighted sum input to enable learning complex patterns",
          "Loss function",
          "Optimizer",
          "Input scaling"
        ],
        "correctAnswer": 0,
        "explanation": "Activation functions introduce non-linearity so networks can learn non-linear relationships."
      },
      {
        "id": 45,
        "question": "Which Activation Function outputs max(0, x)?",
        "options": [
          "ReLU (Rectified Linear Unit)",
          "Sigmoid",
          "Tanh",
          "Softmax"
        ],
        "correctAnswer": 0,
        "explanation": "ReLU sets negative values to 0 and passes positive values through unchanged."
      },
      {
        "id": 46,
        "question": "Which Activation Function is used in multi-class classification output layer to generate probability distribution?",
        "options": [
          "Softmax",
          "Sigmoid",
          "ReLU",
          "Tanh"
        ],
        "correctAnswer": 0,
        "explanation": "Softmax normalizes real-valued vector into probability distribution summing to 1."
      },
      {
        "id": 47,
        "question": "What is Backpropagation in Neural Networks?",
        "options": [
          "Algorithm computing gradient of loss function with respect to each weight using chain rule to update weights",
          "Forward pass calculation",
          "Data loading step",
          "Network initialization"
        ],
        "correctAnswer": 0,
        "explanation": "Backpropagation calculates partial derivatives backward through network layers."
      },
      {
        "id": 48,
        "question": "What is Epoch in Neural Network training?",
        "options": [
          "One complete pass of entire training dataset through neural network",
          "Processing a single batch",
          "Updating one weight",
          "One second of runtime"
        ],
        "correctAnswer": 0,
        "explanation": "An epoch means every training sample has been processed once by network."
      },
      {
        "id": 49,
        "question": "What is Batch Size in deep learning?",
        "options": [
          "Number of training samples processed in one forward/backward pass before updating weights",
          "Total dataset size",
          "Number of layers",
          "Number of output classes"
        ],
        "correctAnswer": 0,
        "explanation": "Batch size defines number of samples evaluated before weight update."
      },
      {
        "id": 50,
        "question": "What is Principal Component Analysis (PCA)?",
        "options": [
          "Unsupervised linear dimensionality reduction technique projecting data onto orthogonal components maximizing variance",
          "Supervised classification algorithm",
          "Neural network optimizer",
          "Clustering method"
        ],
        "correctAnswer": 0,
        "explanation": "PCA projects high-dimensional data onto lower-dimensional subspace while retaining maximum variance."
      }
    ]
  }
];
