# Markdown to Slides
Why use google slide, microsoft powerpoint, canva or libreoffice to make a presentation slide when you can do it with Markdown?


*if you don't know anything about html or markdown, please do a little research before read this blog*

## What happend.
Recently, I have to made a slide to present my idea about my school's project. 
The problem is I like to have my slide offline and I don't want to upload it to internet while I'm still editing because the *internet* is not reliable. 
So I choose libreoffice to create my slide however it is too hard to add and change font size of the text (or I don't know how to do it).
I knew that markdown format can render to pdf, why don't use it?

## Markdown to pdf
Markdown to pdf is easy, you just render the markdown file to html, then print it to pdf.
It may hard to arrange the page, header may on one page and their content are on the next page however you can fix it with a little of `<br>` tag.

But it is a diffrent story in converting to slide.
First with styling the texts, some are center, some are big, slide with image, page arrangement, a lot of styling and page arrangement.
I just wan't to use something simple and easy, like add a prefix to the text to make it center, add some image to the left, or page number.

# Solution
After some search on internet and LLM, I found a javascript framework that do what I want. 
It can covert a mardown script to slide beside that, I can add some custom style (like color and font family).
It's call [Marp](https://marp.app/) (Markdown Presentation Ecosystem), it can saparate the slide, styling text, and even have a presentation system on itself.

After I tried this, even my presentation slide is not finish, it is in my first choice of many tools I know.
It not just easy, it can make my text based markdown to html then pdf, it also opensource, so why not use it?
