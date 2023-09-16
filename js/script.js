function hexToString() {
	console.log(1111);
    const hexInput = document.getElementById("tabin").value.replace(/\s+/g,"");
    const stringOutput = hexToStringConversion(hexInput);
    document.getElementById("resulttxt").innerText = stringOutput;
}

function hexToStringConversion(hex) {
    var string = "";
    for (var i = 0; i < hex.length; i += 2) {
        const byte = parseInt(hex.substr(i, 2), 16);
        string += String.fromCharCode(byte);
    }
    return string;
}