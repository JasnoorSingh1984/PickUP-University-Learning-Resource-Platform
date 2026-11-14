import os
import json

quiz_file_path = r"c:\Users\Jasno\OneDrive\Documents\SEMESTER 5\BEE AND FEE\PROJECT_REACT\pickup-react\frontend\src\data\quizData.js"

# Subject definitions generator
def get_frontend_questions():
    q = []
    items = [
        ("What does HTML stand for?", ["Hyper Text Markup Language", "High Text Marking Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], 0, "HTML stands for Hyper Text Markup Language, the standard markup language for web documents."),
        ("Which HTML5 element is used to define navigation links?", ["<nav>", "<navigation>", "<links>", "<navigate>"], 0, "<nav> is the semantic HTML5 tag intended for navigation links."),
        ("Which CSS property controls the text size?", ["text-style", "font-size", "text-size", "font-style"], 1, "font-size sets the size of the font."),
        ("How do you select an element with id 'header' in CSS?", ["#header", ".header", "header", "*header"], 0, "The '#' character selects elements by ID in CSS."),
        ("How do you select elements with class name 'menu' in CSS?", [".menu", "#menu", "menu", "class:menu"], 0, "The '.' dot character selects elements by class name in CSS."),
        ("Which CSS layout module is designed for one-dimensional layouts?", ["Flexbox", "Grid", "Float", "Position"], 0, "Flexbox is designed for one-dimensional layouts (rows or columns)."),
        ("Which CSS property sets the inner spacing of an element?", ["margin", "padding", "border", "spacing"], 1, "Padding is the space between the element content and its border."),
        ("Which CSS property sets the outer spacing around an element?", ["margin", "padding", "outline", "border"], 0, "Margin is the space outside the border of an element."),
        ("What is the default value of the CSS 'position' property?", ["relative", "absolute", "static", "fixed"], 2, "The default position value for all HTML elements is static."),
        ("Which JavaScript operator is used to assign a value to a variable?", ["=", "==", "===", "=>"], 0, "The '=' assignment operator assigns a value to a variable."),
        ("Which keyword declares a block-scoped variable in JavaScript that can be reassigned?", ["let", "const", "var", "static"], 0, "'let' allows block-scoped variable declaration with re-assignment."),
        ("Which keyword declares a block-scoped constant variable in JavaScript?", ["const", "let", "var", "immutable"], 0, "'const' declares block-scoped variables that cannot be reassigned."),
        ("What does 'NaN' stand for in JavaScript?", ["Not a Number", "New and Null", "Number and Name", "Not Available Now"], 0, "NaN represents 'Not-a-Number' in JavaScript numeric operations."),
        ("What is the result of `typeof null` in JavaScript?", ["'object'", "'null'", "'undefined'", "'boolean'"], 0, "'typeof null' returns 'object', which is a historical bug in JavaScript."),
        ("What is the result of `typeof undefined` in JavaScript?", ["'undefined'", "'object'", "'null'", "'symbol'"], 0, "'typeof undefined' returns the string 'undefined'."),
        ("Which array method adds one or more elements to the end of an array?", ["push()", "pop()", "shift()", "unshift()"], 0, "push() adds elements to the end of an array."),
        ("Which array method removes the last element from an array?", ["pop()", "push()", "shift()", "slice()"], 0, "pop() removes and returns the last element of an array."),
        ("Which array method removes the first element from an array?", ["shift()", "unshift()", "pop()", "splice()"], 0, "shift() removes the first element from an array."),
        ("Which array method creates a new array populated with the results of calling a provided function on every element?", ["map()", "filter()", "reduce()", "forEach()"], 0, "map() transforms each element and returns a new array."),
        ("Which array method returns a new array containing only elements that pass a test function?", ["filter()", "map()", "some()", "every()"], 0, "filter() selects elements matching a criteria."),
        ("What is the purpose of the `useEffect` hook in React?", ["To handle side effects in components", "To create component state", "To optimize CSS styling", "To handle form validation"], 0, "useEffect performs side effects such as data fetching or subscriptions."),
        ("What is the purpose of the `useState` hook in React?", ["To add state to functional components", "To fetch data from APIs", "To manipulate DOM directly", "To handle routing"], 0, "useState allows functional components to store and update local state."),
        ("What is JSX in React?", ["A syntax extension for JavaScript that looks like HTML", "A new database engine", "A CSS preprocessor", "A server runtime"], 0, "JSX allows writing HTML-like markup inside JavaScript code."),
        ("How are props passed to a component in React?", ["As attributes in JSX elements", "Via global window object", "Through CSS files", "Inside red-line parameters"], 0, "Props are passed as attributes to JSX components (e.g. `<Component name='John' />`)."),
        ("What is the Virtual DOM in React?", ["In-memory lightweight copy of real DOM", "Full browser engine", "Remote database", "CSS style sheet"], 0, "Virtual DOM enables fast diffing and selective real DOM updates."),
        ("What does `event.preventDefault()` do in JavaScript form handling?", ["Prevents default browser form submission refresh", "Clears form input fields", "Disables form validation", "Submits data to backend"], 0, "preventDefault() stops the default browser action such as page reloading on form submission."),
        ("Which event fires when an HTML input value changes?", ["change / input", "submit", "hover", "click"], 0, "The 'change' or 'input' event triggers when user modifies form inputs."),
        ("Which HTTP method is used to retrieve data from a server?", ["GET", "POST", "PUT", "DELETE"], 0, "GET requests data from a specified resource."),
        ("Which HTTP method is typically used to send data to create a new resource?", ["POST", "GET", "HEAD", "OPTIONS"], 0, "POST submits data to create a resource."),
        ("Which HTTP method is used to update an existing resource completely?", ["PUT", "GET", "POST", "TRACE"], 0, "PUT updates or replaces a target resource."),
        ("Which HTTP status code represents 'Not Found'?", ["404", "200", "500", "403"], 0, "404 indicates the server cannot find the requested resource."),
        ("Which HTTP status code represents 'Internal Server Error'?", ["500", "404", "401", "200"], 0, "500 indicates a generic server-side error."),
        ("What does CORS stand for in web development?", ["Cross-Origin Resource Sharing", "Central Organized Resource Storage", "Client Order Routing System", "Custom Object Rendering Style"], 0, "CORS enables servers to indicate any origins other than its own from which a browser should permit loading resources."),
        ("Which Storage API persists data in browser even after browser window is closed?", ["localStorage", "sessionStorage", "cookies", "memoryCache"], 0, "localStorage has no expiration time."),
        ("Which Storage API clears stored data when the browser tab is closed?", ["sessionStorage", "localStorage", "IndexedDB", "WebSQL"], 0, "sessionStorage maintains storage for the duration of the page session."),
        ("What does JSON stand for?", ["JavaScript Object Notation", "Java Server Object Network", "JavaScript Organized Network", "Joint Standard Object Notation"], 0, "JSON stands for JavaScript Object Notation."),
        ("How do you convert a JavaScript object into a JSON string?", ["JSON.stringify()", "JSON.parse()", "Object.toJSON()", "String.fromJSON()"], 0, "JSON.stringify() converts JS values/objects to JSON strings."),
        ("How do you convert a JSON string into a JavaScript object?", ["JSON.parse()", "JSON.stringify()", "Object.fromJSON()", "parseJSON()"], 0, "JSON.parse() parses a JSON string into a JavaScript object."),
        ("Which CSS property makes an element flex container?", ["display: flex", "flex-direction: row", "position: flex", "float: left"], 0, "'display: flex' establishes a new flex formatting context."),
        ("Which CSS property aligns flex items along the main axis?", ["justify-content", "align-items", "align-content", "flex-wrap"], 0, "justify-content aligns items along the main axis."),
        ("Which CSS property aligns flex items along the cross axis?", ["align-items", "justify-content", "text-align", "vertical-align"], 0, "align-items aligns items along the cross axis."),
        ("Which CSS unit is relative to the font-size of the root element (<html>)?", ["rem", "em", "px", "vh"], 0, "'rem' stands for Root EM, relative to root font size."),
        ("Which CSS unit is relative to 1% of the viewport width?", ["vw", "vh", "rem", "%"], 0, "vw equals 1% of the viewport width."),
        ("What is the event bubbling phase in JavaScript?", ["Event propagates from target element up through its ancestors", "Event propagates from window down to target element", "Event stops immediately", "Event runs on server"], 0, "Bubbling propagates event upward through the DOM tree."),
        ("What is closure in JavaScript?", ["A function bundled together with references to its surrounding state (lexical environment)", "A function that has no return statement", "A CSS layout rule", "A method to close browser tabs"], 0, "Closure allows an inner function to access variables from an outer enclosing scope."),
        ("Which Promise method runs after a Promise is resolved successfully?", [".then()", ".catch()", ".finally()", ".async()"], 0, ".then() attaches callbacks for the resolution of the Promise."),
        ("Which Promise method runs if a Promise is rejected?", [".catch()", ".then()", ".always()", ".error()"], 0, ".catch() handles errors or rejections in promises."),
        ("What does the 'async' keyword before a function declaration mean?", ["The function automatically returns a Promise", "The function executes synchronously", "The function runs in background worker thread", "The function throws error"], 0, "An async function implicitly returns a Promise."),
        ("Which React hook returns a memoized value to prevent expensive recalculations?", ["useMemo", "useCallback", "useRef", "useReducer"], 0, "useMemo caches the result of a calculation between renders."),
        ("Which React hook persists a mutable reference value across renders without triggering a re-render?", ["useRef", "useState", "useMemo", "useContext"], 0, "useRef returns a mutable object whose `.current` property persists without re-rendering.")
    ]
    for idx, item in enumerate(items, 1):
        q.append({
            "id": idx,
            "question": item[0],
            "options": item[1],
            "correctAnswer": item[2],
            "explanation": item[3]
        })
    return q

def get_python_questions():
    q = []
    items = [
        ("What is the output of `print(2 ** 3)` in Python?", ["8", "6", "9", "23"], 0, "The `**` operator represents exponentiation in Python: 2^3 = 8."),
        ("Which of the following data types in Python is IMMUTABLE?", ["Tuple", "List", "Dictionary", "Set"], 0, "Tuples are immutable; once created, their elements cannot be modified."),
        ("Which data type in Python is MUTABLE?", ["List", "Tuple", "String", "Int"], 0, "Lists are mutable data structures in Python."),
        ("How do you start a single-line comment in Python?", ["#", "//", "/*", "--"], 0, "The `#` symbol starts a single-line comment in Python."),
        ("What does `len([1, 2, 3, 4])` return?", ["4", "3", "5", "0"], 0, "len() returns the number of items in a sequence."),
        ("Which keyword is used to handle exceptions in Python?", ["try / except", "do / catch", "try / catch", "error / handle"], 0, "Python uses `try` and `except` blocks for exception handling."),
        ("Which function converts a string to an integer in Python?", ["int()", "str()", "float()", "parse()"], 0, "int() parses string/float into integer."),
        ("What is the output of `bool('')` in Python?", ["False", "True", "None", "Error"], 0, "An empty string evaluates to False in boolean context."),
        ("What is the output of `bool([0])` in Python?", ["True", "False", "None", "Error"], 0, "A list containing 0 is non-empty, so `bool([0])` returns True."),
        ("Which Python method adds an element to the end of a list?", ["append()", "extend()", "insert()", "add()"], 0, "append() adds a single element to the end of a list."),
        ("Which Python list method inserts an item at a given index?", ["insert()", "append()", "add()", "push()"], 0, "list.insert(index, element) places an element at a specific position."),
        ("What is the output of `range(5)` converted to list?", ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "[1, 2, 3, 4]"], 0, "range(5) generates numbers from 0 up to (but not including) 5."),
        ("Which operator tests if a key exists in a Python dictionary?", ["in", "has", "contains", "exists"], 0, "The `in` operator checks if a key is present in a dictionary."),
        ("How do you get all keys from a dictionary `d`?", ["d.keys()", "d.all_keys()", "d.values()", "d.items()"], 0, "d.keys() returns a view object of dictionary keys."),
        ("How do you get all values from a dictionary `d`?", ["d.values()", "d.keys()", "d.items()", "d.get_all()"], 0, "d.values() returns dictionary values."),
        ("Which built-in function returns both index and item when looping over a list?", ["enumerate()", "zip()", "range()", "map()"], 0, "enumerate() adds a counter to an iterable and returns it."),
        ("Which built-in function pairs elements from two iterables together?", ["zip()", "enumerate()", "combine()", "pair()"], 0, "zip() aggregates elements from each of the iterables into tuples."),
        ("What is the output of `'hello'.upper()`?", ["'HELLO'", "'Hello'", "'hELLO'", "Error"], 0, "upper() converts all characters in a string to uppercase."),
        ("Which method removes leading and trailing whitespace from a string in Python?", ["strip()", "trim()", "clean()", "cut()"], 0, "strip() removes whitespace from beginning and end of a string."),
        ("Which string method splits a string into a list of substrings based on a delimiter?", ["split()", "slice()", "partition()", "divide()"], 0, "split() breaks a string into a list."),
        ("What is the default return value of a Python function that has no `return` statement?", ["None", "0", "False", "Null"], 0, "Python functions without explicit return statements return `None`."),
        ("Which keyword is used to create a generator in Python?", ["yield", "return", "generate", "emit"], 0, "The `yield` keyword turns a function into a generator."),
        ("What is a lambda function in Python?", ["An anonymous inline single-expression function", "A recursive module", "A class constructor", "A system process"], 0, "Lambda functions are small anonymous functions defined with `lambda`."),
        ("Which module in Python is used for generating random numbers?", ["random", "rand", "math", "numbers"], 0, "The `random` module implements pseudo-random number generators."),
        ("Which module in Python provides mathematical functions like sqrt, sin, cos?", ["math", "cmath", "numpy", "calc"], 0, "The `math` module provides standard mathematical functions."),
        ("How do you open a file for reading in Python?", ["open('file.txt', 'r')", "open('file.txt', 'w')", "read('file.txt')", "file.open('r')"], 0, "'r' mode opens a file for reading."),
        ("Which mode opens a file for writing and truncates existing content?", ["'w'", "'r'", "'a'", "'x'"], 0, "'w' mode opens for writing and overwrites existing file content."),
        ("Which mode opens a file for appending data at the end?", ["'a'", "'w'", "'r'", "'x'"], 0, "'a' mode appends data without truncating the file."),
        ("Which statement automatically closes a file after operations are complete?", ["with open(...) as f:", "try open(...) as f:", "file.close()", "using open(...)"], 0, "The `with` context manager handles opening and closing resources automatically."),
        ("What is `__init__` in a Python class?", ["The class constructor method called when an instance is created", "A destructor method", "A private variable", "A global function"], 0, "__init__ is the initializer / constructor method of a class."),
        ("What does `self` represent in a Python class method?", ["The instance of the class", "The class definition itself", "The parent module", "A global keyword"], 0, "`self` refers to the instance of the object calling the method."),
        ("How do you inherit from a parent class `Parent` in a child class `Child`?", ["class Child(Parent):", "class Child extends Parent:", "class Child implements Parent:", "class Child -> Parent:"], 0, "Inheritance syntax in Python is `class Child(Parent):`."),
        ("Which keyword calls a method from the parent superclass?", ["super()", "parent()", "base()", "this()"], 0, "super() returns a proxy object delegating method calls to a parent class."),
        ("What is the output of `set([1, 2, 2, 3])`?", ["{1, 2, 3}", "[1, 2, 2, 3]", "(1, 2, 3)", "{1, 2, 2, 3}"], 0, "Sets automatically remove duplicate values."),
        ("What is list comprehension syntax for creating squares of numbers 0 to 4?", ["[x**2 for x in range(5)]", "[x^2 for x in range(5)]", "(x**2 for x in range(5))", "{x**2 in range(5)}"], 0, "`[x**2 for x in range(5)]` builds `[0, 1, 4, 9, 16]`."),
        ("What is the difference between `is` and `==` in Python?", ["`is` checks memory identity; `==` checks value equality", "`is` checks value; `==` checks memory", "They are identical", "`is` is used only for strings"], 0, "`is` checks if two references point to the same memory object, whereas `==` evaluates value equality."),
        ("What does `isinstance(5, int)` return?", ["True", "False", "None", "Error"], 0, "isinstance() checks if an object belongs to a class or tuple of classes."),
        ("Which built-in function returns the absolute value of a number?", ["abs()", "fabs()", "val()", "positive()"], 0, "abs() computes absolute value."),
        ("Which built-in function rounds a float number?", ["round()", "floor()", "ceil()", "trunc()"], 0, "round() rounds numbers to specified decimals or nearest integer."),
        ("What is the output of `'abc'.find('z')`?", ["-1", "0", "None", "Error"], 0, "find() returns -1 if the substring is not found."),
        ("What is the output of `'abc'.index('z')`?", ["Raises ValueError", "-1", "None", "0"], 0, "index() raises ValueError when substring is not found."),
        ("Which statement escapes execution out of a loop immediately?", ["break", "continue", "pass", "exit"], 0, "break terminates the innermost loop."),
        ("Which statement skips the rest of current loop iteration and moves to next loop cycle?", ["continue", "break", "pass", "return"], 0, "continue jumps to the next loop iteration."),
        ("What does the `pass` statement do in Python?", ["It is a null statement placeholder that does nothing", "It skips loop", "It breaks execution", "It exits program"], 0, "pass is a placeholder when syntax requires a statement but no action is needed."),
        ("Which module in Python handles JSON encoding and decoding?", ["json", "simplejson", "pickle", "marshal"], 0, "The standard library module `json` handles JSON data."),
        ("Which function parses a JSON string into a Python dictionary?", ["json.loads()", "json.dumps()", "json.load()", "json.dump()"], 0, "json.loads() parses JSON string to Python objects."),
        ("Which function serializes a Python dictionary to a JSON string?", ["json.dumps()", "json.loads()", "json.dump()", "json.load()"], 0, "json.dumps() serializes Python objects to JSON string."),
        ("What does GIL stand for in Python CPython implementation?", ["Global Interpreter Lock", "General Instruction Language", "Graphical Interface Layer", "Global Index List"], 0, "GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes simultaneously."),
        ("Which decorator is used to define a class method in Python?", ["@classmethod", "@staticmethod", "@property", "@method"], 0, "@classmethod receives the class (`cls`) as implicit first argument."),
        ("Which decorator is used to define a static method that takes no implicit self/cls argument?", ["@staticmethod", "@classmethod", "@property", "@fn"], 0, "@staticmethod defines a method bound to class without passing self/cls.")
    ]
    for idx, item in enumerate(items, 1):
        q.append({
            "id": idx,
            "question": item[0],
            "options": item[1],
            "correctAnswer": item[2],
            "explanation": item[3]
        })
    return q

def get_os_questions():
    q = []
    items = [
        ("What is the primary role of an Operating System Kernel?", ["Core component that manages system resources and hardware interaction", "A graphical user interface framework", "A web browser engine", "A compiler for C++"], 0, "The kernel manages CPU, memory, devices, and system calls."),
        ("Which of the following is NOT an operating system?", ["Apache", "Linux", "Windows 11", "macOS"], 0, "Apache is a web server software, not an OS."),
        ("What is a Process in OS?", ["A program in execution", "A file saved on hard drive", "A compiler", "A network protocol"], 0, "A process is a program loaded into memory and currently executing."),
        ("What is a Thread?", ["A lightweight unit of execution within a process", "A physical wire inside CPU", "A hard drive partition", "An HTML element"], 0, "A thread is the smallest unit of processing that can be scheduled by an OS."),
        ("What is PCB in operating systems?", ["Process Control Block", "Primary Computer Board", "Program Counter Buffer", "Process Communication Bus"], 0, "PCB stores process state, PID, CPU registers, memory limits, and open files."),
        ("Which CPU scheduling algorithm allocates CPU to the process that arrives first?", ["FCFS (First Come First Served)", "SJF (Shortest Job First)", "Round Robin", "Priority Scheduling"], 0, "FCFS processes requests in arrival order."),
        ("Which CPU scheduling algorithm uses time quanta / slices for process execution?", ["Round Robin", "FCFS", "SJF", "Multilevel Queue"], 0, "Round Robin assigns a fixed time quantum to each process in circular order."),
        ("What is starvation in process scheduling?", ["When a process waits indefinitely due to lower priority or long jobs ahead", "When memory runs out", "When CPU overheats", "When disk fills up"], 0, "Starvation happens when low-priority processes never get CPU time."),
        ("What is Aging in CPU scheduling?", ["Gradually increasing priority of processes waiting long in queue", "Deleting old files", "Compressing RAM", "Overclocking CPU"], 0, "Aging prevents starvation by increasing priority over time."),
        ("What is Context Switching?", ["Saving state of current process and restoring state of another process", "Switching user accounts", "Changing screen resolution", "Swapping hard drives"], 0, "Context switching enables multi-tasking on a single CPU core."),
        ("What is a System Call?", ["Programmatic way a process requests service from the OS kernel", "Calling customer support", "An HTTP GET request", "A GPU shader function"], 0, "System calls provide an interface between user applications and the kernel."),
        ("Which system call in Unix/Linux creates a new child process?", ["fork()", "exec()", "exit()", "wait()"], 0, "fork() creates a new process by duplicating the calling process."),
        ("Which system call replaces current process image with a new process image?", ["exec()", "fork()", "clone()", "spawn()"], 0, "exec() loads and executes a new binary image in the current process space."),
        ("What is a Zombie Process in Unix?", ["A process that has completed execution but still has an entry in process table", "A process consuming 100% CPU", "A malware process", "A process running on remote server"], 0, "A zombie process has exited, but its parent has not yet read its exit status via wait()."),
        ("What is an Orphan Process?", ["A running process whose parent process has terminated", "A process with no PID", "A process with no memory", "A deleted file"], 0, "An orphan process continues executing after its parent terminates (adopted by `init`/`systemd`)."),
        ("What is a Race Condition?", ["When outcome depends on non-deterministic order of thread execution", "When network speed drops", "When disk read fails", "When memory leaks"], 0, "Race condition occurs when concurrent threads access shared data without synchronization."),
        ("What is Critical Section?", ["Part of code where shared resources are accessed", "Part of kernel code", "RAM address 0x00", "Hard drive boot sector"], 0, "Critical section must be executed atomically to prevent data corruption."),
        ("Which mechanism provides mutual exclusion for critical sections?", ["Mutex / Semaphore", "Interrupt Vector", "Page Table", "Disk Buffer"], 0, "Mutex (Mutual Exclusion) locks resources so only one thread accesses it at a time."),
        ("What is a Counting Semaphore?", ["A synchronization tool whose value can range over an unrestricted domain", "A binary 0/1 flag", "A CPU clock counter", "A hardware timer"], 0, "Counting semaphore controls access to a resource pool with finite instances."),
        ("What is a Binary Semaphore?", ["A semaphore whose value can only be 0 or 1", "A 64-bit integer counter", "A dual-core CPU lock", "A network ping"], 0, "Binary semaphore acts like a mutex lock (0 or 1)."),
        ("Which of the following is NOT one of the 4 necessary conditions for Deadlock?", ["Preemption", "Mutual Exclusion", "Hold and Wait", "Circular Wait"], 0, "No Preemption is a deadlock condition; active Preemption actually prevents deadlock!"),
        ("Which algorithm is used for Deadlock Avoidance?", ["Banker's Algorithm", "Dijkstra's Algorithm", "Round Robin", "LRU Algorithm"], 0, "Banker's Algorithm tests safe states before allocating resources."),
        ("What is Virtual Memory?", ["Feature that allows execution of processes larger than physical RAM", "RAM on graphics card", "USB drive storage", "Cloud backup"], 0, "Virtual memory creates an illusion of large contiguous RAM space using secondary storage."),
        ("What is Paging in memory management?", ["Fixed-size memory allocation scheme dividing logical memory into pages", "Dynamic variable splitting", "Copying files to USB", "Deleting temporary files"], 0, "Paging maps fixed-size logical pages to physical frames."),
        ("What is a Page Fault?", ["Occurs when a process accesses a page not currently loaded in physical RAM", "Memory hardware failure", "Disk corruption", "Syntax error in C code"], 0, "Page fault triggers OS to fetch missing page from swap disk into RAM."),
        ("What is Thrashing in OS?", ["When OS spends more time swapping pages than executing instructions", "Disk defragmentation", "CPU overheating", "Virus attack"], 0, "Thrashing occurs when memory is over-committed and excessive page faulting occurs."),
        ("Which Page Replacement Algorithm replaces the page that will not be used for longest time in future?", ["Optimal Page Replacement (OPT)", "FIFO", "LRU", "MRU"], 0, "Optimal (Belady's) algorithm replaces the page needed furthest in the future."),
        ("Which Page Replacement Algorithm replaces the page least recently used?", ["LRU (Least Recently Used)", "FIFO", "Optimal", "LIFO"], 0, "LRU replaces pages that haven't been accessed for the longest time."),
        ("What is Belady's Anomaly?", ["In FIFO page replacement, increasing page frames can increase page faults", "LRU runs in O(1) time", "Virtual memory crashes", "CPU clock speed drops"], 0, "Belady's Anomaly occurs in FIFO where allocating more frames results in more page faults."),
        ("What is Fragmentation in memory management?", ["Unused memory space that cannot be allocated effectively", "File compression", "Disk formatting", "Process creation"], 0, "Fragmentation is wasted memory space (Internal or External)."),
        ("What is Internal Fragmentation?", ["Unused space inside allocated fixed-size memory blocks", "Unused space between variable memory blocks", "Hard drive sector failure", "Cache miss"], 0, "Internal fragmentation happens when allocated block is larger than requested size."),
        ("What is External Fragmentation?", ["Total free memory is enough for request, but not contiguous", "Unused space inside block", "RAM corruption", "Swap file full"], 0, "External fragmentation occurs when free memory is broken into small non-contiguous chunks."),
        ("Which technique solves External Fragmentation by moving memory contents to coalesce free spaces?", ["Compaction", "Paging", "Swapping", "Segmentation"], 0, "Compaction shifts processes to combine free memory into one large block."),
        ("What is Segmentation in memory management?", ["Variable-size memory allocation scheme dividing memory according to logical units (code, data, stack)", "Fixed-size paging", "Disk formatting", "File indexing"], 0, "Segmentation divides memory into variable-sized logical segments."),
        ("What is a Translation Lookaside Buffer (TLB)?", ["High-speed hardware cache used to speed up virtual-to-physical address translation", "Disk controller", "GPU VRAM", "BIOS chip"], 0, "TLB caches recent page table translation entries."),
        ("What is a File Allocation Table (FAT)?", ["A file system architecture using a table to map cluster allocation", "A database table", "RAM index", "CPU register"], 0, "FAT maintains cluster links for files on disk storage."),
        ("In Linux file permissions `chmod 755 script.sh`, what does `7` represent for owner?", ["Read (4) + Write (2) + Execute (1)", "Read only", "Execute only", "Write only"], 0, "7 = 4(read) + 2(write) + 1(execute) = rwx."),
        ("What is an inode in Unix/Linux file system?", ["Data structure storing file metadata (permissions, owner, size, block pointers)", "The file name string", "Root directory", "RAM cache"], 0, "Inodes contain metadata about files except file names and actual contents."),
        ("Which Disk Scheduling Algorithm services disk requests closest to current head position?", ["SSTF (Shortest Seek Time First)", "FCFS", "SCAN", "C-SCAN"], 0, "SSTF chooses request requiring least disk arm movement."),
        ("Which Disk Scheduling Algorithm moves disk head from one end to another, servicing requests along the way?", ["SCAN (Elevator Algorithm)", "FCFS", "SSTF", "FIFO"], 0, "SCAN algorithm mimics an elevator servicing requests in direction of travel."),
        ("What is Spooling?", ["Simultaneous Peripheral Operations On-Line (queuing jobs for devices like printers)", "CPU overclocking", "Memory paging", "Thread locking"], 0, "Spooling buffers data for slow I/O devices (e.g., print spooler)."),
        ("What is a Monolithic Kernel?", ["Kernel where all OS core services (memory, FS, drivers) run in single kernel space", "Kernel broken into small modules in user space", "Virtual machine supervisor", "Browser engine"], 0, "Monolithic kernels execute all OS services in unified high-privilege space."),
        ("What is a Microkernel?", ["Kernel that keeps only essential mechanisms in kernel space, running services in user space", "A tiny operating system for microcontrollers", "A web browser kernel", "A hardware chip"], 0, "Microkernel minimizes kernel space code, running services as user-space processes."),
        ("What is RAID 0?", ["Disk striping without redundancy for maximum performance", "Disk mirroring", "Striping with parity", "Dual parity"], 0, "RAID 0 stripes data across multiple disks for speed but offers no fault tolerance."),
        ("What is RAID 1?", ["Disk mirroring for fault tolerance", "Disk striping", "Parity block", "RAID 0 + 5"], 0, "RAID 1 duplicates identical data across two or more disks."),
        ("What is RAID 5?", ["Block-level striping with distributed parity", "Mirroring only", "Striping without parity", "RAM caching"], 0, "RAID 5 requires at least 3 disks and distributes parity across all drives."),
        ("Which interrupt is generated by hardware devices like keyboard or disk drive?", ["Hardware Interrupt / Asynchronous Interrupt", "Software Interrupt", "System Call", "Division by zero"], 0, "Hardware interrupts signal external device events asynchronously."),
        ("What is a Trap in OS?", ["A software-generated interrupt caused by error or system call request", "A hardware fault", "A memory leak", "A network virus"], 0, "A trap (or exception) is a synchronous software interrupt."),
        ("What is DMA (Direct Memory Access)?", ["Feature allowing hardware devices to transfer data directly to/from RAM without CPU intervention", "CPU instruction cache", "GPU shader pipeline", "Wireless protocol"], 0, "DMA frees CPU from handling high-volume data transfers."),
        ("What is the primary function of a Bootloader (e.g. GRUB)?", ["Loads operating system kernel into memory during startup", "Compiles C programs", "Formats hard drives", "Manages user login passwords"], 0, "Bootloader initializes hardware and loads the OS kernel into RAM.")
    ]
    for idx, item in enumerate(items, 1):
        q.append({
            "id": idx,
            "question": item[0],
            "options": item[1],
            "correctAnswer": item[2],
            "explanation": item[3]
        })
    return q

def get_dbms_questions():
    q = []
    items = [
        ("What does DBMS stand for?", ["Database Management System", "Data Binding & Modeling Service", "Direct Base Memory Storage", "Digital Binary Management System"], 0, "DBMS is software system for creating and managing databases."),
        ("Which database model organizes data into tables consisting of rows and columns?", ["Relational Model", "Hierarchical Model", "Network Model", "Object Model"], 0, "Relational model uses tables (relations) with rows (tuples) and columns (attributes)."),
        ("What is a Primary Key?", ["An attribute or set of attributes that uniquely identifies each tuple in a table", "A key used to decrypt files", "A foreign link to another table", "An index on text columns"], 0, "Primary key uniquely identifies each record in a database table and cannot be NULL."),
        ("What is a Foreign Key?", ["An attribute in one table that references Primary Key of another table", "A backup key", "A master password", "An index column"], 0, "Foreign key creates link between data in two tables."),
        ("What is a Candidate Key?", ["A minimal set of attributes that can uniquely identify a record", "Any key selected as primary key", "A key containing duplicate values", "A foreign key"], 0, "Candidate key is a super key with no redundant attributes."),
        ("What is a Super Key?", ["A set of one or more attributes that uniquely identifies a record in a table", "A primary key only", "A foreign key only", "A column with numbers"], 0, "Super key is any combination of columns that uniquely identifies a row."),
        ("Which SQL clause is used to filter records in a `SELECT` statement?", ["WHERE", "HAVING", "GROUP BY", "ORDER BY"], 0, "WHERE filters rows before grouping occurs."),
        ("Which SQL clause is used to filter aggregated groups created by `GROUP BY`?", ["HAVING", "WHERE", "ORDER BY", "FILTER"], 0, "HAVING filters groups created by GROUP BY."),
        ("Which SQL keyword is used to eliminate duplicate rows from query results?", ["DISTINCT", "UNIQUE", "DIFFERENT", "SINGLE"], 0, "SELECT DISTINCT returns only unique values."),
        ("Which SQL command modifies existing records in a table?", ["UPDATE", "MODIFY", "ALTER", "CHANGE"], 0, "UPDATE modifies existing data in table rows."),
        ("Which SQL command adds new rows into a table?", ["INSERT INTO", "ADD ROW", "APPEND", "UPDATE"], 0, "INSERT INTO adds new tuples to a table."),
        ("Which SQL command deletes rows from a table based on a condition?", ["DELETE FROM", "DROP", "TRUNCATE", "REMOVE"], 0, "DELETE removes specified rows while keeping table structure."),
        ("Which SQL command removes all rows from a table without logging individual row deletions?", ["TRUNCATE TABLE", "DELETE FROM", "DROP TABLE", "REMOVE"], 0, "TRUNCATE quickly empties a table without firing individual row delete triggers."),
        ("Which SQL command completely deletes a table structure and data from database?", ["DROP TABLE", "TRUNCATE TABLE", "DELETE TABLE", "CLEAR"], 0, "DROP TABLE deletes both data and schema structure."),
        ("Which category of SQL commands includes `CREATE`, `ALTER`, `DROP`, `TRUNCATE`?", ["DDL (Data Definition Language)", "DML (Data Manipulation Language)", "DCL (Data Control Language)", "TCL (Transaction Control Language)"], 0, "DDL commands define and modify database schemas."),
        ("Which category of SQL commands includes `SELECT`, `INSERT`, `UPDATE`, `DELETE`?", ["DML (Data Manipulation Language)", "DDL", "DCL", "TCL"], 0, "DML commands manipulate data stored inside database tables."),
        ("Which category of SQL commands includes `GRANT` and `REVOKE`?", ["DCL (Data Control Language)", "DDL", "DML", "TCL"], 0, "DCL handles user rights and permissions."),
        ("Which category of SQL commands includes `COMMIT`, `ROLLBACK`, `SAVEPOINT`?", ["TCL (Transaction Control Language)", "DDL", "DML", "DCL"], 0, "TCL manages database transactions."),
        ("What does the `COMMIT` command do in SQL?", ["Saves all transaction changes permanently to database", "Undoes changes", "Rolls back to savepoint", "Deletes database"], 0, "COMMIT makes all transaction changes permanent."),
        ("What does the `ROLLBACK` command do in SQL?", ["Reverts database changes back to last committed state or savepoint", "Saves changes", "Creates table", "Deletes index"], 0, "ROLLBACK undoes changes made in current uncommitted transaction."),
        ("Which SQL JOIN returns all rows from both tables matching ON condition?", ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], 0, "INNER JOIN returns records that have matching values in both tables."),
        ("Which SQL JOIN returns all rows from left table and matched rows from right table?", ["LEFT (OUTER) JOIN", "RIGHT JOIN", "INNER JOIN", "CROSS JOIN"], 0, "LEFT JOIN keeps all rows from left table regardless of match in right table."),
        ("Which SQL JOIN returns cartesian product of two tables?", ["CROSS JOIN", "INNER JOIN", "FULL JOIN", "LEFT JOIN"], 0, "CROSS JOIN pairs every row of first table with every row of second table."),
        ("What is Normalization in database design?", ["Process of organizing data to minimize redundancy and dependency", "Creating backups", "Encrypting passwords", "Adding indexes"], 0, "Normalization eliminates duplicate data and improves data integrity."),
        ("What is 1NF (First Normal Form)?", ["Table attributes must contain atomic (indivisible) values with no repeating groups", "No partial dependency", "No transitive dependency", "BCNF compliant"], 0, "1NF requires atomic values and unique column names."),
        ("What is 2NF (Second Normal Form)?", ["Table is in 1NF and has NO partial dependencies (non-key attributes depend on whole PK)", "No transitive dependency", "Atomic values only", "No multi-valued dependency"], 0, "2NF eliminates partial dependencies on composite primary keys."),
        ("What is 3NF (Third Normal Form)?", ["Table is in 2NF and has NO transitive dependencies", "No partial dependency", "Atomic values only", "5NF compliant"], 0, "3NF requires that non-key attributes depend only on candidate keys (no A->B->C)."),
        ("What is BCNF (Boyce-Codd Normal Form)?", ["Strict version of 3NF where for every functional dependency X -> Y, X must be a super key", "1NF variant", "2NF variant", "4NF variant"], 0, "BCNF requires every determinant to be a super key."),
        ("What is Denormalization?", ["Process of intentionally adding redundancy to normalized database to speed up read performance", "Fixing 1NF errors", "Deleting tables", "Creating views"], 0, "Denormalization trades storage and update efficiency for faster query execution."),
        ("What is Atomicity in ACID properties?", ["Transaction completes fully or not at all (All or Nothing)", "Database remains consistent", "Transactions are isolated", "Data persists across crashes"], 0, "Atomicity guarantees that all operations in a transaction succeed or all fail."),
        ("What is Consistency in ACID properties?", ["Transaction brings database from one valid state to another valid state", "All or nothing", "Data hidden from other transactions", "Saved on disk"], 0, "Consistency preserves database constraints and invariants."),
        ("What is Isolation in ACID properties?", ["Concurrent execution of transactions leaves database in same state as sequential execution", "All or nothing", "Valid state only", "Disk backup"], 0, "Isolation prevents intermediate state of one transaction from being seen by others."),
        ("What is Durability in ACID properties?", ["Committed transaction changes persist permanently even in system failure", "All or nothing", "Fast query speed", "No locks"], 0, "Durability guarantees committed data is saved in non-volatile storage."),
        ("What is a Dirty Read anomaly?", ["Reading uncommitted changes made by another concurrent transaction", "Reading same row twice with different results", "Adding new rows", "Deleting indexes"], 0, "Dirty read happens when Transaction A reads data modified by Transaction B before B commits."),
        ("What is a Non-Repeatable Read anomaly?", ["Re-reading same row within transaction yields different values because another transaction modified & committed it", "Reading uncommitted data", "Phantom rows", "Deadlock"], 0, "Non-repeatable read occurs when data read once changes upon second read within same transaction."),
        ("What is a Phantom Read anomaly?", ["Transaction re-runs query returning new set of rows inserted by another committed transaction", "Reading uncommitted row", "Key duplicate", "Lock error"], 0, "Phantom read occurs when new rows matching search criteria are inserted by another transaction."),
        ("Which Transaction Isolation Level prevents Dirty Reads, Non-Repeatable Reads, AND Phantom Reads?", ["SERIALIZABLE", "REPEATABLE READ", "READ COMMITTED", "READ UNCOMMITTED"], 0, "SERIALIZABLE is highest isolation level providing complete transaction isolation."),
        ("What is a Database View?", ["A virtual table based on the result-set of an SQL statement", "A physical file on disk", "A primary key", "A database backup"], 0, "A View displays computed data from underlying tables without storing duplicate data."),
        ("What is an Index in database?", ["Data structure (like B-Tree) that speeds up data retrieval operations on a table", "A primary key constraint", "A foreign key link", "A backup copy"], 0, "Index enables fast lookup without scanning every row in table."),
        ("Which data structure is most commonly used for database indexing?", ["B-Tree / B+ Tree", "Array", "Stack", "Queue"], 0, "B+ Trees keep data sorted and allow logarithmic search, insertion, and deletion."),
        ("What is a Clustered Index?", ["Index that determines the physical order of data rows stored on disk", "Index stored separately from table data", "A non-unique index", "A composite foreign key"], 0, "Clustered index reorganizes table rows on disk to match index order (only one per table)."),
        ("What is a Non-Clustered Index?", ["Index structure separate from data rows containing pointers to physical location", "Physical table order index", "Primary key default", "Partition key"], 0, "Non-clustered index stores index key with pointers to actual data rows."),
        ("What is a Stored Procedure?", ["Precompiled collection of SQL statements executed as a unit on server", "A table backup file", "A browser script", "A CPU process"], 0, "Stored procedures execute compiled SQL logic directly inside database engine."),
        ("What is a Database Trigger?", ["Procedural code automatically executed in response to specific events (INSERT/UPDATE/DELETE) on a table", "A button click event", "A primary key generator", "A backup timer"], 0, "Triggers fire automatically when specified DML/DDL events occur."),
        ("What is a Cardinality in Entity-Relationship (ER) diagram?", ["Number of entity instances associated with another entity (1:1, 1:N, M:N)", "Number of columns in table", "Primary key count", "Table size in bytes"], 0, "Cardinality specifies numerical relationships between entities."),
        ("What is Relational Algebra `Selection` operation (σ)?", ["Filters rows satisfying a given condition", "Selects specified columns", "Joins two tables", "Divides tuples"], 0, "Selection (sigma σ) acts like SQL WHERE clause filtering tuples."),
        ("What is Relational Algebra `Projection` operation (π)?", ["Selects specified attributes/columns from relation", "Filters rows", "Combines relations", "Deletes duplicates"], 0, "Projection (pi π) selects specific columns, omitting unlisted ones."),
        ("What is a NoSQL Database?", ["Non-relational database designed for unstructured or semi-structured data scaling horizontally", "SQL-only engine", "C-based database", "RAM-only cache"], 0, "NoSQL databases handle flexible schemas (Document, Key-Value, Column, Graph)."),
        ("Which of the following is a Document-oriented NoSQL database?", ["MongoDB", "PostgreSQL", "MySQL", "Oracle"], 0, "MongoDB stores data in flexible JSON-like BSON documents."),
        ("What does CAP Theorem state for distributed databases?", ["A system can provide at most TWO of: Consistency, Availability, Partition Tolerance", "Computers Are Powerful", "Cache Always Persists", "Code And Program"], 0, "CAP theorem proves distributed data stores can guarantee only 2 of 3 properties simultaneously.")
    ]
    for idx, item in enumerate(items, 1):
        q.append({
            "id": idx,
            "question": item[0],
            "options": item[1],
            "correctAnswer": item[2],
            "explanation": item[3]
        })
    return q

