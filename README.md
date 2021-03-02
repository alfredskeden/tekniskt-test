# Problem 1
**Swe:**
Metoden isAnagram(string, string) tar two parametrar av typen string som retunerar en boolean om strängarna är ett anagram.

**Eng:**
The method isAnagram(string, string) takes two parameters of type string that checks two words for an anagram and returns a boolean if it is.
```
cd /problem_1
npm install
npm run dev
npm run test
```
## Tester
**Swe:**
5 testar med mocha som visar på olika sätta att metoden funkar.

**Eng:**
5 tests with mocha that shows that the methods works.
-------
Anagram tests:
-    ✓ Stressed and desserts should show true
-    ✓ Alfred and Alfred should show false
-    ✓ Cider and Cried should show true
-    ✓ Hello and Hejsan should show false
-    ✓ giving it a number should show false
-----

# Problem 2

**Swe:**
Metoden checkForLinks(string) tar emot en string som bör vara en url för att hitta alla länkar på den hemsidan.
Länkarna skrivs ut i consolen i en kolumn.
Behöver ladda ner a 'chromedriver':
<http://chromedriver.storage.googleapis.com/index.html>
och lägga i projektmappen.

**Eng:**
The method checkForLinks(string) takes an url and check for all the links on that url and prints them out in the consol in a column.
Needs to download a 'chromedriver':
<http://chromedriver.storage.googleapis.com/index.html>
and add it to the projects folder.

```
cd /problem_2
npm install
npm run dev
```
----
# Problem 3

**Swe:**
Klassen calc har en metod som heter evaluate(string) som tar emot ett matematiskt uttryck i form av  och retunerar svaret.

Koden skriver ut med console.log 12 olika matematiska uttryck som alla ger rätt svar.

**Eng:**
The class calc has a function called evaluate(string) that takes a mathematical expression and returns the answers as a number.

The code console.logs 12 different expressions and give the correct answer to each one.

```
cd /problem_3
npm install
npm run dev
```