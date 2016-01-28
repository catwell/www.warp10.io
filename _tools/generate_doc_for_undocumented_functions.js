if (process.argv.length != 4) {
  console.log("Use: node %s FOLDER REF_FILE\n", process.argv[1]);
  process.exit();
}

var fs = require('fs-extra'),
  async = require('async'),
  folder = process.argv[2],
  refFile = process.argv[3],
  functionNames = [],
  fullFunctionList = [],
  pattern = /^##\s+(.*)\s+##\s+(.*)\s+```\s+(.*)\s+```/,
  undocumentedFolder = folder+"/undocumented";


async.series([
  clean,
  getTitleList,
  parseRefFile,
  createFiles,
  function(callback) {
    console.log(fullFunctionList.length);
  }
],
// optional callback
function(err, results){
  // results is now equal to ['one', 'two']
});

function clean(callback) {
  fs.removeSync(undocumentedFolder);
  callback(null, true);
}

function filenameReplace(filename) {
  return filename
    .replace("//", "/")
    .replace(">>>", "UNSIGNED_RIGHT_SHIFT")
    .replace(">>", "RIGHT_SHIFT")
    .replace("<<", "LEFT_SHIFT")
    .replace("->", "TO")
    .replace("~", "BITWISE_COMPLEMENT")
    .replace("[", "OPEN_BRACKET")
    .replace("]", "CLOSE_BRACKET")
    .replace("{", "OPEN_MARK")
    .replace("}", "CLOSE_MARK")
}
function functionNameReplace(functionName) {
  return functionName
    .replace("","")
    .replace("[","&#91;")
    .replace("]","&#93;")
    .replace(">>","&gt;&gt;")
    .replace(">","&gt;")
    .replace("<<","&lt;&lt;")
    .replace("<","&lt;")
}

function createFiles(callback) {
  var undocumentedFolder = folder+"/undocumented";
  fs.ensureDirSync(undocumentedFolder);

  var index = undocumentedFolder+"/index.md";
  var indexData = [];
  indexData.push("---",
    "title: 'Undocumented functions'",
    "layout: function",
    "desc: 'List of functions not yet fully documented'",
    "category: undocumented",
    "---",
    "",
    "The following functions havent been fully documented yet, but wer can already give you a brief description and usage notes","",
    "<div class='row small-p'>", "");

  for (var i in fullFunctionList) {

    var filename = filenameReplace(undocumentedFolder+"/"+ fullFunctionList[i].name)+".md"

    if (i == Math.round(fullFunctionList.length/3) || i == 2*Math.round(fullFunctionList.length/3)) {
      indexData.push("</div>","")
    }
    if (i == 0 || i == Math.round(fullFunctionList.length/3) || i == 2*Math.round(fullFunctionList.length/3)) {
      indexData.push("<div class='col-sm-3'>","")
    }
    indexData.push("["
      +functionNameReplace(fullFunctionList[i].name)
      +"]({{ site.baseurl }}/"
      + filenameReplace(undocumentedFolder+"/"+fullFunctionList[i].name)+")", "");

    var data = [];
    data.push("---",
      "title: \""+fullFunctionList[i].name+"\"",
      "layout: function",
      "desc: \""+fullFunctionList[i].description+"\"",
      "category: undocumented",
      "---",
      "",
      fullFunctionList[i].description,
      "",
      "```",
      fullFunctionList[i].code,
      "```")
    var content = data.join("\n");
    //console.log(filename);
    fs.writeFileSync(filename, content);
  }
  indexData.push("</div>")
  var indexContent = indexData.join("\n");
  //console.log(indexContent);
  fs.writeFileSync(index, indexContent);
  callback(null, true);
}

function parseRefFile(callback) {
  var data = fs.readFileSync(refFile, "utf8").split(/\n/);
  var matching;
  for (var i in data) {
    if (matching=data[i].match(pattern)) {
      if (functionNames.indexOf(matching[1])<0) {
        fullFunctionList.push({
          name: matching[1],
          description: matching[2],
          code: matching[3]
        });
      }
    }
  }
  callback(null, fullFunctionList);
}

function getTitleList(callback) {
  var baseFolder = fs.realpathSync(folder) ;
  fs.walk(folder)
  .on('data', function (item) {
    if (item.stats.isFile()) {
      functionNames.push(getTitle(item.path));
    }
  })
  .on('end', function () {
    callback(null, functionNames);
  })
}

function getTitle(filename) {
  var pattern = /title:\s*"([^"]*)"/
  var data = fs.readFileSync(filename, "utf8");
  var title = data.match(pattern)[1];
  return title;
}
