# Are you Yello? 

"The first words that consistently come to mind when people see the color yellow are “sunshine”, “warmth”, “cheer”, “happiness” and sometimes even “playfulness."

Our Yellow themed social media app is separate from any other because it is centered around the sensation of feeling happy and spreading that happiness througout the platform. The purpose of this social app is to share happiness. Instagram shares the bests parts - Yello shares the happiness which is more real than any other post. 


# Logic behind code
Login 
- imports - react, useState, Link - keeps you on the same page , useNavigate - function that has a link and we use it to link to the home page 
link keeps you on the same page
var for API is declared here as well 
- states - username, password 
- handles for username and password to store the value to the state 
- (username, password) gets passed in - assigning users inpit to the values 
axios - .put request to send login credentials to the backend for verification
catch error - to check if password is invalid - alert - by default the backend will send an empty object to indicate that the password is invalid 
if - it matches THEN - setUser to the value from the backend 
- Object.keys - checks for the keys of the users in the backend (array.length) - passing response.data - what is sent back as a repsonse - and compares how many keys it has (username, password) - IF repsonse equals = 0 it is invalid BUT if there are Key1 & Key2 THEN we setPermission to TRUE & we Navigate to home 
setPermission - is declared in the appgateway to allow gateway to show the main content AFTER userauth is VALID & changes the state to true 
navigate - "/" (home) - navigate is a default router function that we imported to navigate to the route 




# funny images to randomize for profile pics

'https://i.pinimg.com/474x/ee/60/0b/ee600b5178e4f1648fd1e8623f049611.jpg'

'https://external-preview.redd.it/6K710Pp4ZTAK8ErkBkGzKqOSke4nS44DuG6NFOg7Oew.jpg?auto=webp&s=e4b3f35db64f03807d371ae9865fe4e756d3105f'

'https://wallpapers-clan.com/wp-content/uploads/2022/05/meme-pfp-04.jpg'

'https://i.insider.com/5c79936beb3ce833524fbe82?width=600&format=jpeg&auto=webp'

'https://exploringbits.com/wp-content/uploads/2022/01/Funny-PFP-1.jpg?ezimgfmt=rs:352x335/rscb3/ngcb3/notWebP'

'https://i.pinimg.com/564x/38/44/f5/3844f5b848fca0cf5fe4273623e591a8.jpg'

'http://techwino.com/wp-content/uploads/2020/08/Funny-Profile-Pictures-45.jpg'

'https://www.whatsappimages.in/wp-content/uploads/2022/03/Free-HD-Cool-Pics-Images-Download.png'

'https://emoji.discadia.com/emojis/d376d7f4-ca38-4d5a-8c7c-6756be344d43.png'

'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxec5-NwLE5MXFCV9EkulxgclKkGicbElFdZeMWPBvU4PIENmuP7FpqDdGS3g34fc7Tc&usqp=CAU'

'https://www.finetoshine.com/wp-content/uploads/2020/09/MY-CUTEST-FRENCHIE-on-Instagram-Get-in-the-car-girl.jpg'

'https://memeandchill.com/wp-content/uploads/2022/02/17.gif'

'https://1fid.com/wp-content/uploads/2022/07/funny-profile-pic-13-1024x1024.jpg'





