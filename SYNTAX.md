\title{Welcome to Mathpix Markdown!}

Mathpix Markdown uses a combination of Markdown and LaTeX syntax to create a great writing experience for technical documents.

This means that you can use all the standard **Markdown syntax** in addition to some **LaTeX** and other features that we will list below.

---

## Using Chemistry with SMILES syntax

```smiles
OC(=O)c1cc(Cl)cs1
```

## Using Math mode LaTeX syntax

You can insert inline mathematics using LaTeX delimiters `$...$` or `\(...\)` like this $\vec { F } = m \vec { a }$ and this \(ax^2 + bx + c = 0\).

You can insert non-numbered block mode mathematics by using the LaTeX delimiters `$$...$$`, `\[...\]`, `\begin{equation*}...\end{equation*}`, and `\begin{align*}...\end{align*}`:

$$
x = \frac { - b \pm \sqrt { b ^ { 2 } - 4 a c } } { 2 a }
$$

\[
y = \frac { \sum _ { i } w _ { i } y _ { i } } { \sum _ { i } w _ { i } } , i = 1,2 \ldots k
\]

\begin{equation*}
l ( \theta ) = \sum _ { i = 1 } ^ { m } \log p ( x , \theta )
\end{equation*}

You can insert numbered block mode mathematics by using the LaTeX delimiters `\begin{equation}...\end{equation}` and `\begin{align}...\end{align}`:

\begin{equation}
m = \frac { m _ { 0 } } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } }
\end{equation}

\begin{align}
^{|\alpha|} \sqrt{x^{\alpha}} \leq(x \bullet \alpha) /|\alpha|
\end{align}


### Use `\label{}` and `\ref{}` or `\eqref{}` to link to any numbered equation in your document 

In equation \eqref{eq:1}, we find the value of an
interesting integral:

\begin{equation}
  \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
  \label{eq:1}
\end{equation}

\begin{equation}
  \| x + y \| \geq | \| x | | - \| y \| |
  \label{eq:2}
\end{equation}

Look at the Equation \ref{eq:2}

### Use `\tag{}` to create a custom tag for your equation

In addition to using numbered block mode equation syntax for standard numbering (ie. 1, 2, 3), you can use also include `\tag{}` inside of your LaTeX delimiters to create a custom tag. Note that if `\tag{}` is used in a numbered equation, it will override the document's numbering.

$$
\frac{x\left(x^{2 n}-x^{-2 n}\right)}{x^{2 n}+x^{-2 n}}
\tag{1.1}
$$

\begin{equation}
\max _{\theta} \mathbb{E}_{\mathbf{z} \sim \mathcal{Z}_{T}}\left[\sum_{t=1}^{T} \log p_{\theta}\left(x_{z_{t}} | \mathbf{x}_{\mathbf{z}_{<t}}\right)\right]
\tag{1.2}
\end{equation}

### Other math mode LaTeX environments supported

Snip also supports some less common math mode LaTeX environments, such as: 

`\begin{split}...\end{split}` to split your equation into smaller pieces: 

\begin{split}
a& =b+c-d\\
& \quad +e-f\\
& =g+h\\
& =i
\end{split}

- Use `\\` to denote a new line and `&` to denote where the lines should align.
- Need it numbered? Wrap it in `\begin{equation}...\end{equation}`

`\begin{gather}...\end{gather}` for displaying a set of consecutive equations that don't require special alignment and `\begin{gather*}...\end{gather*}` if you don't want equation numbering: 

\begin{gather}
a_1=b_1+c_1\\
a_2=b_2+c_2-d_2+e_2
\end{gather}

\begin{gather*}
a_1=b_1+c_1\\
a_2=b_2+c_2-d_2+e_2
\end{gather*}

---
---

## Using Text mode LaTeX in Snip 

Our LaTeX Flavored Markdown includes support for many standard text mode LaTeX commands that Markdown editors do not support. 

\title{Title}

In Snip, You can use the `\title{}` command wherever you want the title to appear in your document. If pasting LaTeX code into Snip, please note that the `\maketitle` command will be ignored.

\author{Author}

