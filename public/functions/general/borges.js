module.exports = async function (client, message) {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join('public', 'data', 'jsons', 'borges.json');

    const fileBuffer = fs.readFileSync(filePath, 'utf-8');
    const fileJson = JSON.parse(fileBuffer);
    let borges = fileJson;
    borges.nargas++;
    await client.sendText(message.chatId, `O Borges já fumou ${borges.nargas} nargas`);
    const fileString = JSON.stringify(borges);
    fs.writeFileSync(filePath, fileString);
}