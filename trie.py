from collections import defaultdict
class Trie:
    
    ALPHABET_SIZE = 26
    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.edges = defaultdict(Trie)
        self.ends_here = False
        

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        current = self
        for letter in word:
            current = current.edges[letter] 
        current.ends_here = True
        

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        current = self
        
        for letter in word:
            current = current.edges.get(letter)
            if current is None:
                return False
        return current.ends_here
        

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        current = self
        for letter in prefix:
            current = current.edges.get(letter)
            if current is None:
                return False
        return True
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)