const { TranslationServiceClient } = require('@google-cloud/translate').v3beta1;

const translationClient = new TranslationServiceClient();
async function translateText() {
  const request = {
    parent: translationClient.locationPath(
      process.env.PROJECTID,
      process.env.LOCATION
    ),
    contents: process.env.TEXT,
    mimeType: 'text/plain',
    sourceLanguageCode: 'en',
    targetLanguageCode: 'es'
  };

  try {
    const [response] = await translationClient.translateText(request);

    for (const translation of response.translations) {
      console.log(`Translation: ${translation.translatedText}`);
    }
  } catch (err) {
    console.log(err);
  }
}

translateText().catch(alert);
