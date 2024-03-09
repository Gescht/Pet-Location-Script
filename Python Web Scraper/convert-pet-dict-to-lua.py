import pickle

#the final dictionary with correct syntax
masterPetDataDict = {}

#load zoneID:mapID dictionary from file
with open("petLocationData.pkl", "rb") as f:
    masterPetDataDict = pickle.load(f)

with open("PetAddonData.lua", "w") as the_file:
    the_file.write("{\n")
    for mapID, mapData in masterPetDataDict.items():
        the_file.write("\t["+str(mapID)+"]={\n")
        for petID, petData in masterPetDataDict[mapID].items():
            the_file.write("\t\t["+str(petID)+"]={\n")
            the_file.write("\t\t\t")
            for layerID, layerData in masterPetDataDict[mapID][petID].items():
                the_file.write("["+str(layerID)+"]=\""+layerData+"\",")
            the_file.write("},\n")
        the_file.write("\t},\n")
    the_file.write("}")