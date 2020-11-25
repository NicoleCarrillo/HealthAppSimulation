'''

import numpy as np
import matplotlib.pyplot as plt
from hmmlearn import hmm
from sklearn.metrics import confusion_matrix
import itertools
import pickle
from hmmTrainer import HMMTrainer

def plot_confusion_matrix(cm, classes,
                          normalize=False,
                          title='Confusion matrix',
                          cmap=plt.cm.Blues):
    if normalize:
        cm = cm.astype('float') / cm.sum(axis=1)[:, np.newaxis]
        print("Normalized confusion matrix")
    else:
        print('Confusion matrix, without normalization')

    print(cm)

    plt.imshow(cm, interpolation='nearest', cmap=cmap)
    plt.title(title)
    plt.colorbar()
    tick_marks = np.arange(len(classes))
    plt.xticks(tick_marks, classes, rotation=45)
    plt.yticks(tick_marks, classes)

    fmt = '.2f' if normalize else 'd'
    thresh = cm.max() / 2.
    for i, j in itertools.product(range(cm.shape[0]), range(cm.shape[1])):
        plt.text(j, i, format(cm[i, j], fmt),
                horizontalalignment="center",
                color="white" if cm[i, j] > thresh else "black")

    plt.tight_layout()
    plt.ylabel('True label')
    plt.xlabel('Predicted label')

#------------------------CARGAMOS DATOS-----------------------------------------
data=np.loadtxt("file.txt") #directory del txt
#0 23
#1  1

labels = data[:, 0] #columna 1 
pesos = data[:, 1] # columna 2

peso_inicial = pesos[0]
pesos = pesos[1:] #no tomar en cuenta la primera fila
labels = labels[1:]
#44 33 38 -> sm sp bm bp 
# darle formato a pesos tomando en cuenta altura y peso inicial

print(labels) # siguio dieta / no siguio dieta -> 0 , 1 
print(pesos)

#------------------------CREAMOS ETIQUETAS DE PESOS-----------------------------------------
for x in range(len(pesos)):
	if labels[x]==2:
		peso_inicial = pesos[x]
		continue
	porcentaje = (peso_inicial - pesos[x])/peso_inicial*100

	res=1
	peso_inicial = pesos[x]


	if porcentaje <0:
		res*=-1
		porcentaje*=-1
		
	if porcentaje >=0 and porcentaje <1:
		pesos[x]=0 #casi nada de diferencia
	elif porcentaje >= 1 and porcentaje < 2:
		pesos[x]=1*res # 1 bajo/ -1 subio poco
	elif porcentaje >= 2 and porcentaje < 3:
		pesos[x]=2*res #2 bajo/ -2 subio mucho
	else:
		pesos[x]=3*res #3 bajo/-3 subio demasiado
	
print(pesos)
input()

#genre_list = ["siSiguio","noSiguio"]
genre_list =[1,0]

hmm_models = []


#------------------------CREAMOS MODELOS OCULTOS---------------------------------------
#---------------------------SIGUIO Y NO SIGUIO-----------------------------------------
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
input()

#---------------------------TESTING-----------------------------------------

## testing
real_labels = []
pred_labels = []
""""# no borrarrrrrrrrrrrrrrrrrrrrrrrrrr
tests = [1,-3,2,3,-1,-2,0]
for z in range(len(tests)):
	print("test number:",tests[z])
	maximo = -999999999999999999
	maxlabel = 0
	for item in hmm_models:
		hmm_model,label = item
		X = np.array([tests[z]])
		X=X.reshape(-1,1) # data has single feature
		score = hmm_model.get_score(X)
		print(score,label)
		if maximo < score:
			maximo = score
			maxlabel= label
	#print(maximo,maxlabel)
	if(maxlabel == 0): print("no siguio la dieta\n")
	else: print("si siguio la dieta\n")
"""

for x in range(len(labels)):
	real_labels.append(labels[x])
	print("test number:",pesos[x])
	maximo = -999999999999999999
	maxlabel = 0
	for item in hmm_models:
		hmm_model,label = item
		X = np.array([pesos[x]])
		X=X.reshape(-1,1) # data has single feature
		score = hmm_model.get_score(X)
		print(score,label)
		if maximo < score:
			maximo = score
			maxlabel= label
	#print(maximo,maxlabel)
	pred_labels.append(maxlabel)

cm = confusion_matrix(real_labels, pred_labels)
np.set_printoptions(precision=2)
classes = ["Si Siguio","No Siguio"]
plt.figure()
plot_confusion_matrix(cm, classes=classes, normalize=True,title='Normalized confusion matrix')
plt.show()
#--------------------------------------------------------------------



'''
    
