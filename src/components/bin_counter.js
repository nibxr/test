const accumulatorBits = new Array(8).fill(0);
let accumulatorValue = 0;

var bits_data = {}
var loop_functions = {}
var accum_value = []

const hexToBin = (hex) => {
    const bin = parseInt(hex, 16).toString(2);
    return [...bin.padStart(8, '0')];
};


function increamenthex(value, inc) {
  
    const binaryString = value.map(String).join('');
    const decimalValue = parseInt(binaryString, 2);
    const incrementedDecimal = decimalValue + inc;
    const hexadecimalString = incrementedDecimal.toString(16).toUpperCase();
    const binaryResult = (parseInt(hexadecimalString, 16).toString(2)).padStart(8, '0');
    return [...binaryResult];
}

// const code = ["MOV A,#00H", "LOOP : MOV P1,A", "CJNE A,#00FH,LOOP"]

const code = [
    "MOV A,#00H",
    "LOOP : MOV P1,A",
    "INC A",
    "CJNE A,#00FH,LOOP",
    "MOV P1,A",
    "SJMP START",
];


function executeMOV(line) {

    var code_variables = line.split(" ")
    if (!line.includes(":") && code_variables[0] == "MOV") {
        var swap_source = code_variables[1].split(",")[1]
        var swap_destination = code_variables[1].split(",")[0]
        if (swap_source in bits_data) {
            bits_data[swap_destination] = bits_data[swap_source]
        }
        else {

            bits_data[swap_destination] = hexToBin(swap_source.replace("#", ""))
        }
    }

}


function executeLine(line, index) {


    var read_line = line.trim().split(" ");
    if (read_line[0].trim() == "MOV") {
        executeMOV(line);
        return;
    };
    if (read_line[0].trim() == "LOOP") {
        loop_functions[read_line[0]] = {
            'code': line.split(":")[1].trim(),
            'indexx': index
        };
        return;
    }
    if (read_line[0].trim() == "INC") {
        bits_data[read_line[1].trim()] = increamenthex(bits_data[read_line[1].trim()], 1);
        return;
    }
    if (read_line[0] == "CJNE") {
        var compare_a, compare_b, not_equal;
        [compare_a, compare_b, not_equal] = line.split("CJNE")[1].trim().split(",")

        var compare_a = (compare_a.trim() in bits_data) ? bits_data[compare_a.trim()] : hexToBin(compare_a.replace("#", ""));
        var compare_b = (compare_b.trim() in bits_data) ? bits_data[compare_b.trim()] : hexToBin(compare_b.replace("#", ""));

        var cnj_line = line;

        while (compare_a.map(String).join('') != compare_b.map(String).join('')) {

            for (let i = loop_functions[not_equal.trim()].indexx; i < index; i++) {
                var read_line = code[i].trim().split(" ");

                if (read_line[0].trim() == "LOOP") {
                    executeLine(read_line[1].trim(), i)
                }
                else {
                    executeLine(code[i], i);
                }
                // console.log(bits_data)
            }
            [compare_a, compare_b, not_equal] = cnj_line.split("CJNE")[1].trim().split(",")
            compare_a = (compare_a.trim() in bits_data) ? bits_data[compare_a.trim()] : hexToBin(compare_a.replace("#", ""));
            compare_b = (compare_b.trim() in bits_data) ? bits_data[compare_b.trim()] : hexToBin(compare_b.replace("#", ""));

            accum_value.push({
                portValues: compare_a.map(String).join(''),
                accumulatorValue: bits_data['A'].map(String).join(''),
              });
            }
          }
        
          return accum_value;
        }

let programCounter = 0;

function runPrograms() {
    if (programCounter < code.length) {
        executeLine(code[programCounter], programCounter);

        programCounter++;
        if (code[programCounter].split(" ")[0] == "SJMP") programCounter = 0;

        setTimeout(runProgram, 1000);
    }
}


function runProgram() {

    for (let i = 0; i < code.length; i++) {
        console.log(code.length)
        console.log(code[i], i)
        executeLine(code[i], i);
    }
}

// Start the program
// runProgram();


module.exports = {
    executeLine,
}