def get_dsa_questions():
    q = []
    items = [
        ("What is Big-O notation used for?", ["Describing the upper bound of algorithm time or space complexity", "Calculating exact runtime in milliseconds", "Counting number of lines of code", "Measuring CPU temperature"], 0, "Big-O characterizes algorithm efficiency in worst-case scenario as input size grows."),
        ("What is the time complexity of searching an element in an unsorted array of size N?", ["O(N)", "O(1)", "O(log N)", "O(N²)"], 0, "Linear search checks each element one by one up to N times."),
        ("What is the time complexity of accessing an array element by index `arr[i]`?", ["O(1)", "O(N)", "O(log N)", "O(N²)"], 0, "Array indexing calculates memory address directly in constant O(1) time."),
        ("What is the average time complexity of Binary Search on a sorted array?", ["O(log N)", "O(N)", "O(1)", "O(N log N)"], 0, "Binary search repeatedly halves search space in O(log N) steps."),
        ("Which condition must be met before executing Binary Search?", ["The array must be sorted", "The array size must be even", "The array must contain positive numbers", "The array must be linked list"], 0, "Binary search requires elements to be in sorted order."),
        ("What is the worst-case time complexity of Bubble Sort?", ["O(N²)", "O(N log N)", "O(N)", "O(1)"], 0, "Bubble Sort compares adjacent elements requiring N(N-1)/2 comparisons = O(N²)."),
        ("What is the average-case time complexity of Merge Sort?", ["O(N log N)", "O(N²)", "O(N)", "O(log N)"], 0, "Merge Sort uses divide-and-conquer to guarantee O(N log N) time in all cases."),
        ("What is the space complexity of Merge Sort?", ["O(N)", "O(1)", "O(log N)", "O(N²)"], 0, "Merge Sort requires O(N) auxiliary space for temporary merging arrays."),
        ("What is the worst-case time complexity of QuickSort?", ["O(N²)", "O(N log N)", "O(N)", "O(log N)"], 0, "QuickSort degrades to O(N²) when pivot chosen is worst possible (e.g. already sorted array with bad pivot)."),
        ("What is the best-case time complexity of Insertion Sort on an already sorted array?", ["O(N)", "O(N²)", "O(N log N)", "O(1)"], 0, "Insertion sort checks each element once taking O(N) linear time when input is already sorted."),
        ("Which sorting algorithm is STABLE and runs in O(N log N) worst-case time?", ["Merge Sort", "QuickSort", "Heap Sort", "Selection Sort"], 0, "Merge Sort preserves relative order of equal elements and runs in O(N log N)."),
        ("Which sorting algorithm is IN-PLACE and runs in O(N log N) worst-case time?", ["Heap Sort", "Merge Sort", "Counting Sort", "Radix Sort"], 0, "Heap Sort sorts in-place O(1) auxiliary space with O(N log N) time."),
        ("Which sorting algorithm has a linear time complexity O(N + K) for integer ranges?", ["Counting Sort", "QuickSort", "Bubble Sort", "Insertion Sort"], 0, "Counting Sort counts integer frequencies achieving O(N+K) time."),
        ("What is a Stack data structure?", ["LIFO (Last-In, First-Out) data structure", "FIFO data structure", "Random access array", "Tree structure"], 0, "Stack operates on Last-In First-Out principle."),
        ("Which operation adds an element to the top of a Stack?", ["push()", "pop()", "peek()", "enqueue()"], 0, "push() inserts element at top of stack."),
        ("Which operation removes and returns the top element of a Stack?", ["pop()", "push()", "peek()", "dequeue()"], 0, "pop() removes the top element."),
        ("Which operation returns top element of Stack without removing it?", ["peek() / top()", "pop()", "push()", "poll()"], 0, "peek() inspects top element without mutating stack."),
        ("What is a Queue data structure?", ["FIFO (First-In, First-Out) data structure", "LIFO data structure", "Heap structure", "Hash map"], 0, "Queue processes elements in First-In First-Out order."),
        ("Which operation adds an element to the rear of a Queue?", ["enqueue() / push()", "dequeue()", "pop()", "peek()"], 0, "enqueue() adds element to rear of queue."),
        ("Which operation removes an element from the front of a Queue?", ["dequeue() / poll()", "enqueue()", "push()", "peek()"], 0, "dequeue() removes element from front of queue."),
        ("What is a Circular Queue?", ["Queue where last position is connected back to first position to make a circle", "A stack linked list", "A double priority queue", "A tree queue"], 0, "Circular Queue reuses memory spaces freed by dequeue operations."),
        ("What is a Priority Queue?", ["Queue where elements are served based on assigned priority rather than insertion order", "LIFO queue", "Simple FIFO queue", "Array queue"], 0, "Priority Queue dequeues highest priority elements first."),
        ("Which data structure is typically used to implement a Priority Queue efficiently?", ["Binary Heap", "Unsorted Array", "Stack", "Queue"], 0, "Binary Heap implements Priority Queue with O(log N) push/pop operations."),
        ("What is a Singly Linked List node composed of?", ["Data field and pointer to next node", "Data field and pointer to previous node", "Two pointers to children", "Array index"], 0, "Singly linked list node contains data and `next` reference."),
        ("What is a Doubly Linked List node composed of?", ["Data field, pointer to next node, and pointer to previous node", "Data and next pointer only", "Three pointers", "Value and hash"], 0, "Doubly linked list allows bidirectional traversal (`prev` and `next`)."),
        ("What is the time complexity to insert a node at the head of a Singly Linked List?", ["O(1)", "O(N)", "O(log N)", "O(N²)"], 0, "Updating head pointer takes constant O(1) time."),
        ("What is the time complexity to search an element in a Singly Linked List of size N?", ["O(N)", "O(1)", "O(log N)", "O(N log N)"], 0, "Searching requires traversing nodes from head to target taking O(N) time."),
        ("What is a Hash Table?", ["Data structure mapping keys to values using hash function for fast lookup", "Sorted array", "Binary tree", "Stack"], 0, "Hash Table computes index into bucket array for average O(1) lookups."),
        ("What is a Hash Collision?", ["When hash function generates same index for two different keys", "When hash table runs out of memory", "When key is null", "When array is full"], 0, "Collision happens when two distinct keys yield identical hash codes."),
        ("Which collision resolution technique uses linked lists attached to hash buckets?", ["Chaining / Separate Chaining", "Linear Probing", "Quadratic Probing", "Double Hashing"], 0, "Chaining stores colliding keys in a linked list at bucket index."),
        ("Which collision resolution technique searches next sequential empty slot in hash array?", ["Linear Probing", "Chaining", "Double Hashing", "Rehashing"], 0, "Linear Probing searches index (i+1), (i+2) linearly for open slot."),
        ("What is average time complexity for lookup in Hash Table?", ["O(1)", "O(N)", "O(log N)", "O(N²)"], 0, "With good hash distribution, lookup is average O(1)."),
        ("What is worst-case time complexity for lookup in Hash Table when all keys collide into one bucket?", ["O(N)", "O(1)", "O(log N)", "O(N²)"], 0, "If all keys hash to same bucket, lookup degrades to O(N) linked list search."),
        ("What is a Binary Tree?", ["Tree structure where each node has at most TWO children (left and right)", "Tree with 3 children", "Graph with cycles", "Sorted array"], 0, "Binary tree nodes have maximum degree of 2."),
        ("What is a Binary Search Tree (BST)?", ["Binary tree where left subtree node values < parent < right subtree node values", "Heap tree", "Complete tree", "Random tree"], 0, "BST property maintains ordered hierarchy for fast search."),
        ("What is the worst-case time complexity of search in unbalanced BST (skewed tree)?", ["O(N)", "O(log N)", "O(1)", "O(N log N)"], 0, "A skewed BST resembles a linked list with O(N) depth."),
        ("Which tree traversal visits nodes in order: Left -> Root -> Right?", ["Inorder Traversal", "Preorder Traversal", "Postorder Traversal", "Level-order Traversal"], 0, "Inorder traversal of BST yields elements in sorted ascending order."),
        ("Which tree traversal visits nodes in order: Root -> Left -> Right?", ["Preorder Traversal", "Inorder Traversal", "Postorder Traversal", "BFS"], 0, "Preorder visits root before left and right subtrees."),
        ("Which tree traversal visits nodes in order: Left -> Right -> Root?", ["Postorder Traversal", "Inorder Traversal", "Preorder Traversal", "DFS"], 0, "Postorder visits children before parent node."),
        ("What is an AVL Tree?", ["Self-balancing Binary Search Tree where height difference of subtrees is at most 1", "B-Tree", "Red-Black Tree", "Trie"], 0, "AVL tree maintains strict balance factor (-1, 0, +1) using rotations."),
        ("What is the worst-case lookup time complexity in an AVL Tree?", ["O(log N)", "O(N)", "O(1)", "O(N²)"], 0, "Strict height balancing guarantees O(log N) lookup."),
        ("What is a Max-Heap?", ["Complete binary tree where parent node value >= children node values", "Min-heap", "BST", "Graph"], 0, "In Max-Heap, root holds the maximum element."),
        ("What is the time complexity to insert an element into a Binary Heap of size N?", ["O(log N)", "O(1)", "O(N)", "O(N log N)"], 0, "Insertion inserts at end and bubbles up height log(N)."),
        ("What is a Graph?", ["Non-linear data structure consisting of vertices (nodes) and edges connecting them", "Linear array", "Tree with no root", "Hash map"], 0, "Graph G = (V, E) represents network of connected entities."),
        ("Which Graph Traversal uses Queue data structure and visits nodes level by level?", ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Dijkstra", "Kruskal"], 0, "BFS explores nearest neighbors first using FIFO queue."),
        ("Which Graph Traversal uses Stack (or recursion) and explores deep along branches?", ["Depth-First Search (DFS)", "BFS", "Prim's Algorithm", "Bellman-Ford"], 0, "DFS explores as deep as possible along each branch before backtracking."),
        ("What is the time complexity of BFS/DFS on graph with V vertices and E edges using adjacency list?", ["O(V + E)", "O(V * E)", "O(V²)", "O(E log V)"], 0, "Traversal visits all vertices and inspects all edges: O(V + E)."),
        ("Which algorithm finds Shortest Path from single source in non-negative weighted graph?", ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Prim's Algorithm", "Floyd-Warshall"], 0, "Dijkstra computes shortest path tree for non-negative edge weights."),
        ("Which algorithm finds Minimum Spanning Tree (MST) by greedily adding smallest edge that doesn't form cycle?", ["Kruskal's Algorithm", "Dijkstra", "BFS", "Bellman-Ford"], 0, "Kruskal uses disjoint-set union (DSU) to add smallest non-cycling edges."),
        ("What is Dynamic Programming (DP)?", ["Optimization technique that solves complex problems by breaking into overlapping subproblems and storing results", "Sorting algorithm", "Graph traversal", "Greedy method without memory"], 0, "DP avoids redundant calculations by memoizing or tabulating subproblem solutions.")
    ]
    for idx, item in enumerate(items, 1):
        q.append({
            "id": idx,
            "question": item[0],
            "options": item[1],
            "correctAnswer": item[2],
            "explanation": item[3]
        })
    return q

def get_backend_questions():
    q = []
    items = [
        ("What is Node.js?", ["Asynchronous event-driven JavaScript runtime built on Chrome's V8 engine", "A CSS framework", "A relational database", "A frontend UI library"], 0, "Node.js allows executing JavaScript on the server side."),
        ("What is the Event Loop in Node.js?", ["Mechanism that handles asynchronous I/O operations non-blocking on single thread", "A multi-threaded CPU pool", "A database queue", "A CSS animation loop"], 0, "Event Loop offloads operations to system kernel whenever possible."),
        ("What is npm in Node.js ecosystem?", ["Node Package Manager used to install and manage project dependencies", "Node Program Module", "Network Protocol Manager", "New Project Model"], 0, "npm is default package manager for Node.js."),
        ("Which file in a Node.js project manages project metadata and dependency list?", ["package.json", "server.js", "index.html", "config.xml"], 0, "package.json contains scripts, dependencies, version info."),
        ("How do you import a CommonJS module in Node.js?", ["const fs = require('fs');", "import fs from 'fs';", "include('fs')", "using fs;"], 0, "`require()` is the CommonJS syntax for importing modules."),
        ("How do you export a module function in CommonJS Node.js?", ["module.exports = myFunction;", "export default myFunction;", "public export myFunction;", "return myFunction;"], 0, "`module.exports` exposes module functions/objects."),
        ("Which built-in Node.js module provides utilities for working with file and directory paths?", ["path", "fs", "http", "url"], 0, "The `path` module provides utilities for joining and normalizing file paths."),
        ("Which built-in Node.js module provides file system operations (read, write, delete)?", ["fs", "path", "os", "stream"], 0, "The `fs` (File System) module handles file read/write operations."),
        ("What is Express.js?", ["Fast, unopinionated, minimalist web framework for Node.js", "A NoSQL database", "A template engine", "A CSS framework"], 0, "Express simplifies HTTP routing, middleware processing, and response handling."),
        ("In Express.js, what is Middleware?", ["A function that has access to request (req), response (res), and next middleware function", "A database driver", "A frontend button component", "A compiler plugin"], 0, "Middleware functions execute during request-response lifecycle."),
        ("What does `next()` function call do in Express middleware?", ["Passes control to the next middleware function in stack", "Sends response to client", "Closes database connection", "Throws exception"], 0, "next() signals completion of current middleware work."),
        ("Which middleware in Express parses incoming JSON request payloads?", ["express.json()", "express.urlencoded()", "cors()", "morgan()"], 0, "express.json() parses body payload formatted in JSON."),
        ("Which Express method defines route handler for HTTP GET requests?", ["app.get('/path', handler)", "app.post('/path', handler)", "app.use('/path', handler)", "app.route('/path')"], 0, "app.get() registers GET endpoint handler."),
        ("Which Express method defines route handler for HTTP POST requests?", ["app.post('/path', handler)", "app.get('/path', handler)", "app.put('/path', handler)", "app.delete('/path', handler)"], 0, "app.post() registers POST endpoint handler."),
        ("How do you extract URL route parameters in Express (e.g. `/users/:id`)?", ["req.params.id", "req.query.id", "req.body.id", "req.headers.id"], 0, "Route parameters defined with `:param` are accessible in `req.params`."),
        ("How do you extract URL query string parameters in Express (e.g. `/search?q=node`)?", ["req.query.q", "req.params.q", "req.body.q", "req.data.q"], 0, "URL query parameters after `?` are accessible in `req.query`."),
        ("How do you extract JSON body data sent in POST request in Express?", ["req.body", "req.params", "req.query", "req.payload"], 0, "`req.body` contains parsed request body payload."),
        ("Which HTTP response status code should be sent when a resource is created successfully?", ["201 Created", "200 OK", "204 No Content", "400 Bad Request"], 0, "201 Created indicates successful resource creation."),
        ("Which HTTP response status code indicates client sent bad/invalid request payload?", ["400 Bad Request", "401 Unauthorized", "403 Forbidden", "404 Not Found"], 0, "400 Bad Request means server cannot process request due to client error."),
        ("Which HTTP status code indicates request lacks valid authentication credentials?", ["401 Unauthorized", "403 Forbidden", "404 Not Found", "500 Error"], 0, "401 Unauthorized means client must authenticate."),
        ("Which HTTP status code indicates client is authenticated but lacks permission to access resource?", ["403 Forbidden", "401 Unauthorized", "404 Not Found", "502 Bad Gateway"], 0, "403 Forbidden means client is authenticated but denied access."),
        ("What does REST stand for in API design?", ["Representational State Transfer", "Remote Execution System Technology", "Realtime Enterprise Storage Transfer", "Resource Encryption Standard Tool"], 0, "REST is architectural style for designing networked web APIs."),
        ("Which of the following is NOT a RESTful API constraint?", ["Stateful Session Server", "Statelessness", "Client-Server Architecture", "Cacheability"], 0, "REST APIs must be STATELESS; server should not store client session state between requests."),
        ("What is JWT (JSON Web Token)?", ["Stateless compact token used for securely transmitting information between parties as JSON object", "A database engine", "A CSS framework", "A Node module loader"], 0, "JWT is used for user authentication and authorization."),
        ("Which three parts comprise a JWT string separated by dots?", ["Header.Payload.Signature", "Key.Value.Secret", "Token.User.Hash", "ID.Role.Expire"], 0, "JWT format is `base64(Header).base64(Payload).Signature`."),
        ("Where should JWT tokens typically be sent by client in secure HTTP requests?", ["Authorization header (Bearer <token>)", "URL query string", "HTML title tag", "CSS stylesheet"], 0, "Standard convention is `Authorization: Bearer <token>` header."),
        ("What is password hashing algorithm bcrypt used for?", ["One-way cryptographic hashing of user passwords with salt", "Two-way encryption of images", "Compressing database logs", "Generating JWT tokens"], 0, "bcrypt safely hashes passwords with automatic salting to prevent rainbow table attacks."),
        ("What is CORS (Cross-Origin Resource Sharing)?", ["Browser security mechanism allowing server to explicitly permit cross-domain API requests", "Database backup tool", "CSS layout engine", "Node process manager"], 0, "CORS controls cross-domain HTTP requests from web browsers."),
        ("Which npm package is commonly used in Express to enable CORS headers?", ["cors", "helmet", "dotenv", "morgan"], 0, "The `cors` package provides middleware to handle CORS headers."),
        ("Which npm package is used to load environment variables from `.env` file into `process.env`?", ["dotenv", "env-loader", "config", "nodemon"], 0, "dotenv loads environment variables from `.env` file."),
        ("Which npm package automatically restarts Node application when file changes are detected during development?", ["nodemon / node --watch", "express", "pm2", "forever"], 0, "nodemon monitors source code and restarts process on change."),
        ("What is Mongoose in Node.js / MongoDB environment?", ["Object Data Modeling (ODM) library for MongoDB and Node.js", "SQL driver", "Web server", "Template engine"], 0, "Mongoose manages schema validation and database queries for MongoDB."),
        ("In Mongoose, what is a Schema?", ["Defines structure of document, default values, and validators", "A database backup file", "An Express route", "A JWT secret"], 0, "Mongoose Schema defines document properties and types."),
        ("In Mongoose, what is a Model?", ["Wrapper constructed from Schema providing interface to query, create, update MongoDB collections", "A JSON object", "An HTTP handler", "A CSS class"], 0, "Models are constructors compiled from Schema definitions."),
        ("Which Mongoose method creates and saves a new document in MongoDB?", ["Model.create() / doc.save()", "Model.insertRow()", "Model.append()", "Model.push()"], 0, "Model.create() or instantiating doc and calling `doc.save()` writes data to collection."),
        ("Which Mongoose method finds documents matching a query condition?", ["Model.find()", "Model.get()", "Model.select()", "Model.fetch()"], 0, "Model.find() returns array of documents matching query filter."),
        ("Which Mongoose method finds a single document by its `_id`?", ["Model.findById()", "Model.getOne()", "Model.searchId()", "Model.filterId()"], 0, "Model.findById(id) finds document by unique primary ObjectId."),
        ("Which Mongoose method updates a single document matching filter?", ["Model.updateOne() / Model.findOneAndUpdate()", "Model.change()", "Model.modify()", "Model.replace()"], 0, "updateOne or findOneAndUpdate modifies matching document."),
        ("Which Mongoose method deletes a single document by condition?", ["Model.deleteOne() / Model.findOneAndDelete()", "Model.removeRow()", "Model.drop()", "Model.truncate()"], 0, "deleteOne or findOneAndDelete removes matching document."),
        ("What is Environment Variable `process.env.PORT` used for?", ["Configuring server listening port dynamically from environment configuration", "Storing user passwords", "Defining database table names", "Setting CPU speed"], 0, "process.env.PORT allows deployment platforms (Heroku, Render) to assign listening port."),
        ("What is the purpose of HTTP `Helmet` security middleware in Express?", ["Secures Express apps by setting various HTTP security response headers", "Parses JSON body", "Logs requests to console", "Compresses HTTP responses"], 0, "Helmet sets security headers like X-Frame-Options, X-XSS-Protection, CSP."),
        ("What is Rate Limiting in API backend?", ["Limiting number of requests client can make to API within timeframe to prevent abuse/DDoS", "Limiting database size", "Slowing down CPU speed", "Limiting network bandwidth"], 0, "Rate limiting protects API endpoints against brute-force attacks and abuse."),
        ("What is WebSocket protocol (ws:// or wss://)?", ["Full-duplex persistent bidirectional communication protocol over single TCP connection", "Stateless HTTP request", "FTP file upload protocol", "Database query language"], 0, "WebSockets enable real-time two-way communication between client and server."),
        ("Which npm library is popular for real-time WebSocket communication in Node.js?", ["socket.io / ws", "axios", "fetch", "express"], 0, "socket.io enables real-time event-based communication."),
        ("What is Connection Pooling in database backend?", ["Maintaining cache of reusable database connections to avoid connection overhead", "Connecting two databases", "Deleting idle tables", "Syncing files"], 0, "Connection pool reuses active database connections to optimize performance."),
        ("What is SQL Injection attack?", ["Attacker injects malicious SQL code into input fields to manipulate backend queries", "Stealing CSS styles", "Crashing browser tab", "Sending 1000 emails"], 0, "SQL Injection occurs when untrusted user input is concatenated directly into SQL queries."),
        ("How do you prevent SQL Injection attacks in backend code?", ["Using parameterized queries / prepared statements / ORM", "Encrypting database disk", "Using GET requests only", "Removing JavaScript"], 0, "Parameterized queries separate SQL code from input data, neutralizing injection."),
        ("What is XSS (Cross-Site Scripting)?", ["Vulnerability where attacker injects malicious client-side scripts into web pages viewed by others", "Database crash", "Server power outage", "CSS layout bug"], 0, "XSS occurs when untrusted input is rendered in browser without sanitization."),
        ("How do you prevent XSS attacks in backend/frontend application?", ["Sanitizing and escaping user input before rendering in DOM", "Using HTTP 500 error code", "Disabling CSS", "Encrypting database"], 0, "Input sanitization and output encoding prevent execution of injected scripts."),
        ("What is CSRF (Cross-Site Request Forgery)?", ["Attack that forces authenticated user to execute unwanted actions on web app in which they are logged in", "Brute forcing password", "SQL injection", "Server memory overflow"], 0, "CSRF tricks victim's browser into sending unauthorized requests using cached auth cookies.")
    ]
    for idx, item in enumerate(items, 1):
        q.append({
            "id": idx,
            "question": item[0],
            "options": item[1],
            "correctAnswer": item[2],
            "explanation": item[3]
        })
    return q

def get_aiml_questions():
    q = []
    items = [
        ("What is Machine Learning?", ["Field of study giving computers ability to learn from data without being explicitly programmed", "Writing static if-else statements", "Hardware assembly of PCs", "Web page layout design"], 0, "ML algorithms build mathematical models based on sample data to make predictions."),
        ("Which type of Machine Learning uses LABELED training data?", ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Clustering"], 0, "Supervised learning maps input features to target labels using labeled data."),
        ("Which type of Machine Learning finds hidden patterns/clusters in UNLABELED data?", ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Classification"], 0, "Unsupervised learning discovers intrinsic structures in unlabeled datasets."),
        ("Which type of Machine Learning learns optimal actions through trial-and-error rewards and penalties?", ["Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Regression"], 0, "Reinforcement Learning agents learn behavior policies via environmental feedback."),
        ("Which task predicts a CONTINUOUS numeric output value (e.g. house prices)?", ["Regression", "Classification", "Clustering", "Dimensionality Reduction"], 0, "Regression predicts continuous real-valued targets."),
        ("Which task predicts a DISCRETE category label (e.g. Spam vs Not Spam)?", ["Classification", "Regression", "Clustering", "Association Rules"], 0, "Classification assigns inputs into discrete category classes."),
        ("Which of the following is a Linear Regression equation?", ["y = mx + b", "y = sigmoid(x)", "y = log(x)", "y = e^x"], 0, "Linear regression models linear relationship between feature x and target y."),
        ("Which algorithm is commonly used for binary classification outputting probabilities between 0 and 1?", ["Logistic Regression", "Linear Regression", "K-Means", "PCA"], 0, "Logistic regression uses sigmoid function to output class probabilities."),
        ("What function maps any real-valued number into a range between 0 and 1?", ["Sigmoid / Logistic Function", "ReLU", "Tanh", "Step Function"], 0, "Sigmoid function 1 / (1 + e^-z) bounds output between 0 and 1."),
        ("What is K-Means?", ["Unsupervised clustering algorithm that partitions data into K clusters", "Supervised classification tree", "Neural network activation", "Regression loss function"], 0, "K-Means groups data into K clusters by minimizing distance to cluster centroids."),
        ("What is K-Nearest Neighbors (KNN)?", ["Instance-based non-parametric algorithm classifying data based on majority vote of K nearest neighbors", "Deep neural network", "Clustering algorithm", "Linear regression model"], 0, "KNN classifies new data points based on proximity to nearest labeled neighbors."),
        ("What is Decision Tree algorithm?", ["Supervised model that splits data recursively based on feature decisions creating tree structure", "Unsupervised clustering", "Neural network optimizer", "Dimensionality reduction"], 0, "Decision Tree splits dataset into subsets based on feature threshold criteria."),
        ("Which metric measures impurity in Decision Trees?", ["Gini Impurity / Entropy (Information Gain)", "Mean Squared Error", "Precision", "Cosine Distance"], 0, "Gini Impurity and Entropy measure disorder/heterogeneity of node classes."),
        ("What is a Random Forest?", ["Ensemble learning method operating by constructing multitude of decision trees at training time", "Single decision tree", "Linear regression model", "Neural network layer"], 0, "Random Forest combines predictions of multiple decision trees (bagging)."),
        ("What is Support Vector Machine (SVM)?", ["Supervised algorithm that finds hyper-plane maximizing margin between classes", "Clustering method", "Neural net optimizer", "Decision tree"], 0, "SVM finds optimal decision boundary (hyperplane) with maximum margin."),
        ("What is Kernel Trick in SVM?", ["Transforming data into higher-dimensional space to make non-linearly separable data linearly separable", "A trick to speed up CPU", "A data cleaning step", "A neural activation"], 0, "Kernel functions compute inner products in high-dimensional feature space implicitly."),
        ("What is Overfitting in Machine Learning?", ["Model performs exceptionally well on training data but poorly on unseen test data", "Model performs poorly on both training and test data", "Model trains in under 1 second", "Model has no parameters"], 0, "Overfitting means model memorized training noise rather than generalizable pattern."),
        ("What is Underfitting in Machine Learning?", ["Model is too simple to capture underlying trend of training data", "Model performs 100% on test data", "Model has too many parameters", "Model memorized data"], 0, "Underfitting occurs when algorithm cannot learn patterns from training set."),
        ("How do you detect Overfitting during training?", ["High training accuracy but significantly lower validation/test accuracy", "Low training accuracy", "Equal training and validation accuracy", "Fast training speed"], 0, "Large gap between high train performance and low validation performance indicates overfitting."),
        ("What is Bias-Variance Tradeoff?", ["Conflict between minimizing model underfitting (bias) and sensitivity to data fluctuations (variance)", "Tradeoff between CPU and RAM", "Tradeoff between speed and accuracy", "Tradeoff between disk and network"], 0, "High bias leads to underfitting; high variance leads to overfitting."),
        ("Which technique is used to prevent Overfitting by penalizing large parameter weights?", ["Regularization (L1 Lasso / L2 Ridge)", "Gradient Descent", "Data Imputation", "Feature Scaling"], 0, "Regularization adds penalty term (L1/L2) to loss function to keep weights small."),
        ("What is L1 Regularization (Lasso)?", ["Adds absolute value of coefficients to loss function, driving redundant feature weights to zero", "Adds squared coefficients", "Multiplies weights by 2", "Removes dataset rows"], 0, "L1 regularization performs feature selection by driving irrelevant feature weights to exactly 0."),
        ("What is L2 Regularization (Ridge)?", ["Adds squared magnitude of coefficients to loss function, shrinking weights evenly", "Adds absolute value", "Sets weights to zero", "Increases learning rate"], 0, "L2 regularization prevents any single feature from dominating by shrinking weights smoothly."),
        ("What is Cross-Validation (e.g. K-Fold Cross-Validation)?", ["Resampling technique evaluating model performance across K distinct folds of dataset", "Splitting data into 2 parts", "Training model K times on full data", "Testing model on training set"], 0, "K-Fold cross-validation splits data into K subsets to validate generalization stability."),
        ("What is Data Preprocessing scaling technique `Min-Max Scaling`?", ["Rescales features to fixed range [0, 1]", "Transforms features to mean=0, std=1", "Removes outliers", "Converts categorical strings"], 0, "Min-Max scaling formula: (x - min) / (max - min)."),
        ("What is `Standardization` (Z-score normalization)?", ["Rescales features to have Mean = 0 and Standard Deviation = 1", "Rescales to [0, 1]", "Converts text to numbers", "Fills missing values"], 0, "Standardization formula: (x - mean) / std."),
        ("What is One-Hot Encoding?", ["Converting categorical text variables into binary (0/1) indicator columns", "Normalizing numbers", "Removing duplicate rows", "Grouping continuous data"], 0, "One-Hot encoding represents nominal categories as binary vectors."),
        ("What is Confusion Matrix?", ["Tabular summary of prediction results showing True Positives, True Negatives, False Positives, False Negatives", "A mathematical error", "A matrix of feature weights", "A neural layer"], 0, "Confusion Matrix evaluates classification model performance metrics."),
        ("What is Accuracy metric in classification?", ["Ratio of correct predictions (TP + TN) to total predictions", "TP / (TP + FP)", "TP / (TP + FN)", "FP / TN"], 0, "Accuracy = (True Positives + True Negatives) / Total Samples."),
        ("What is Precision metric?", ["TP / (TP + FP) — proportion of positive identifications that were actually correct", "TP / (TP + FN)", "TN / (TN + FP)", "Accuracy"], 0, "Precision measures exactness: how many predicted positives are true positives."),
        ("What is Recall (Sensitivity) metric?", ["TP / (TP + FN) — proportion of actual positives that were identified correctly", "TP / (TP + FP)", "TN / (TN + FP)", "Precision"], 0, "Recall measures completeness: how many actual positive cases were caught."),
        ("What is F1-Score?", ["Harmonic mean of Precision and Recall: 2 * (P * R) / (P + R)", "Arithmetic mean of Precision and Recall", "Accuracy * Precision", "Recall / Precision"], 0, "F1-Score balances Precision and Recall, especially for imbalanced datasets."),
        ("What is ROC Curve (Receiver Operating Characteristic)?", ["Plot of True Positive Rate vs False Positive Rate at various classification thresholds", "Plot of loss vs epochs", "Feature importance graph", "Tree diagram"], 0, "ROC curve illustrates diagnostic ability of binary classifier across thresholds."),
        ("What does Area Under the ROC Curve (AUC-ROC) score of 1.0 indicate?", ["Perfect classifier", "Random guessing classifier", "Worst possible classifier", "Overfitted model"], 0, "AUC = 1.0 represents a flawless classification performance."),
        ("What is Mean Squared Error (MSE) in regression evaluation?", ["Average of squared differences between predicted values and actual targets", "Average absolute error", "Percentage error", "Accuracy score"], 0, "MSE measures average squared prediction residual magnitude."),
        ("What is Root Mean Squared Error (RMSE)?", ["Square root of Mean Squared Error, expressed in same units as target variable", "Square of MSE", "Absolute error", "R2 score"], 0, "RMSE brings error metric back to original scale of target values."),
        ("What is R-squared (R²) metric in regression?", ["Proportion of variance in target variable predictable from features (0 to 1)", "MSE ratio", "Accuracy percentage", "Error count"], 0, "R² (Coefficient of Determination) measures goodness of fit."),
        ("What is Gradient Descent?", ["Optimization algorithm iteratively adjusting model parameters to minimize loss function", "Classification algorithm", "Clustering method", "Feature scaling technique"], 0, "Gradient Descent steps parameters in direction opposite to loss gradient."),
        ("What is Learning Rate (alpha) in Gradient Descent?", ["Hyperparameter controlling step size taken toward loss minimum at each iteration", "Number of training epochs", "Number of features", "Model accuracy"], 0, "Learning rate dictates size of parameter update steps."),
        ("What happens if Learning Rate (alpha) is set TOO HIGH?", ["Gradient Descent may overshoot minimum and diverge", "Training becomes extremely slow", "Model underfits", "Memory runs out"], 0, "Too high learning rate causes parameter updates to oscillate or diverge."),
        ("What happens if Learning Rate (alpha) is set TOO LOW?", ["Gradient Descent takes very small steps making training extremely slow", "Model overshoots", "Loss explodes", "Accuracy drops instantly"], 0, "Too low learning rate requires excessive epochs to converge."),
        ("What is Stochastic Gradient Descent (SGD)?", ["Gradient Descent variant updating parameters using single random sample per iteration", "Updating parameters on full dataset", "Updating on mini-batches", "Grid search"], 0, "SGD computes loss gradient on individual samples for fast, stochastic updates."),
        ("What is an Artificial Neural Network (ANN)?", ["Computing system inspired by biological neural networks consisting of connected layers of nodes (neurons)", "SQL database", "Decision tree forest", "Linear regression equation"], 0, "ANNs consist of input, hidden, and output layers of interconnected artificial neurons."),
        ("What is Activation Function in Neural Networks?", ["Non-linear function applied to neuron's weighted sum input to enable learning complex patterns", "Loss function", "Optimizer", "Input scaling"], 0, "Activation functions introduce non-linearity so networks can learn non-linear relationships."),
        ("Which Activation Function outputs max(0, x)?", ["ReLU (Rectified Linear Unit)", "Sigmoid", "Tanh", "Softmax"], 0, "ReLU sets negative values to 0 and passes positive values through unchanged."),
        ("Which Activation Function is used in multi-class classification output layer to generate probability distribution?", ["Softmax", "Sigmoid", "ReLU", "Tanh"], 0, "Softmax normalizes real-valued vector into probability distribution summing to 1."),
        ("What is Backpropagation in Neural Networks?", ["Algorithm computing gradient of loss function with respect to each weight using chain rule to update weights", "Forward pass calculation", "Data loading step", "Network initialization"], 0, "Backpropagation calculates partial derivatives backward through network layers."),
        ("What is Epoch in Neural Network training?", ["One complete pass of entire training dataset through neural network", "Processing a single batch", "Updating one weight", "One second of runtime"], 0, "An epoch means every training sample has been processed once by network."),
        ("What is Batch Size in deep learning?", ["Number of training samples processed in one forward/backward pass before updating weights", "Total dataset size", "Number of layers", "Number of output classes"], 0, "Batch size defines number of samples evaluated before weight update."),
        ("What is Principal Component Analysis (PCA)?", ["Unsupervised linear dimensionality reduction technique projecting data onto orthogonal components maximizing variance", "Supervised classification algorithm", "Neural network optimizer", "Clustering method"], 0, "PCA projects high-dimensional data onto lower-dimensional subspace while retaining maximum variance.")
    ]
    for idx, item in enumerate(items, 1):
        q.append({
            "id": idx,
            "question": item[0],
            "options": item[1],
            "correctAnswer": item[2],
            "explanation": item[3]
        })
    return q

subjects = [
    {
        "id": "frontend",
        "title": "Front End Engineering",
        "semester": "Semester 1 & 3",
        "icon": "🎨",
        "category": "Web Dev",
        "description": "HTML5, CSS3, JavaScript ES6+, React, DOM manipulation, and responsive web design.",
        "questions": get_frontend_questions()
    },
    {
        "id": "python",
        "title": "Python Programming",
        "semester": "Semester 1",
        "icon": "🐍",
        "category": "Languages",
        "description": "Core syntax, data types, lists, dictionaries, list comprehensions, and OOP in Python.",
        "questions": get_python_questions()
    },
    {
        "id": "os",
        "title": "Operating Systems",
        "semester": "Semester 2",
        "icon": "💻",
        "category": "Systems",
        "description": "Processes, threads, CPU scheduling algorithms, virtual memory, and deadlock prevention.",
        "questions": get_os_questions()
    },
    {
        "id": "dbms",
        "title": "Database Management Systems (DBMS)",
        "semester": "Semester 3",
        "icon": "🗄️",
        "category": "Databases",
        "description": "SQL queries, relational algebra, normalization (1NF-5NF), indexing, and ACID transactions.",
        "questions": get_dbms_questions()
    },
    {
        "id": "dsa",
        "title": "Data Structures & Algorithms",
        "semester": "Semester 4",
        "icon": "⚡",
        "category": "Algorithms",
        "description": "Arrays, stacks, queues, linked lists, trees, graphs, sorting, and Big-O time complexity.",
        "questions": get_dsa_questions()
    },
    {
        "id": "backend",
        "title": "Backend Engineering",
        "semester": "Semester 4",
        "icon": "⚙️",
        "category": "Backend",
        "description": "Node.js runtime, Express REST APIs, JWT authentication, MongoDB/Mongoose, and middleware.",
        "questions": get_backend_questions()
    },
    {
        "id": "ai_ml",
        "title": "Machine Learning & AI",
        "semester": "Semester 5",
        "icon": "🤖",
        "category": "AI & ML",
        "description": "Supervised & unsupervised learning, classification, linear regression, neural networks, and evaluation metrics.",
        "questions": get_aiml_questions()
    }
]

js_content = f"export const quizSubjects = {json.dumps(subjects, indent=2)};\n"

with open(quiz_file_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated clean JS file with 50 MCQs per subject in {quiz_file_path}")
