export  const formatDescription = (html, maxWords = 20, wordsPerLine = 10) => {
    const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = text.split(/\s+/).slice(0, maxWords);
    const lines = Array.from(
      { length: Math.ceil(words.length / wordsPerLine) }, 
      (_, i) => 
        words.slice(i * wordsPerLine, (i + 1) * wordsPerLine).join(' ')
    );
    return lines.join('<br/>') + (words.length > maxWords ? '...' : '...');
  };