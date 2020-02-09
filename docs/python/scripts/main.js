const store = new Vuex.Store({
    state: {
        currentID: 0,
        showHamburger: false,
        sectionList: [
            {id: 0, title: 'Getting Started', content: [
                {title: "Introduction", columns: false, content: [{
                    id: 0,
                    text: "<p>Hello, my name is Duncan, and this is my little Python website on the internet. I hope the pages on here end up being helpful for you, my dear reader.</p><p>This was initially a bunch of Markdown files written for a friend to help him to learn Python for one of his upcoming classes, but eventually more people expressed interest in the project so I decided to make it into an actual site that I can hopefully one day make into one of the best wealths of information for all things Python. If you have any suggestions, I'd be happy to hear them, my contacts are down in the footer below and I wish you well with your learning adventure. :]</p>"

                }]},
                {title: "Installation", columns: false, content: [{
                    id: 0, 
                    text: "<p>Let's start your introduction to Python by making sure you have installed it correctly.</p><h1>Windows store</h1><p>If you're running Windows 10 you can install <a href='https://www.microsoft.com/store/productId/9NJ46SX7X90P'>Python via the windows store</a>, which will automatically update your Python to the most current version. You don't have to do this, it's not what I've done personally, but it's worth checking out.</p><h1>Installer from python.org</h1><p>Make sure you have the latest version of the installer:</p><ul><li><a href='https://www.python.org/downloads/windows/'>Windows</a></li><li><a href='https://www.python.org/downloads/mac-osx/'>Mac OS X</a></li><li><a href='https://www.python.org/downloads/source/'>Linux</a></li></ul><h1>Python for phones</h1><p>I personally haven't programmed on my phone before, but I understand that some people don't have access to a computer or just want to program on their mobile device, and for them they can use apps like:</p><ul><li><a href='https://www.microsoft.com/store/productId/9NBLGGH083NZ'>Python 3 for Windows Phone</li><li><a href='https://play.google.com/store/apps/details?id=org.qpython.qpy3'>QPython3 for Android</a></li><li><a href='https://apps.apple.com/us/app/python3ide/id1357215444'>Python3IDE for iOS</a></li></ul><p>Please note that I don't program on my phone so these apps might not be the best out there.</p><p>I'm personally running version 3.7.3, but any version after 3.6 as far as I'm aware will work for what I'll be doing, but to be on the safe side, try to make sure you're on the latest version.</p>"
                },
                {
                    id: 1,
                    text: "<p>When you go to install it make sure you check the box that adds Python to PATH. It's on one of the first slides at the bottom of the installer and is usually unchecked by default.</p><picture><img src='images/path.png' alt='Image of Python installer with 'Add Python 3.7 to PATH' circled'/></picture><p>This is important as it means you can run Python scripts, access the Python shell, and most importantly for later it'll mean you can use pip from the command prompt.</p>"
                }]},
                {title: "Editors and Linters", columns: false, content: [{
                    id: 0,
                    text: "<h1>Editors</h1><p>Now that you have Python installed and in your systems PATH environment variable (The windows store version does this, don't worry). We can begin. Feel free to use whatever editor you prefer, it doesn't really matter. If you don't know which one to use for Python, here is a list of popular editors:</p><ul><li><a href='https://www.jetbrains.com/pycharm/'>Pycharm</a></li><li><a href='https://code.visualstudio.com/'>Visual Studio Code</a></li><li><a href='https://notepad-plus-plus.org/'>Notepad++</a></li><li><a href='https://wingware.com/'>Wing IDLE</a></li><li><a href='https://www.sublimetext.com/'>Sublime Text</a></li></ul><p>There's more than this out there, but these are all good. And it doesn't really matter, the default editor will work fine.</p><h1>Formatters and linters</h1><p>If you have other people working on your code with you, or if you end up taking an extended break from your code, having it be readable and easier to understand is a godsend.</p><p>You can check some formatters out here:</p><ul><li><a href='https://github.com/Python/black'>Black - The Uncompromising Code Formatter</a></li><li><a href='https://www.pylint.org/'>Pylint</a></li></ul><p>Programming is about expressing your creative thought into logic that can be understood by a computer, it's why I personally find it so fun. So don't worry if you're not using any of this. Try to remember that, it's supposed to be fun.</p>"
                }]}
            ]},
            {id: 1, title: 'What is Python?', content: [
                {title: "Python the Interpreter", columns: false, content: [{
                    id: 0,
                    text: "<p>Python may be different to languages that you have used before or will use in the future. Python is an interpreted high level language. What that means is, Python will talk to your computer by converting the code you've written into instructions that it can understand one instruction at a time.</p><p>That's what an interpreter does, a compiler on the other hand will convert the entire program to instructions that the computer can understand in one go. They both have their advantages, but generally compilers are faster than interpreters, but I wouldn't worry about that, Python is relevant and widely appreciated by programmers worldwide despite that.</p><p>Continuing the explanation, to be high level as a programming language, the language is far less complex and thus easier for humans to understand, sacrificing performance and control in return for an easier programming experience.</p><p>Because the logic behind programs is generally the same despite this, you still have to think the same way when programming in a lower level language like Rust or C++ as you do when you program in Python, but an advantage of it is you can implement your creative ideas quickly and easily.</p>"
                },
                {
                    id: 1,
                    text: "<p>Here's a good video that explains the concept well, better than I ever could, even if it is a little dated:</p><iframe src='https://www.youtube.com/embed/_C5AHaS1mOA'  frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
                }]},
                {title: "The Python shell", columns: false, content: [{
                    id: 0,
                    text: '<p>One of the advantages of Python being an interpreted language is that you can write code and get instant feedback. A way to do this is by using the Python shell, to open it you can open the default Python IDLE, or type \'py\' into cmd or powershell. (If this doesn\'t work try \'python\' or \'python3\', if you can\'t get it to work at all, make sure Python is in your PATH)</p><p>A good way to get an understanding of how the interpreter works is to use the shell, think of every line in your code as another line typed out into the shell. One by one.</p><p>For the first few topics, I will be using the Python in \'interactive mode\', which is just another way to say that I\'ll be using the Python shell to demonstrate them.</p><p>When you open the shell via the terminal, it should look something like this (I\'m on windows).</p><pre class="code-block">C:\\Users\\user> py\nPython 3.7.3 (v3.7.3:ef4ec6ed12, Mar 25 2019, 22:22:05) [MSC v.1916 64 bit (AMD64)] on win32<br>Type "help", "copyright", "credits" or "license" for more information.<br>>>></pre><p>Exiting the python shell (with <code>exit()</code>) you can run <code>py --version</code> to check your version of Python. (Even though it tells you in the top line of the shell)</p><pre class="code-block">C:\\Users\\user> py --version<br>Python 3.7.3</pre>'
                }]}
            ]},
            {id: 2, title: 'Expressions', content: [
                {title: "Introduction", columns: false, content: [{
                    id: 0,
                    text: "<p>The first concept I would like to introduce to you is <b>Expressions</b>. You should be familiar with these if you've done any form of mathematics in your life, you might not be familiar with the terminology surrounding them and that's okay. That's not what is important here, the skills are.</p><p>Here is an example of an Expression:</p><code>(52 + 7 * 4) - 11</code><p>You probably know exactly what an expression is now, just by looking at that, but indulge me for a moment, expressions are built up of <b>operands</b> and <b>operators</b>. Operands in this example being 52, 7, 4 and 11. The operators in this case are +, * and -. What it equals isn't really important, but if you figure it out, good for you.</p>"
                }]},
                {title: "Concepts", columns: false, content: [{
                    id: 1,
                    text :"<p>Operands can be anything that can represent a value, so if you have x that equals a number then that would be a valid operand.</p><p>Operators are the symbols that denote what operation should be done to it's accompanying operands. There are few of them, the ones I want to show you are:</p><ul><li><code>+</code> for addition</li><li><code>-</code> for subtraction</li><li><code>*</code> for multiplication</li><li><code>/</code> for division</li><li><code>//</code> for integer/floor division (rounding down to the closest lowest whole number)</li><li><code>**</code> for exponentiation</li><li><code>%</code> for modular arithmetic (also known as: modulus/modulo/mod)</li></ul><p>You might have noticed that the first 4 are pretty simple, and they are. Good job for picking up on that.</p>"
                }]},
                {title: "Examples", columns: false, content: [{
                    id: 2,
                    text: "<p>Here are some examples of these operations in use, feel free to play around with the Python shell by writing some expressions yourself!</p><pre class='code-block'><span class='operator'>>>></span> 3 <span class='operator'>+</span> 2<br>5<br><span class='operator'>>>></span> 3 <span class='operator'>-</span> 2<br>1<br><span class='operator'>>>></span> 3 <span class='operator'>*</span> 2<br>6<br><span class='operator'>>>></span> 3 <span class='operator'>/</span> 2<br>1.5<br><span class='operator'>>>></span> 3 <span class='operator'>//</span> 2<br>1<br><span class='operator'>>>></span> 3 <span class='operator'>//</span> 2 <span class='operator'>+</span> 1 <span class='comment'># Please note that to do ceiling division, you just add one onto the result of floor division</span><br>2<br><span class='operator'>>>></span> 3 <span class='operator'>**</span> 2<br>9<br><span class='operator'>>>></span> 3 <span class='operator'>%</span> 2<br>1</pre>"
                }]},
                {title: "See also", columns: false, content: [{
                    id: 3,
                    text: "<p>If you need any help understanding integer division, exponentiation or modular arithmetic, then I would recommend checking out these links:</p><ul><li><a href='https://www.youtube.com/watch?v=RxNs4SwP6lk'>Floor and Ceiling division</a></li><li><a href='https://www.khanacademy.org/math/pre-algebra/pre-algebra-exponents-radicals#pre-algebra-exponents'>Exponentiation</a></li><li><a href='https://www.khanacademy.org/computing/computer-science/cryptography#modarithmetic'>Modular arithmetic</a></li></ul>"
                }]}
            ]},
            {id: 3, title: 'Variables', content: [
                {title: "Introduction", columns: false, content: [{
                    id: 0,
                    text: "<p>Now this is all well and good, but what if you want to use the result of your expression for later?</p><p>You can assign it to a variable like so: <code>x = 3 + 2</code>, this will create an <code>int</code> called <code>x</code> that is equal to <code>5</code>. You could then use <code>x</code> later on, or change it like so:</p><pre class='code-block'><span class='operator'>>>></span> x <span class='operator'>=</span> 3 <span class='operator'>+</span> 2<br><span class='operator'>>>></span> x<br>5<br><br><span class='operator'>>>></span> x <span class='operator'>=</span> x <span class='operator'>-</span> 2 <span class='comment'># 5 - 2</span><br><span class='operator'>>>></span> x<br>3<br><br><span class='operator'>>>></span> x <span class='operator'>*=</span> 2 <span class='comment'># 3 * 2</span><br><span class='operator'>>>></span> x<br>6</pre><p>As you may have noticed, I did <code>x *= 2</code>. This is shorthand for <code>x = x * 2</code>. It will do the same thing and you can use this format for any operator.</p>"
                }]},
                {title: "Naming", columns: false, content: [{
                    id: 1,
                    text: "<p>You can use any letter or an underscore as the first character of a variable name, and for any character after that can be any letter, number or an underscore.</p><p>Now before you go and start naming variables willy-nilly. There are commonly accepted conventions for how you should name things, as I introduce new concepts I'll say what their naming convention is, but as for what we have covered so far by <a href='https://www.python.org/dev/peps/pep-0008/'>PEP 8</a>:</p><ul><li>Variable names should be completely lowercase with words separated by an underscore</li><li>Globals (Variables that can be accessed from anywhere in the code and can be changed) should follow the same convention as variables</li><li>Constants (Variables that you can access for later, and which shouldn't be changed e.g. <code>PI = 3.14</code>) should be completely uppercase with words separated by an underscore</li></ul><p>I wouldn't worry too much about globals or constants, as you probably won't be needing to use them for a while.</p><p><b>If you use a linter one of the things that it will check is if you follow naming conventions.</b></p>"
                }]}
            ]},
            {id: 4, title: 'Conditionals', content: [
                {title: "Introduction", columns: false, content: [{
                    id: 0,
                    text: "<p>What if we wanted to do different things to <code>x</code> based on what <code>x</code> is?<br>Well, we can, we can use an <code>if</code> statement.</p><p>Usage in Python looks like this:</p><pre class='code-block'><span class='keyword'>if</span> condition:<br>    do stuff</pre><p><code>condition</code> in this case is a conditional, some examples being:</p><pre class='code-block'><span class='operator'>>>></span> x = 0<br><span class='operator'>>>></span> x<br>0<br><br><span class='operator'>>>></span> x <span class='operator'>==</span> 0 <span class='comment'># x is equal to 0</span><br><span class='keyword'>True</span><br><br><span class='operator'>>>></span> x <span class='operator'>></span> 0 <span class='comment'> # x is greater than 0</span><br><span class='keyword'>False</span><br><br><span class='operator'>>>></span> x <span class='operator'><=</span> 0 <span class='comment'># x is less than or equal to 0</span><br><span class='keyword'>True</span><br><br><span class='operator'>>>></span> x <span class='operator'>!=</span> 0 <span class='comment'># x is not equal to 0</span><br><span class='keyword'>False</span></pre>"
                }]},
                {title: "Booleans and equivalences", columns: false, content: [{
                    id: 0,
                    text: "<p>As you can see, these conditionals return <code>True</code> or <code>False</code>, this is because they are booleans. Equivalents to these will also work as conditions. If <code>x</code> is <code>1</code> then <code>x</code> will be equivalent to <code>True</code> meaning instead of having to write:</p><pre class='code-block'><span class='keyword'>if</span> x <span class='operator'>==</span> 1:</pre><p>you can write</p><pre class='code-block'><span class='keyword'>if</span> x: <span class='comment'># This is shorthand for if x is True</span></pre><p>The opposite goes for <code>False</code></p><pre class='code-block'><span class='keyword'>if</span> x <span class='operator'>==</span> 0:</pre><p>to get this, we have to <b>negate</b> (or invert) the previous statement, we do this by using <code>not</code></p><pre class='code-block'><span class='keyword'>if</span> <span class='operator'>not</span> x:</pre>"
                }]},
                {title: "Using the <code>and</code> and <code>or</code> keywords", columns: false, content: [{
                    id: 0,
                    text: "<p>If you want to have multiple conditions where they both have to be <code>True</code> you can do this</p><pre class='code-block'><span class='keyword'>if</span> condition1 <span class='operator'>and</span> condition2:<br>    do stuff</pre><p>if you want to have multiple conditions where only one has to be <code>True</code> you can do this</p><pre class='code-block'><span class='keyword'>if</span> condition1 <span class='operator'>or</span> condition2:<br>    do stuff</pre><p>it's very important that you make sure that your conditional is written correctly, sometimes you will need to use parenthesis</p><pre class='code-block'><span class='operator'>>>></span> <span class='keyword'>False</span> <span class='operator'>and</span> <span class='keyword'>True</span> <span class='operator'>or</span> <span class='keyword'>True</span>       <span class='comment'># False and True have to be the same so they're False, making the statement False or True, so this is True</span><br><span class='keyword'>True</span><br><br><span class='operator'>>>></span> <span class='keyword'>False</span> <span class='operator'>and</span> (<span class='keyword'>True</span> <span class='operator'>or</span> <span class='keyword'>True</span>)     <span class='comment'># False and (True or True) becomes False and True, which is False</span> <br><span class='keyword'>False</span><br><br><span class='operator'>>>></span> (<span class='keyword'>False</span> <span class='operator'>and</span> <span class='keyword'>True</span>) <span class='operator'>or</span> <span class='keyword'>True</span>     <span class='comment'># False and True make False, making the statement False or True, so this is True</span> <br><span class='keyword'>True</span><br><br><span class='operator'>>>></span> <span class='operator'>not</span> <span class='keyword'>False</span> <span class='operator'>and</span> <span class='keyword'>True</span> <span class='operator'>or</span> <span class='keyword'>True</span>   <span class='comment'># not False, which is True makes the statement True and True or True, which is going to be True</span> <br><span class='keyword'>True</span><br><br><span class='operator'>>>></span> <span class='operator'>not</span> (<span class='keyword'>False</span> <span class='operator'>and</span> <span class='keyword'>True</span> <span class='operator'>or</span> <span class='keyword'>True</span>) <span class='comment'># This is a negation of the first conditional, so it is False</span> <br><span class='keyword'>False</span></pre><p>don't forget, even these statements using <code>or</code> and <code>and</code> are conditionals too.</p>"
                }]},
                {title: "<code>if</code> statements", columns: false, content: [{
                    id: 0,
                    text: "You can use these conditionals inside <code>if</code> statements (and loops, which I'll explain in the future!) but it's time to explain how <code>if</code> statements work in Python, there are:<ul><li><code>if</code> statements, these are the first part of the your <code>if</code> statement</li><li><code>elif</code> statements, these are the same as <code>if</code> statements, but they are checked after the statement above them if it isn't <code>True</code></li><li><code>else</code> statements, these do not have any conditions, but you can use them to catch if your <code>if</code>s and <code>elif</code>s turn up <code>False</code></li></ul><p>Let's see some examples of them:</p><pre class='code-block'><span class='keyword'>if</span> <span class='keyword'>False</span>: <span class='comment'># Because this conditional is False, the code inside it will not run, instead it will check the next part of the if statement, the elif statement</span><br>    do stuff<br><br><span class='keyword'>elif</span> <span class='keyword'>False</span>: <span class='comment'># This conditional is also False, so the program will move onto the next statement</span><br>    do stuff<br><br><span class='keyword'>elif</span> <span class='keyword'>True</span>: <span class='comment'># Because this conditional is True, the code inside it will be run</span><br>    do stuff<br><br><span class='keyword'>else</span>: <span class='comment'># Because the statement before it was True, the code inside the else statement will not be run because the if statement ended at the second elif</span><br>    do stuff</pre><p><b>From this point on I will be using \"Script mode\", meaning I'll have a Python file open and running that instead of typing line by line into the shell. Unless I'm not and I say so.</b></p>"
                }]}
            ]},
            {id: 5, title: 'Function Basics', content: [
                {title: "Defining and returning", columns: false, content: [{
                    id: 0,
                    text: "<p>What if you could do the same piece of code to different variables, <b>without</b> having to write the code multiple times? That's what a function is, it allows you to set <b>local</b> variables only it can use inside itself, where you can give it instructions on what you want it to do with it, you can have it <code>return</code> values back or just do an action.</p><p><b>Functions follow the same naming convention as variables (lowercase with words separated by underscores)</b></p><p>To define a function, we use the <code>def</code> keyword followed by what we want to name the function, ending the line with parenthesis with what variables we want to use inside them. With a colon as the last character.</p><p>Let's look at an example:</p><pre class='code-block'><span class='keyword'>def</span> <span class='method'>function</span>(x, y):<br>    z <span class='operator'>=</span> x <span class='operator'>+</span> y<br>    z <span class='operator'>*=</span> y<br>    <span class='keyword'>return</span> z</pre><p>This will return the product of <code>y(x + y)</code>, if <code>x</code> was <code>2</code> and <code>y</code> was <code>3</code> then <code>function(3, 2)</code> would return <code>z</code> which would be equal to <code>10</code>.</p><p>You might be wondering why I don't write this instead:</p><pre class='code-block'><span class='keyword'>def</span> <span class='method'>function</span>(x, y):<br>    x <span class='operator'>+=</span> y<br>    x <span class='operator'>*=</span> y<br>    <span class='keyword'>return</span> x</pre><p>it will do the same thing, however, this is bad practice, as in the future some different types of variables can be edited from inside a function this way.</p><p>You can however compact this code down to one line, and you should try to make sure your code takes up as least amount of lines as possible, just be sure to keep it readable, <a href='https://www.python.org/dev/peps/pep-0008/'>PEP 8</a> recommends a maximum line length of 79 characters (72 for comments and docstrings, which I'll bring up soon), this is what lints and formatters will try to enforce, it's good habit to keep your code succinct. like so:</p><pre class='code-block'><span class='keyword'>def</span> <span class='method'>function</span>(x, y):<br>    <span class='keyword'>return</span> (x <span class='operator'>+</span> y) <span class='operator'>*</span> y</pre><p>It ends up looking a little more complicated, but I'd recommend trying to do this where you can, just make sure you don't go overboard and create problems for yourself or others later down the line by making it hard to understand. Try to find a good balance.</p>"
                }]},
                {title: "Calling a function", columns: false, content: [{
                    id: 0,
                    text: "<p>Returning is all well and good, but it's useless if we're not returning into something. So when we call the function, instead of just writing <code>function(2, 3)</code> we can write <code>z = function(2, 3)</code>, this way we can use the value that is returned later, as a variable.</p><p>You can also call functions from inside themselves as well as being able to call and define functions from inside other functions. Examples being:</p><pre class='code-block'><span class='keyword'>def</span> <span class='method'>function1</span>(x, y):<br>    function1() <span class='comment'># This will go on forever, in theory. This is called recursion and it is a very powerful tool</span><br><br><br><span class='keyword'>def</span> <span class='method'>function2</span>(x, y):<br>    function1()<br><br><br><span class='keyword'>def</span> <span class='method'>function3</span>(x, y):<br>    <span class='keyword'>def</span> <span class='method'>function4</span>(x, y):<br>        <span class='keyword'>pass</span><br><br><span class='keyword'>def</span> <span class='method'>function5</span>(x, y):<br>    function4() <span class='comment'># You cannot do this, as function4 was defined inside function 3 and can only be used inside it</span></pre><p>Functions don't have to return something, they can just print something instead of returning it, or they can save something to a file, it's up to you.</p><p><b>Remember: Python can do anything and so can you. :]</b></p>"
                }]}
            ]},
            {id: 6, title: 'Formatting & Docstrings', content: [
                {title: "Formatting", columns: false, content: [{
                    id: 0,
                    text: "<h1>Introduction</h1><p>Since I\'ve brought up <a href='https://www.python.org/dev/peps'>PEP</a> a couple times, I should probably talk about it in a little more depth, it\'s the official standard for how you should do things in Python, you code will work regardless of whether you follow it, but if you ever want to work collaboratory with other Python programmers, these rules are built upon the most common practices of the programmers out there, however if you want to use tabs over spaces, not include docstrings or go over the recommended line character limit, that\'s totally within your rights.</p><p>But someone, somewhere will judge you for it, especially if you use different indentation to them.<br>People really hate that.</p>"
                },
                {
                    id: 1,
                    text: "<h1>Indentation</h1><p>Python unlike other languages enforces indentation, either a tab, 4 spaces or 2 spaces, although the first two are probably the better option in my opinion.</p><p>Indentation is the whitespace that aligns your code so you can see what scope (what your code is inside of) is in. Generally good practice in other languages, but compulsory and part of the syntax in Python.</p><p>Most editors auto indentate for you, so it\'s not too difficult. However whichever indentation method you choose, you must stick to it. <b>Do not mix tabs and spaces.</b> Keep your indentation consistent.</p>"
                },
                {
                    id: 2,
                    text: "<h1>Commenting</h1><p>As you have probably noticed, I have been putting comments into some of the coding examples behind a <code>#</code>. This is how you comment in Python, the space that I put after the <code>#</code> is optional, but is recommended by <a href='https://www.python.org/dev/peps/pep-0008/#comments'>PEP 8.</a></p><p>Comments are handy when you want to explain what a complex line does, or for what you need to implement later. Use them in whatever way you see fit, they don't affect how the code is run.</p>"
                }]},
                {title: "Docstrings", columns: true, content: [{
                    id: 0,
                    text: "<h1>Single line Docstrings</h1><p>Docstrings are covered by <a href='https://www.python.org/dev/peps/pep-0257/#one-line-docstrings'>PEP 257</a>, but to summarise it:</p><ul><li>Describe what your function is supposed to do, on the line after your function definition, in the form of \"Do X and return Y\"</li><li>Use triple quotes (<code>\"\"\"</code>)</li></ul><p>This is just for one line docstrings, which for this level will be more than enough.</p><p>A function with a docstring using our previous example would look like:</p><pre class='code-block'><span class='keyword'>def</span> <span class='method'>function</span>(x, y):<br>    <span class='comment'>\"\"\"Multiply the product of x + y by y and return the result\"\"\"</span><br>    <span class='keyword'>return</span> (x <span class='operator'>+</span> y) <span class='operator'>*</span> y</pre><p>Note that I put a space after commas and around operators, this is covered by <a href='https://www.python.org/dev/peps/pep-0008/#whitespace-in-expressions-and-statements'>PEP 8</a>, you don't have to do it, but I think it just looks nice.</p>"
                },
                {
                    id: 1,
                    text: "<h1>Multiline docstrings</h1><p>Previously I talked about single line docstrings, there is another type that explains the function of the program you are making in more detail. These as you can probably guess from the header, take up multiple lines.</p><p>They are also unsurprisingly more complex, which helps in providing more information to anyone reviewing the code that you are writing.</p><p>Sections in function multiline docstrings are:</p><ul><li>Args: A list of the parameters and their types that are used in the function.</li><li>Returns/Yields: A description of what the function returns/yields. (I will be covering yields in a later article, don't worry. :])</li><li>Raises: All exceptions that might be raised, so long as they're relevant.</li></ul><p>These are all covered in <a href='https://www.python.org/dev/peps/pep-0257/#multi-line-docstrings'>PEP 257</a> and by the <a href='https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings'>Google Python Style Guide</a></p><p>A multiline docstring using the example above could look like this:</p><pre class=\'code-block\'><span class=\'keyword\'>def</span> <span class=\'method\'>function</span>(x, y):<br>    <span class=\'comment\'>\"\"\"Multiply the result of x + y by y and return the result.<br>    Args: <br>        x: An integer.<br>        y: An integer.<br><br>    Returns:<br>        The product of x + y multiplied by y.\"\"\"</span><br>    <span class='keyword'>return</span> (x <span class=\'operator\'>+</span> y) <span class=\'operator\'>*</span> y</pre><p>Now, this example is pretty simple. If it is <b>obvious</b> what a function does or if it is <b>short</b> like the example above is. Then you don't have to include any docstring since it would be redundant.</p>"
                }]}
            ]},
            {id: 7, title: 'Types', content: [
                {title: "Types we know so far", columns: true, content: [{
                    id:0,
                    text: "<p>Types are an important part of Python, but the language itself generally does most of the work for you. However, it wouldn't hurt to know about them in better detail.</p><p>Types are classifications of values. Some examples that we have used and seen so far are:</p>"
                },
                {
                    id: 1,
                    text: "<h1>Numbers</h1><ul><li>Integers (<code>int</code>), these are signed (negative or positive) whole numbers, think numbers like <code>3</code> and <code>-10</code></li><li>Floating point integers (<code>float</code>), are (negative or positive) numbers that have a decimal point, even if it's equal to a whole number, think numbers like <code>3.4</code>, <code>-10.1</code> and <code>4.0</code></li><li>Booleans (<code>bool</code>), <code>True</code> or <code>False</code></li></ul><p>When you want to check the type of a value, you can use the <code>type()</code> method. Like below:</p><pre class='code-block'><span class='operator'>>>></span> <span class='method'>type</span>(34)<br><span class='operator'><</span><span class='keyword'>class</span> 'int'<span class='operator'>></span></pre><p>If you want to get a string representation of an object, you can use the <code>repr()</code> method. Like below:</p><pre class='code-block'><span class='operator'>>>></span> <span class='method'>repr</span>(34)<br>'34'</pre><p><code>repr()</code> returns a string of how to define the object as you gave it. You can use the <code>eval()</code> method to undo this by turning a <code>str</code> into Python code that is executed. Like below:</p><pre class='code-block'><span class='operator'>>>></span> <span class='method'>eval</span>(\"3 + 2\")<br>5</pre>"
                },
                {
                    id: 2,
                    text: "<h1>The String type</h1><p>The type I want to introduce to you in this article is the string (<code>str</code>). Think of a string as a sequence of 0 to a large number of characters (<a href='https://stackoverflow.com/questions/1739913/what-is-the-max-length-of-a-Python-string'>the maximum amount of characters is dependant on your systems memory</a>).</p><p>You can use the same sort of operations to <code>str</code> as you can to <code>int</code>, as you can see to these examples in interactive mode:</p><pre class='code-block'><span class='operator'>>>></span> s <span class='operator'>=</span> \"string\"<br><span class='operator'>>>></span> s<br>'string'<br><span class='operator'>>>></span> s <span class='operator'>+</span> \"s\"<br><span class='operator'>>>></span> s<br>'strings'<br><span class='operator'>>>></span> s <span class='operator'>*</span> 2<br>'stringstring'</pre><p>You can't use every operation like <code>-</code> or <code>/</code> to <code>str</code>.</p>"
                }]},
                {title: "Changing types", columns: false, content: [{
                    id: 0,
                    text: "<p>Sometimes you will want to add an int to a string, but if you try to add an <code>int</code> or a <code>float</code> to a <code>str</code> with the <code>+</code> operator, you will get an error. How you can get around this is by converting the types of the <code>int</code>/<code>float</code> to <code>str</code> by using <code>str(int)</code>, you can also convert numbers that are in <code>str</code> form to <code>int</code>/<code>float</code>, but if it isn't a valid <code>int</code>/<code>float</code> then you will also get an error.</p><p>Note that converting a <code>float</code> to an <code>int</code> will yield the same result as doing integer division and <code>True</code> and <code>False</code> have integer values equivalent to <code>1</code> and <code>0</code> respectively.</p><p>A very convienient way you can add values in different types without having to manually convert them to Python strings is by using fstrings, they follow this notation: <code>f\"{x} string {y}\"</code>, there is an example below:</p><pre class='code-block'><span class='operator'>>>></span> x <span class='operator'>=</span>  3<br><span class='operator'>>>></span> y <span class='operator'>=</span>  2.4<br><span class='operator'>>>></span> s <span class='operator'>=</span>  'word'<br><span class='operator'>>>></span> <span class='keyword'>f</span>\"int: {x}, float: {y}, string: {s}\"<br>'int: 3, float: 2.4, string: word'</pre>"
                },
                {
                    id: 1,
                    text: "<p>Examples of converting types being:</p><pre class='code-block'><span class='operator'>>>></span> <span class='method'>str</span>(34)<br>'34'<br><span class='operator'>>>></span> <span class='method'>str</span>(3.4)<br>'3.4'<br><span class='operator'>>>></span> <span class='method'>str</span>(<span class='keyword'>True</span>)<br>'True'<br><span class='operator'>>>></span> <span class='method'>int</span>(3.4)<br>3<br><span class='operator'>>>></span> <span class='method'>int</span>(<span class='keyword'>True</span>)<br>1<br><span class='operator'>>>></span> <span class='method'>int</span>(<span class='keyword'>False</span>)<br>0<br><span class='operator'>>>></span> <span class='method'>float</span>(1)<br>1.0<br><span class='operator'>>>></span> <span class='method'>int</span>(\"34\")<br>34<br><span class='operator'>>>></span> <span class='method'>float</span>(\"1\")<br>1.0<br><span class='operator'>>>></span> <span class='method'>float</span>(\"3.4\")<br>3.4<br><span class='operator'>>>></span> <span class='method'>bool</span>(\"\")<br><span class='keyword'>False</span><br><span class='operator'>>>></span> <span class='method'>bool</span>(\" \")<br><span class='keyword'>True</span></pre>"
                }]}
            ]},
            {id: 8, title: 'Objects & Methods', content: [
                {title: "What are Objects and Methods?", columns: false, content: [{
                    id: 0,
                    text: "<p>Time for a shorter article, sorry for the length of them so far. :]</p><p><b>Everything</b> in Python is an <b>object</b>, int objects, float objects, str objects, function objects.<br>But what are objects? Well, objects are like these bags of functions.<br>Each <code>type</code>, <code>class</code> and <code>object</code> have functions that operate on them. These functions are called <b>methods</b>.</p><p>I will give some examples of methods for the <code>type</code> <code>str</code> in interactive mode:</p><pre class='code-block'><span class='operator'>>>></span> \"string\".<span class='method'>captialize</span>() <span class='comment'># Note that you can just use a string literal instead of a variable to use the method on. (I'll cover literals in a later article.)</span><br>'String'<br><span class='operator'>>>></span> \"STRING\".<span class='method'>lower</span>()<br>'string'<br><span class='operator'>>>></span> \"string\".<span class='method'>upper</span>()<br>'STRING'<br><span class='operator'>>>></span> \"ringstringstring\".<span class='method'>strip</span>(\"ring\") <br>'stringst' <span class='comment'># Note that it only removes the substring from the ends, and not from inside, this is especially useful for removing leading and trailing whitespace.</span><br><span class='operator'>>>></span> \"string\".<span class='method'>split</span>('i')<br>['str', 'ng'] <span class='comment'># This is a list type variable, don't worry, I'll be covering these in a future article!</span></pre><p>To find all the methods for objects you can use:</p><pre class='code-block'><span class='operator'>>>></span> <span class='method'>help</span>(object)</pre>"
                }]}
            ]}
            // {id: 0, title: '', content: [
            //     {title: "", columns: false, content: [{
            //         id: 0,
            //         text: ""
            //     }]}
            // ]}
        ],
        navList: [
        { id: 0, text: '1.1 - Getting Started'},
        { id: 1, text: '1.2 - What is Python?'},
        { id: 2, text: '1.3 - Expressions'},
        { id: 3, text: '1.4 - Variables'},
        { id: 4, text: '1.5 - Conditionals'},
        { id: 5, text: '1.6 - Function Basics'},
        { id: 6, text: '1.7 - Formatting & Docstrings'},
        { id: 7, text: '1.8 - Types'},
        { id: 8, text: '1.9 - Objects & Methods'}
        ]
    },
    mutations: {
        updateID(state, payload) {
            state.currentID = payload
        },
        first(state) {
            state.currentID = 0
        },
        increment(state) {
            if (state.currentID < state.sectionList.length) {
                state.currentID++
            }
        },
        decrement(state) {
            if (state.currentID > 0) {
                state.currentID--
            }
        },
        last(state) {
            state.currentID = state.sectionList.length - 1 
        },
        toggleHamburger(state) {
            state.showHamburger = !state.showHamburger
        }
    }
});

