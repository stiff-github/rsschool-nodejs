# Task Caesar cipher CLI tool

**To start the program, go to the folder in the project: task-caesar-cipher-cli**

The CLI tool accepts 4 options (short alias and full name).

| Short alias | Full name    | Description             |
| :---------: | :----------: | :---------------------- |
| **-s**      | **--shift**  | shift(number)           |
| **-a**      | **--action** | an action encode/decode |
| **-i**      | **--input**  | path to the input file  |
| **-o**      | **--output** | path to the output file |

**Usage example:**

```bash
$ node index.js -s 7 -a encode -i ./input.txt -o ./output.txt
```

```bash
$ node index.js --shift 7 --action encode --input ./input.txt
```

```bash
$ node index.js --shift 7 --action encode --output ./output.txt
```

```bash
$ node index.js --shift 7 --action encode
```