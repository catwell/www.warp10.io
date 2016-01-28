/**
 * Tool to recover the old doc and reformat it to current format.
 * @param folder: the folder to convert
 * @param target: the path to store the converted documents
 */

if (process.argv.length != 4 && process.argv.length != 5) {
  console.log("Use: node migrate.js FOLDER TARGET CATEGORY\n");
  process.exit();
}

// We need fs-extra to use walk and ensureDir methods
var fs = require('fs-extra');
// We need frontMatterTools to eliminate the YAML Front Matter
var frontMatterTools=require('./frontMatterTools')

var folder = process.argv[2];
var target = process.argv[3].replace(/\/$/,'');

var category= "";
if (process.argv.length > 4) {
  category = process.argv[4];
}

var baseFolder = fs.realpathSync(folder) ;

fs.walk(folder).on('data', function (item) {

    if (item.stats.isFile()) {
      var origPath = item.path;

      var relativePath = item.path.replace(baseFolder+"/", '');
      var splittedPath = relativePath.split('/');
      var folderPath = "/"
      for (var i=0; i<splittedPath.length; i++) {
        splittedPath[i] = splittedPath[i].replace(/[0-9]*-?/, '')
      }
      if (splittedPath.length > 1) {
        folderPath+=splittedPath[0]+"/"
      }
      var targetFolder = target+folderPath;


      var originalFilename = splittedPath[splittedPath.length-1];
      var newFilename = originalFilename.replace(/[0-9]*-?/, '').replace(/(\.html)?\.md(\.eco)?/, ".md");

      if ((splittedPath.length > 1) && (newFilename == splittedPath[0]+".md")) {
        // filename and last directory are the same, we rename the file as index.md
        newFilename = "index.md";
      }
      var newPath = targetFolder+newFilename;

      fs.ensureDirSync(targetFolder);

      var data = fs.readFileSync(origPath, "utf8");

      var categoryTree = splittedPath.slice(0,splittedPath.length-2)
      categoryTree.unshift(category);

      var content = frontMatterTools.addToFrontMatter(data,
        {
          layout: "function",
          categoryTree: categoryTree,
          oldPath: relativePath.split('/'),
          category: category
        }
      );

      var content = content.replace(/einstein/g, "warpscript").replace(/Einstein/g, "WarpScript").replace(/Cityzen Data/g, "Warp10");
      var content = content.replace(/quantum-widget/g, "czd-einstein-widget").replace(/<%= @site.pathPrefix %>/g, "{{ site.baseurl }}");

      console.log(newPath)
      fs.writeFileSync(newPath, content);
    }
  })
  .on('end', function () {
  })
