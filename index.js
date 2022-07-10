const fs = require('fs')
current = process.cwd()

let prefix = process.argv[3]
let renamePrefix = process.argv[2]

fs.readdirSync(current).forEach((itm, i) => {
    const splitting = itm.split('.')

    if(!!prefix) {
        if(splitting[splitting.length-1].trim() === prefix) {
            fs.renameSync(`${current}/${itm}`, `${current}/${renamePrefix}-${i}.${prefix}`)
        }
    } else {
        fs.renameSync(`${current}/${itm}`, `${current}/${renamePrefix}-${i}.${splitting[splitting.length-1].trim()}`)
    }
})