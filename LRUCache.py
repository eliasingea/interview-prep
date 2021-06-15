from collections import OrderedDict

class LRUCache(object):

    def __init__(self, capacity):
        """
        :type capacity: int
        """
        self.capacity = capacity
        self.dic = OrderedDict()        

    def get(self, key):
        """
        :type key: int
        :rtype: int
        """
        if key in self.dic:
            self.dic.move_to_end(key)
            return self.dic[key]
        else:
            return -1

        

    def put(self, key, value):
        """
        :type key: int
        :type value: int
        :rtype: None
        """
        if key in self.dic:
            self.dic.move_to_end(key)
        self.dic[key] = value
        if(len(self.dic) > self.capacity): 
            self.dic.popitem(last = False)


        

cache = LRUCache(3)
print(cache.capacity)

cache.put(1, 2)
cache.get(1)
# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)