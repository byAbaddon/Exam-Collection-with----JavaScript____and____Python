class Pianist:
    def __init__(self, collection_dict):
        self.collection_dict = collection_dict

    def add(self, *args):
        piece, composer, key = args[0]
        if piece in self.collection_dict:
            print(f'{piece} is already in the collection!')
        else:
            self.collection_dict[piece] = {composer: key}
            print(f'{piece} by {composer} in {key} added to the collection!')

    def remove(self, args):
        piece = args[0]
        if piece in self.collection_dict:
            del self.collection_dict[piece]
            print(f'Successfully removed {piece}!')
        else:
            print(f'Invalid operation! {piece} does not exist in the collection.')

    def changekey(self, *args):
        piece, new_key = args[0]
        if piece in self.collection_dict:
            k, v = [x for x in self.collection_dict[piece].items()][0]
            self.collection_dict[piece] = {k: new_key}
            print(f'Changed the key of {piece} to {new_key}!')
        else:
            print(f'Invalid operation! {piece} does not exist in the collection.')

    def stop(self):
        sorted_piece_list = sorted(self.collection_dict.items(), key=lambda k: (k[0], sorted(k[0][0])))

        for current_piece in sorted_piece_list:
            song, keys = current_piece
            for com, key in keys.items():
                print(f'{song} -> Composer: {com}, Key: {key}')


collections = {}
for _ in range(int(input())):
    song, com, key = input().split('|')
    collections[song] = {com: key}

songs = Pianist(collections)

while True:
    method, *tokens = input().split('|')
    if method != 'Stop':
        invoke_method = f'songs.{method.lower()}({tokens})'
        exec(invoke_method)
    else:
        songs.stop()
        break
