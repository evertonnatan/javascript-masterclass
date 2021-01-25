// Um proxy é capaz de interceptar diversos tipos de operações em um objeto alvo.
function createArray() {
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            target[key] = value;
        },
        get(target, key) {
            if(typeof key === "string" && key.match(/\d+/)) {
                if (!(key in target)) {
                    throw `Property ${key} not found`; 
                }
            }
            return target [key];
        },
        deleteProperty(target, key) {
            if (key in target) {
                target.length--;
                delete target[key];
            }
        }
    });
}
const languages = createArray();
languages[0] = "Python"
languages[1] = "Ruby"
languages[2] = "JavaScript"
console.log(languages)
console.log(languages.length)
delete languages[1]
delete languages[2]
delete languages[3]
console.log(languages)
console.log(languages.length)

// Existem métodos, chamados de trap, para diversos tipos de eventos relacionados a um objeto, tais como:

/* 
apply
construct
defineProperty
deleteProperty
get
getOwnPropertyDescriptor
getPrototypeOf
has
isExtensible
ownKeys
prevenExtensions
set
setPrototypeOf
*/