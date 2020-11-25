import Flask, render_template, request
import hmmPredictor as hmm
import inputLoader as il
import login
import json

app =  Flask(__name__, static_folder="simulation/public", template_folder="simulation/public")

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/login',methods=['POST'])
def log_in():
	if request.method=='POST':
		return "nicole"
		#username=request.json['username']
		#if login.login(username,""):
		#	data = il.loadData(username)
		#	print(data)
		#	return json.dumps({"result": True,"data" : data})
		#elif login.addUser(username,""):
		#	return json.dumps({"result": True, "data" : None})
		#else:
		#	return json.dumps({"result": False, "data" : None})

@app.route('/predict',methods=['POST'])
def predict():
	if request.method=='POST':
		username=request.json['username']
		print(type(username))
		pred =hmm.predict(username,il.getLastWeight(username))
		return json.dumps({"result":pred})

@app.route('/insert',methods=['POST'])
def insert():
	if request.method=='POST':
		username=request.json['username']
		diet=request.json['predict']
		weight=request.json['weight']

		il.addData(username,diet,weight)
		
		result = hmm.makeModel(username) #reTrain
		return json.dumps({"result": result})

@app.route('/replace',methods=['POST'])
def replace():
	if request.method=='POST':
		username=request.json['username']
		week = request.json['week']
		diet = request.json['predict']
		weight = request.json['weight']

		if il.replaceData(username,week-1,diet,weight):
			result = False
		else:
			result = hmm.makeModel(username) # reTrain
		return json.dumps({"result": result})
