## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/malhotrabhavyajot/String-Generator-HTML-JS-CSS/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.
<!DOCTYPE html>
<html>
<head>
<title>TEMPZSOFT</title>
                       <!-- CSS Styling -->
<style>            
body {
text-align:center;
background-color: lightblue;
margin:100px 400px 100px 400px;
font-family:Comic Sans MS;
border: 10px solid green;
padding: 45px;
}
#he{
font-size:15px;
margin:30px 10px 10px 10px;
}
#input1{
  border: 2px solid black;
  margin: 0px 10px 0px 10px;
  background-color: #ffffff;
}
#p1{
margin: 10px 10px 0px 10px;
}
#input2{
  border: 2px solid black;
  margin: 0px 10px 0px 10px;
  background-color: #ffffff;
}
#p2{
margin: 10px 10px 0px 10px;
}
#add{
  border: 2px solid black;
  border-radius: 25px;
  margin: 0px 0px 0px 10px;
  background-color: #ffffff;
}
#output1{
  border: 2px solid black;
  margin: 15px 10px 0px 10px;
  background-color: #ffffff;
}
#p3{
margin: 0px 10px 0px 10px;
}
</style>
                      <!-- Main Body -->
   <body>
      <h1 id="h">Catchy String Generator</h1>
      <p id="p1">Enter String 1: <input type="text" id="input1" size="10" /></p>
      <br>
      <p id="p1">Enter Length: <input type="number" id="inputnum1" size="10" /></p>
      <br>
      <p id="p2">Enter String 2: <input type="text" id="input2" size="10" /></p>
      <br>
      <p id="p1">Enter Length: <input type="number" id="inputnum2" size="10" /></p>
      <br>
      <button id="add" onclick="myFunction('add')">CLICK HERE TO ADD THE STRINGS</button>
      <p id="p3">Your Answer:<input id="output1" size="10" /></p>
      <h2 id="he">For TEMPZSOFT by Bhavyajot Malhotra</h2>
                        <!-- JavaScript -->
      <script>                 
         function myFunction(id) {
         var str1 = document.getElementById("input1").value;
         var str2 = document.getElementById("input2").value;
         var num1 = document.getElementById("inputnum1").value;
         var num2 = document.getElementById("inputnum2").value; 
         str1 = str1.slice(0,num1);
         str2 = str2.slice(0,num2);
         var result = str1.concat(str2);
         result = result.slice(0,5);
         document.getElementById("output1").value = result;
         }
      </script>

   </body>
</html>

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/malhotrabhavyajot/String-Generator-HTML-JS-CSS/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
