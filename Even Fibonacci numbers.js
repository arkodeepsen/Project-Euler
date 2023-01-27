process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
let sum=0;

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

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++)
    {
        var n = parseInt(readLine());
        var a=0,b=1,c=0;
        for(var i=0;i<n;i++)
        {
            c=a+b;
            a=b;
            b=c;
            if(c%2==0&&c<=n)
            {
                sum+=c;
            }
        }
        console.log(sum);
        sum=0;
    }

}
