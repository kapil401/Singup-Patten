l = ['cats','cat','dogcats','dog','catpig','pigs','pigspigs','goatdog','goat','rabbit']
l.sort(key=len,reverse=True) # Sort the list from most letters to least
justfied = [] # List of justified strings
for word in l:
    pending = [] # List of pending strings
    modified = False # Check whether a string have been modified
    for _ in range(len(word)):
        for wor in l:
            if wor in word and not(wor == word and modified==False):
                word = word.replace(wor,'',1)
                modified = True
                pending.append(wor)
    if word == '':
        for wo in pending:
            if wo not in justfied:
                justfied.append(wo)
print(justfied)