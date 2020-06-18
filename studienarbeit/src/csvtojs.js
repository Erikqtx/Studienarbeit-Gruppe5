function csvtoJSON (csv){
    var lines = csv.split('\n');
    var results = [];
    var headers = lines[0].split(',');

    for(i=1; i<lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(',');

        for(x=0; x<headers.length; x++){
            obj[headers[x]]=currentline[x];
        }

        results.push(obj)
    }

   return JSON.stringify(result);  
   
};