Vue.component('next-previous-buttons', {
    template: '<nav><button :disabled="onFirst" @click="first"><<</button><button :disabled="cantGoLower" @click="previous"><</button><button :disabled="cantGoHigher" @click="next">></button><button :disabled="onLast" @click="last">>></button></nav>',
    methods: {
        first() {
            scroll(0,0)
            store.commit('first')
        },
        next() {
            scroll(0,0)
            store.commit('increment')
        },
        previous() {
            scroll(0,0)
            store.commit('decrement')
        },
        last() {
            scroll(0,0)
            store.commit('last')
        }
    },
    computed: {
        cantGoLower() {
            return store.state.currentID <= 0
        },
        cantGoHigher() {
            return store.state.currentID >= store.state.sectionList.length - 1
        },
        onFirst() {
            return store.state.currentID === 0
        },
        onLast() {
            return store.state.currentID === store.state.sectionList.length - 1
        }
    }
})

Vue.component('topic-nav', {
    props: ['item'],
    template: '<li><button @click="navButtonClick(item.id)">{{ item.text }}</button></li>',
    methods: {
        navButtonClick(id) {
            store.commit('updateID', id)
        }
    }
})

Vue.component('sections', {
    props: ['item'],
    template: '<section class="flex-box"><h1 v-html="item.title"></h1><div class="flex-container" :class="{ columns : item.columns }"><div class="flex-box" v-for="contentItem in item.content" :key="contentItem.id" v-html="contentItem.text"></div></div></section>'
})

Vue.component('hamburger-button', {
    template: '<button id="hamburger" :class="{ active : showHamburger }" @click="toggleHamburger"><span class="hamburger-line"></span><span class="hamburger-line"></span><span class="hamburger-line"></span></button>',
    methods: {
        toggleHamburger() {
            store.commit("toggleHamburger")
        }
    },
    computed: {
        showHamburger() {
            return store.state.showHamburger
        }
    }
})

var site = new Vue({
    el: '#vue',
    computed: {
        title() {
            return store.state.sectionList[store.state.currentID].title
        },
        topicNav() {
            return store.state.navList
        },
        sections() {
            return store.state.sectionList[store.state.currentID].content
        },
        showHamburger() {
            return store.state.showHamburger
        }
    }
})
