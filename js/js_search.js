function googleSearch() {
    const input = document.getElementById("search_input");
    const searchTerm = input.value.trim();

    if (searchTerm.length === 0) {
        alert("검색어를 입력해주세요.");
        return false;
    }

    const bannedWords = ["시발", "병신", "개새", "ㅅㅂ", "ㅂㅅ"];
    for (let i = 0; i < bannedWords.length; i++) {
        if (searchTerm.includes(bannedWords[i])) {
            alert("부적절한 단어가 포함되어 있습니다.");
            input.value = "";
            return false;
        }
    }

    alert("검색을 수행합니다!");
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(googleSearchUrl, "_blank");

    return false;
}
