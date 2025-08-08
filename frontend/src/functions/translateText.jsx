export default async function TranslateText(text, sourceLanguage, targetLanguage ){
    try{
      const res = await fetch (`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`);

      const data = await res.json()
      const traducao = data[0].map(item => item[0]).join('');

      return await traducao;
    } catch (error){
        console.error('Erro na tradução:', error)};
        return text
};