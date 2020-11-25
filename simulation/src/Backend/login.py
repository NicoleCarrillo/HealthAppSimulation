import pickle

users=[]

def login(username:str,password:str):
	if username in users:
		return True
	return False

def addUser(username:str, password:str):
	if username in users:
		return False
	else:
		users.append(username)
		_updateUsers()
		return True

def removeUser(username:str):
	if username not in users:
		return False
	else:
		users.remove(username)
		_updateUsers()
		return True

def _updateUsers():
	with open("users.pkl", "wb") as file: pickle.dump(users, file)

def _loadUsers():
	global users
	with open("users.pkl", "rb") as file: users = pickle.load(file)

try:
	_loadUsers()
except:
	_updateUsers()