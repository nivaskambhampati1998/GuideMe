# SOAD-project	(GuideMe)

[![Build Status](https://travis-ci.com/venky012/GuideMe.svg?token=a5pFPnEPqqri9dMzjwCe&branch=master)](https://travis-ci.com/venky012/GuideMe)

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

# you need two terminals to run our project one for running the django server and other for running reactjs server
python manage.py runserver

# in another terminal
cd frontend/

# install the node dependencies
npm install

# start the development server
npm start
```



### Contributors:
- [P Venkatesh](https://github.com/venky012)
- [P Sri Ranga](https://github.com/Pabbisettysriranga)
- P Vikranth Reddy
- S Harshavardhan
- [K N D Pavan Srinivas](https://github.com/nivaskambhampati1998)
