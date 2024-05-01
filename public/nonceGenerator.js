function generateNonce(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let nonce = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      nonce += charset[randomIndex];
    }
    return nonce;
  }
  
  const nonceValue = generateNonce(32); // You can adjust the length as needed
  console.log(nonceValue);
