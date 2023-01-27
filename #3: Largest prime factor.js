process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() 
{
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++)
    {
        var n = parseInt(readLine());
        var pf=2;
        while(n>1)
        {
            if(n%pf==0) 
                n/=pf;
            else
                pf++;
        }
        console.log(pf);
    }
}
