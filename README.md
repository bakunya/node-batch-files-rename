# NodeJS: Batch File Rename

## Pre-Request
1. Nodejs

## Installation (Linux)

1. Clone this repository

```bash
git clone https://github.com/bakunya/node-batch-files-rename.git
```

2. Add path on your .profile or .bashrc

```bash
export RENAME_FILES="/<path>/<to>/rename-files/index.js"
```

3. Update new path that we added before (on .profile or .bashrc) to current environment

```bash
export ~/.profile
```

## How to execute

1. Navigate to your directory that you want to rename files.

2. Run this command and all file in working directory will be rename

```bash
node $RENAME_FILES
```

## Command

```bash
node $RENAME_FILES <FILE_NAME_PREFIX> <FILE_EXTENSION_THAT_WILL_RENAME>
```

## Example

1. **Rename svg file with prefix is my_svg**

```bash
node $RENAME_FILES my_svg svg
```

Result files: 
1. my_svg-0.svg
2. my_svg-1.svg
3. my_svg-2.svg
4. ...
