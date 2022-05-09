=======================================
Our company focuses on a warehouse management (inventory management) website. Currently, we are looking for a front-end web developer to build a full-stack website using React, firebase, react router, node, express, mongodb etc.

We have a sample task for you.

Website Purpose:
Your website must be related to multiple items warehouse/inventory management websites. Some examples of inventory management could be: managing inventory of any types of products like- grocery stock, spice warehouse, fruits warehouse, books, perfumes, dresses, gym equipment, bikes, electronics (TV, fridge, microwave, laptop, computer, smartphone, etc.), furniture, hiking gears, sports gear, outdoor camping gears, Vehicle/fleet inventory (car, truck, motor bike, bicycle), toys, etc. However, your website can not be a ticket selling or an e-commerce site.====DONE

Make sure your design and website idea are unique. First, finalize your idea (what website you want to build). Then google the site design or visit themeforest to get your website idea. However, your website can not be related to your previous assignments or any practice project displayed in the course or our conceptual sessions.========DONE

Make sure your code or design doesn't match any of the projects implemented in our course.=======DONE

You may include this assignment in your final resume, so make sure they are good-looking. And we will have some dedicated marks for the design. Just pay some attention to the design.

Initially, do not spend too much thinking about the design. Just spend 5-10 minutes to finalize the idea. Another 15-30 minutes to search for a similar website design and start working on the project. If needed, put a placeholder image and keep developing the functionalities. Once the functionalities are implemented, come back to add relevant images.


=====================================================


Task Details:
Home page will have a header (simple navbar), banner, items (inventory items that you are managing. Maximum 6 items), and footer.======DONE

Add two extra sections on the home page and the four sections mentioned above. Tips: This is the place to shine. Add something different and unique to make your website looks different than others. And Make them relevant to your website.=======DONE

You will have six items in the inventory items section. You can put one or more items in a row based on your design. Each article should have a relevant name, image, short description, price, quantity, supplier name, and an update button (button could say: update or manage or stock update, etc.).
========DOne

Clicking on the button will take the user to the inventory/:id route. This route will be a private/protected route. Please make sure that the private route redirects to the login page if the user is not logged in. After login, the user will be redirected to the page he/she wanted to go to. Also, after reloading the page of a private route, the user is not redirected to the login page.

The inventory/:id page should display detailed item information like id, name, image, description, price, quantity, supplier name, sold, etc. This page will have a Button named delivered. Once this button is clicked, it will reduce the quantity of the item by one. Make sure this data is saved on the database, and the change in quantity is displayed on the website.

There will be a small form on the inventory/:id page. The from will say, restock the items. You will have an input field where you can put some numbers. And hitting the button will increase the quantity of the item.

There will be a link (link button) at the bottom of the inventory section of the home page. It will say Manage Inventories. You will have the same link on the inventory:/id page. The link will say, Manage Inventories. This link button will take you to the manage inventory page. This page will show all the inventory items. Will be more than 6 items. You will have more than six inventory items. On the home page, you will show 6. However, on the manage inventory page, you will show every item. Every item will show at least name and other information. And every item will have a delete button. This will delete the item. On the manage inventory page, you can show the inventory items the way you want. (however, you may consider showing the items in a tabular form)

ON the Manage Inventories page, there will be a button named add new item. You can change the name of the button if you want. You will be taken to the add inventory item page by clicking on this button. There will be able to add a new inventory item. Feel free to use, react hook form or html5 form. On this page, you can put an input field to put an image url. (For simplicity, you can upload the image to imgbb or other images hosting website and then put the url on the input field)

Implement email/password-based authentication and at least one social login(google, facebook, github, etc.) authentication. Once a user is logged in, the logout/sign-out button should appear on the header, signing out the user once clicked.====done

If a user is logged in, he/she will see more options like Manage Items, Add Item, My items, Logout. Based on your website idea, you can change the name of these menu items.

On the My Items page, the logged-in user will see only his/her Items. If the user wants, he/she should be able to cancel/delete any item. Ask for a confirmation message before deleting or canceling an item. Using browser confirmation dialog is ok. So, you will be able to delete an item either from the Manage Inventories page also, from the My Items page.

