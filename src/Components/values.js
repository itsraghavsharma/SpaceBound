const CryptoJS = require('crypto-js');

export const volPass= 'U2FsdGVkX19KHLlvWmG2MpbeC7VPrgUWcRZN0tNDqkk=';

export const decryptString = (encryptedMessage) => {
    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, 'SBAilaan2023').toString(CryptoJS.enc.Utf8);
    return decrypted;
}
