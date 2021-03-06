import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let items: vscode.QuickPickItem[] = [
		{ label: "NUL", description: "0", detail: "null" },
		{ label: "SOH", description: "1", detail: "start of headline" },
		{ label: "STX", description: "2", detail: "start of text" },
		{ label: "ETX", description: "3", detail: "end of text" },
		{ label: "EOT", description: "4", detail: "end of transmission" },
		{ label: "ENQ", description: "5", detail: "enquiry" },
		{ label: "ACK", description: "6", detail: "acknowledge" },
		{ label: "BEL", description: "7", detail: "bell" },
		{ label: "BS", description: "8", detail: "backspace" },
		{ label: "HT", description: "9", detail: "horizontal tab" },
		{ label: "LF", description: "10", detail: "NL line feed, new line" },
		{ label: "VT", description: "11", detail: "vertical tab" },
		{ label: "FF", description: "12", detail: "NP form feed, new page" },
		{ label: "CR", description: "13", detail: "carriage return" },
		{ label: "SO", description: "14", detail: "shift out" },
		{ label: "SI", description: "15", detail: "shift in" },
		{ label: "DLE", description: "16", detail: "data link escape" },
		{ label: "DC1", description: "17", detail: "device control 1" },
		{ label: "DC2", description: "18", detail: "device control 2" },
		{ label: "DC3", description: "19", detail: "device control 3" },
		{ label: "DC4", description: "20", detail: "device control 4" },
		{ label: "NAK", description: "21", detail: "negative acknowledge" },
		{ label: "SYN", description: "22", detail: "synchronous idle" },
		{ label: "ETB", description: "23", detail: "end of trans. block" },
		{ label: "CAN", description: "24", detail: "cancel" },
		{ label: "EM", description: "25", detail: "end of medium" },
		{ label: "SUB", description: "26", detail: "substitute" },
		{ label: "ESC", description: "27", detail: "escape" },
		{ label: "FS", description: "28", detail: "file separator" },
		{ label: "GS", description: "29", detail: "group separator" },
		{ label: "RS", description: "30", detail: "record separator" },
		{ label: "US", description: "31", detail: "unit separator" },
		{ label: " ", description: "32", detail: "space" },
		{ label: "!", description: "33" },
		{ label: "\"", description: "34" },
		{ label: "#", description: "35" },
		{ label: "$", description: "36" },
		{ label: "%", description: "37" },
		{ label: "&", description: "38" },
		{ label: "'", description: "39" },
		{ label: "(", description: "40" },
		{ label: ")", description: "41" },
		{ label: "*", description: "42" },
		{ label: "+", description: "43" },
		{ label: ",", description: "44" },
		{ label: "-", description: "45" },
		{ label: ".", description: "46" },
		{ label: "/", description: "47" },
		{ label: "0", description: "48" },
		{ label: "1", description: "49" },
		{ label: "2", description: "50" },
		{ label: "3", description: "51" },
		{ label: "4", description: "52" },
		{ label: "5", description: "53" },
		{ label: "6", description: "54" },
		{ label: "7", description: "55" },
		{ label: "8", description: "56" },
		{ label: "9", description: "57" },
		{ label: ":", description: "58" },
		{ label: ";", description: "59" },
		{ label: "<", description: "60" },
		{ label: "=", description: "61" },
		{ label: ">", description: "62" },
		{ label: "?", description: "63" },
		{ label: "@", description: "64" },
		{ label: "A", description: "65" },
		{ label: "B", description: "66" },
		{ label: "C", description: "67" },
		{ label: "D", description: "68" },
		{ label: "E", description: "69" },
		{ label: "F", description: "70" },
		{ label: "G", description: "71" },
		{ label: "H", description: "72" },
		{ label: "I", description: "73" },
		{ label: "J", description: "74" },
		{ label: "K", description: "75" },
		{ label: "L", description: "76" },
		{ label: "M", description: "77" },
		{ label: "N", description: "78" },
		{ label: "O", description: "79" },
		{ label: "P", description: "80" },
		{ label: "Q", description: "81" },
		{ label: "R", description: "82" },
		{ label: "S", description: "83" },
		{ label: "T", description: "84" },
		{ label: "U", description: "85" },
		{ label: "V", description: "86" },
		{ label: "W", description: "87" },
		{ label: "X", description: "88" },
		{ label: "Y", description: "89" },
		{ label: "Z", description: "90" },
		{ label: "[", description: "91" },
		{ label: "\\", description: "92" },
		{ label: "]", description: "93" },
		{ label: "^", description: "94" },
		{ label: "_", description: "95" },
		{ label: "`", description: "96" },
		{ label: "a", description: "97" },
		{ label: "b", description: "98" },
		{ label: "c", description: "99" },
		{ label: "d", description: "100" },
		{ label: "e", description: "101" },
		{ label: "f", description: "102" },
		{ label: "g", description: "103" },
		{ label: "h", description: "104" },
		{ label: "i", description: "105" },
		{ label: "j", description: "106" },
		{ label: "k", description: "107" },
		{ label: "l", description: "108" },
		{ label: "m", description: "109" },
		{ label: "n", description: "110" },
		{ label: "o", description: "111" },
		{ label: "p", description: "112" },
		{ label: "q", description: "113" },
		{ label: "r", description: "114" },
		{ label: "s", description: "115" },
		{ label: "t", description: "116" },
		{ label: "u", description: "117" },
		{ label: "v", description: "118" },
		{ label: "w", description: "119" },
		{ label: "x", description: "120" },
		{ label: "y", description: "121" },
		{ label: "z", description: "122" },
		{ label: "{", description: "123" },
		{ label: "|", description: "124" },
		{ label: "}", description: "125" },
		{ label: "~", description: "126" },
		{ label: "DEL", description: "127", detail: "delete" }];
	let allDisposable = vscode.commands.registerCommand('extension.allChars', () => {
		vscode.window.showQuickPick(items);
	});

	let printableItems: vscode.QuickPickItem[] = [
		{ label: "          !        \"         #       $        %      &       '", detail: "32 　 33 　 34 　 35 　 36 　 37 　 38 　 39" },
		{ label: "(         )        *        +        ,        -        .         /", detail: "40 　 41 　 42 　 43 　 44 　 45 　 46 　 47" },
		{ label: "0        1       2        3        4        5       6        7       8        9", detail: "48 　 49 　 50 　 51 　 52 　 53 　 54 　 55 　 56 　 57" },
		{ label: ":         ;         <       =       >       ?        @", detail: "58 　 59 　 60 　 61 　 62 　 63 　 64" },
		{ label: "A        B       C       D       E        F        G", detail: "65 　 66 　 67 　 68 　 69 　 70 　 71" },
		{ label: "H       I         J        K        L       M       N", detail: "72 　 73 　 74 　 75 　 76 　 77 　 78" },
		{ label: "O       P        Q      R        S        T", detail: "79 　 80 　 81 　 82 　 83 　 84" },
		{ label: "U        V       W      X       Y        Z", detail: "85 　 86 　 87 　 88 　 89 　 90" },
		{ label: "[         \\        ]        ^        _        `", detail: "91 　 92 　 93 　 94 　 95 　 96" },
		{ label: "a        b       c        d        e       f         g", detail: "97 　 98 　 99 　 100　101　102　103" },
		{ label: "h        i         j        k        l         m      n", detail: "104　105　106　107　108　109　110" },
		{ label: "o        p       q        r        s        t", detail: "111　112　113　114　115　116" },
		{ label: "u        v        w       x        y        z", detail: "117　118　119　120　121　122" },
		{ label: "{         |         }        ~", detail: "123　124　125　126" }];
	let printableDisposable = vscode.commands.registerCommand('extension.printableChars', () => {
		vscode.window.showQuickPick(printableItems);
	});

	context.subscriptions.push(allDisposable);
	context.subscriptions.push(printableDisposable);
}

export function deactivate() { }
