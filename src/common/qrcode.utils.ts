import QRCode from 'qrcode'

export const generateQrCode = async (text: string)=>{
    
    const qr = await QRCode.toDataURL(text);
    const qrCodeContent = qr.split(",");

    return qrCodeContent[1];
}
