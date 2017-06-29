/*
 * Adds metadata to the YAML Front Matter or the commented YAML Front Matter
 * @param metadata: JavaScript Object to add to the metadata
 * @param file: the file to add the metadata to
 */
var addToFrontMatter = function (data, metadata) {

  var frontMatter;

  // The format of the Front Matter on the file, either 'yaml' or 'comment'

  var format = "yaml";
  var beginFormat = "---\n";
  var endFormat = "---\n";
  // Let's try the YAML Front Matter format
  var pattern = /\s*---([\s\S]*?\n)---/
  if (data.search(pattern) == 0) {
    frontMatter = data.match(pattern)[1]
    data = data.replace(pattern, "");
  }

  // Let's try now the commented YAML Front Matter
  var pattern = /^\s*<!---([\s\S]*?\n)\s-->/
  if (data.search(pattern) == 0) {
    var format = "comment";
    var beginFormat = "<!---\n";
    var endFormat = "-->\n";
    frontMatter = data.match(pattern)[1]
    data = data.replace(pattern, "");
  }

  //console.log(data)

  // Recovering existing parameters
  if (frontMatter) {
    var conf = {}
    var lines = frontMatter.split('\n');
    for (var i in lines) {
      var splittedLine = lines[i].split(':');
      if (splittedLine.length > 1) {
        conf[splittedLine[0].trim().replace(/'(.*)'/, '$1').replace(/"(.*)"/, '$1')] =
          splittedLine[1].trim().replace(/'(.*)'/, '$1').replace(/"(.*)"/, '$1')
      }
    }

    // Adding new metadata
    for (var key in metadata) {
      conf[key] = metadata[key];
    }

    // Serializing it
    var serializedConf = "";
    for (var key in conf) {
      serializedConf += key + ": " + JSON.stringify(conf[key]) + "\n";
    }
    var result = beginFormat + serializedConf + endFormat + data;
    //console.log(result);

    return result;
  }


}

var commentFrontMatter = function (data) {

  var out = data.replace(/---([\s\S]*?\n)---/, "<!---\n$1\n-->");

  return out;
}

var main = function () {


  /**
   * Tool to reformat the YML Front Matter to an HTML commented form
   * @param folder: the folder to convert
   * @param target: the path to store the converted documents
   */

  if (process.argv.length != 4 && process.argv.length != 5) {
    console.log("Use: node frontMatterTools.js FOLDER TARGET\n");
    process.exit();
  }

  // We need fs-extra to use walk and ensureDir methods
  var fs = require('fs-extra');

  var folder = process.argv[2];
  var target = process.argv[3].replace(/\/$/, '');
  var baseFolder = fs.realpathSync(folder);

  fs.walk(folder).on('data', function (item) {

    if (item.stats.isFile()) {
      var origPath = item.path;
      var relativePath = item.path.replace(baseFolder + "/", '');
      var splittedPath = relativePath.split('/');
      var folderPath = "/"
      for (var i = 0; i < splittedPath.length - 1; i++) {
        folderPath += splittedPath[i].replace(/[0-9]*-?/, '') + "/";
      }
      var targetFolder = target + folderPath;

      var filename = splittedPath[splittedPath.length - 1];

      var newPath = targetFolder + filename;
      fs.ensureDirSync(targetFolder);

      var data = fs.readFileSync(origPath, "utf8");

      var content = commentFrontMatter(data);
      console.log(newPath)
      fs.writeFileSync(newPath, content);
    }
  });
}

if (require.main === module) {
  main();
}



module.exports = { commentFrontMatter: commentFrontMatter, addToFrontMatter: addToFrontMatter };
