import { ethers } from 'ethers';
import CryptoJS from 'crypto-js';

export function createWallet(password: string) {
  const wallet = ethers.Wallet.createRandom();
  const encrypted = CryptoJS.AES.encrypt(wallet.privateKey, password).toString();
  localStorage.setItem('encryptedWallet', encrypted);
  return { address: wallet.address, mnemonic: wallet.mnemonic.phrase };
}

export function importWallet(privateKey: string, password: string) {
  const wallet = new ethers.Wallet(privateKey);
  const encrypted = CryptoJS.AES.encrypt(wallet.privateKey, password).toString();
  localStorage.setItem('encryptedWallet', encrypted);
  return { address: wallet.address };
}

export function getWallet(password: string): ethers.Wallet | null {
  const encrypted = localStorage.getItem('encryptedWallet');
  if (!encrypted) return null;
  const bytes = CryptoJS.AES.decrypt(encrypted, password);
  const privateKey = bytes.toString(CryptoJS.enc.Utf8);
  if (!privateKey) return null;
  return new ethers.Wallet(privateKey);
}