function update(data, command) {
  let curCom = Object.keys(command)
  if(curCom=='$merge' || curCom=='$push' || Object.keys(command[curCom])[0]=='$set' || Object.keys(command[curCom])[0]=='$apply'){
    if(typeof data != 'object')throw new Error("error")

    if(curCom=='$push'){
      command[curCom].map((x)=>data.push(x))
    }
    else if(curCom=='$merge'){
      Object.assign(data,command[curCom])
    }
    else if( Object.keys(command[curCom])[0]=='$set'){
      data[curCom] = command[curCom]['$set']
    }
    else if( Object.keys(command[curCom])[0]=='$apply'){
      data[curCom] = command[curCom]['$apply'](data[curCom])
    }
    return data
  } 
  else {update(data[curCom], command[curCom]); return data;}
}
