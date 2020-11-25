def addData(username:str,diet,weight):
    
    f = open(username+".txt","a")
    f.write(str(diet) + " " + str(weight)+"\n")
    f.close()

def addMultipleData(username:str,diets,weights):
    
    if len(diets) != len(weights): 
        print("length difference, could not be added")
        return
    f = open(username+".txt","a")
    for x in range(len(diets)):
        f.write(str(diets[x]) + " " + str(weights[x])+"\n")
    f.close()

def loadData(username:str):
	try:
		f = open(username+".txt","r")
	except:
		print("there is no data yet for",username)
		return None
	lines = f.readlines()
	result = []
	for l in lines:
		t = l.split()
		result.append({int(t[0]) : float(t[1])})
	return result

def getLastEntry(username:str):
	try:
		f = open(username+".txt","r")
	except:
		print("there is no data yet for",username)
		return None
	lines = f.readlines()
	diet = []
	weight = []
	return lines[-1].split()

def getLastWeight(username:str):
	f=getLastEntry(username)
	return float(f[1])

def replaceData(username:str,index:int, new_diet=-1,new_weight=0):
	try:
		f = open(username+".txt","r")
	except:
		print("there is no data yet for",username)
		return False
	lines = f.readlines()
	if new_diet==-1:
		new_diet = lines[index].split()[0]
	if new_weight == 0:
		new_weight = lines[index].split()[1]
	lines[index] = str(new_diet) + " " + str(weight)+"\n"
	f = open(username+".txt","w")
	f.writelines(lines)
	return True
