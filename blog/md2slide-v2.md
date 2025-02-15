# Markdown to Slideshow (again)
It's been a while since I last create a presentation slide with markdown.
Now I need to create it again but I have a little problem with inserting and aligning images in [marp](https://marp.app),
so I moved to another program, it's called [Reveal.js](https://revealjs.com/)

## How I know about it?
"This time, I will convert markdown to simple html page and scroll it like browsing a website" I thought.
All of that can be done by simple markdown to html converter.
In the meantime I have to write a report on my school's project,
and it must be in proper document format like odt, docx or google docs not a markdown file.
I hate that ia have to use software like that because it require to click, press a shortcut,
with markdown it's easier to format things like `#` for header, `-` for bullet list, `**` for bold text, etc.
What dose it have to do with slide? Well since I create my report in markdown I need some program that convert my markdown to odt document.

After some searching on internet, I decided to use [Pandoc](https://pandoc.org/),
it's a command line program that convert many format to others format, including markdown to odt.
Since pandoc can convert many format to others, I look at it's help command and spot some slide format including revealjs.
There are many slide format revealjs is I like the most, it has horizon and vertical slide, better image aligning (it have some problem too).

## How is it?
I tried converting markdown to slide using pandoc, but there're problem,
katex math is not working properly, and it does not support vertical slide (or I don't know how to done it.).
I look at revealjs website and know that it's not converting markdown to slide but it's a template to creating slide using html,
pandoc just convert markdown to html in revealjs template.
Also revealjs support inmporting markdown too, so that the solution,
I create just a revealjs html page to import my markdown presentation slide, and it's done.
Not actually, I have to modify some css style, adding custom fonts, all customization but it is easier than marp.