\author{Author\\can also be\\multiline}

\begin{abstract}
This is the abstract to my paper. You are going to learn a lot in this paper, just you wait. I am going to tell you about all the different LaTeX and Markdown syntax you can use in Snip. 
\end{abstract}

\section{My great section}

\subsection{My really great subsection}


You can use LaTeX commands for \textit{italicizing...}

...and for \textbf{bolding}

Use `\url{}` to insert a \url{link}.

---
---

## Using Markdown in Snip 

Snip is a Markdown editor first, so you can use all standard Markdown syntax!

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

**This is bold text**

__This is also bold text__

*This is italic text*

_This is also italic text_

~~Strikethrough~~

==This is marked text==

___

---

***

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

### Quotes

> Use a `>` to write a blockquote

or

> Blockquotes can also be nested...
>> ...by using additional `>` right next to each other...
> > > ...or with spaces between `>`.

### Lists 

Create an unordered list by starting a line with "+", "-", or "*"

+ Sub-lists are made by indenting 2 spaces:
  - Different characters in in the same sub-list will render the same characters:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Create an ordered list by writing 1.

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

...

1. You can use sequential numbers...
1. ...or keep all the numbers as 1.

Or start your list with any number and the numbering will continue:

57. foo
2. bar
6. foo

### Code

Wrap inline code `in single backticks`

...or wrap code blocks in 3 backticks or 3 tildes

```
var foo = function (bar) {
  return bar++;
};
```

Include the programming language for syntax highlighting:

~~~javascript
var foo = function (bar) {
  return bar++;
};
~~~ 

