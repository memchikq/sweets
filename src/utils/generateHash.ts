export function generateRandomString(length:number) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    
    while (randomString.length < length) {
      const randomBytes = new Uint8Array(1);
      crypto.getRandomValues(randomBytes);
      const charIndex = randomBytes[0] % charset.length;
      randomString += charset.charAt(charIndex);
    }
    
    return randomString;
  }