# hackerrank challenges
note: can use Ctrl + D to signal eof, ie end of input from stdin

## day 0, challenge 1
Javascript is written using the Unicode character set. Unicode is a superset of ASCII and Latin-1.
JavaScript is a case-sensitive language.
JavaScript ignores spaces that appear between tokens in programs. For the most part, JavaScript also ignores line breaks.

### standard input
Standard input is a stream from which a program reads its input data. The program requests data transfers by use of the read operation. Not all programs require stream input. For example, the dir and ls programs (which display file names contained in a directory) may take command-line arguments, but perform their operations without any stream data input.

Unless redirected, standard input is inherited from the parent process. In the case of an interactive shell, that is usually associated with the keyboard.

The file descriptor for standard input is 0 (zero); the POSIX <unistd.h> definition is STDIN_FILENO; the corresponding C <stdio.h> variable is FILE* stdin; similarly, the C++ <iostream> variable is std::cin.

### standard output
Standard output is a stream to which a program writes its output data. The program requests data transfer with the write operation. Not all programs generate output. For example, the file rename command (variously called mv, move, or ren) is silent on success.

Unless redirected, standard output is inherited from the parent process. In the case of an interactive shell, that is usually the text terminal which initiated the program.

The file descriptor for standard output is 1 (one); the POSIX <unistd.h> definition is STDOUT_FILENO; the corresponding C <stdio.h> variable is FILE* stdout; similarly, the C++ <iostream> variable is std::cout.

### standard error
Standard error is another output stream typically used by programs to output error messages or diagnostics. It is a stream independent of standard output and can be redirected separately. This solves the semi-predicate problem, allowing output and errors to be distinguished, and is analogous to a function returning a pair of values – see Semi-predicate problem: Multi valued return. The usual destination is the text terminal which started the program to provide the best chance of being seen even if standard output is redirected (so not readily observed). For example, output of a program in a pipeline is redirected to input of the next program, but errors from each program still go directly to the text terminal.

It is acceptable and normal to direct standard output and standard error to the same destination, such as the text terminal. Messages appear in the same order as the program writes them, unless buffering is involved. For example, in common situations the standard error stream is unbuffered but the standard output stream is line-buffered; in this case, text written to standard error later may appear on the terminal earlier, if the standard output stream buffer is not yet full.

The file descriptor for standard error is defined by POSIX as 2 (two); the <unistd.h> header file provides the symbol STDERR_FILENO;[2] the corresponding C <stdio.h> variable is FILE* stderr. The C++ <iostream> standard header provides two variables associated with this stream: std::cerr and std::clog, the former being unbuffered and the latter using the same buffering mechanism as all other C++ streams.

Bourne-style shells allow standard error to be redirected to the same destination that standard output is directed to using
```
 2>&1
 ```
csh-style shells allow standard error to be redirected to the same destination that standard output is directed to using
```
 >&
 ```
Standard error was added to Unix in the 1970s after several wasted phototypesetting runs ended with error messages being typeset instead of displayed on the user's terminal. [3]

## day 0, challenge 1
Task

Variables named firstinteger, firstdecimal, and firststring  are declared for you in the editor below. You must use the  operator to perform the following sequence of operations:

Convert secondinteger to an integer (Number type), then sum it with firstinteger and print the result on a new line using console.log.
Convert seconddecimal to a floating-point number (Number type), then sum it with firstdecimal and print the result on a new line using console.log.
Print the concatenation of firststring and secondstring on a new line using console.log. Note that firststring must be printed first.

latest ecmascript standard has 7 data types:

A primitive value or data type is data that is not an object and has no methods. All primitives are immutable, meaning they cannot be changed. There are six primitive types:
Number
String
Boolean
Symbol
Null
Undefined
The seventh data type is Object

MAX_VALUE 1.79 x 10 to the 308, larger are Infinity
MIN_VALUE -5 x 19 to the -324, smaller are 0
-Infinity = # div by 0, or MAX_VALUE * integer < -1
NaN - unrepresentable number

