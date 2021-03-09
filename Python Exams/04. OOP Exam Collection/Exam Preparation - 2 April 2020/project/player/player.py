from abc import ABC, abstractmethod
from project.card.card_repository import CardRepository


class Player(ABC):
    @abstractmethod
    def __init__(self, username, health):
        self.username = username
        self.health = health
        self.card_repository = CardRepository()  # - new card repository upon initialization.

    @property
    def is_dead(self):
        return self.health <= 0


    @property
    def username(self):
        return self._username

    @username.setter
    def username(self, val):
        if val == '':
            raise ValueError('Player\'s username cannot be an empty string.')  # ???space
        self._username = val

    @property
    def health(self):
        return self._health

    @health.setter
    def health(self, val):
        if val < 0:
            raise ValueError('Player\'s health bonus cannot be less than zero.')
        self._health = val

    def take_damage(self, damage_points):
        if damage_points < 0:
            raise ValueError('Damage points cannot be less than zero.')
        self.health -= damage_points
