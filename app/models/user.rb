class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :cards, foreign_key: :author_id
  has_many :created_games, foreign_key: :creator_id, class_name: Game
  has_and_belongs_to_many :teams,
                          join_table: "players_teams",
                          foreign_key: :player_id
  has_and_belongs_to_many :games,
                          join_table: "games_participants",
                          foreign_key: :participant_id

  validates_presence_of :display_name

  def cards_from(game)
    self.cards.where(game: game).to_a
  end
end
