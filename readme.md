# PERSONAL HOMEPAGE - my first website

## Demo
https://patryk-majchrzak.github.io/homepage/

## Description

Hi! Welcome to my homepage where I introduce myself and tell you some personal information about myslef and my personality. It is also my first website where I try some CSS stylingg and JavaScript interactions. Hope you'll enjoy it 😊 Below some information for users how to navigate through the website and information for developers about code itself. So, what are you waiting for? Click the link in the demo and try it out 😉

## Detsils for users 

1. Website is available only in polish (I am about to add language selection in thee future, so it will be available in english as well)
2. You can change photo displayed on the website by clicking on buttons labeled "kolejne zdjęcie" (next photo) and "poprzednie zdjęcie" (previous photo)

<img src="for_readme/photoAnimation.gif" width=500>

3. You can change background by clicking button labeled "zmień tło na jasne" (change to bright background). It will also change label on the button to "zmień tło na ciemne" (change to dark background). Clicking the button again will change background to original one and button label will once again say "zmień tło na jasne" (change to bright background).

<img src="for_readme/animationBackground.gif" width=500>

4. Below buttons section the is navigation with links which underline and change color after mouse hover and click. Clicking on any navigation link will show proper document section at the top of the screen

<img src="for_readme/animationNav.gif" width=500>

5. Document has some extrnal links in YouTube icon or icons of social media pages. Links will open in a new tab.
6. Links to my e-mail and phone number (tel in polish) will ask you to open default app for sending mails or making calls (if you have any on your computer). Clicking on "pobierz CV" will download my CV available in one of two available language options.
7. If you would like to share link to the website on social media it will look like this

<img src="for_readme/shareImg.png">

## Details for developers

1. JavaScript code has been closed in a block to avoid setting global functions or variables
2. All JS interactions are closed in separated functions with function init called as a first one and then calling one further interactions
3. For naming classes for HTML mark-ups I've used BEM convention for any class I was using in CSS. For classes used in JS I used prefixes "js-". All of them are written in camelCase.
4. For navigation I used flex layout creation module