No Fake data (data must be hosted on the database). Database could be mongodb atlas or any other noSQL database.

Add two more routes. one route will be blogs. You will need to answer at least three questions on the blog page. This won't be a protected route. We recommend answering all four questions.=====done

13.1 Difference between javascript and nodejs

13.2 When should you use nodejs and when should you use mongodb

13.3 Differences between sql and nosql databases.

13.4 What is the purpose of jwt and how does it work

Create a meaningful 404 page (not found page)==============DONE


=====================================================
Bonus:
Display error when user email address or password don't match.
Send Email Verification. Don't worry if the email goes to the spam folder or it doesn't go at all. As long as your code is there, you will be fine. Add a link for Password reset (use toast)
At least 12 meaningful GitHub commits for the client-side and at least 6 meaningful commits for the server-side repository.
Meaningful readme.md file containing your website name, a short description, link to your live site. And at least five bullet points mention your website's different features and functionality.
Make the website responsive. Make sure the site looks different on desktop and mobile responsive. Tablet responsive is optional===============DONE
Make the website meaningful and consistent in look and feel. Give your website a relevant name. Images and all the content of the website have to be relevant. No lorem ipsum please.============================DONE
Clean and organized Code. Organize components and add comments when needed
Add a loading spinner on the home page and the login/register page. If data is loading, a spinner will be displayed.
use the Environment variable on both the client and server-side. .env file hides db user and db password and another server-side secret info. Use .gitignore file on the server-side.
Implement the basic version of the jwt token for email/password based authentication. Upon login, you will create a jwt token and store it on the client-side, and for the My Items page, you will send the token with the call and verify the user. Implementing 401 and 403 is optional. For social login, jwt token implementation is optional.
Create a stackoverflow profile and post a question or an answer at the time of submitting your assignment. You will submit the link to the stackoverflow question. If you do not want to add a question, you can add an answer on stackoverflow. If you can't add a stackoverflow question/answer, you can submit a github issue to any library that you are using. Your question or answer has to be a meaningful question or answer.===============DONE
==================================
Optional but highly encourage:
Implement 401, 403 for JWT of the My Items page. Log out and send the user to the login page for these two statuses.
Try to use a better-looking confirmation dialogue other than the browser's default confirm.
On the Manage Inventory, create many items by duplicating your items and implementing pagination.

=========================================================
Optional
Add some animation while applicable.
Please Use icons whenever applicable and use fonts (google fonts). For example, for delete, you can use the delete icon. To add an item, you can use an add icon.
Make the footer a little more realistic
Optimize your images
Add something extra of your own. This will help you in the future during the job interview.
Also, if you want, you can use mongoose.
If possible, replace the default react favicon and give an icon for your website.
using axios is optional. If you are using axios, make sure you use the earlier version.
If possible give swr or react-query a try. This will be helpful in the future.
Additional information:
You can use a local image or host image anywhere or both.
You are free to use any CSS library you want. But, we recommend using Tailwind CSS.
If needed, you can mix CSS framework with a component library
You may use react hook form, basic html form, or any library for authentication
Local storage is optional
Try to host your site on Firebase (Netlify host will need extra configuration)
Try to host your server on Heroku
What to submit
Your client-side code Github repository
Your server-side code Github repository
Your live website link
stackoverflow Question/answer or Github issue link


============================================================
Some Guidelines:
Do not waste much time on the website idea. Just spend 30 minutes deciding, find a sample website, and start working on it.
Do not waste much time finding the right image. You can always start with a simple idea. Make the website and then add different images.
Don't look at the overall task list. Just take one task at a time and do it. Once that is done, pick the next task. If you got stuck on one task, move on to the next task.
Stay calm, think and work sequentially. You will make it.
Don't wait for the last moment to deploy the server-side or client-side code. I will recommend deploying the server-side with the root API get URL. And then keep deploying to the Heroku server.
Keep incremental deploy to firebase as well.
Do not copy-paste code from anywhere. Write your code and put your best effort into this assignment.
