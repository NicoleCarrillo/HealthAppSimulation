import numpy as np
import pickle
from hmmTrainer import HMMTrainer

def makeModel(username:str):
	try:
		data=np.loadtxt(username+".txt")
	except:
		print("no data found, please upload data first")
		return False
	
	labels = data[:, 0] #columna 1 
	pesos = data[:, 1]  #columna 2
	peso_inicial = pesos[0]
	pesos = pesos[1:] #no tomar en cuenta la primera fila
	labels = labels[1:]
	for x in range(len(pesos)):
		temp = pesos[x]
		pesos[x]=categorize(peso_inicial,pesos[x])
		peso_inicial = temp
	genre_list =[1,0]
	hmm_models = []

	for label in genre_list:
		X = np.array([])
		## filtrar pesos por label 
		for y in range(len(labels)):
			if label == labels[y]:
				X = np.append(X,pesos[y]) #,axis=0 if more features
		if len(X)==0:
			print(label,"no hubo compa :(")
		X=X.reshape(-1,1) # if it is single feature
		print('X.shape =', X)
		print('Training started with',label)
		hmm_trainer = HMMTrainer(n_components=2)
		hmm_trainer.train(X)
		print('Training middle')
		hmm_models.append((hmm_trainer, label))
		print('Training ended')

	with open(username+".pkl", "wb") as file: pickle.dump(hmm_models, file)
	return True

def categorize(peso_inicial:float,peso:float):
	porcentaje = (peso_inicial - peso)/peso_inicial*100
	res=1
	if porcentaje <0:
		res*=-1
		porcentaje*=-1
		
	if porcentaje >=0 and porcentaje <1:
		return 0 #casi nada de diferencia
	elif porcentaje >= 1 and porcentaje < 2:
		return 1*res # 1 bajo/ -1 subio poco
	elif porcentaje >= 2 and porcentaje < 3:
		return 2*res #2 bajo/ -2 subio mucho
	else:
		return 3*res #3 bajo/-3 subio demasiado

def predict(username:str,category:int):
	hmm_models = []
	try:
		with open(username+".pkl", "rb") as file: hmm_models = pickle.load(file)
	except:
		print("markov not found, cant predict")
		return -1

	maximo = -999999999999999999
	maxlabel = 0	

	for item in hmm_models:
		hmm_model,label = item
		X = np.array([category])
		X=X.reshape(-1,1) # data has single feature
		score = hmm_model.get_score(X)
		if maximo < score:
			maximo = score
			maxlabel= label
	return maxlabel