*All major languages supported via [highlight.js](https://highlightjs.org/).*

You can also create a code block by indenting all lines: 

	\\ some comments 
	line 1 of code 
	line 2 of code
	line 3 of code

### Tables

Colons can be used to align columns:

| Tables        | Are           | Cool  |
| :------------ |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily:

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3


### Links and images

[This is a link to the Mathpix website](http://mathpix.com/)

![Feynman Lecture 1](https://cdn.mathpix.com/snip/images/0Y13pkOem1h2kqhOPAB98mtSCL5FQlQPtot1obxd-R8.original.fullsize.png)

Include text in quotes for a tooltip (hover over the image to see):
![Feynman Lecture 2](https://cdn.mathpix.com/snip/images/XDfl14ZxchxGUuOHzRSN7FcqMmLxknDndIo18jsMfk0.original.fullsize.png "Michelson-Morley experiment")

### Footnotes

You can write footnotes either by writing out "first", "second", "third", etc:

Footnote 1 link[^first].

Footnote reference[^second]

And you can reference the same footnote again like this[^second]

Or you can use numbers: 

This is my next footnote[^3] 

And another[^4]

You can reference multiple footnotes in a row[^3][^4]

You can also write inline footnotes:

Inline footnote^[Text of inline footnote] definition.

[^first]: Footnotes **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

[^3]: Hello I am the third footote!

[^4]: And I'm the 4th!


### Emojies

Classic markup: :wink: :cry: :laughing: :yum:

Shortcuts (emoticons): :-) :-( 8-) ;)


### Subscripts and Superscripts 

- 19^th^
- H~2~O

---
---

## Using HTML in Snip

You can also use HTML tags in Snip. Here is an example of a header: 

<h2 style="color:blue;">This is a Blue Heading</h1>

You can also insert SVGs!

<svg id="function random() { [native code] }" xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="150px" viewBox="0 0 200 150">\n\t<style> #function random() { [native code] } {pointer-events:none; }  #function random() { [native code] } .event  { pointer-events:all;}  </style>\n\t<text x="136" y="79" font-family=" Helvetica" font-weight="900" font-size="14" fill="rgb(255,13,13)">O</text>\n\t<text x="115" y="43" font-family=" Helvetica" font-weight="900" font-size="14" fill="rgb(255,13,13)">O</text>\n\t<text x="126" y="43" font-family=" Helvetica" font-weight="900" font-size="14" fill="rgb(255,13,13)">H</text>\n\t<text x="73" y="42" font-family=" Helvetica" font-weight="900" font-size="14" fill="rgb(255,13,13)">O</text>\n\t<text x="84" y="42" font-family=" Helvetica" font-weight="900" font-size="14" fill="rgb(255,13,13)">H</text>\n\t<line x1="118" y1="64" x2="134" y2="72" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="120" y1="60" x2="136" y2="69" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="79" y1="63" x2="100" y2="75" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="79" y1="67" x2="95" y2="76" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="58" y1="99" x2="58" y2="74" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="62" y1="96" x2="62" y2="77" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="99" y1="99" x2="79" y2="111" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="95" y1="97" x2="79" y2="106" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="120" y1="46" x2="120" y2="63" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="100" y1="75" x2="120" y2="63" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="79" y1="45" x2="79" y2="63" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="58" y1="74" x2="79" y2="63" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="79" y1="111" x2="58" y2="99" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line x1="99" y1="99" x2="100" y2="75" style="stroke:rgb(0,0,0);stroke-width:1"/>\n\t<line id="function random() { [native code] }:Bond:1-0" class="event" x1="120" y1="63" x2="141" y2="75" stroke-width="8" stroke-opacity="0"/>\n\t<line id="function random() { [native code] }:Bond:4-3" class="event" x1="79" y1="63" x2="100" y2="75" stroke-width="8" stroke-opacity="0"/>\n\t<line id="function random() { [native code] }:Bond:7-6" class="event" x1="58" y1="99" x2="58" y2="74" stroke-width="8" stroke-opacity="0"/>\n\t<line id="function random() { [native code] }:Bond:9-8" class="event" x1="99" y1="99" x2="79" y2="111" stroke-width="8" stroke-opacity="0"/>\n\t<line id="function random() { [native code] }:Bond:2-1" class="event" x1="120" y1="39" x2="120" y2="63" stroke-width="8" stroke-opacity="0"/>\n\t<line id="function random() { [native code] }:Bond:3-1" class="event" x1="100" y1="75" x2="120" y2="63" stroke-width="8" stroke-opacity="0"/>\n\t<line id="function random() { [native code] }:Bond:5-4" class="event" x1="79" y1="38" x2="79" y2="63" stroke-width="8" stroke-opacity="0"/>\n\t<line id="function random() { [native code] }:Bond:6-4" class="event" x1="58" y1="74" x2="79" y2="63" stroke-width="8" stroke-opacity="0"/>\n\t<line id="function random() { [native code] }:Bond:8-7" class="event" x1="79" y1="111" x2="58" y2="99" stroke-width="8" stroke-opacity="0"/>\n\t<line id="function random() { [native code] }:Bond:9-3" class="event" x1="99" y1="99" x2="100" y2="75" stroke-width="8" stroke-opacity="0"/>\n\t<circle id="function random() { [native code] }:Atom:0" class="event" cx="141" cy="75" r="8" fill-opacity="0"/>\n\t<circle id="function random() { [native code] }:Atom:1" class="event" cx="120" cy="63" r="8" fill-opacity="0"/>\n\t<circle id="function random() { [native code] }:Atom:2" class="event" cx="120" cy="39" r="8" fill-opacity="0"/>\n\t<circle id="function random() { [native code] }:Atom:3" class="event" cx="100" cy="75" r="8" fill-opacity="0"/>\n\t<circle id="function random() { [native code] }:Atom:4" class="event" cx="79" cy="63" r="8" fill-opacity="0"/>\n\t<circle id="function random() { [native code] }:Atom:5" class="event" cx="79" cy="38" r="8" fill-opacity="0"/>\n\t<circle id="function random() { [native code] }:Atom:6" class="event" cx="58" cy="74" r="8" fill-opacity="0"/>\n\t<circle id="function random() { [native code] }:Atom:7" class="event" cx="58" cy="99" r="8" fill-opacity="0"/>\n\t<circle id="function random() { [native code] }:Atom:8" class="event" cx="79" cy="111" r="8" fill-opacity="0"/>\n\t<circle id="function random() { [native code] }:Atom:9" class="event" cx="99" cy="99" r="8" fill-opacity="0"/>\n</svg>	


---
