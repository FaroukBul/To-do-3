

const todoDB = (table) =>{

  const db = new Dexie("myDb")
    db.version(1).stores(table)

  db.open()

  return db
}

const createRow = (table, data) => {
  let flag = empty(data)
  if(!flag){
    table.bulkAdd([data])
  }

  return flag
}

const empty = data =>{
  let flag = true
  if(data != ""){
    flag = false
  }
  
  return flag
}
export default todoDB
export {
  createRow
}
