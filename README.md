# ase-1-project	(Alumni Portal)

### Features:
- Authentication with email verification, change password, forgot password, update profile, delete user.
- Updating user profile by getting data from linkedin on regular basis using cron jobs.
- Staff can send mails to selected alumni. 
- Alumni can contact other alumni through message box integrated in our site.
- Anyone can contact the alumni office easily and alumni can mail them through our website.
- Alumni can post the jobs/internships present in their company through our jobs page.
- Events and gallery info.
- Blog to share their expereinces with the community.
- Donations and giving back page to help the students in different ways.
- Additional:
	- Secured with google recaptcha service. 
	- Works on both mobile, desktop and all ratio devices.

### Technologies

| GUI (front-end)  |  Backend Server |
|------------------|-----------------|
|  HTML5	   |  Python3 v3.8|
| CSS3		   |  Django2 v2.2|
| Javascript	   |  Cron	|
| Bootstrap4 v4.4  |  Sqlite3(database)	|
| JQuery	   |  		|
| AJAX		   |  		|

### Libraries used
 - django-cleanup
 - django-cron
 - django-filter
 - django-private-chat
 - linkedin-api
 - pillow
 - websockets
	
### Project and environment setup
```bash
# Setup environment
mkdir GuideMe
cd GuideMe
python -m venv env
# Activate the environment
source ./env/bin/activate

# Clone repository
git clone https://github.com/venky012/GuideMe.git

# go to project folder
cd GuideMe/

# Install the requirement of the project in the virtual environment created 
pip install -r requirements.txt

# you need two terminals to run our project one for running the django server and other for running the chat server
python manage.py runserver

# in another terminal
cd frontend/



python manage.py run_chat_server
```



### Contributors:
- [P Venkatesh](https://github.com/venky012)
- [P Sri Ranga](https://github.com/Pabbisettysriranga)
- P Vikranth Reddy
- S Harshavardhan
- [K N D Pavan Srinivas](https://github.com/nivaskambhampati1998)
