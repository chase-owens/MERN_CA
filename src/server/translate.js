const { TranslationServiceClient } = require('@google-cloud/translate').v3beta1;

const translationClient = new TranslationServiceClient();
async function translateText() {
  const request = {
    parent: translationClient.locatioPath(
      process.env.PROJECTID,
      process.env.LOCATION
    ),
    contents: process.env.TEXT,
    mimeType: 'text/plain',
    sourceLanguageCode: 'en-US',
    targetLanguageCode: 'sr-Latn'
  };

  const [response] = await translationClient.translateText(request);

  for (const translation of response.translations) {
    console.log(`Translation: ${translation.translatedText}`);
  }
}

translateText();