Number.isSafeInteger
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER

String
A string value is a chain of zero or more Unicode characters (i.e., letters, digits, and punctuation marks) that we use to represent text. We include string literals in our scripts by enclosing them in single (') or double (") quotation marks. Double quotation marks can be contained in strings surrounded by single quotation marks (e.g., '"' evaluates to "), and single quotation marks can be contained in strings surrounded by double quotation marks (e.g., "'" evaluates to '). The following are examples of strings

Notice that JavaScript does not have a type to represent a single character. 
JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. However, it is still possible to create another string based on an operation on the original string. For example:

A substring of the original by picking individual letters or using String.substr().
A concatenation of two strings using the concatenation operator (+) or String.concat().

Boolean
true and false

Symbol
immutable primitive value and can be used as the key of an Object property

null - absence of any object value
 ie contains no valid string, number, bool, array or object
 can erase contents of a variable by assigning it null

 undefined - when use object property tht doesn't exist or a variable that exists but has nothing assigned to it

 typeOf thisvariable -> 
 weird NaN is a Number

dynamically typed: 
 JavaScript is a loosely typed or dynamic language, meaning you don't need to declare a variable's type ahead of time and the language autmatically determines a variable's type while the program is being processed. That also means that you can reassign a single variable to reference different types. For example:

naming: 
case sensitive
first char = ASCII or _

var xxx - if do not initialize takes on value of undefined

coercion:
you can perform operations on values of different types without raising an exception. The JavaScript interpreter implicitly converts, or coerces, one of the data types to that of the other, then performs the operation. The rules for coercion of string, number, or boolean values are as follows:

If you add a number and a string, the number is coerced to a string.
If you add a boolean and a string, the boolean is coerced to a string.
If you add a number and a boolean, the boolean is coerced to a number.

## day 5 template literals
passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

Complete the function in the editor so that it does the following:

1. Finds the initial values of  s1 and s2  by plugging the area and perimeter values into the formula:

s = P +- sqrt(P squared - 16 * A) / 4
P = perimeter
A = area

2. creates an array of s1 and s2 and sorts it in ascending order

3. returns the sorted array

constraints s1, s2 from 1 to 100

Template literals (formerly known as template strings) are string literals that allow for embedded expressions. We typically use them to express strings spanning multiple lines or for string interpolation, which essentially allows us to create a template with one or more placeholders for inserting variable text at a later time.

While traditional strings are wrapped in single or double quotes, template literals are wrapped in backtick (`) characters. A template literal can contain placeholders, which are preceded by a dollar sign ($) and wrapped in curly braces ({}). For example, in the template literal `${expression}`, the expression text between the placeholders is passed to a function. The default function simply concatenates the template literal's parts into a single string.

Any time we see an expression preceding a template literal, we call the expression a tag and the template string a tagged template literal. In these instances, we call the tag expression (typically a function) with the processed template literal, which we can then manipulate before outputting the final string.

e.g.
const a = 2;
const b = 3;

console.log(`The sum of a and b is ${a + b}. 
The product of a and b is ${a * b}.`);

e.g. of tagged template literal
var a = 5;
var b = 10;

function foo(strings, ...values) {
    console.log("." + strings[0] + ".");
    console.log("." + strings[1] + ".");
    console.log("." + strings[2] + ".");
    console.log("." + strings[3] + ".");
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
}

foo`Sum ${a + b}
Product ${a * b}
Division ${b / a}`;

e.g. can return from tagged template
var a = 5;
var b = 10;

function foo(strings, ...values) {
    let a = values[0];
    let b = values[1];

    return `Sum ${a + b}
Product ${a * b} 
Division ${b / a}`;
}

console.log(foo`Num1 ${a + 10}
Num2 ${b * 2} 
Num3 ${b / a}`);
