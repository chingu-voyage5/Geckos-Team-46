# Geckos-Team-46
As part of the Chingu Collaborative Web Development Program our team is building a website that showcases popular events in countries across the globe. | Voyage-5 | chingu.io

# Bootstrap Documentation
  

# Style Guidelines 

                                            HTML

1) Always indent four spaces (tab)
1) Nested elements should be indented once (tab).
2) Always use double quotes, never single quotes, on attributes.
4) Don't include a trailing slash in self-closing elements—the HTML5 spec says they're optional.
5) Don’t omit optional closing tags (e.g. </li> or </body>).
6) Use HTML5 doctype
7) Use charset="UTF-8"
8) Specify language attribute to be English
9) instruct IE to use the latest supported mode with edge mode.

10) Practicality over purity
    Strive to maintain HTML standards and semantics, but
    not at the expense of practicality. Use the least amount
    of markup with the fewest intricacies whenever possible.

11) Attribute order:
    HTML attributes should come in this particular order for easier reading of code.

    class
    id, name
    data-*
    src, for, type, href, value
    title, alt
    role, aria-*
    Classes make for great reusable components, so they come first. 
    Ids are more specific and should be used sparingly (e.g., for in-page bookmarks), so they come second.

    example:
    <a class="..." id="..." data-toggle="modal" href="#">
  Example link
    

    <input class="form-control" type="text">

    <img src="..." alt="...">

12) Reducing markup
    Whenever possible, avoid superfluous parent
    elements when writing HTML. Many times this
    requires iteration and refactoring, but produces less HTML. Take the following example:
    <!-- Not so great -->
    <span class="avatar">
    <img src="...">
    </span>

    <!-- Better -->
    <img class="avatar" src="...">

13)Comments
    Code is written and maintained by people. Ensure your code is descriptive, well commented, 
    and approachable by others. Great code comments convey context or purpose. Do not simply 
    reiterate a component or class name.Be sure to write in complete sentences for larger comments
    and succinct phrases for general notes.

    /* Bad example */
    /* Modal header */

    .modal-header {
    ...
    }

    /* Good example */
    /* Wrapping element for .modal-title and .modal-close */
    .modal-header {
    ...
    }

                                            CSS

Syntax
Always indent four spaces (tab)
1) When grouping selectors, keep individual selectors to a single line.
2) Include one space before the opening brace of declaration blocks for legibility.
3) Place closing braces of declaration blocks on a new line.
4) Include one space after : for each declaration.
5) Each declaration should appear on its own line for more accurate error reporting.
6) End all declarations with a semi-colon. The last declaration's is optional, but your code is more error prone without it.
7) Comma-separated property values should include a space after each comma (e.g., box-shadow).
8) Don't include spaces after commas within rgb(), rgba(), hsl(), hsla(), or rect() values. This helps differentiate multiple color values (comma, no space) from multiple property values (comma with space).
9) Don't prefix property values or color parameters with a leading zero (e.g., .5 instead of 0.5 and -.5px instead of -0.5px).
10) Lowercase all hex values, e.g., #fff. Lowercase letters are much easier to discern when scanning a document as they tend to have more unique shapes.
11) Use shorthand hex values where available, e.g., #fff instead of #ffffff.
12) Quote attribute values in selectors, e.g., input[type="text"]. They’re only optional in some cases, and it’s a good practice for consistency.
13) Avoid specifying units for zero values, e.g., margin: 0; instead of margin: 0px;.                                                           

Example: 
/* Bad CSS */

.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}

Declaration Order

Related property declarations should be grouped together following the order:

1. Positioning
2. Box model
3. Typographic
4. Visual

Positioning comes first because it can remove an element from the normal flow of the document and override box model related styles.
The box model comes next as it dictates a component's dimensions and placement.Everything else takes place inside the component or 
without impacting the previous two sections, and thus they come last.

Example:
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}

Don't use @import
Compared to <link>s, @import is slower, adds extra page requests, and can cause other unforeseen problems.
Avoid them and instead opt for an alternate approach:

1. Use multiple <link> elements
2. Compile your CSS with a preprocessor like Sass or Less into a single file
3. Concatenate your CSS files with features provided in Rails, Jekyll, and other environments

Example:
<!-- Use link elements -->
<link rel="stylesheet" href="core.css">

<!-- Avoid @imports -->
<style>
  @import url("more.css");
</style>

Media query placement
Place media queries as close to their relevant rule sets whenever possible.
Don't bundle them all in a separate stylesheet or at the end of the document.
Doing so only makes it easier for folks to miss them in the future. Here's a typical setup.

Prefixed properties
When using vendor prefixed properties, indent each property such that
the declaration's value lines up vertically for easy multi-line editing.

Example: 
/* Prefixed properties */
.selector {
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);
          box-shadow: 0 1px 2px rgba(0,0,0,.15);  
}

Single declarations
In instances where a rule set includes only one declaration, consider removing
line breaks for readability and faster editing. Any rule set with multiple
declarations should be split to separate lines.

Example:
/* Single declarations on one line */
.span1 { width: 60px; }
.span2 { width: 140px; }
.span3 { width: 220px; }

/* Multiple declarations, one per line */
.sprite {
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(../img/sprite.png);
}

Shorthand notation
Strive to limit use of shorthand declarations to instances where you must explicitly '
set all the available values. Common overused shorthand properties include:

padding
margin
font
background
border
border-radius

Often times we don't need to set all the values a shorthand property represents. 
For example, HTML headings only set top and bottom margin, so when necessary, only 
override those two values. Excessive use of shorthand properties often leads to sloppier 
code with unnecessary overrides and unintended side effects.

Example:
/* Bad example */
.element {
  margin: 0 0 10px;
  background: red;
  background: url("image.jpg");
  border-radius: 3px 3px 0 0;
}

/* Good example */
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

Operators in Less and Sass
For improved readability, wrap all math operations in parentheses with a single space between 
values, variables, and operators.

// Bad example
.element {
  margin: 10px 0 @variable*2 10px;
}

// Good example
.element {
  margin: 10px 0 (@variable * 2) 10px;
}

Class names
1) Keep classes lowercase and use dashes (not underscores or camelCase). Dashes serve as natural breaks in related class (e.g., .btn and .btn-danger).
2) Avoid excessive and arbitrary shorthand notation. .btn is useful for button, but .s doesn't mean anything.
3) Keep classes as short and succinct as possible.
4) Use meaningful names; use structural or purposeful names over presentational.
5) Prefix classes based on the closest parent or base class.

Organization
1) Organize sections of code by component.
2) Develop a consistent commenting hierarchy.
3) Use consistent white space to your advantage when separating sections of code for scanning larger documents.
4) When using multiple CSS files, break them down by component instead of page. Pages can be rearranged and components moved

Example:
/*
 * Component section heading
 */

.element { ... }


/*
 * Component section heading
 *
 * Sometimes you need to include optional context for the entire component. Do that up here if it's important enough.
 */

.element { ... }

/* Contextual sub-component or modifer */
.element-heading { ... }

# Important Notes