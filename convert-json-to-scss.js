

const fs = require('fs');
const json = JSON.parse(fs.readFileSync('src/tokens.json', 'utf8'));

// const jsonData = Object.getOwnPropertyNames(JSON.parse(fs.readFileSync('src/tokens.json', 'utf8')));

// const jsons = ...json;

let scss = '';
let scssFontClass = '';
let i = 0;



const globalTokens = json.$metadata.tokenSetOrder;


console.debug(`json: ${globalTokens}`);


// // Obtener el campo `tokenSetOrder`
// const tokenSetOrder = json.$metadata.tokenSetOrder;

// // Iterar a través de los valores en `tokenSetOrder`
// for (let i = 0; i < tokenSetOrder.length; i++) {
//   // Obtener el nombre del objeto correspondiente
//   const nombreObjeto = tokenSetOrder[i];
  
//   // Crear un nuevo objeto con el nombre correspondiente
//   const nuevoObjeto = json[nombreObjeto];
  
//   // Hacer lo que sea necesario con el nuevo objeto
//   console.log(`Nuevo objeto creado: ${nombreObjeto}`, nuevoObjeto);
// }

// for (const themeToken in globalTokens) {
    //     let theme = 'json.' + themeToken;
    // };


// for (const key in json.global) {
//     let i = 0;
//     let value = json.global[key].value;
//     // let expr = json.global[key].value;
//     let desc = json.global[key].description;
//     let type = json.global[key].type;
    
//     if (value !== undefined){
//         if(type == "typography"){
//             for (const t in value) {
//                 scss += `$${key}-${t}: ${value[t].split('.')[1].replace('}','')};\n`;
//             };
//         }else{
//             scss += `$${key}: ${value};\n`;
//         };
//     }else{
//         for (const i in json.global[key]) {
//             scss += `$${key}-${i}: ${json.global[key][i].value};\n`;
//             value = json.global[key][i].value;
//             type = json.global[key][i].type;
//             desc = json.global[key][i].description;
//         };
//     };

    
//     switch (type) {
//         case 'fontFamilies':
//             scssFontClass += `\n@font-face {\n   font-family: ${value};\n   src: url(${desc});\n}\n`;
//             break;
//         default:
//             scssFontClass += `\n@font-face {\n   font-family: ${value};\n   src: url(${desc});\n}\n`;
//     };
//     console.debug(`Sorry, we are out of ${type}.`);
// };







for (let key in json.$metadata.tokenSetOrder) {
    const tokenSet = json[json.$metadata.tokenSetOrder[key]];
    console.debug(`Token set: ${json.$metadata.tokenSetOrder[key]}`);
    for (let key in tokenSet) {
        console.debug(`Token: ${key}`);
            let i = 0;
            let value = tokenSet[key].value;
            // let expr = json.global[key].value;
            let desc = tokenSet[key].description;
            let type = tokenSet[key].type;
            
            if (value !== undefined){
                if(type == "typography"){
                    for (const t in value) {
                        scss += `$${key}-${t}: ${value[t].split('.')[1].replace('}','')};\n`;
                    };
                }else{
                    scss += `$${key}: ${value};\n`;
                };
            }else{
                for (const i in tokenSet[key]) {
                    scss += `$${key}-${i}: ${tokenSet[key][i].value};\n`;
                    value = tokenSet[key][i].value;
                    type = tokenSet[key][i].type;
                    desc = tokenSet[key][i].description;
                };
            };
        
            
            switch (type) {
                case 'fontFamilies':
                    scssFontClass += `\n@font-face {\n   font-family: ${value};\n   src: url(${desc});\n}\n`;
                    break;
                default:
            };
            console.debug(`Sorry, we are out of ${type}.`);
      
        
    }
    fs.writeFileSync(`src/assets/style-token/${json.$metadata.tokenSetOrder[key]}.scss`, scss += scssFontClass);
    scss = ''
    scssFontClass = ''
}


// fs.writeFile('styles1.scss', scss);
fs.writeFileSync('src/variables.scss', scss += scssFontClass);