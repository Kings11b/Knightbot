async function sayGoodbye(sock, chatId, removedMembers) {
    let goodbyeText = 'Goodbye ';
    removedMembers.forEach((member) => {
        goodbyeText += `@${member.split('@')[0]} `;
    });
    goodbyeText += '👋 bye wir werden dich vermissen!';

    await sock.sendMessage(chatId, {
        text: goodbyeText,
        mentions: removedMembers
    });
}

module.exports = sayGoodbye;
