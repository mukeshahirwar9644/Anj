// Environment configurable WhatsApp and Contact numbers
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';
export const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER || '+919876543210';
export const COMPANY_EMAIL = import.meta.env.VITE_COMPANY_EMAIL || 'hello@gaddiandco.com';

/**
 * Generate a WhatsApp click-to-chat URL with custom encoded text
 */
export const getWhatsAppUrl = (message?: string): string => {
  const defaultMsg = "Hi Gaddi & Co., I'm interested in getting a custom sofa. I'd like to know more about your designs, fabric options and pricing.";
  const encodedText = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodedText}`;
};

/**
 * Generate WhatsApp message for specific sofa product
 */
export const getProductWhatsAppUrl = (productName: string): string => {
  const message = `Hi Gaddi & Co., I'm interested in the "${productName}". Please share customization details and estimated pricing.`;
  return getWhatsAppUrl(message);
};

/**
 * Generate WhatsApp message from Customizer form selections
 */
export const getCustomizerWhatsAppUrl = (details: {
  style?: string;
  fabric?: string;
  color?: string;
  dimensions?: string;
  comfort?: string;
  name?: string;
  city?: string;
}): string => {
  let message = `Hi Gaddi & Co., I have built a custom sofa inquiry on your website!\n\n`;
  if (details.name) message += `*Customer Name*: ${details.name}\n`;
  if (details.city) message += `*City*: ${details.city}\n`;
  if (details.style) message += `*Style*: ${details.style}\n`;
  if (details.fabric) message += `*Fabric*: ${details.fabric}\n`;
  if (details.color) message += `*Color Tone*: ${details.color}\n`;
  if (details.dimensions) message += `*Dimensions*: ${details.dimensions}\n`;
  if (details.comfort) message += `*Comfort Level*: ${details.comfort}\n`;
  message += `\nPlease get in touch with pricing options and fabric sample delivery!`;

  return getWhatsAppUrl(message);
};
