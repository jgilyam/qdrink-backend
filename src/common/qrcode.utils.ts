import QRCode from 'qrcode'

export const generateQrCode = async (text: string)=>{
    const qr = await QRCode.toDataURL(text);
    return qr;
}
