

document.getElementById('raw-text').addEventListener('change', (e)=>{
    parse();
}, false);

let parse = () => {
    document.getElementById('result').innerHTML = '';
    const inputText = document.getElementById('raw-text').value;
    const thisModule = document.getElementById('module-select').value;
    let matchedText = match(inputText, thisModule);
    console.log(matchedText);
    let stuff = '';
    for (let e of matchedText) {
        stuff = stuff + e.replace('-', ' ').replace('-', ' ').replace('-', ' ') + '<br>';
    }
    document.getElementById('result').innerHTML = stuff;

}

document.getElementById('module-select').addEventListener('change', (e)=>{
    parse();
},false);

document.getElementById('reset').addEventListener('click', (e) => {
    document.getElementById('result').innerHTML = '';
}, false);

let match = (input, module) => {
    console.log(input);
    let reRaw = `(${module}-individual-\\d{6}|${module}-group-\\d{6}-\\d{6}|${module}-group-\\d{6})`
    let re = new RegExp(reRaw, 'g');
    let matches = input.match(re);
    return matches;
}