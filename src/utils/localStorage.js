function loadData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    // let data = cacheJS.get({key});

    return data;
  } catch (err) {
    console.log("err:", err);
    return undefined;
  }
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));

  //   cacheJS.set(key,data);
  //   cacheJS.set({blogId:2,type:'view},'<h1>Blog 2</h1>', null, {author:'hoangnd'});
  //   cacheJS.set({blogId:3,type:'view},'<h1>Blog 3</h1>', 3600, {author:'hoangnd',categoryId:2});
}

function deleteData(key) {
  localStorage.removeItem(key);
}

export { loadData, saveData, deleteData };
