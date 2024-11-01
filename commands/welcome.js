const fs = require('fs');
const path = require('path');

async function welcomeNewMembers(sock, chatId, newMembers) {
    let welcomeText = 'Welcome ';
    newMembers.forEach((member) => {
        welcomeText += `@${member.split('@')[0]} `;
    });
    welcomeText += '🌟 Willkommen! 🌟

Schön, dass du hier bist! Wir freuen uns, dich in unserer Gemeinschaft begrüßen zu dürfen. Hier findest du spannende Gespräche, hilfreiche Informationen und viele nette Menschen. Wenn du Fragen hast oder Hilfe benötigst, zögere nicht, dich zu melden. Viel Spaß und eine tolle Zeit!! 🎉';

    // Send the welcome message
    await sock.sendMessage(chatId, {
        text: welcomeText,
        mentions: newMembers
    });

    // Path to the sticker file
    const stickerPath = path.join(__dirname, '../assets/stickintro.webp');

    // Check if the sticker file exists
    if (fs.existsSync(stickerPath)) {
        const stickerBuffer = fs.readFileSync(stickerPath);

        // Send the sticker
        await sock.sendMessage(chatId, { 
            sticker: stickerBuffer 
        });
    } else {
        console.error('Sticker not found at:', stickerPath);
    }
}

module.exports = welcomeNewMembers;
